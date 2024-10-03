import {effectTypes} from "../data/effects";
import {Color} from "../data/color";
import {Effect, EffectTypeCode, Increase, IncreaseType} from "../types/effects";
import {Realm, RealmClass} from "../types/realm";
import {Weapon} from "../types/weapon";
import {Item, Option} from "../types/items";
import {StoreGet, StoreSet} from "../types/store";
import {SummaryData, SummaryDetail, SummaryItem, TemplateInfo} from "../types/summary";
import {Race} from "../types/race";

export class SummaryManager {
    private readonly set: StoreSet
    private readonly get: StoreGet

    constructor(set: StoreSet, get: StoreGet) {
        this.set = set
        this.get = get
    }

    setItems(items: Item[]): void {
        const summaryData: SummaryData = this.getSummaries()
        const activeWeapon: Weapon = this.get().activeWeapon

        const templateInfo: TemplateInfo = {
            utility: 0,
            useless: 0,
            price: 0
        }

        items.forEach((item: Item): void => {
            if (item.weapon && activeWeapon.itemCodes.indexOf(item.code) === -1) {
                return
            }

            item.options.forEach((option: Option): void => {
                this.handleOption(option, summaryData)
                templateInfo.price += option.effectValue.price
            })

            if (item.bonusOption) {
                this.handleOption(item.bonusOption, summaryData)
            }
        })

        this.finish(summaryData, templateInfo)

        this.set({
            summaryData: summaryData,
            templateInfo: templateInfo
        })
    }

    private finish(summaryData: SummaryData, templateInfo: TemplateInfo): void {
        Object.values(summaryData).forEach((summaryItems: SummaryItem[]): void => {
            summaryItems.forEach((summaryItem: SummaryItem): void => {
                const detail: SummaryDetail = summaryItem.summaryDetail

                let max: number = detail.maxValue
                max += detail.cap < detail.maxCap ? detail.cap : detail.maxCap
                max += detail.mythCap < detail.maxMyth ? detail.mythCap : detail.maxMyth

                summaryItem.value = detail.value < max ? detail.value : max
                summaryItem.maxValue = max - detail.value
                summaryItem.percent = (100 / max) * summaryItem.value

                if (summaryItem.summaryDetail.notFound) {
                    templateInfo.useless += summaryItem.value * summaryItem.summaryDetail.effect.utility
                } else {
                    templateInfo.utility += summaryItem.value * summaryItem.summaryDetail.effect.utility
                }
                if (summaryItem.maxValue < 0) {
                    templateInfo.useless += (summaryItem.maxValue * -1) * summaryItem.summaryDetail.effect.utility
                }

                if (summaryItem.summaryDetail.error) {
                    summaryItem.color = Color.error
                } else if (summaryItem.summaryDetail.notFound) {
                    summaryItem.color = Color.summaryWarning
                } else if (summaryItem.value >= max) {
                    summaryItem.color = Color.summaryMaxValue
                } else if (summaryItem.value > 0) {
                    summaryItem.color = Color.summaryValue
                }
            })
        })

        Object.entries(summaryData).forEach(([key, summaryItems]): void => {
            summaryData[key as EffectTypeCode] = summaryItems.filter((summaryItem: SummaryItem) => (
                !summaryItem.removeOnZero || summaryItem.value > 0
            ))
        })
    }

    private handleOption(option: Option, summaryData: SummaryData): void {
        if (option.effectType.default) {
            return
        }

        if (this.handleIncrease(option, summaryData)) {
            return
        }

        let summaryItem: SummaryItem | undefined
        summaryItem = summaryData[option.effectType.code].find((summaryItem: SummaryItem): boolean => (
            summaryItem.summaryDetail.effect === option.effect
        ))

        if (!summaryItem) {
            summaryItem = this.createSummaryItem(option.effect, option.color === Color.error)
            summaryItem.summaryDetail.notFound = true
            summaryData[option.effectType.code].push(summaryItem)
        }

        summaryItem.summaryDetail.value += option.effectValue.value
        if (option.color === Color.error) {
            summaryItem.summaryDetail.error = true
        }
    }

