import React, {useEffect, useState} from "react";
import {useStore} from "./store/store";
import {ItemManager} from "./store/ItemManager";
import {Effect} from "./types/effects";
import {weapon} from "./data/weapon";
import {Weapon} from "./types/weapon";
import {Item, Option} from "./types/items";
import {Store} from "./types/store";
import {TemplateInfo} from "./types/summary";

const Overview: React.FC = () => {
    const items: Item[] = useStore((state: Store) => state.items)

    return (
        <div className={`overview`}>
            {items.map((item: Item) => (
                <OverviewEntry key={item.code} item={item}/>
            ))}
            <Template/>
            <WeaponSelect/>
        </div>
    )
}

const Template: React.FC = () => {
    const templateInfo: TemplateInfo = useStore((state: Store) => state.templateInfo)

    return (
        <>
            <div className={`template price`}>
                <div>Spellcrafting</div>
                <Price price={templateInfo.price}/>
            </div>
            <div className={`template utility`}>
                <div>Utility</div>
                {templateInfo.utility.toFixed(2)}
            </div>
            <div className={`template useless`}>
                <div>Useless Utility</div>
                {templateInfo.useless.toFixed(2)}
            </div>
        </>
    )
}

export const Price: React.FC<{
    price: number
}> = (props) => {
    let price: string = ''

    const gold: number = Number(String(props.price).slice(-6, -4));
    if (gold > 0) {
        price += String(gold) + 'g '
    }

    const silver: number = Number(String(props.price).slice(-4, -2));
    if (silver > 0) {
        price += String(silver) + 's '
    }

    const copper: number = Number(String(props.price).slice(-2));
    price += String(copper) + 'c'

    return (
        <span>{price}</span>
    )
};

export default Overview

const OverviewEntry: React.FC<{
    item: Item
}> = ({item}) => {
    const itemManager: ItemManager = useStore((state: Store) => state.itemManager)
    const activeItem: Item = useStore((state: Store) => state.activeItem)
    const activeWeapon: Weapon = useStore((state: Store) => state.activeWeapon)
    const highlightEffects: Effect[] = useStore((state: Store) => state.highlightEffects)
    const [highlight, setHighlight] = useState<number>(0)

    useEffect((): void => {
        if (item.weapon && activeWeapon.itemCodes.indexOf(item.code) === -1) {
            return
        }

        let highlight: number = 0
        itemManager.getAllOptions(item).forEach((option: Option): void => {
            if (highlightEffects.indexOf(option.effect) === -1) return

            highlight += option.effectValue.value
        })
        setHighlight(highlight)
    }, [highlightEffects]);

    const disabled = item.weapon && activeWeapon.itemCodes.indexOf(item.code) === -1 ? `disabled`: ``

    return (
        <>
            <div
                className={`item ${item.code} ${activeItem === item ? `active` : ``} ${item.color} ${disabled}`}
                onClick={(): void => {
                    if (activeItem !== item) itemManager.setActiveItem(item)
                }}
            >
                <OverviewEntryHint item={item}/>
                {highlight > 0 && <span>{highlight}</span>}
            </div>
            <div className={`header ${item.code} ${activeItem === item ? `active` : ``}`}>
                {item.name}
            </div>
        </>
    )
}

const OverviewEntryHint: React.FC<{
    item: Item
}> = ({item}): null | React.ReactElement => {
    if (!item.craft) {
        return null
    }

    return (
        <>
            {item.options.map((option: Option, index: number) => (
                <div key={index} className={`hint option${index} ${option.showHint ? 'show' : ''} ${item.color}`}/>
            ))}
            <div className={`hint bonus ${item.color} ${item.bonusOption !== null && !item.bonusOption.effectType.default ? 'show' : ''}`}/>
        </>
    )
}

const WeaponSelect: React.FC = () => {
    const itemManager: ItemManager = useStore((state: Store) => state.itemManager)
    const activeWeapon: Weapon = useStore((state: Store) => state.activeWeapon)

    return (
        <>
            {Object.values(weapon).map((weapon: Weapon) => (
                <div key={weapon.code}
                     className={`weapon ${weapon.code} ${activeWeapon === weapon ? 'active' : ''}`}
                     onClick={(): void => {
                         itemManager.setActiveWeapon(weapon)
                     }}
                >
                    {weapon.name}
                </div>
            ))}
        </>
    )
}

