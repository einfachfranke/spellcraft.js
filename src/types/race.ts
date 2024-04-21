import {EffectCode} from "./effects";

export type RaceCode =
    'none'
    | 'avalonian'
    | 'briton'
    | 'halfOgre'
    | 'highlander'
    | 'inconnu'
    | 'saracen'
    | 'shar'
    | 'celt'
    | 'elf'
    | 'firbolg'
    | 'lurikeen'
    | 'sylvan'
    | 'dwarf'
    | 'frostalf'
    | 'kobold'
    | 'troll'
    | 'norseman'
    | 'valkyn'

export type Race = {
    name: string,
    resists: Partial<Record<EffectCode, number>>
}