    private handleIncrease(option: Option, summaryData: SummaryData): boolean {
        const increase: Increase | undefined = option.effect.increase

        if (!increase) return false

        switch (increase.type) {
            case IncreaseType.value:
                return this.handleIncreaseValue(increase, summaryData, option)
            case IncreaseType.acuity:
                return this.handleIncreaseAcuity(increase, summaryData, option)
            case IncreaseType.cap:
                return this.handleIncreaseCap(increase, summaryData, option, null)
            case IncreaseType.acuityCap:
                return this.handleIncreaseAcuityCap(increase, summaryData, option)
            case IncreaseType.mythCap:
                return this.handleIncreaseCap(increase, summaryData, option, null, true)
            case IncreaseType.mythAcuityCap:
                return this.handleIncreaseAcuityCap(increase, summaryData, option, true)
        }
    }

    private handleIncreaseValue(increase: Increase, summaryData: SummaryData, option: Option): boolean {
        const realm: Realm = this.get().realm
        let skip: boolean = false

        increase.realm[realm.name].forEach((effect: Effect): void => {
            let summaryItem: SummaryItem | undefined = summaryData[effect.type].find((summaryItem: SummaryItem): boolean => (
                summaryItem.summaryDetail.effect === effect
            ))

            if (!summaryItem) return

            skip = true
            summaryItem.summaryDetail.value += option.effectValue.value
            if (summaryItem.effects.indexOf(option.effect) === -1) {
                summaryItem.effects.push(option.effect)
            }
        })

        return skip
    }

    private handleIncreaseAcuity(increase: Increase, summaryData: SummaryData, option: Option): boolean {
        const realmClass: RealmClass = this.get().realmClass

        if (!increase.realmClass) return false

        const effect: Effect = increase.realmClass[realmClass.name]

        const summaryItem: SummaryItem | undefined = summaryData[effect.type].find((summaryItem: SummaryItem): boolean => (
            summaryItem.summaryDetail.effect === effect
        ))

        if (!summaryItem) return false

        summaryItem.summaryDetail.value += option.effectValue.value
        if (summaryItem.effects.indexOf(option.effect) === -1) {
            summaryItem.effects.push(option.effect)
        }

        return true
    }

    private handleIncreaseCap(increase: Increase, summaryData: SummaryData, option: Option, original: Option | null, mythical: boolean = false): boolean {
        const realm: Realm = this.get().realm
        let skip: boolean = false

        increase.realm[realm.name].forEach((effect: Effect): void => {
            let summaryItem: SummaryItem | undefined = summaryData[effect.type].find((summaryItem: SummaryItem): boolean => (
                summaryItem.summaryDetail.effect === effect
            ))

            if (!summaryItem) {
                summaryItem = this.createSummaryItem(effect, option.color === Color.error, true)
                summaryItem.summaryDetail.notFound = true
                summaryData[effect.type].push(summaryItem)
            }

            if (mythical) {
                summaryItem.summaryDetail.mythCap += option.effectValue.value
                summaryItem.summaryDetail.maxMyth = this.getMaxEffectValue(option.effect)
            } else {
                summaryItem.summaryDetail.cap += option.effectValue.value
                summaryItem.summaryDetail.maxCap = this.getMaxEffectValue(option.effect)
            }

            if (summaryItem.summaryDetail.notFound) return

            summaryItem = summaryData[option.effectType.code].find((summaryItem: SummaryItem): boolean => (
                summaryItem.summaryDetail.effect === option.effect
            ))

            if (!summaryItem) {
                summaryItem = this.createSummaryItem(option.effect, option.color === Color.error)
                summaryData[option.effectType.code].push(summaryItem)
            }

            if (original && summaryItem.effects.indexOf(original.effect) === -1) {
                summaryItem.effects.push(original.effect)
            }

            summaryItem.summaryDetail.value += option.effectValue.value

            skip = true
        })

        return skip
    }

