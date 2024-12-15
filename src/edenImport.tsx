import {effectTypes} from "./data/effects";
import {Item, ItemCode, Option} from "./types/items";
import {itemType} from "./data/items";
import React, {ChangeEvent, useState} from "react";
import {ItemManager} from "./store/ItemManager";
import {useStore} from "./store/store";
import {Store} from "./types/store";
import {Effect} from "./types/effects";
import {Color} from "./data/color";
import {Realm, RealmClass, RealmClassName, RealmName} from "./types/realm";

type EffectMapping = {
    name: string,
    Albion: Effect | undefined,
    Hibernia: Effect | undefined,
    Midgard: Effect | undefined
}
export const edenEffectMapping: Record<string, EffectMapping> = {
    "1": {
        name: "Stat: Strength",
        Albion: effectTypes.stats.effects.strength,
        Hibernia: effectTypes.stats.effects.strength,
        Midgard: effectTypes.stats.effects.strength
    },
    "2": {
        name: "Stat: Dexterity",
        Albion: effectTypes.stats.effects.dexterity,
        Hibernia: effectTypes.stats.effects.dexterity,
        Midgard: effectTypes.stats.effects.dexterity
    },
    "3": {
        name: "Stat: Constitution",
        Albion: effectTypes.stats.effects.constitution,
        Hibernia: effectTypes.stats.effects.constitution,
        Midgard: effectTypes.stats.effects.constitution
    },
    "4": {
        name: "Stat: Quickness",
        Albion: effectTypes.stats.effects.quickness,
        Hibernia: effectTypes.stats.effects.quickness,
        Midgard: effectTypes.stats.effects.quickness
    },
    "5": {
        name: "Stat: Intelligence",
        Albion: effectTypes.stats.effects.intelligence,
        Hibernia: effectTypes.stats.effects.intelligence,
        Midgard: effectTypes.stats.effects.intelligence
    },
    "6": {
        name: "Stat: Piety",
        Albion: effectTypes.stats.effects.piety,
        Hibernia: effectTypes.stats.effects.piety,
        Midgard: effectTypes.stats.effects.piety
    },
    "7": {
        name: "Stat: Empathy",
        Albion: effectTypes.stats.effects.empathy,
        Hibernia: effectTypes.stats.effects.empathy,
        Midgard: effectTypes.stats.effects.empathy
    },
    "8": {
        name: "Stat: Charisma",
        Albion: effectTypes.stats.effects.charisma,
        Hibernia: effectTypes.stats.effects.charisma,
        Midgard: effectTypes.stats.effects.charisma
    },
    "156": {
        name: "Stat: Acuity",
        Albion: effectTypes.stats.effects.acuity,
        Hibernia: effectTypes.stats.effects.acuity,
        Midgard: effectTypes.stats.effects.acuity
    },
    "10": {
        name: "Stat: Health",
        Albion: effectTypes.stats.effects.hits,
        Hibernia: effectTypes.stats.effects.hits,
        Midgard: effectTypes.stats.effects.hits
    },
    "9": {
        name: "Stat: Mana",
        Albion: effectTypes.stats.effects.power,
        Hibernia: effectTypes.stats.effects.power,
        Midgard: effectTypes.stats.effects.power
    },
    "11": {
        name: "Resist: Body",
        Albion: effectTypes.resists.effects.body,
        Hibernia: effectTypes.resists.effects.body,
        Midgard: effectTypes.resists.effects.body
    },
    "12": {
        name: "Resist: Cold",
        Albion: effectTypes.resists.effects.cold,
        Hibernia: effectTypes.resists.effects.cold,
        Midgard: effectTypes.resists.effects.cold
    },
    "13": {
        name: "Resist: Crush",
        Albion: effectTypes.resists.effects.crush,
        Hibernia: effectTypes.resists.effects.crush,
        Midgard: effectTypes.resists.effects.crush
    },
    "14": {
        name: "Resist: Energy",
        Albion: effectTypes.resists.effects.energy,
        Hibernia: effectTypes.resists.effects.energy,
        Midgard: effectTypes.resists.effects.energy
    },
    "15": {
        name: "Resist: Heat",
        Albion: effectTypes.resists.effects.heat,
        Hibernia: effectTypes.resists.effects.heat,
        Midgard: effectTypes.resists.effects.heat
    },
    "16": {
        name: "Resist: Matter",
        Albion: effectTypes.resists.effects.matter,
        Hibernia: effectTypes.resists.effects.matter,
        Midgard: effectTypes.resists.effects.matter
    },
    "17": {
        name: "Resist: Slash",
        Albion: effectTypes.resists.effects.slash,
        Hibernia: effectTypes.resists.effects.slash,
        Midgard: effectTypes.resists.effects.slash
    },
    "18": {
        name: "Resist: Spirit",
        Albion: effectTypes.resists.effects.spirit,
        Hibernia: effectTypes.resists.effects.spirit,
        Midgard: effectTypes.resists.effects.spirit
    },
    "19": {
        name: "Resist: Thrust",
        Albion: effectTypes.resists.effects.thrust,
        Hibernia: effectTypes.resists.effects.thrust,
        Midgard: effectTypes.resists.effects.thrust
    },
    "116": {
        name: "Resist: Essence",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "21": {
        name: "Magic: Body",
        Albion: effectTypes.skills.effects.bodyMagic,
        Hibernia: undefined,
        Midgard: undefined
    },
    "22": {
        name: "Magic: Chants",
        Albion: effectTypes.skills.effects.chants,
        Hibernia: undefined,
        Midgard: undefined
    },
    "29": {
        name: "Magic: Earth",
        Albion: effectTypes.skills.effects.earthMagic,
        Hibernia: undefined,
        Midgard: undefined
    },
    "30": {
        name: "Magic: Enhancement",
        Albion: effectTypes.skills.effects.enhancements,
        Hibernia: undefined,
        Midgard: undefined
    },
    "31": {
        name: "Magic: Envenom",
        Albion: effectTypes.skills.effects.envenom,
        Hibernia: effectTypes.skills.effects.envenom,
        Midgard: effectTypes.skills.effects.envenom
    },
    "32": {
        name: "Magic: Fire",
        Albion: effectTypes.skills.effects.fireMagic,
        Hibernia: undefined,
        Midgard: undefined
    },
    "34": {
        name: "Magic: Cold",
        Albion: effectTypes.skills.effects.coldMagic,
        Hibernia: undefined,
        Midgard: undefined
    },
    "35": {
        name: "Magic: Instruments",
        Albion: effectTypes.skills.effects.instruments,
        Hibernia: effectTypes.skills.effects.instruments,
        Midgard: effectTypes.skills.effects.instruments
    },
    "37": {
        name: "Magic: Matter",
        Albion: effectTypes.skills.effects.matterMagic,
        Hibernia: undefined,
        Midgard: undefined
    },
    "38": {
        name: "Magic: Mind",
        Albion: effectTypes.skills.effects.mindMagic,
        Hibernia: undefined,
        Midgard: undefined
    },
    "39": {
        name: "Magic: Pain Working",
        Albion: effectTypes.skills.effects.painworking,
        Hibernia: undefined,
        Midgard: undefined
    },
    "26": {
        name: "Magic: Death Servant",
        Albion: effectTypes.skills.effects.deathServant,
        Hibernia: undefined,
        Midgard: undefined
    },
    "27": {
        name: "Magic: Deathsight",
        Albion: effectTypes.skills.effects.deathsight,
        Hibernia: undefined,
        Midgard: undefined
    },
    "57": {
        name: "Magic: Mending",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.mending
    },
    "58": {
        name: "Magic: Augmentation",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.augmentation
    },
    "42": {
        name: "Magic: Rejuvenation",
        Albion: effectTypes.skills.effects.rejuvenation,
        Hibernia: undefined,
        Midgard: undefined
    },
    "45": {
        name: "Magic: Smiting",
        Albion: effectTypes.skills.effects.smite,
        Hibernia: undefined,
        Midgard: undefined
    },
    "46": {
        name: "Magic: Soul Rending",
        Albion: effectTypes.skills.effects.soulrending,
        Hibernia: undefined,
        Midgard: undefined
    },
    "47": {
        name: "Magic: Spirit",
        Albion: effectTypes.skills.effects.spiritMagic,
        Hibernia: undefined,
        Midgard: undefined
    },
    "51": {
        name: "Magic: Wind",
        Albion: effectTypes.skills.effects.windMagic,
        Hibernia: undefined,
        Midgard: undefined
    },
    "60": {
        name: "Magic: Darkness",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.darkness
    },
    "61": {
        name: "Magic: Suppression",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.suppression
    },
    "62": {
        name: "Magic: Runecarving",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.runecarving
    },
    "63": {
        name: "Magic: Stormcalling",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.stormcalling
    },
    "64": {
        name: "Magic: Beastcraft",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.beastcraft
    },
    "65": {
        name: "Magic: Light",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.lightMagic,
        Midgard: undefined
    },
    "66": {
        name: "Magic: Void",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.voidMagic,
        Midgard: undefined
    },
    "67": {
        name: "Magic: Mana",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.manaMagic,
        Midgard: undefined
    },
    "69": {
        name: "Magic: Battlesongs",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.battlesongs
    },
    "70": {
        name: "Magic: Enchantments",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.enchantments,
        Midgard: undefined
    },
    "76": {
        name: "Magic: Mentalism",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.mentalism,
        Midgard: undefined
    },
    "77": {
        name: "Magic: Regrowth",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.regrowth,
        Midgard: undefined
    },
    "78": {
        name: "Magic: Nurture",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.nurture,
        Midgard: undefined
    },
    "79": {
        name: "Magic: Nature",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.nature,
        Midgard: undefined
    },
    "80": {
        name: "Magic: Music",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.music,
        Midgard: undefined
    },
    "84": {
        name: "Magic: Valor",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.valor,
        Midgard: undefined
    },
    "85": {
        name: "Magic: Subterranean",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.subterranean
    },
    "86": {
        name: "Magic: Bone Army",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.boneArmy
    },
    "87": {
        name: "Magic: Verdant",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.verdantPath,
        Midgard: undefined
    },
    "88": {
        name: "Magic: Creeping",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.creepingPath,
        Midgard: undefined
    },
    "89": {
        name: "Magic: Arboreal",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.arborealPath,
        Midgard: undefined
    },
    "94": {
        name: "Magic: Pacification",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.pacification
    },
    "95": {
        name: "Magic: Savagery",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "96": {
        name: "Magic: Nightshade",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "97": {
        name: "Magic: Pathfinding",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "98": {
        name: "Magic: Summoning",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.summoning
    },
    "49": {
        name: "Magic: Stealth",
        Albion: effectTypes.skills.effects.stealth,
        Hibernia: effectTypes.skills.effects.stealth,
        Midgard: effectTypes.skills.effects.stealth
    },
    "20": {
        name: "Melee: Two Handed",
        Albion: effectTypes.skills.effects.twoHanded,
        Hibernia: undefined,
        Midgard: undefined
    },
    "23": {
        name: "Melee: Critical Strike",
        Albion: effectTypes.skills.effects.criticalStrike,
        Hibernia: effectTypes.skills.effects.criticalStrike,
        Midgard: effectTypes.skills.effects.criticalStrike
    },
    "24": {
        name: "Melee: Crossbow",
        Albion: effectTypes.skills.effects.crossbow,
        Hibernia: undefined,
        Midgard: undefined
    },
    "25": {
        name: "Melee: Crushing",
        Albion: effectTypes.skills.effects.crushing,
        Hibernia: undefined,
        Midgard: undefined
    },
    "28": {
        name: "Melee: Dual Wield",
        Albion: effectTypes.skills.effects.dualWield,
        Hibernia: undefined,
        Midgard: undefined
    },
    "33": {
        name: "Melee: Flexible Weapon",
        Albion: effectTypes.skills.effects.flexible,
        Hibernia: undefined,
        Midgard: undefined
    },
    "36": {
        name: "Melee: Longbow",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "40": {
        name: "Melee: Parry",
        Albion: effectTypes.skills.effects.parry,
        Hibernia: effectTypes.skills.effects.parry,
        Midgard: effectTypes.skills.effects.parry
    },
    "41": {
        name: "Melee: Polearm",
        Albion: effectTypes.skills.effects.polearm,
        Hibernia: undefined,
        Midgard: undefined
    },
    "43": {
        name: "Melee: Shield",
        Albion: effectTypes.skills.effects.shield,
        Hibernia: effectTypes.skills.effects.shield,
        Midgard: effectTypes.skills.effects.shield
    },
    "44": {
        name: "Melee: Slashing",
        Albion: effectTypes.skills.effects.slashing,
        Hibernia: undefined,
        Midgard: undefined
    },
    "48": {
        name: "Melee: Staff",
        Albion: effectTypes.skills.effects.staff,
        Hibernia: undefined,
        Midgard: undefined
    },
    "50": {
        name: "Melee: Thrusting",
        Albion: effectTypes.skills.effects.thrusting,
        Hibernia: undefined,
        Midgard: undefined
    },
    "52": {
        name: "Melee: Sword",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.sword
    },
    "53": {
        name: "Melee: Hammer",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.hammer
    },
    "54": {
        name: "Melee: Axe",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.axe
    },
    "55": {
        name: "Melee: Left Axe",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.leftAxe
    },
    "56": {
        name: "Melee: Spear",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.spear
    },
    "72": {
        name: "Melee: Blade",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.blades,
        Midgard: undefined
    },
    "73": {
        name: "Melee: Blunt",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.blunt,
        Midgard: undefined
    },
    "74": {
        name: "Melee: Piercing",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.piercing,
        Midgard: undefined
    },
    "75": {
        name: "Melee: Large Weapon",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.largeWeapons,
        Midgard: undefined
    },
    "81": {
        name: "Melee: Celtic Dual",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.celticDual,
        Midgard: undefined
    },
    "82": {
        name: "Melee: Celtic Spear",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.celticSpear,
        Midgard: undefined
    },
    "83": {
        name: "Melee: Recurved Bow",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "90": {
        name: "Melee: Scythe",
        Albion: undefined,
        Hibernia: effectTypes.skills.effects.scythe,
        Midgard: undefined
    },
    "91": {
        name: "Melee: Thrown Weapon",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.thrownWeapons
    },
    "92": {
        name: "Melee: Hand to Hand",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.skills.effects.handToHand
    },
    "93": {
        name: "Melee: Short Bow",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "115": {
        name: "Melee: Archery",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "120": {
        name: "Focus: Darkness",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: effectTypes.focus.effects.darkness
    },
    "148": {
        name: "Stat: Armor Factor",
        Albion: effectTypes.bonus.effects.armorFactor,
        Hibernia: effectTypes.bonus.effects.armorFactor,
        Midgard: effectTypes.bonus.effects.armorFactor
    },
    "149": {
        name: "ToA: Armor Absorption",
        Albion: effectTypes.bonus.effects.armorAbsorption,
        Hibernia: effectTypes.bonus.effects.armorAbsorption,
        Midgard: effectTypes.bonus.effects.armorAbsorption
    },
    "150": {
        name: "ToA: Health Regen",
        Albion: effectTypes.bonus.effects.healthRegeneration,
        Hibernia: effectTypes.bonus.effects.healthRegeneration,
        Midgard: effectTypes.bonus.effects.healthRegeneration
    },
    "151": {
        name: "ToA: Power Regen",
        Albion: effectTypes.bonus.effects.powerRegeneration,
        Hibernia: effectTypes.bonus.effects.powerRegeneration,
        Midgard: effectTypes.bonus.effects.powerRegeneration
    },
    "152": {
        name: "ToA: Endurance Regen",
        Albion: effectTypes.bonus.effects.enduranceRegeneration,
        Hibernia: effectTypes.bonus.effects.enduranceRegeneration,
        Midgard: effectTypes.bonus.effects.enduranceRegeneration
    },
    "153": {
        name: "ToA: Spell Range",
        Albion: effectTypes.bonus.effects.spellRange,
        Hibernia: effectTypes.bonus.effects.spellRange,
        Midgard: effectTypes.bonus.effects.spellRange
    },
    "155": {
        name: "ToA: Melee Speed",
        Albion: effectTypes.bonus.effects.meleeCombatSpeed,
        Hibernia: effectTypes.bonus.effects.meleeCombatSpeed,
        Midgard: effectTypes.bonus.effects.meleeCombatSpeed
    },
    "163": {
        name: "Magic: All Skills",
        Albion: effectTypes.skills.effects.allMagicAlbion,
        Hibernia: effectTypes.skills.effects.allMagicHibernia,
        Midgard: effectTypes.skills.effects.allMagicMidgard
    },
    "164": {
        name: "Melee: All Skills",
        Albion: effectTypes.skills.effects.allMeleeAlbion,
        Hibernia: effectTypes.skills.effects.allMeleeHibernia,
        Midgard: effectTypes.skills.effects.allMeleeMidgard
    },
    "165": {
        name: "ToA: All Focus Levels",
        Albion: effectTypes.focus.effects.allFocus,
        Hibernia: effectTypes.focus.effects.allFocus,
        Midgard: effectTypes.focus.effects.allFocus
    },
    "167": {
        name: "ToA: All Dual Wielding Skills",
        Albion: effectTypes.skills.effects.dualWield,
        Hibernia: effectTypes.skills.effects.celticDual,
        Midgard: effectTypes.skills.effects.leftAxe
    },
    "168": {
        name: "ToA: All Archery Skills",
        Albion: effectTypes.skills.effects.archeryAlbion,
        Hibernia: effectTypes.skills.effects.archeryHibernia,
        Midgard: effectTypes.skills.effects.archeryMidgard,
    },
    "169": {
        name: "Mythical: Evade Chance",
        Albion: effectTypes.bonus.effects.evadeChance,
        Hibernia: effectTypes.bonus.effects.evadeChance,
        Midgard: effectTypes.bonus.effects.evadeChance
    },
    "170": {
        name: "Mythical: Block Chance",
        Albion: effectTypes.bonus.effects.blockChance,
        Hibernia: effectTypes.bonus.effects.blockChance,
        Midgard: effectTypes.bonus.effects.blockChance
    },
    "171": {
        name: "Mythical: Parry Chance",
        Albion: effectTypes.bonus.effects.parryChance,
        Hibernia: effectTypes.bonus.effects.parryChance,
        Midgard: effectTypes.bonus.effects.parryChance
    },
    "172": {
        name: "Mythical: Fatigue Consumption",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "173": {
        name: "ToA: Melee Damage",
        Albion: effectTypes.bonus.effects.meleeDamage,
        Hibernia: effectTypes.bonus.effects.meleeDamage,
        Midgard: effectTypes.bonus.effects.meleeDamage
    },
    "174": {
        name: "ToA: Ranged Damage",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "175": {
        name: "ToA: Fumble Chance",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "176": {
        name: "Mythical: Mesmerize Reduction",
        Albion: effectTypes.bonus.effects.mesmerizeReduction,
        Hibernia: effectTypes.bonus.effects.mesmerizeReduction,
        Midgard: effectTypes.bonus.effects.mesmerizeReduction
    },
    "177": {
        name: "Mythical: Stun Reduction",
        Albion: effectTypes.bonus.effects.stunReduction,
        Hibernia: effectTypes.bonus.effects.stunReduction,
        Midgard: effectTypes.bonus.effects.stunReduction
    },
    "178": {
        name: "Mythical: Snare Reduction",
        Albion: effectTypes.bonus.effects.snareReduction,
        Hibernia: effectTypes.bonus.effects.snareReduction,
        Midgard: effectTypes.bonus.effects.snareReduction
    },
    "182": {
        name: "Mythical: Strength Cap",
        Albion: effectTypes.mythStatCaps.effects.strength,
        Hibernia: effectTypes.mythStatCaps.effects.strength,
        Midgard: effectTypes.mythStatCaps.effects.strength
    },
    "183": {
        name: "Mythical: Constitution Cap",
        Albion: effectTypes.mythStatCaps.effects.constitution,
        Hibernia: effectTypes.mythStatCaps.effects.constitution,
        Midgard: effectTypes.mythStatCaps.effects.constitution
    },
    "184": {
        name: "Mythical: Dexterity Cap",
        Albion: effectTypes.mythStatCaps.effects.dexterity,
        Hibernia: effectTypes.mythStatCaps.effects.dexterity,
        Midgard: effectTypes.mythStatCaps.effects.dexterity
    },
    "185": {
        name: "Mythical: Quickness Cap",
        Albion: effectTypes.mythStatCaps.effects.quickness,
        Hibernia: effectTypes.mythStatCaps.effects.quickness,
        Midgard: effectTypes.mythStatCaps.effects.quickness
    },
    "186": {
        name: "Mythical: Acuity Cap",
        Albion: effectTypes.mythStatCaps.effects.acuity,
        Hibernia: effectTypes.mythStatCaps.effects.acuity,
        Midgard: effectTypes.mythStatCaps.effects.acuity
    },
    "188": {
        name: "ToA: Archery Speed",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "190": {
        name: "ToA: Buff Effectiveness",
        Albion: effectTypes.bonus.effects.buffEffectivness,
        Hibernia: effectTypes.bonus.effects.buffEffectivness,
        Midgard: effectTypes.bonus.effects.buffEffectivness
    },
    "191": {
        name: "ToA: Casting Speed",
        Albion: effectTypes.bonus.effects.castingSpeed,
        Hibernia: effectTypes.bonus.effects.castingSpeed,
        Midgard: effectTypes.bonus.effects.castingSpeed
    },
    "193": {
        name: "ToA: Debuff Effectiveness",
        Albion: effectTypes.bonus.effects.debuffEffectivness,
        Hibernia: effectTypes.bonus.effects.debuffEffectivness,
        Midgard: effectTypes.bonus.effects.debuffEffectivness
    },
    "194": {
        name: "ToA: Fatigue",
        Albion: effectTypes.bonus.effects.fatigue,
        Hibernia: effectTypes.bonus.effects.fatigue,
        Midgard: effectTypes.bonus.effects.fatigue
    },
    "195": {
        name: "ToA: Healing Effectiveness",
        Albion: effectTypes.bonus.effects.healingEffectivness,
        Hibernia: effectTypes.bonus.effects.healingEffectivness,
        Midgard: effectTypes.bonus.effects.healingEffectivness
    },
    "196": {
        name: "ToA: Power Pool",
        Albion: effectTypes.bonus.effects.powerPool,
        Hibernia: effectTypes.bonus.effects.powerPool,
        Midgard: effectTypes.bonus.effects.powerPool
    },
    "197": {
        name: "ToA: Resist Pierce",
        Albion: effectTypes.bonus.effects.resistPierce,
        Hibernia: effectTypes.bonus.effects.resistPierce,
        Midgard: effectTypes.bonus.effects.resistPierce
    },
    "198": {
        name: "ToA: Spell Damage",
        Albion: effectTypes.bonus.effects.spellDamage,
        Hibernia: effectTypes.bonus.effects.spellDamage,
        Midgard: effectTypes.bonus.effects.spellDamage
    },
    "199": {
        name: "ToA: Spell Duration",
        Albion: effectTypes.bonus.effects.spellDuration,
        Hibernia: effectTypes.bonus.effects.spellDuration,
        Midgard: effectTypes.bonus.effects.spellDuration
    },
    "200": {
        name: "ToA: Style Damage",
        Albion: effectTypes.bonus.effects.styleDamage,
        Hibernia: effectTypes.bonus.effects.styleDamage,
        Midgard: effectTypes.bonus.effects.styleDamage
    },
    "201": {
        name: "Cap Bonus: Strength",
        Albion: effectTypes.statCaps.effects.strength,
        Hibernia: effectTypes.statCaps.effects.strength,
        Midgard: effectTypes.statCaps.effects.strength
    },
    "202": {
        name: "Cap Bonus: Dexterity",
        Albion: effectTypes.statCaps.effects.dexterity,
        Hibernia: effectTypes.statCaps.effects.dexterity,
        Midgard: effectTypes.statCaps.effects.dexterity
    },
    "203": {
        name: "Cap Bonus: Constitution",
        Albion: effectTypes.statCaps.effects.constitution,
        Hibernia: effectTypes.statCaps.effects.constitution,
        Midgard: effectTypes.statCaps.effects.constitution
    },
    "204": {
        name: "Cap Bonus: Quickness",
        Albion: effectTypes.statCaps.effects.quickness,
        Hibernia: effectTypes.statCaps.effects.quickness,
        Midgard: effectTypes.statCaps.effects.quickness
    },
    "205": {
        name: "Cap Bonus: Intelligence",
        Albion: effectTypes.statCaps.effects.intelligence,
        Hibernia: effectTypes.statCaps.effects.intelligence,
        Midgard: effectTypes.statCaps.effects.intelligence
    },
    "206": {
        name: "Cap Bonus: Piety",
        Albion: effectTypes.statCaps.effects.piety,
        Hibernia: effectTypes.statCaps.effects.piety,
        Midgard: effectTypes.statCaps.effects.piety
    },
    "207": {
        name: "Cap Bonus: Empathy",
        Albion: effectTypes.statCaps.effects.empathy,
        Hibernia: effectTypes.statCaps.effects.empathy,
        Midgard: effectTypes.statCaps.effects.empathy
    },
    "208": {
        name: "Cap Bonus: Charisma",
        Albion: effectTypes.statCaps.effects.charisma,
        Hibernia: effectTypes.statCaps.effects.charisma,
        Midgard: effectTypes.statCaps.effects.charisma
    },
    "209": {
        name: "Cap Bonus: Acuity",
        Albion: effectTypes.statCaps.effects.acuity,
        Hibernia: effectTypes.statCaps.effects.acuity,
        Midgard: effectTypes.statCaps.effects.acuity
    },
    "210": {
        name: "Cap Bonus: Max Health",
        Albion: effectTypes.statCaps.effects.hits,
        Hibernia: effectTypes.statCaps.effects.hits,
        Midgard: effectTypes.statCaps.effects.hits
    },
    "211": {
        name: "Cap Bonus: Power Pool",
        Albion: effectTypes.statCaps.effects.power,
        Hibernia: effectTypes.statCaps.effects.power,
        Midgard: effectTypes.statCaps.effects.power
    },
    "218": {
        name: "ToA: Spell Level",
        Albion: effectTypes.bonus.effects.spellLevel,
        Hibernia: effectTypes.bonus.effects.spellLevel,
        Midgard: effectTypes.bonus.effects.spellLevel
    },
    "221": {
        name: "Cap Bonus: Body Resist",
        Albion: effectTypes.resistCaps.effects.body,
        Hibernia: effectTypes.resistCaps.effects.body,
        Midgard: effectTypes.resistCaps.effects.body
    },
    "222": {
        name: "Cap Bonus: Cold Resist",
        Albion: effectTypes.resistCaps.effects.cold,
        Hibernia: effectTypes.resistCaps.effects.cold,
        Midgard: effectTypes.resistCaps.effects.cold
    },
    "223": {
        name: "Cap Bonus: Crush Resist",
        Albion: effectTypes.resistCaps.effects.crush,
        Hibernia: effectTypes.resistCaps.effects.crush,
        Midgard: effectTypes.resistCaps.effects.crush
    },
    "224": {
        name: "Cap Bonus: Energy Resist",
        Albion: effectTypes.resistCaps.effects.energy,
        Hibernia: effectTypes.resistCaps.effects.energy,
        Midgard: effectTypes.resistCaps.effects.energy
    },
    "225": {
        name: "Cap Bonus: Heat Resist",
        Albion: effectTypes.resistCaps.effects.heat,
        Hibernia: effectTypes.resistCaps.effects.heat,
        Midgard: effectTypes.resistCaps.effects.heat
    },
    "226": {
        name: "Cap Bonus: Matter Resist",
        Albion: effectTypes.resistCaps.effects.matter,
        Hibernia: effectTypes.resistCaps.effects.matter,
        Midgard: effectTypes.resistCaps.effects.matter
    },
    "227": {
        name: "Cap Bonus: Slash Resist",
        Albion: effectTypes.resistCaps.effects.slash,
        Hibernia: effectTypes.resistCaps.effects.slash,
        Midgard: effectTypes.resistCaps.effects.slash
    },
    "228": {
        name: "Cap Bonus: Spirit Resist",
        Albion: effectTypes.resistCaps.effects.spirit,
        Hibernia: effectTypes.resistCaps.effects.spirit,
        Midgard: effectTypes.resistCaps.effects.spirit
    },
    "229": {
        name: "Cap Bonus: Thrust Resist",
        Albion: effectTypes.resistCaps.effects.thrust,
        Hibernia: effectTypes.resistCaps.effects.thrust,
        Midgard: effectTypes.resistCaps.effects.thrust
    },
    "230": {
        name: "Mythical: DPS",
        Albion: effectTypes.bonus.effects.dps,
        Hibernia: effectTypes.bonus.effects.dps,
        Midgard: effectTypes.bonus.effects.dps
    },
    "231": {
        name: "Mythical: Magic Absorption",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "232": {
        name: "Mythical: Critic Heal Chance",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "233": {
        name: "Mythical: Safe Fall",
        Albion: effectTypes.bonus.effects.safeFall,
        Hibernia: effectTypes.bonus.effects.safeFall,
        Midgard: effectTypes.bonus.effects.safeFall
    },
    "234": {
        name: "Mythical: Encumberance",
        Albion: effectTypes.bonus.effects.encumberance,
        Hibernia: effectTypes.bonus.effects.encumberance,
        Midgard: effectTypes.bonus.effects.encumberance
    },
    "235": {
        name: "Mythical: Coin",
        Albion: effectTypes.bonus.effects.bonusCoin,
        Hibernia: effectTypes.bonus.effects.bonusCoin,
        Midgard: effectTypes.bonus.effects.bonusCoin
    },
    "247": {
        name: "Mythical: Bounty Points",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "252": {
        name: "Mythical: Style Absorb",
        Albion: undefined,
        Hibernia: undefined,
        Midgard: undefined
    },
    "253": {
        name: "Mythical: Realm Points",
        Albion: effectTypes.bonus.effects.realmPoints,
        Hibernia: effectTypes.bonus.effects.realmPoints,
        Midgard: effectTypes.bonus.effects.realmPoints
    },
    "254": {
        name: "ToA: Arcane Syphon",
        Albion: effectTypes.bonus.effects.arcaneSyphon,
        Hibernia: effectTypes.bonus.effects.arcaneSyphon,
        Midgard: effectTypes.bonus.effects.arcaneSyphon
    },
}

const edenRealmMapping: Record<string, RealmName> = {
    '1': 'Albion',
    '2': 'Midgard',
    '3': 'Hibernia'
}

const edenClassMapping: Record<string, RealmClassName> = {
    "1": "Paladin",
    "2": "Armsman",
    "3": "Scout",
    "4": "Minstrel",
    "5": "Theurgist",
    "6": "Cleric",
    "7": "Wizard",
    "8": "Sorcerer",
    "9": "Infiltrator",
    "10": "Friar",
    "11": "Mercenary",
    "12": "Necromancer",
    "13": "Cabalist",
    "19": "Reaver",
    "21": "Thane",
    "22": "Warrior",
    "23": "Shadowblade",
    "24": "Skald",
    "25": "Hunter",
    "26": "Healer",
    "27": "Spiritmaster",
    "28": "Shaman",
    "29": "Runemaster",
    "30": "Bonedancer",
    "31": "Berserker",
    "32": "Savage",
    "33": "Heretic",
    "34": "Valkyrie",
    "39": "Bainshee",
    "40": "Eldritch",
    "41": "Enchanter",
    "42": "Mentalist",
    "43": "Blademaster",
    "44": "Hero",
    "45": "Champion",
    "46": "Warden",
    "47": "Druid",
    "48": "Bard",
    "49": "Nightshade",
    "50": "Ranger",
    "55": "Animist",
    "56": "Valewalker"
}

const edenItemMapping: Record<string, ItemCode[]> = {
    "10": ['rightHand', 'twoHand'],
    "11": ['leftHand', 'rightHand', 'twoHand'],
    "12": ['twoHand'],
    "13": ['ranged'],
    "21": ['head'],
    "22": ['hands'],
    "23": ['feet'],
    "24": ['jewel'],
    "25": ['chest'],
    "26": ['cloak'],
    "27": ['legs'],
    "28": ['arms'],
    "29": ['neck'],
    "32": ['belt'],
    "33": ['leftWrist', 'rightWrist'],
    "34": ['rightWrist', 'leftWrist'],
    "35": ['leftRing', 'rightRing'],
    "36": ['rightRing', 'leftRing'],
    "37": ['mythical'],
    "instrument": ['twoHand', 'ranged']
}

export const EdenImport: React.FC = (): React.JSX.Element => {
    const realm: Realm = useStore((state: Store): Realm => state.realm)
    const realmClass: RealmClass = useStore((state: Store): RealmClass => state.realmClass)
    const itemManager: ItemManager = useStore((state: Store): ItemManager => state.itemManager)
    const activeItem: Item = useStore((state: Store): Item => state.activeItem)
    const [show, setShow] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const handleClose: () => void = (): void => {
        setShow(false)
        setMessage('')
    }

    const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: ChangeEvent<HTMLInputElement>): void => {
        let json
        try {
            json = JSON.parse(e.target.value)
        } catch (e) {
            handleClose()
            return
        }

        const edenRealm: string = edenRealmMapping[json['realm']]
        if (json['realm'] !== '0' && edenRealm !== realm.name) {
            setMessage(`This item is for ${edenRealm} only`)
            return
        }

        let allowedClasses: string = json['allowed_classes']
        if (allowedClasses !== ';;') {
            const classCodes: string[] = allowedClasses.substring(1, allowedClasses.length-1).split(';')
            if (undefined === classCodes.find((classCode: string): boolean => (
                edenClassMapping[classCode] === realmClass.name
            ))) {
                setMessage(`This item is only for ${classCodes.map((classCode: string): string => (
                    edenClassMapping[classCode]
                )).join(', ')}`)
                return
            }
        }

        let mappingCode: string = json['instrument_type'] !== '0' ? 'instrument' : json['item_type']
        if (undefined === edenItemMapping[mappingCode].find((itemCode: string): boolean => (
            itemCode === activeItem.code
        ))) {
            setMessage(`This item doesn't fit in ${activeItem.name}`)
            return
        }

        activeItem.level = json.level
        activeItem.quality = json.quality
        activeItem.itemType = itemType.drop
        activeItem.itemName = json.name.replace(/[^A-Za-z0-9\s]/g,'').replace(/\s\s+/g, ' ').replace(/^\s*/gm, '')
        activeItem.options = []
        activeItem.bonusOption = null

        const mappingKeys: string[] = json['bonus_types'].split(',')
        const values: string[] = json['bonus_values'].split(',')

        for (let i: number = 0; i < mappingKeys.length; i++) {
            let mapping: EffectMapping = edenEffectMapping[mappingKeys[i]]
            const effect: Effect | undefined = mapping[realm.name]

            if (effect === undefined) {
                continue
            }

            const option: Option = itemManager.createOption(activeItem, false)
            option.color = Color.itemRog
            option.effectType = effectTypes[effect.type]
            option.effect = effect
            option.effectValue.value = Number(values[i])
            activeItem.options.push(option)
        }
        activeItem.options.push(itemManager.createOption(activeItem, false))

        itemManager.update(activeItem)
        itemManager.setActiveItem(activeItem)
        setShow(false)
    }

    return (
        <div className={`col-4 col-lg-2`}>
            <button
                onClick={(): void => setShow(true)}
            >
                Import
            </button>
            {show && (
                <>
                    <div
                        className={'backdrop'}
                        onClick={(): void => {
                            handleClose()
                        }}
                    />
                    <dialog open>
                        <h2>Import {activeItem.name} item</h2>
                        <input
                            autoFocus
                            type={'text'}
                            placeholder={'Paste import string'}
                            value={''}
                            onChange={(e: ChangeEvent<HTMLInputElement>): void => handleChange(e)}
                        />
                        <p>{message}</p>
                    </dialog>
                </>
            )}
        </div>
    )
}