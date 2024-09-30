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

export const Summary: React.FC = (): React.ReactElement => {
    const items: Item[] = useStore((state: Store) => state.items)
    const realm: Realm = useStore((state: Store) => state.realm)
    const realmClass: RealmClass = useStore((state: Store) => state.realmClass)
    const race: Race = useStore((state: Store) => state.race)
    const level: number = useStore((state: Store) => state.level)
    const activeWeapon: Weapon = useStore((state: Store) => state.activeWeapon)
    const summaries: SummaryData = useStore((state: Store) => state.summaryData)
    const summaryManager: SummaryManager = useStore((state: Store) => state.summaryManager)

    useEffect((): void => {
        summaryManager.setItems(items)
    }, [items, realm, realmClass, race, level, activeWeapon])

    return (
        <div className={`row summary`}>
            <div className={`col-md-6 col-lg-3 col-12`}>
                <label>Stats</label>
                {summaries.stats.map((summaryData: SummaryItem) => (
                    <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                ))}
                {summaries.statCaps.length > 0 && (
                    <>
                        <label>Stat Caps</label>
                        {summaries.statCaps.map((summaryData: SummaryItem) => (
                            <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                        ))}
                    </>
                )}

            </div>
            <div className={`col-md-6 col-lg-3 col-12`}>
                <label>Resists</label>
                {summaries.resists.map((summaryData: SummaryItem) => (
                    <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                ))}
                {summaries.resistCaps.length > 0 && (
                    <>
                        <label>Resist Caps</label>
                        {summaries.resistCaps.map((summaryData: SummaryItem) => (
                            <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                        ))}3
                    </>
                )}
            </div>
            <div className={`col-md-6 col-lg-3 col-12`}>
                <label>Skills</label>
                {summaries.skills.map((summaryData: SummaryItem) => (
                    <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                ))}
                {summaries.focus.length > 0 && (
                    <>
                        <label>Focus</label>
                        {summaries.focus.map((summaryData: SummaryItem) => (
                            <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                        ))}
                    </>
                )}
            </div>
            <div className={`col-md-6 col-lg-3 col-12`}>
                {summaries.bonus.length > 0 && (
                    <>
                        <label>Bonus</label>
                        {summaries.bonus.map((summaryData: SummaryItem) => (
                            <SummaryEntry key={summaryData.name} summaryItem={summaryData}/>
                        ))}
                    </>
                )}
                {summaries.mythStatCaps.length > 0 && (
                    <>
                        <label>Mythical Stat Caps</label>
                        {summaries.mythStatCaps.map((summaryData: SummaryItem) => (
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
}> = ({summaryItem}): React.ReactElement => {
    const itemManager: ItemManager = useStore((state: Store) => state.itemManager)

    return (
        <div className={`summary-item ${summaryItem.color}`}
             onMouseEnter={() => itemManager.setHighlightEffects(summaryItem.effects)}
             onMouseLeave={() => itemManager.setHighlightEffects([])}
        >
            <div className={`summary-text`}>
                <div className={`summary-text-effect`}>
                    {summaryItem.name}
                </div>
                <div className={`summary-text-value ${summaryItem.maxValue < 0 ? Color.summaryWarning : ''}`}>
                    {summaryItem.value} <span>({summaryItem.maxValue})</span>
                </div>
            </div>
            <div className={`summary-bar-bg`}/>
            <div className={`summary-bar`} style={{width: `${summaryItem.percent}%`}}/>
        </div>
    )
}