    private handleIncreaseAcuityCap(increase: Increase, summaryData: SummaryData, option: Option, mythical: boolean = false): boolean {
        const realmClass: RealmClass = this.get().realmClass

        if (!increase.realmClass) return false

        let effect: Effect = increase.realmClass[realmClass.name]

        const targetIncrease: Increase | undefined = effect.increase

        if (!targetIncrease) return false

        const targetOption: Option = {
            SCBonus: option.SCBonus,
            color: option.color,
            effect: effect,
            effectType: option.effectType,
            effectValue: option.effectValue,
            showHint: option.showHint
        }

        return  this.handleIncreaseCap(targetIncrease, summaryData, targetOption, option, mythical)
    }

    private getSummaries(): SummaryData {
        const summaryData: SummaryData = {
            unused: [],
            stats: [],
            statCaps: [],
            mythStatCaps: [],
            resists: [],
            resistCaps: [],
            skills: [],
            focus: [],
            bonus: []
        }

        const race: Race = this.get().race

        Object.values(effectTypes.resists.effects).forEach((effect: Effect): void => {
            const summaryItem: SummaryItem = this.createSummaryItem(effect)
            const bonus: number | undefined = race.resists[effect.code]
            if (bonus) summaryItem.summaryDetail.value += bonus
            summaryData.resists.push(summaryItem)
        })

        Object.values(effectTypes.bonus.effects).forEach((effect: Effect): void => {
            summaryData.bonus.push(this.createSummaryItem(effect, false, true))
        })

        const realmClass: RealmClass = this.get().realmClass

        realmClass.effects.stats.forEach((effect: Effect): void => {
            if (effect.increase) return

            summaryData.stats.push(this.createSummaryItem(effect))
        })

        realmClass.effects.statCaps.forEach((effect: Effect): void => {
            summaryData.statCaps.push(this.createSummaryItem(effect, false, true))
        })

        realmClass.effects.mythStatCaps.forEach((effect: Effect): void => {
            summaryData.mythStatCaps.push(this.createSummaryItem(effect, false, true))
        })

        realmClass.effects.skills.forEach((effect: Effect): void => {
            if (effect.increase) return

            summaryData.skills.push(this.createSummaryItem(effect))
        })

        realmClass.effects.focus.forEach((effect: Effect): void => {
            if (effect.increase) return

            summaryData.focus.push(this.createSummaryItem(effect))
        })

        return summaryData
    }

    private createSummaryItem(effect: Effect, error: boolean = false, removeOnZero: boolean = false): SummaryItem {
        return {
            name: effect.name,
            effects: [effect],
            color: Color.summaryDefault,
            removeOnZero: removeOnZero,
            value: 0,
            maxValue: 0,
            percent: 0,
            summaryDetail: {
                effect: effect,
                notFound: false,
                error: error,
                value: 0,
                maxValue: this.getMaxEffectValue(effect),
                cap: 0,
                maxCap: 0,
                mythCap: 0,
                maxMyth: 0,
            }
        }
    }

    private getMaxEffectValue(effect: Effect): number {
        const level: number = this.get().level
        const race: Race = this.get().race

        switch (effect.maxValue) {
            case 75:
                return Math.floor(level * 1.5);
            case 26:
                let bonus: number | undefined  = race.resists[effect.code]
                return Math.floor((level / 2) + 1) + (bonus ?? 0);
            case 50:
                return level;
            case 25:
                return level / 2;
            case 200:
                return level * 4;
            case 11:
                return Math.floor((level / 5) + 1);
            case 10:
                return Math.floor(level / 5);
            default:
                return 0;
        }
    }
}