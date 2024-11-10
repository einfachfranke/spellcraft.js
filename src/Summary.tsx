import React, {useEffect} from "react"
import {useStore} from "./store/store"
import {SummaryManager} from "./store/SummaryManager"
import {Color} from "./data/color"
import {ItemManager} from "./store/ItemManager"
import {Realm, RealmClass} from "./types/realm"
import {Weapon} from "./types/weapon"
import {Item} from "./types/items"
import {Store} from "./types/store"
import {SummaryItem, SummaryType} from "./types/summary"
import {PlayerLevel} from "./types/levels"
import {Race} from "./data/race"

export const Summary: React.FC = (): React.JSX.Element | null => {
    const items: Item[] = useStore((state: Store): Item[] => state.items)
    const realm: Realm = useStore((state: Store): Realm => state.realm)
    const realmClass: RealmClass = useStore((state: Store): RealmClass => state.realmClass)
    const race: Race = useStore((state: Store): Race => state.race)
    const level: PlayerLevel = useStore((state: Store): PlayerLevel => state.level)
    const activeWeapon: Weapon = useStore((state: Store): Weapon => state.activeWeapon)
    const summaryTypes: SummaryType[][] = useStore((state: Store): SummaryType[][] => state.summaryTypes)
    const summaryManager: SummaryManager = useStore((state: Store): SummaryManager => state.summaryManager)

    useEffect((): void => {
        summaryManager.setItems(items)
    }, [realm, realmClass, race, level, items, activeWeapon])

    if (summaryTypes.length === 0) return null

    let col: string = `col-12 col-md-6 col-lg-${summaryTypes.length > 1 ? 12 / summaryTypes.length : 12}`

    return (
        <div className={`row summary`}>
            {summaryTypes.map((summaryTypes: SummaryType[], index: number): React.JSX.Element => (
                <div key={index} className={col}>
                    {summaryTypes.map((summaryType: SummaryType): React.JSX.Element => (
                        <React.Fragment key={summaryType.name}>
                            <label>{summaryType.name}</label>
                            {summaryType.summaryItems.map((summaryItem: SummaryItem): React.JSX.Element => (
                                <SummaryEntry key={summaryItem.name} summaryItem={summaryItem}/>
                            ))}
                        </React.Fragment>

                    ))}
                </div>
            ))}
        </div>
    )
}

interface SummaryEntryProps {
    summaryItem: SummaryItem
}

const SummaryEntry: React.FC<SummaryEntryProps> = (props: SummaryEntryProps): React.ReactElement => {
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