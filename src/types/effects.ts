import {RealmClassName, RealmName} from './realm';
import {ItemCode} from "./items";

export type EffectTypeCode =
    'unused'
    | 'stats'
    | 'statCaps'
    | 'mythStatCaps'
    | 'resists'
    | 'resistCaps'
    | 'skills'
    | 'focus'
    | 'bonus'

export type EffectTypeMythStatCode =
    'strength'
    | 'constitution'
    | 'dexterity'
    | 'quickness'
    | 'intelligence'
    | 'piety'
    | 'charisma'
    | 'empathy'
    | 'acuity'

export type EffectTypeStatCode = EffectTypeMythStatCode
    | 'hits'
    | 'power'

type EffectTypeResistCode =
    'crush'
    | 'slash'
    | 'thrust'
    | 'heat'
    | 'cold'
    | 'matter'
    | 'body'
    | 'spirit'
    | 'energy'

type EffectTypeSkillCode =
    'twoHanded'
    | 'polearm'
    | 'dualWield'
    | 'smite'
    | 'enhancements'
    | 'rejuvenation'
    | 'chants'
    | 'instruments'
    | 'earthMagic'
    | 'coldMagic'
    | 'fireMagic'
    | 'windMagic'
    | 'bodyMagic'
    | 'matterMagic'
    | 'spiritMagic'
    | 'mindMagic'
    | 'flexible'
    | 'deathsight'
    | 'painworking'
    | 'deathServant'
    | 'soulrending'
    | 'archeryAlbion'
    | 'allMeleeAlbion'
    | 'allMagicAlbion'
    | 'crossbow'
    | 'blades'
    | 'blunt'
    | 'piercing'
    | 'largeWeapons'
    | 'celticSpear'
    | 'celticDual'
    | 'nurture'
    | 'regrowth'
    | 'nature'
    | 'music'
    | 'valor'
    | 'lightMagic'
    | 'manaMagic'
    | 'enchantments'
    | 'voidMagic'
    | 'mentalism'
    | 'scythe'
    | 'arborealPath'
    | 'creepingPath'
    | 'verdantPath'
    | 'archeryHibernia'
    | 'allMeleeHibernia'
    | 'allMagicHibernia'
    | 'sword'
    | 'hammer'
    | 'axe'
    | 'spear'
    | 'leftAxe'
    | 'beastcraft'
    | 'battlesongs'
    | 'stormcalling'
    | 'darkness'
    | 'suppression'
    | 'runecarving'
    | 'summoning'
    | 'mending'
    | 'augmentation'
    | 'subterranean'
    | 'handToHand'
    | 'boneArmy'
    | 'odinsWill'
    | 'archeryMidgard'
    | 'thrownWeapons'
    | 'allMeleeMidgard'
    | 'allMagicMidgard'
    | 'pacification'
    | 'spectralGuard'
    | 'phantasmalWail'
    | 'etherealShriek'
    | 'parry'
    | 'shield'
    | 'staff'
    | 'stealth'
    | 'envenom'
    | 'criticalStrike'
    | 'slashing'
    | 'crushing'
    | 'thrusting'

type EffectTypeFocusCode =
    'earthMagic'
    | 'coldMagic'
    | 'fireMagic'
    | 'windMagic'
    | 'bodyMagic'
    | 'matterMagic'
    | 'spiritMagic'
    | 'mindMagic'
    | 'deathsight'
    | 'painworking'
    | 'deathservant'
    | 'arboreal'
    | 'creeping'
    | 'enchantments'
    | 'light'
    | 'mana'
    | 'mentalism'
    | 'verdant'
    | 'voidFocus'
    | 'bonedancing'
    | 'darkness'
    | 'runecarving'
    | 'summoning'
    | 'suppression'
    | 'allFocus'
    | 'spectralGuard'
    | 'phantasmalWail'
    | 'etherealShriek'

type EffectTypeBonusCode =
    'armorFactor'
    | 'armorAbsorption'
    | 'blockChance'
    | 'bonusCoin'
    | 'enduranceRegeneration'
    | 'evadeChance'
    | 'fatigue'
    | 'healthRegeneration'
    | 'powerPool'
    | 'debuffEffectivness'
    | 'buffEffectivness'
    | 'healingEffectivness'
    | 'spellDuration'
    | 'castingSpeed'
    | 'spellRange'
    | 'spellDamage'
    | 'styleDamage'
    | 'meleeDamage'
    | 'meleeCombatSpeed'
    | 'resistPierce'
    | 'arcaneSyphon'
    | 'spellLevel'
    | 'realmPoints'
    | 'parryChance'
    | 'powerRegeneration'
    | 'dps'
    | 'mesmerizeReduction'
    | 'stunReduction'
    | 'snareReduction'
    | 'safeFall'
    | 'encumberance'

