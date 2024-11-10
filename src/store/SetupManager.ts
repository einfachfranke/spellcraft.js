import {ItemManager} from "./ItemManager";
import {Realm, RealmClass} from "../types/realm";
import {Init, Store, StoreGet, StoreSet} from "../types/store";
import {ItemLevel, PlayerLevel} from "../types/levels";
import {Item, ItemType, Option} from "../types/items";
import {Race} from "../data/race";
import {Params} from "react-router-dom";
import {ParamCodes} from "../types/paramCodes";
import {config} from "../config";
import {effectByCode, effectTypeByCode} from "../data/effects";
import {Effect, EffectType} from "../types/effects";
import {realms} from "../data/realms";
import {itemType} from "../data/items";
import React from "react";

export class SetupManager {
    private readonly set: StoreSet
    private readonly get: StoreGet
    private fileSystemFileHandle: FileSystemFileHandle | undefined = undefined

    constructor(set: StoreSet, get: StoreGet) {
        this.set = set
        this.get = get
    }

    setRealm(realm: Realm): void {
        const itemManager: ItemManager = this.get().itemManager
        const realmClass: RealmClass = realm.realmClasses[0]
        const race: Race = realm.realmClasses[0].races[0]

        itemManager.removeRealmEffects(realm)

        this.set({
            realm: realm,
            realmClass: realmClass,
            race: race,
            activeWeapon: realmClass.defaultWeapons,
            activeItem: itemManager.spreadActiveItem(this.get().activeItem),
            items: [...this.get().items]
        })

        this.updateTitle()
    }

    setRealmClass(realmClass: RealmClass): void {
        let race: Race | undefined = realmClass.races.find((race: Race): boolean => (
            race.name === this.get().race.name
        ))

        if (!race) {
            race = realmClass.races[0]
        }

        this.set({
            realmClass: realmClass,
            race: race,
            activeWeapon: realmClass.defaultWeapons
        })

        this.updateTitle()
    }

    setRace(race: Race): void {
        this.set({race})
    }

    setLevel(level: PlayerLevel): void {
        this.set({level})
    }

    setName(name: string): void {
        this.set({name})

        this.updateTitle()
    }

    fileSystemFileHandleExist(): boolean {
        return this.fileSystemFileHandle !== undefined
    }

    private getTitle(): string {
        const name: string = this.get().name !== '' ? ` - ${this.get().name}` : ''
        return `DAoC ${this.get().realmClass.name} Template${name}`;
    }

    updateTitle(): void {
        document.title = this.getTitle()
    }

    initLoadSaveParamString(): void {
        this.set({loadSaveParamString: this.createParamString()})
    }

    private getParams(): Record<string, string> {
        const store: Store = this.get()
        const content: Record<string, string> = {}

        content['realm'] = store.realm.name
        content['realmClass'] = store.realmClass.name
        content['race'] = store.race.name
        content['level'] = String(store.level)
        content['name'] = store.name

        store.items.forEach((item: Item): void => {
            content[`${item.code}Name`] = item.itemName
            content[`${item.code}Level`] = String(item.level)
            content[`${item.code}Quality`] = String(item.quality)
            content[`${item.code}Type`] = item.itemType.value
            content[`${item.code}Values`] = item.options.map((option: Option): string => (
                `${option.effect.code}${option.effectValue.value}`
            )).join('-')
            if (item.bonusOption) {
                content[`${item.code}Values`] += `-${item.bonusOption.effect.code}${item.bonusOption.effectValue.value}`
            }
        })

        return content
    }

    async load(): Promise<void> {
        try {
            const [fileHandle] = await window.showOpenFilePicker({
                types: [
                    {
                        description: "Spellcraft Template",
                        accept: {
                            "text/plain": [".sct"],
                        },
                    },
                ],
                excludeAcceptAllOption: true,
                multiple: false,
            });
            this.fileSystemFileHandle = fileHandle
            const file: File = await this.fileSystemFileHandle.getFile()
            const text: string = await file.text()
            const init: Init = this.createInit(JSON.parse(text), true)
            this.setInit(init)
            this.initLoadSaveParamString()
        } catch (error) {}
    }

    loadOldSchool(e: React.ChangeEvent<HTMLInputElement>): void {
        if (!e.target.files?.length) return

        const reader = new FileReader();
        reader.addEventListener('load', (): void => {
            const result: string | ArrayBuffer | null = reader.result
            if (typeof result === 'string') {
                const init: Init = this.createInit(JSON.parse(result), true)
                this.setInit(init)
                this.initLoadSaveParamString()
            }
        }, false)

        const file: File = e.target.files[0]
        if (file) {
            reader.readAsText(file)
        }
    }

