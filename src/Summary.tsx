import React, {useEffect} from "react";
import {useStore} from "./store/store";
import {SummaryManager} from "./store/SummaryManager";
import {Color} from "./data/color";
import {ItemManager} from "./store/ItemManager";
import {Realm, RealmClass} from "./types/realm";
import {Weapon} from "./types/weapon";
import {Race} from "./types/race";
import {Item} from "./types/items";
import {Store} from "./types/store";
import {SummaryData, SummaryItem} from "./types/summary";
import {config} from "./config";
import {PlayerLevel} from "./types/levels";

export const Summary: React.FC = (): React.JSX.Element => {
    const items: Item[] = useStore((state: Store): Item[] => state.items)
    const realm: Realm = useStore((state: Store): Realm => state.realm)
    const realmClass: RealmClass = useStore((state: Store): RealmClass => state.realmClass)
    const race: Race = useStore((state: Store): Race => state.race)
    const level: PlayerLevel = useStore((state: Store): PlayerLevel => state.level)
    const activeWeapon: Weapon = useStore((state: Store): Weapon => state.activeWeapon)
    const summaryData: SummaryData = useStore((state: Store): SummaryData => state.summaryData)
    const summaryManager: SummaryManager = useStore((state: Store): SummaryManager => state.summaryManager)

    useEffect((): void => {
        summaryManager.setItems(items)
    }, [items, realm, realmClass, race, level, activeWeapon])

    const col: string = config.useBonus ? `col-12 col-md-6 col-lg-3` : `col-12 col-md-6 col-lg-4`

    return (
        <div className={`row summary`}>
            <div className={col}>
                <label>Stats</label>
                {summaryData.stats.map((summaryData: SummaryItem): React.JSX.Element => (
                    <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                ))}
                {summaryData.statCaps.length > 0 && (
                    <>
                        <label>Stat Caps</label>
                        {summaryData.statCaps.map((summaryData: SummaryItem): React.JSX.Element => (
                            <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                        ))}
                    </>
                )}
                {summaryData.mythStatCaps.length > 0 && (
                    <>
                        <label>Mythical Stat Caps</label>
                        {summaryData.mythStatCaps.map((summaryData: SummaryItem): React.JSX.Element => (
                            <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                        ))}
                    </>
                )}
            </div>
            <div className={col}>
                <label>Resists</label>
                {summaryData.resists.map((summaryData: SummaryItem): React.JSX.Element => (
                    <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                ))}
                {summaryData.resistCaps.length > 0 && (
                    <>
                        <label>Resist Caps</label>
                        {summaryData.resistCaps.map((summaryData: SummaryItem): React.JSX.Element => (
                            <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                        ))}
                    </>
                )}
            </div>
            <div className={col}>
                <label>Skills</label>
                {summaryData.skills.map((summaryData: SummaryItem): React.JSX.Element => (
                    <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                ))}
                {summaryData.focus.length > 0 && (
                    <>
                        <label>Focus</label>
                        {summaryData.focus.map((summaryData: SummaryItem): React.JSX.Element => (
                            <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                        ))}
                    </>
                )}
            </div>
            <div className={col}>
                {summaryData.bonus.length > 0 && (
                    <>
                        <label>Bonus</label>
                        {summaryData.bonus.map((summaryData: SummaryItem): React.JSX.Element => (
                            <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

const SummaryEntry: React.FC<{
    summaryItem: SummaryItem
}> = (props): React.ReactElement => {
    const itemManager: ItemManager = useStore((state: Store): ItemManager => state.itemManager)

    return (
        <div className={`summary-item ${props.summaryItem.color}`}
             onMouseEnter={(): void => itemManager.setHighlightEffects(props.summaryItem.effects)}
             onMouseLeave={(): void => itemManager.setHighlightEffects([])}
        >
            <div className={`summary-text`}>
                <div className={`summary-text-effect`}>
                    {props.summaryItem.name}
                </div>
                <div className={`summary-text-value ${props.summaryItem.maxValue < 0 ? Color.summaryWarning : ''}`}>
                    {props.summaryItem.value} <span>({props.summaryItem.maxValue})</span>
                </div>
            </div>
            <div className={`summary-bar-bg`}/>
            <div className={`summary-bar`} style={{width: `${props.summaryItem.percent}%`}}/>
        </div>
    )
}