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
import {useParams} from "react-router-dom";

export const Edit: React.FC = (): React.ReactElement => {
    const itemManager: ItemManager = useStore((state: Store) => state.itemManager)
    const item: Item = useStore((state: Store) => state.activeItem)
    const params = useParams()
    console.log(params)

    return (
        <div className={`edit`}>
            <h2>{item.name}</h2>
            <div className={`row`}>
                <div className={`col-lg-2`}>
                    Utility: {item.utility.toFixed(2)}
                </div>
                {item.itemType.isCraftItem && (
                    <div className={`col-lg-2 ${item.imbue.value > (item.imbue.max + 5.5) ? 'imbue-error' : ''}`}>
                        Imbue: {item.imbue.value} / {item.imbue.max + 5.5}
                    </div>
                )}
            </div>
            <div className={`row`}>
                <div className={`col-md-2 col-lg-1`}>
                    <label htmlFor={'item-level-select'}>Level</label>
                    <select
                        id={'item-level-select'}
                        value={item.level}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                            itemManager.level = Number(e.target.value) as ItemLevel
                        }}
                    >
                        {itemLevels.map((level: ItemLevel) => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                </div>
                <div className={`col-md-2 col-lg-1`}>
                    <label htmlFor={'quality-select'}>Quality</label>
                    <select
                        id={'quality-select'}
                        value={item.quality}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                            itemManager.quality = Number(e.target.value) as Quality
                        }}
                    >
                        {quality.map((quality: number) => (
                            <option key={quality} value={quality}>{quality}</option>
                        ))}
                    </select>
                </div>
                <div className={`col-md-4 col-lg-2`}>
                    <label htmlFor={'item-type-select'}>Type</label>
                    <select
                        id={'item-type-select'}
                        value={item.itemType.code}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                            itemManager.itemType = itemType[e.target.value as ItemTypeCode]
                        }}
                    >
                        {itemManager.itemTypes.map((itemType: ItemType) => (
                            <option key={itemType.value} value={itemType.code}>
                                {itemType.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={`col-md-2 col-lg-1`}>
                    <label>&nbsp;</label>
                    <button>Import</button>
                </div>
                <div className={`col-md-2 col-lg-1`}>
                    <label>&nbsp;</label>
                    <button onClick={() => itemManager.clear()}>Clear</button>
                </div>
                <div className={`col-md-12 col-lg-6`}>
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
                <div className={`col-md-3 col-lg-2`}>
                    <label>Type</label>
                </div>
                <div className={`col-md-6 col-lg-3`}>
                    <label>Effect</label>
                </div>
                <div className={`col-md-3 col-lg-1`}>
                    <label>Value</label>
                </div>
                {item.itemType.isCraftItem && (
                    <>
                        <div className={`col-md-1 col-lg-05`}>
                            <label>IP</label>
                        </div>
                        <div className={`col-md-2 col-lg-105`}>
                            <label>Price</label>
                        </div>
                        <div className={`col-md-9 col-lg-4`}>
                            <label>Gem</label>
                        </div>
                    </>
                )}
            </div>
            {item.options.map((option: Option, index: number) => (
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

const OptionView: React.FC<{
    item: Item,
    option: Option
    craft: boolean
}> = ({item, option, craft}): React.ReactElement => {
    const itemManager: ItemManager = useStore((state: Store) => state.itemManager)
    const realmClass: RealmClass = useStore((state: Store) => state.realmClass)
    const [effectTypes, setEffectTypes] = useState<EffectType[]>([])
    const [effects, setEffects] = useState<Effect[]>([])
    const [effectValues, setEffectValues] = useState<EffectValue[]>([])

    useEffect((): void => {
        setEffectTypes(itemManager.findEffectTypes(item, option.bonus))
        setEffects(itemManager.findEffects(option))
        setEffectValues(itemManager.findEffectValues(option))
    }, [item, realmClass])

    return (
        <div className={`row`}>
            <div className={`col-md-3 col-lg-2 ${option.color}`}>
                <select
                    value={effectTypes.indexOf(option.effectType)}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                        option.effectType = effectTypes[Number(e.target.value)]
                        itemManager.changeType(option)
                    }}
                >
                    {effectTypes.map((effectType: EffectType, index: number) => (
                        <option key={effectType.name} value={index}>
                            {effectType.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className={`col-md-6 col-lg-3 ${option.color}`}>
                <select
                    value={effects.indexOf(option.effect)}
                    disabled={option.effectType.default}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                        option.effect = effects[Number(e.target.value)]
                        itemManager.changeEffect(option)
                    }}
                >
                    {effects.map((effect: Effect, index: number) => (
                        <option key={effect.name} value={index} disabled={effect.name === ''}>
                            {effect.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className={`col-md-3 col-lg-1 ${option.color}`}>
                {craft && (
                    <select
                        value={effectValues.indexOf(option.effectValue)}
                        disabled={option.effectType.default}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                            itemManager.changeSelectValue(option, e.target.value)
                        }}
                    >
                        {effectValues.map((value: EffectValue, index: number) => (
                            <option key={value.value} value={index}>
                                {value.value}
                            </option>
                        ))}
                    </select>
                )}
                {!craft && (
                    <input
                        type={`number`}
                        value={option.effectValue.value}
                        min={1}
                        disabled={option.effectType.default}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                            itemManager.changeInputValue(option, e.target.value)
                        }}
                    />
                )}
            </div>
            {craft && (
                <>
                    <div className={`col-md-1 col-lg-05`}>
                        {option.effectValue.imbue !== 0 ? option.effectValue.imbue : ''}
                    </div>
                    <div className={`col-md-2 col-lg-105`}>
                        {option.effectValue.price > 0 && (
                            <Price price={option.effectValue.price}/>
                        )}
                    </div>
                    <div className={`col-md-9 col-lg-4 ellipsis`}>
                        <Gem option={option}/>
                    </div>
                </>
            )}
        </div>
    )
}

const Gem: React.FC<{
    option: Option
}> = ({option}) => {
    const split: string[] = option.effectValue.gem.split(' ')

    return (
        <>
            <span className={`gem-type`}>
                {split.shift()}
            </span>{' '}
            {split.join(' ')}
        </>
    )
}