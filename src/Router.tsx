import React, {useEffect, useState} from "react";
import {NavigateFunction, Params, useNavigate, useParams} from "react-router-dom";
import {useStore} from "./store/store";
import {realms} from "./data/realms";
import {effectByCode, effectTypeByCode} from "./data/effects";
import {Color} from "./data/color";
import {ItemManager} from "./store/ItemManager";
import {Effect, EffectType} from "./types/effects";
import {Realm, RealmClass} from "./types/realm";
import {Race} from "./types/race";
import {Item, ItemType, Option} from "./types/items";
import {FromUrl, Init, Store} from "./types/store";
import {ParamCodes} from "./types/paramCodes";
import {ItemLevel, PlayerLevel} from "./types/levels";
import {itemType} from "./data/items";

export const Router: React.FC = (): null => {
    const params: Readonly<Params<ParamCodes>> = useParams()

    const navigate: NavigateFunction = useNavigate()

    const itemManager: ItemManager = useStore((state: Store): ItemManager => state.itemManager)
    const initial: boolean = useStore((state: Store): boolean => state.initial)
    const fromUrl: FromUrl = useStore((state: Store): FromUrl => state.fromUrl)
    const activeItem: Item = useStore((state: Store): Item => state.activeItem)

    const realm: Realm = useStore((state: Store): Realm => state.realm)
    const realmClass: RealmClass = useStore((state: Store): RealmClass => state.realmClass)
    const race: Race = useStore((state: Store): Race => state.race)
    const level: PlayerLevel = useStore((state: Store): PlayerLevel => state.level)
    const name: string = useStore((state: Store): string => state.name)
    const items: Item[] = useStore((state: Store): Item[] => state.items)

    const [location, setLocation] = useState<string>('')

    useEffect((): void => {
        window.addEventListener('popstate', (): void => {
            setLocation(window.location.href)
        })
    }, []);

    useEffect((): void => {
        Object.values(items).forEach((item: Item): void => {
            const itemName: string = String(params[`${item.code}Name`])
            item.itemName = itemName === '0' ? '' : itemName
            item.level = Number(params[`${item.code}Level`]) as ItemLevel
            item.itemType = Object.values(itemType).find((itemType: ItemType): boolean => (
                itemType.value === params[`${item.code}Type`]
            )) ?? itemType.drop
            item.options = []
            item.bonusOption = null

            const values: string = String(params[`${item.code}Values`])
            values.split('-').forEach((block: string, index: number): void => {
                const effectCode: string = block.substring(0, 2);
                const value: number = Number(block.substring(2));

                const effect: Effect = effectByCode[effectCode]
                const effectType: EffectType = effectTypeByCode[effect.type]

                if (effect.code === effectCode) {
                    const option: Option = {
                        scBonus: item.itemType.isCraftItem && index === 4,
                        color: Color.itemDefault,
                        showHint: false,
                        effectType: effectType,
                        effect: effect,
                        effectValue: item.itemType.isCraftItem && index < 4
                            ? effect.values[value]
                            : {value: value, imbue: 0, gem: '', price: 0},
                    }

                    if (item.itemType.isCraftItem && index === 4) {
                        item.bonusOption = option
                    } else {
                        item.options.push(option)
                    }
                }

                itemManager.update(item)
            })
        })

        const realm: Realm = realms.find((realm: Realm): boolean => (
            realm.name === params[`realm`]
        )) ?? realms[0]

        const realmClas: RealmClass = realm.realmClasses.find((realmClass: RealmClass): boolean => (
            realmClass.name === params[`realmClass`]
        )) ?? realm.realmClasses[0]

        const race: Race = realmClas.races.find((race: Race): boolean => (
            race.name === params[`race`]
        )) ?? realmClas.races[0]

        const item: Item = {...activeItem}
        const index: number = items.indexOf(activeItem)
        items.splice(index, 1, item)

        const init: Init = {
            realm: realm,
            realmClass: realmClas,
            race: race,
            level: Number(params[`level`]) as PlayerLevel,
            name: String(params[`name`]),
            items: [...items],
            activeItem: item
        }

        if (initial) {
            init.activeWeapon = realmClas.defaultWeapons
        }

        fromUrl(init)
    }, [location])

    useEffect((): void => {
        if (initial) return

        const paramValues: (string | undefined)[] = Object.values(params)
        const paramKeys: string[] = Object.keys(params)

        paramValues[paramKeys.indexOf(`realm`)] = realm.name
        paramValues[paramKeys.indexOf(`realmClass`)] = realmClass.name
        paramValues[paramKeys.indexOf(`race`)] = race.name
        paramValues[paramKeys.indexOf(`level`)] = String(level)
        paramValues[paramKeys.indexOf(`name`)] = name

        items.forEach((item: Item): void => {
            paramValues[paramKeys.indexOf(`${item.code}Level`)] = String(item.level)
            paramValues[paramKeys.indexOf(`${item.code}Quality`)] = String(item.quality)
            paramValues[paramKeys.indexOf(`${item.code}Type`)] = String(item.itemType.value)
            paramValues[paramKeys.indexOf(`${item.code}Name`)] = item.itemName === '' ? '0' : item.itemName

            const values: string[] = item.options.map((option: Option): string => (
                `${option.effect.code}${option.effectValue.value}`
            ))

            if (item.bonusOption) {
                values.push(`${item.bonusOption.effect.code}${item.bonusOption.effectValue.value}`)
            }

            paramValues[paramKeys.indexOf(`${item.code}Values`)] = values.join('-')
        })

        const paramString: string = paramValues.join('/')

        if (window.location.href.includes(paramString)) return

        navigate(`/${paramString}`)
    }, [realm, realmClass, race, level, name, items])

    return null
}

