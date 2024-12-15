import imbuePoints from "../data/imbuePoints";
import {effectTypes} from "../data/effects";
import {Color} from "../data/color";
import {Effect, EffectType, EffectValue} from "../types/effects";
import {Realm} from "../types/realm";
import {Weapon} from "../types/weapon";
import {Quality} from "../types/quality";
import {Item, ItemType, Option} from "../types/items";
import {StoreGet, StoreSet} from "../types/store";
import {ItemLevel} from "../types/levels";
import {items, itemType} from "../data/items";
import {config} from "../config";

export class ItemManager {
    private readonly set: StoreSet
    private readonly get: StoreGet

    constructor(set: StoreSet, get: StoreGet) {
        this.set = set
        this.get = get

        items.forEach((item: Item): void => {
            if (item.itemType.isCraftItem) {
                for (let i: number = 0; i < 4; i++) {
                    item.options.push(this.createOption(item))
                }
                if (config.spellcraftItemBonus) item.bonusOption = this.createOption(item, true)
            } else {
                item.options.push(this.createOption(item))
            }
        })
    }

    removeRealmEffects(realm: Realm): void {
        const items: Item[] = this.get().items

        items.forEach((item: Item): void => {
            if (item.itemType.isCraftItem) {
                this.getAllOptions(item).forEach((option: Option): void => {
                    if (option.effect.realm.indexOf(realm.name) === -1) {
                        option.effectType = effectTypes.unused
                        option.effect = effectTypes.unused.effects.unused
                        option.effectValue = effectTypes.unused.effects.unused.values[0]
                    }
                })
            } else {
                item.options = item.options.filter((option: Option): boolean => (
                    option.effect.realm.indexOf(realm.name) !== -1
                ))
            }
            this.update(item)
        })
    }

    setHighlightEffects(effects: Effect[]): void {
        this.set({highlightEffects: effects})
    }

    getAllOptions(item: Item): Option[] {
        let options: Option[] = [...item.options]

        if (item.bonusOption) {
            options.push(item.bonusOption)
        }

        return options
    }

    spreadActiveItem(activeItem: Item): Item {
        const item: Item = {...activeItem}
        const items: Item[] = this.get().items
        const index: number = items.indexOf(activeItem)
        items.splice(index, 1, item)

        return item
    }

    setActiveItem(activeItem: Item): void {
        this.set({
            activeItem: this.spreadActiveItem(activeItem),
            items: [...this.get().items],
        })
    }

    setActiveWeapon(activeWeapon: Weapon): void {
        this.set({activeWeapon})
    }

    private getActiveItem(): Item {
        return this.get().activeItem
    }

    set level(level: ItemLevel) {
        const item: Item = this.getActiveItem()
        item.level = level
        item.imbue.max = imbuePoints[item.level][config.qualityEffectsImbuePoints ? item.quality : 100]

        this.update(item)
        this.setActiveItem(item)
    }

    set quality(quality: Quality) {
        const item: Item = this.getActiveItem()
        item.quality = quality
        item.imbue.max = imbuePoints[item.level][config.qualityEffectsImbuePoints ? quality : 100]

        this.update(item)
        this.setActiveItem(item)
    }

    set itemType(itemType: ItemType) {
        const item: Item = this.getActiveItem()
        item.itemType = itemType

        if (itemType.isCraftItem) {
            item.options = item.options.filter((option: Option): boolean => (
                option.effect.craft
            ))

            item.options = item.options.slice(0, 4)

            for (let i: number = item.options.length; i < 4; i++) {
                item.options.push(this.createOption(item, false))
            }

            item.options.forEach((option: Option): void => {
                const effectValues: EffectValue[] = this.findEffectValues(option)
                for (let i: number = effectValues.length - 1; i >= 0; i--) {
                    if (option.effectValue.value >= effectValues[i].value) {
                        option.effectValue = effectValues[i]
                        break
                    }
                }
            })

            if (config.spellcraftItemBonus) {
                item.bonusOption = this.createOption(item, true)
            }
        } else {
            item.options = item.options.filter((option: Option): boolean => (
                !option.effectType.default
            ))
            item.options.push(this.createOption(item, false))
            item.options.forEach((option: Option): void => {
                option.effectValue = {
                    value: option.effectValue.value,
                    imbue: 0,
                    gem: '',
                    price: 0
                }
            })
            item.bonusOption = null
        }

        this.update(item)
        this.setActiveItem(item)
    }