    async save(saveAs: boolean = false): Promise<void> {
        const content: Record<string, string> = this.getParams()

        try {
            if (saveAs || !this.fileSystemFileHandle) {
                this.fileSystemFileHandle = await window.showSaveFilePicker({
                    types: [
                        {
                            description: "Spellcraft Template",
                            accept: {
                                "text/plain": [".sct"],
                            },
                        },
                    ],
                    excludeAcceptAllOption: true,
                    suggestedName: this.getTitle(),
                })
            }

            const fileSystemWritableFileStream: FileSystemWritableFileStream = await this.fileSystemFileHandle.createWritable()
            await fileSystemWritableFileStream.write(JSON.stringify(content))
            await fileSystemWritableFileStream.close()
            this.initLoadSaveParamString()
        } catch (error) {}
    }

    saveOldSchool(): void {
        const content: Record<string, string> = this.getParams()

        const link: HTMLAnchorElement = document.createElement('a')
        const file = new Blob([JSON.stringify(content)], { type: 'text/plain' })
        link.href = URL.createObjectURL(file)
        link.download = `${this.getTitle()}.sct`
        link.click()
        URL.revokeObjectURL(link.href)
        this.initLoadSaveParamString()
    }

    createParamString(): string {
        const store: Store = this.get()
        const data: string[] = []
        data.push(store.realm.name)
        data.push(store.realmClass.name)
        data.push(store.race.name)
        data.push(String(store.level))
        data.push(store.name === '' ? 'none' : store.name)

        store.items.forEach((item: Item): void => {
            data.push(item.itemName === '' ? '0' : item.itemName)
            data.push(String(item.level))
            data.push(String(item.quality))
            data.push(item.itemType.value)

            const values: string[] = item.options.map((option: Option): string => (
                `${option.effect.code}${option.effectValue.value}`
            ))

            if (item.bonusOption) {
                values.push(`${item.bonusOption.effect.code}${item.bonusOption.effectValue.value}`)
            }

            data.push(values.join('-'))
        })

        const paramString: string = data.join('/')

        this.set({paramString: paramString})

        return paramString
    }

    setInit(init: Init): void {
        this.set({...init})
        this.updateTitle()
    }

    createInit(params: Readonly<Params<ParamCodes>>, initial: boolean): Init {
        const itemManager: ItemManager = this.get().itemManager
        const activeItem: Item = this.get().activeItem
        const items: Item[] = this.get().items

        Object.values(items).forEach((item: Item): void => {
            const itemName: string = String(params[`${item.code}Name`])
            item.itemName = itemName === '0' ? '' : itemName
            item.level = Number(params[`${item.code}Level`]) as ItemLevel
            item.itemType = Object.values(itemType).find((itemType: ItemType): boolean => (
                itemType.value === params[`${item.code}Type`]
            )) ?? itemType.drop
            item.options = []
            item.bonusOption = null

            if (item.itemType.isCraftItem) {
                item.options.push(itemManager.createOption(item, false))
                item.options.push(itemManager.createOption(item, false))
                item.options.push(itemManager.createOption(item, false))
                item.options.push(itemManager.createOption(item, false))
                if (config.spellcraftItemBonus) {
                    item.bonusOption = itemManager.createOption(item, true)
                }
            }

            const values: string[] = String(params[`${item.code}Values`]).split('-')
            values.forEach((block: string, index: number): void => {
                const isCraftSlot: boolean = item.itemType.isCraftItem && index !== 4
                if (isCraftSlot && typeof item.options[index] === 'undefined') return

                const effectCode: string = block.substring(0, 2)
                const value: number = Number(block.substring(2))

                if (!effectByCode.hasOwnProperty(effectCode)) return

                const effect: Effect = effectByCode[effectCode]
                const effectType: EffectType = effectTypeByCode[effect.type]

                if (isCraftSlot && !effect.craft) return
                if (isCraftSlot && !effect.values.hasOwnProperty(value)) return

                let option: Option
                if (item.bonusOption && index === 4) {
                    option = item.bonusOption
                } else if (item.itemType.isCraftItem) {
                    option = item.options[index]
                } else {
                    option = itemManager.createOption(item, false)
                    item.options.push(option)
                }

                option.effectType = effectType
                option.effect = effect
                option.effectValue = item.itemType.isCraftItem && index < 4
                    ? effect.values[value]
                    : {value: value, imbue: 0, gem: '', price: 0}
            })
            itemManager.update(item)
        })

        const realm: Realm = realms.find((realm: Realm): boolean => (
            realm.name === params[`realm`]
        )) ?? realms[0]

        const realmClass: RealmClass = realm.realmClasses.find((realmClass: RealmClass): boolean => (
            realmClass.name === params[`realmClass`]
        )) ?? realm.realmClasses[0]

        const race: Race = realmClass.races.find((race: Race): boolean => (
            race.name === params[`race`]
        )) ?? realmClass.races[0]

        const item: Item = {...activeItem}
        const index: number = items.indexOf(activeItem)
        items.splice(index, 1, item)

        const init: Init = {
            realm: realm,
            realmClass: realmClass,
            race: race,
            level: Number(params[`level`]) as PlayerLevel,
            name: String(params[`name`] === 'none' ? '' : params[`name`]),
            items: [...items],
            activeItem: item
        }

        if (initial) {
            init.activeWeapon = init.realmClass.defaultWeapons
        }

        return init
    }
}