import {Effect, EffectTypeCode} from "./effects";

import {Weapon} from "./weapon";

import {Race} from "../data/race";

export type RealmName = 'Albion' | 'Hibernia' | 'Midgard'

export type RealmClassName =
    'Armsman'
    | 'Cabalist'
    | 'Cleric'
    | 'Friar'
    | 'Heretic'
    | 'Infiltrator'
    | 'Mauler'
    | 'Mercenary'
    | 'Minstrel'
    | 'Necromancer'
    | 'Paladin'
    | 'Reaver'
    | 'Scout'
    | 'Sorcerer'
    | 'Theurgist'
    | 'Wizard'
    | 'Animist'
    | 'Bainshee'
    | 'Bard'
    | 'Blademaster'
    | 'Champion'
    | 'Druid'
    | 'Eldritch'
    | 'Enchanter'
    | 'Hero'
    | 'Mentalist'
    | 'Nightshade'
    | 'Ranger'
    | 'Valewalker'
    | 'Vampiir'
    | 'Warden'
    | 'Berserker'
    | 'Bonedancer'
    | 'Healer'
    | 'Hunter'
    | 'Runemaster'
    | 'Savage'
    | 'Shadowblade'
    | 'Shaman'
    | 'Skald'
    | 'Spiritmaster'
    | 'Thane'
    | 'Valkyrie'
    | 'Warrior'

export type Realm = {
    name: RealmName
    realmClasses: RealmClass[]
}

export type RealmClass = {
    name: RealmClassName
    defaultWeapons: Weapon
    races: Race[]
    effects: Partial<Record<EffectTypeCode, Effect[]>>
}