export type EffectCode =
    '00'
    | 'sa'
    | 'sb'
    | 'sc'
    | 'sd'
    | 'si'
    | 'sg'
    | 'sh'
    | 'se'
    | 'sf'
    | 'sj'
    | 'sk'
    | 'sl'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sp'
    | 'sq'
    | 'sr'
    | 'ss'
    | 'sv'
    | 'st'
    | 'su'
    | 'ma'
    | 'mb'
    | 'mc'
    | 'md'
    | 'me'
    | 'mf'
    | 'mg'
    | 'mh'
    | 'mi'
    | 'ra'
    | 'rb'
    | 'rc'
    | 'rd'
    | 're'
    | 'rf'
    | 'rg'
    | 'rh'
    | 'ri'
    | 'rj'
    | 'rk'
    | 'rl'
    | 'rm'
    | 'rn'
    | 'ro'
    | 'rp'
    | 'rq'
    | 'rr'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '23'
    | '24'
    | '25'
    | '26'
    | '27'
    | '28'
    | '29'
    | '30'
    | '31'
    | '32'
    | '33'
    | '35'
    | '36'
    | '37'
    | '38'
    | '39'
    | '40'
    | '41'
    | '42'
    | '43'
    | '44'
    | '45'
    | '46'
    | '47'
    | '48'
    | '49'
    | '50'
    | '51'
    | '52'
    | '53'
    | '54'
    | '55'
    | '56'
    | '57'
    | '58'
    | '60'
    | '61'
    | '62'
    | '63'
    | '64'
    | '65'
    | '66'
    | '67'
    | '68'
    | '69'
    | '70'
    | '71'
    | '72'
    | '73'
    | '74'
    | '75'
    | '76'
    | '77'
    | '78'
    | '79'
    | '80'
    | '81'
    | '82'
    | '83'
    | '84'
    | '85'
    | '01'
    | '02'
    | '03'
    | '04'
    | '05'
    | '06'
    | '07'
    | '08'
    | '09'
    | 'fa'
    | 'fb'
    | 'fc'
    | 'fd'
    | 'fe'
    | 'ff'
    | 'fg'
    | 'fh'
    | 'fi'
    | 'fj'
    | 'fk'
    | 'fl'
    | 'fm'
    | 'fn'
    | 'fo'
    | 'fp'
    | 'fq'
    | 'fr'
    | 'fs'
    | 'ft'
    | 'fu'
    | 'fv'
    | 'fw'
    | 'fx'
    | 'fy'
    | 'fz'
    | 'ga'
    | 'gb'
    | 'ba'
    | 'bb'
    | 'bc'
    | 'bd'
    | 'be'
    | 'bf'
    | 'bg'
    | 'bh'
    | 'bi'
    | 'bj'
    | 'bk'
    | 'bl'
    | 'bm'
    | 'bn'
    | 'bo'
    | 'bp'
    | 'bq'
    | 'br'
    | 'bs'
    | 'bt'
    | 'bu'
    | 'bv'
    | 'bw'
    | 'bx'
    | 'by'
    | 'bz'
    | 'ca'
    | 'cb'
    | 'cc'
    | 'cd'
    | 'ce'


export type EffectTypes = {
    unused: EffectTypeUnused
    stats: EffectTypeStats
    statCaps: EffectTypeStats
    mythStatCaps: EffectTypeMythStatCaps
    resists: EffectTypeResists
    resistCaps: EffectTypeResists
    skills: EffectTypeSkills
    focus: EffectTypeFocus
    bonus: EffectTypeBonus
}

export type Type = {
    name: string
    code: EffectTypeCode
    column: 1 | 2 | 3 | 4
    default: boolean
    craft: boolean
    onlyOnItem: ItemCode[]
}

export type EffectType = Type & {
    effects: Record<string, Effect>
}

type EffectTypeUnused = Type & {
    effects: Record<'unused', Effect>
}

type EffectTypeStats = Type & {
    effects: Record<EffectTypeStatCode, Effect>
}

type EffectTypeMythStatCaps = Type & {
    effects: Record<EffectTypeMythStatCode, Effect>
}

type EffectTypeResists = Type & {
    effects: Record<EffectTypeResistCode, Effect>
}

type EffectTypeSkills = Type & {
    effects: Record<EffectTypeSkillCode, Effect>
}

type EffectTypeFocus = Type & {
    effects: Record<EffectTypeFocusCode, Effect>
}

type EffectTypeBonus = Type & {
    effects: Record<EffectTypeBonusCode, Effect>
}

export type Effect = {
    name: string
    code: EffectCode
    craft: boolean
    hideIfNoValue: boolean
    utility: number
    maxValue:  0 | 11 | 10 | 25 | 26 | 50 | 75 | 200
    realm: RealmName[]
    increase?: Increase
    values: Record<string, EffectValue>
    type: EffectTypeCode
}

export type Increase = {
    type: IncreaseType
    realm: Record<RealmName, Effect[]>
    realmClass?: Record<RealmClassName, Effect>
}

export enum IncreaseType {
    value,
    cap,
    acuity,
    acuityCap,
    mythCap,
    mythAcuityCap
}

export type EffectValue = {
    value: number
    imbue: number
    gem: string
    price: number
}