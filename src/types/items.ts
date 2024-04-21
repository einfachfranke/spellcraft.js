import {Quality} from "./quality";
import {Color} from "../data/color";
import {Effect, EffectType, EffectValue} from "./effects";
import {ItemLevel} from "./levels";

export type ItemCode =
    'chest'
    | 'head'
    | 'arms'
    | 'hands'
    | 'legs'
    | 'feet'
    | 'rightHand'
    | 'leftHand'
    | 'twoHand'
    | 'ranged'
    | 'neck'
    | 'mythical'
    | 'cloak'
    | 'jewel'
    | 'belt'
    | 'leftRing'
    | 'rightRing'
    | 'leftWrist'
    | 'rightWrist'

export type ItemTypeCode = 'craft' | 'drop' | 'rog'

export type ItemType = {
    name: string
    code: string
    value: string
    isCraftItem: boolean
}

export type Item = {
    name: string
    code: ItemCode
    craft: boolean
    weapon: boolean
    level: ItemLevel
    quality: Quality
    utility: number
    itemType: ItemType
    itemName: string
    color: Color
    imbue: Imbue
    options: Option[]
    bonusOption: Option | null
}

export type Imbue = {
    value: number
    max: number
}

export type Option = {
    bonus: boolean
    color: Color
    showHint: boolean
    effectType: EffectType
    effect: Effect
    effectValue: EffectValue
}