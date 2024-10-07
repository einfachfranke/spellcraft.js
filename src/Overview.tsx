import React, {useEffect, useState} from "react";
import {useStore} from "./store/store";
import {ItemManager} from "./store/ItemManager";
import {Effect} from "./types/effects";
import {weapon} from "./data/weapon";
import {Weapon} from "./types/weapon";
import {Item, Option} from "./types/items";
import {Store} from "./types/store";
import {TemplateInfo} from "./types/summary";

const Overview: React.FC = (): React.JSX.Element => {
    const items: Item[] = useStore((state: Store): Item[] => state.items)

    return (
        <div className={`overview`}>
            {items.map((item: Item): React.JSX.Element => (
                <OverviewEntry key={item.code} item={item}/>
            ))}
            <TemplateOverview/>
            <WeaponSelect/>
        </div>
    )
}

const TemplateOverview: React.FC = (): React.JSX.Element => {
    const templateInfo: TemplateInfo = useStore((state: Store): TemplateInfo => state.templateInfo)

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

interface PriceProps {
    price: number
}

export const Price: React.FC<PriceProps> = (props: PriceProps): React.JSX.Element => {
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

interface OverviewEntryProps {
    item: Item
}

const OverviewEntry: React.FC<OverviewEntryProps> = (props: OverviewEntryProps): React.JSX.Element => {
    const itemManager: ItemManager = useStore((state: Store): ItemManager => state.itemManager)
    const activeItem: Item = useStore((state: Store): Item => state.activeItem)
    const activeWeapon: Weapon = useStore((state: Store): Weapon => state.activeWeapon)
    const highlightEffects: Effect[] = useStore((state: Store): Effect[] => state.highlightEffects)
    const [highlight, setHighlight] = useState<number>(0)

    useEffect((): void => {
        if (props.item.weapon && activeWeapon.itemCodes.indexOf(props.item.code) === -1) {
            return
        }

        let highlight: number = 0
        itemManager.getAllOptions(props.item).forEach((option: Option): void => {
            if (highlightEffects.indexOf(option.effect) === -1) return

            highlight += option.effectValue.value
        })
        setHighlight(highlight)
    }, [highlightEffects]);

    const disabled: string = props.item.weapon && activeWeapon.itemCodes.indexOf(props.item.code) === -1 ? `disabled`: ``

    return (
        <>
            <div
                className={`item ${props.item.code} ${activeItem === props.item ? `active` : ``} ${props.item.color} ${disabled}`}
                onClick={(): void => {
                    if (activeItem !== props.item) itemManager.setActiveItem(props.item)
                }}
            >
                <OverviewEntryHint item={props.item}/>
                {highlight > 0 && <span>{highlight}</span>}
            </div>
            <div className={`header ${props.item.code} ${activeItem === props.item ? `active` : ``}`}>
                {props.item.name}
            </div>
        </>
    )
}

interface OverviewEntryHintProps {
    item: Item
}

const OverviewEntryHint: React.FC<OverviewEntryHintProps> = (props: OverviewEntryHintProps): null | React.JSX.Element => {
    if (!props.item.craft) {
        return null
    }

    return (
        <>
            {props.item.options.map((option: Option, index: number): React.JSX.Element => (
                <div key={index} className={`hint option${index} ${option.showHint ? 'show' : ''} ${props.item.color}`}/>
            ))}
            <div className={`hint bonus ${props.item.color} ${props.item.bonusOption !== null && !props.item.bonusOption.effectType.default ? 'show' : ''}`}/>
        </>
    )
}

const WeaponSelect: React.FC = (): React.JSX.Element => {
    const itemManager: ItemManager = useStore((state: Store): ItemManager => state.itemManager)
    const activeWeapon: Weapon = useStore((state: Store): Weapon => state.activeWeapon)

    return (
        <>
            {Object.values(weapon).map((weapon: Weapon): React.JSX.Element => (
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

