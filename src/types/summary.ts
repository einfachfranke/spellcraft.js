import {Effect, EffectTypeCode} from "./effects";
import {Color} from "../data/color";

export type SummaryData = Record<EffectTypeCode, SummaryItem[]>

export type SummaryItem = {
    name: string
    effects: Effect[]
    color: Color
    removeOnZero: boolean
    value: number
    maxValue: number
    percent: number
    summaryDetail: SummaryDetail
}

export type SummaryDetail = {
    effect: Effect,
    notFound: boolean
    error: boolean
    value: number
    maxValue: number
    cap: number
    maxCap: number
    mythCap: number
    maxMyth: number
}

export type TemplateInfo = {
    utility: number,
    useless: number,
    price: number
}