    get itemTypes(): ItemType[] {
        const activeItem: Item = this.getActiveItem()
        const types: ItemType[] = []

        if (activeItem.craft) {
            types.push(itemType.craft)
        }

        types.push(itemType.drop)
        types.push(itemType.rog)

        return types
    }

    set itemName(itemName: string) {
        const activeItem: Item = this.getActiveItem()
        activeItem.itemName = itemName
        this.setActiveItem(activeItem)
    }

    createOption(item: Item, scBonus: boolean = false): Option {
        return {
            scBonus: scBonus,
            color: Color.itemDefault,
            showHint: false,
            effectType: effectTypes.unused,
            effect: effectTypes.unused.effects.unused,
            effectValue: item.itemType.isCraftItem
                ? effectTypes.unused.effects.unused.values['0']
                : {value: 0, imbue: 0, gem: '', price: 0}
        }
    }

    clearable(): boolean {
        const item: Item = this.getActiveItem()

        if (item.level !== 51 || item.quality !== 99 || item.itemName !== '') {
            return true
        }

        const defaultType: ItemType = item.craft ? itemType.craft : itemType.drop

        if (item.itemType !== defaultType) {
            return true
        }

        if (item.bonusOption && item.bonusOption.effectValue.value > 0) {
            return true
        }

        for (let i: number = 0; i < item.options.length; i++) {
            const option: Option = item.options[i]
            if (option.effectValue.value > 0) {
                return true
            }
        }

        return false
    }

    clear(): void {
        const item: Item = this.getActiveItem()
        item.level = 51
        item.quality = 99
        item.itemType = item.craft ? itemType.craft : itemType.drop
        item.itemName = ''
        const loops: number = item.craft ? 4 : 1
        item.options = []
        for (let i: number = 0; i < loops; i++) {
            item.options.push(this.createOption(item, false))
        }
        item.bonusOption = item.craft ? this.createOption(item, true) : null
        this.update(item)
        this.setActiveItem(item)
    }

    changeType(option: Option): void {
        const item: Item = this.getActiveItem()

        option.effect = this.findEffects(option)[0]

        if (!option.scBonus && item.itemType.isCraftItem) {
            const effectValues: EffectValue[] = this.findEffectValues(option)
            for (let i: number = effectValues.length - 1; i >= 0; i--) {
                if (option.effectValue.value === 0) {
                    option.effectValue = effectValues[0]
                    break
                } else if (option.effectValue.value >= effectValues[i].value) {
                    option.effectValue = effectValues[i]
                    break
                }
            }
        } else {
            option.effectValue = {
                value: option.effectValue.value > 0 ? option.effectValue.value : 1,
                imbue: 0,
                gem: '',
                price: 0
            }
        }

        if (!item.itemType.isCraftItem && option.effectType.default) {
            item.options.splice(item.options.indexOf(option), 1)
        }

        const length: number = item.options.length
        if (!item.itemType.isCraftItem && (!length || !item.options[length - 1].effectType.default)) {
            item.options.push(this.createOption(item, false))
        }

        this.update(item)
        this.setActiveItem(item)
    }

    changeEffect(option: Option): void {
        const item: Item = this.getActiveItem()

        if (!option.scBonus && item.itemType.isCraftItem) {
            const effectValues: EffectValue[] = this.findEffectValues(option)
            for (let i: number = effectValues.length - 1; i >= 0; i--) {
                if (option.effectValue.value >= effectValues[i].value) {
                    option.effectValue = effectValues[i]
                    break
                }
            }
        } else {
            option.effectValue = {
                value: option.effectValue.value,
                imbue: 0,
                gem: '',
                price: 0
            }
        }

        this.update(item)
        this.setActiveItem(item)
    }

