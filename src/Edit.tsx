import React, {useEffect, useState} from "react";
import {ItemManager} from "./store/ItemManager";
import {Price} from "./Overview";
import {Effect, EffectType, EffectValue} from "./types/effects";
import {quality} from "./data/quality";
import {Quality} from "./types/quality";
import {Item, ItemType, ItemTypeCode, Option} from "./types/items";
import {Store} from "./types/store";
import {RealmClass} from "./types/realm";
import {itemLevels} from "./data/levels";
import {ItemLevel} from "./types/levels";
import {itemType} from "./data/items";
import {useStore} from "./store/store";
import {config} from "./config";
import {EdenImport} from "./edenImport";

export const Edit: React.FC = (): React.JSX.Element => {
    const itemManager: ItemManager = useStore((state: Store): ItemManager => state.itemManager)
    const item: Item = useStore((state: Store): Item => state.activeItem)

    return (
        <div className={`edit`}>
            <div className={`row`}>
                <div className={`col-lg-2`}>
                    <h2>{item.name}</h2>
                </div>
                {config.useEdenImport && (
                    <EdenImport/>
                )}
                {itemManager.clearable() && (
                    <div className={`col-lg-2`}>
                        <button
                            onClick={(): void => itemManager.clear()}
                        >
                            Clear
                        </button>
                    </div>
                )}
            </div>
            <div className={`row`}>
                <div className={`col-4 col-lg-2`}>
                    Utility: {item.utility.toFixed(2)}
                </div>
                {item.itemType.isCraftItem && (
                    <div className={`col-8 col-lg-2 ${item.imbue.value > (item.imbue.max + 5.5) ? 'imbue-error' : ''}`}>
                        Imbue: {item.imbue.value} / {item.imbue.max + 5.5}
                    </div>
                )}
            </div>
            <div className={`row`}>
                <div className={`col-2 col-lg-2`}>
                    <label htmlFor={'item-level-select'}>Level</label>
                    <select
                        id={'item-level-select'}
                        value={item.level}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                            itemManager.level = Number(e.target.value) as ItemLevel
                        }}
                    >
                        {itemLevels.map((level: ItemLevel): React.JSX.Element => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                </div>
                <div className={`col-2 col-lg-2`}>
                    <label htmlFor={'quality-select'}>Quality</label>
                    <select
                        id={'quality-select'}
                        value={item.quality}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                            itemManager.quality = Number(e.target.value) as Quality
                        }}
                    >
                        {quality.map((quality: number): React.JSX.Element => (
                            <option key={quality} value={quality}>{quality}</option>
                        ))}
                    </select>
                </div>
                <div className={`col-3 col-lg-2`}>
                    <label htmlFor={'item-type-select'}>Type</label>
                    <select
                        id={'item-type-select'}
                        value={item.itemType.code}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                            itemManager.itemType = itemType[e.target.value as ItemTypeCode]
                        }}
                    >
                        {itemManager.itemTypes.map((itemType: ItemType): React.JSX.Element => (
                            <option key={itemType.value} value={itemType.code}>
                                {itemType.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={`col-12 col-lg-6`}>
                    <label htmlFor={'item-name-input'}>Name</label>
                    <input
                        id={'item-name-input'}
                        value={item.itemName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                            itemManager.itemName = e.target.value
                        }}
                    />
                </div>
            </div>
            <div className={`row`}>
                <div className={`col-3 col-lg-2`}>
                    <label>Type</label>
                </div>
                <div className={`col-6 col-lg-3`}>
                    <label>Effect</label>
                </div>
                <div className={`col-3 col-lg-1`}>
                    <label>Value</label>
                </div>
                {item.itemType.isCraftItem && (
                    <>
                        <div className={`col-1 col-lg-05`}>
                            <label>IP</label>
                        </div>
                        <div className={`col-2 col-lg-105`}>
                            <label>Price</label>
                        </div>
                        <div className={`col-9 col-lg-4`}>
                            <label>Gem</label>
                        </div>
                    </>
                )}
            </div>
            {item.options.map((option: Option, index: number): React.JSX.Element => (
                <OptionView key={index} item={item} option={option} craft={item.itemType.isCraftItem}/>
            ))}
            {item.bonusOption !== null && (
                <>
                    <label>Bonus</label>
                    <OptionView item={item} option={item.bonusOption} craft={false}/>
                </>
            )}
        </div>
    )
}

interface OptionViewProps {
    item: Item,
    option: Option
    craft: boolean
}

const OptionView: React.FC<OptionViewProps> = (props: OptionViewProps): React.JSX.Element => {
    const itemManager: ItemManager = useStore((state: Store): ItemManager => state.itemManager)
    const realmClass: RealmClass = useStore((state: Store): RealmClass => state.realmClass)
    const [effectTypes, setEffectTypes] = useState<EffectType[]>([])
    const [effects, setEffects] = useState<Effect[]>([])
    const [effectValues, setEffectValues] = useState<EffectValue[]>([])

    useEffect((): void => {
        setEffectTypes(itemManager.findEffectTypes(props.item, props.option.scBonus))
        setEffects(itemManager.findEffects(props.option))
        setEffectValues(itemManager.findEffectValues(props.option))
    }, [props.item, realmClass])

    return (
        <div className={`row`}>
            <div className={`col-3 col-lg-2 ${props.option.color}`}>
                <select
                    value={effectTypes.indexOf(props.option.effectType)}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                        props.option.effectType = effectTypes[Number(e.target.value)]
                        itemManager.changeType(props.option)
                    }}
                >
                    {effectTypes.map((effectType: EffectType, index: number): React.JSX.Element => (
                        <option key={effectType.name} value={index}>
                            {effectType.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className={`col-6 col-lg-3 ${props.option.color}`}>
                <select
                    value={effects.indexOf(props.option.effect)}
                    disabled={props.option.effectType.default}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                        props.option.effect = effects[Number(e.target.value)]
                        itemManager.changeEffect(props.option)
                    }}
                >
                    {effects.map((effect: Effect, index: number): React.JSX.Element => (
                        <option key={effect.name} value={index} disabled={effect.name === ''}>
                            {effect.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className={`col-3 col-lg-1 ${props.option.color}`}>
                {props.craft && (
                    <select
                        value={effectValues.indexOf(props.option.effectValue)}
                        disabled={props.option.effectType.default}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                            itemManager.changeSelectValue(props.option, e.target.value)
                        }}
                    >
                        {effectValues.map((value: EffectValue, index: number): React.JSX.Element => (
                            <option key={value.value} value={index}>
                                {value.value}
                            </option>
                        ))}
                    </select>
                )}
                {!props.craft && (
                    <input
                        type={`number`}
                        value={props.option.effectValue.value}
                        min={1}
                        disabled={props.option.effectType.default}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                            itemManager.changeInputValue(props.option, e.target.value)
                        }}
                    />
                )}
            </div>
            {props.craft && (
                <>
                    <div className={`col-1 col-lg-05`}>
                        {props.option.effectValue.imbue !== 0 ? props.option.effectValue.imbue : ''}
                    </div>
                    <div className={`col-2 col-lg-105`}>
                        {props.option.effectValue.price > 0 && (
                            <Price price={props.option.effectValue.price}/>
                        )}
                    </div>
                    <div className={`col-9 col-lg-4 ellipsis`}>
                        <Gem option={props.option}/>
                    </div>
                </>
            )}
        </div>
    )
}

interface GemProps {
    option: Option
}

const Gem: React.FC<GemProps> = (props: GemProps): React.JSX.Element => {
    const split: string[] = props.option.effectValue.gem.split(' ')

    return (
        <>
            <span className={`gem-type`}>
                {split.shift()}
            </span>{' '}
            {split.join(' ')}
        </>
    )
}