    changeSelectValue(option: Option, index: string): void {
        const activeItem: Item = this.getActiveItem()

        const effectValues: EffectValue[] = this.findEffectValues(option)
        option.effectValue = effectValues[Number(index)]

        this.update(activeItem)
        this.setActiveItem(activeItem)
    }

    changeInputValue(option: Option, value: string): void {
        const activeItem: Item = this.getActiveItem()

        option.effectValue = {
            value: Number(value),
            imbue: 0,
            gem: '',
            price: 0
        }

        this.update(activeItem)
        this.setActiveItem(activeItem)
    }

    update(item: Item): void {
        const options: Record<string, Option[]> = {}

        let hasValues: boolean = false
        item.utility = 0
        item.imbue.value = 0
        let highest: number = 0

        item.options.forEach((option: Option): void => {
            option.color = Color.default
            option.showHint = !option.effectType.default
            item.utility += option.effect.utility * option.effectValue.value

            if (item.itemType.isCraftItem) {
                item.imbue.value += option.effectValue.imbue
                if (option.effectValue.imbue > highest) {
                    highest = option.effectValue.imbue
                }
            }

            if (option.effectType.default) {
                return
            }

            hasValues = true

            if (!options.hasOwnProperty(option.effect.code)) {
                options[option.effect.code] = []
            }

            options[option.effect.code].push(option)
        })

        if (item.bonusOption) {
            item.utility += item.bonusOption.effect.utility * item.bonusOption.effectValue.value
        }
        item.imbue.value += highest

        item.color = Color.itemDefault
        if (item.itemType === itemType.drop && hasValues) {
            item.color = Color.itemDrop
        } else if (item.itemType === itemType.rog && hasValues) {
            item.color = Color.itemRog
        } else if (item.imbue.value >= item.imbue.max && item.imbue.value <= item.imbue.max + 5.5) {
            item.color = Color.itemCraftMaxImbue
        } else if (item.imbue.value > 0 && item.imbue.value < item.imbue.max) {
            item.color = Color.itemCraft
        } else if (item.imbue.value > item.imbue.max + 5.5) {
            item.color = Color.error
        }

        Object.values(options).forEach((options: Option[]): void => {
            if (options.length > 1 && item.itemType.isCraftItem) {
                item.color = Color.error
            }

            options.forEach((option: Option): void => {
                option.color = options.length > 1 && item.itemType.isCraftItem && !option.effectType.default
                    ? Color.error
                    : Color.default
            })
        })
    }

    findEffectTypes(scBonus: boolean): EffectType[] {
        const types: EffectType[] = []

        const activeItem: Item = this.getActiveItem()

        Object.values(effectTypes).forEach((type: EffectType): void => {
            if (config.excludeEffectTypes.indexOf(type.code) !== -1) return
            if (type.onlyOnItem.length && type.onlyOnItem.indexOf(activeItem.code) === -1) return
            const isCraft: boolean = scBonus ? false : activeItem.itemType.isCraftItem
            if (isCraft && isCraft !== type.craft) return
            types.push(type)
        })

        return types
    }

    findEffects(option: Option): Effect[] {
        let effects: Effect[] = []

        const activeItem: Item = this.getActiveItem()

        this.get().realmClass.effects[option.effectType.code]?.forEach((effect: Effect): void => {
            if (config.excludeEffects.indexOf(effect.code) !== -1) return
            if (activeItem.itemType.isCraftItem && !effect.craft) return

            effects.push(effect)
        })

        if (effects.length) {
            effects.push({
                name: '',
                code: '00',
                craft: false,
                hideIfNoValue: true,
                utility: 0,
                maxValue: 0,
                realm: [],
                values: {},
                type: 'unused'
            })
        }

        const realm: Realm = this.get().realm

        Object.values(option.effectType.effects).forEach((effect: Effect): void => {
            if (config.excludeEffects.indexOf(effect.code) !== -1) return
            if (!option.scBonus && activeItem.itemType.isCraftItem && !effect.craft) return
            if (effect.realm.indexOf(realm.name) === -1) return
            if (effects.indexOf(effect) !== -1) return

            effects.push(effect)
        })

        return effects
    }

    findEffectValues(option: Option): EffectValue[] {
        return Object.values(option.effect.values)
    }
}