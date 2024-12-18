import {race} from "./race";
import {effectTypes} from "./effects";
import {Effect} from "../types/effects";
import {Realm} from "../types/realm";
import {weapon} from "./weapon";

const resists: Effect[] = Object.values(effectTypes.resists.effects)
const resistCaps: Effect[] = Object.values(effectTypes.resistCaps.effects)
const bonus: Effect[] = Object.values(effectTypes.bonus.effects)

export const realms: Realm[] = [
    {
        name: 'Albion',
        realmClasses: [
            {
                name: 'Armsman',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.halfOgre,
                    race.highlander,
                    race.inconnu,
                    race.minotaur,
                    race.saracen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.hitsCap
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.crushing,
                        effectTypes.skills.effects.slashing,
                        effectTypes.skills.effects.thrusting,
                        effectTypes.skills.effects.polearm,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.twoHanded,
                        effectTypes.skills.effects.crossbow,
                        effectTypes.skills.effects.allMeleeAlbion
                    ],
                    bonus: bonus,
                }
            },
            {
                name: 'Cabalist',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.halfOgre,
                    race.inconnu,
                    race.saracen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.matterMagic,
                        effectTypes.skills.effects.bodyMagic,
                        effectTypes.skills.effects.spiritMagic,
                        effectTypes.skills.effects.allMagicAlbion
                    ],
                    focus: [
                        effectTypes.focus.effects.matterMagic,
                        effectTypes.focus.effects.bodyMagic,
                        effectTypes.focus.effects.spiritMagic,
                        effectTypes.focus.effects.allFocus
                    ],
                    bonus: bonus,
                }
            },
            {
                name: 'Cleric',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.highlander,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.pietyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.pietyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.rejuvenation,
                        effectTypes.skills.effects.enhancements,
                        effectTypes.skills.effects.smite,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Friar',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.briton,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.pietyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap,
                        effectTypes.mythStatCaps.effects.pietyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.rejuvenation,
                        effectTypes.skills.effects.enhancements,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.staff,
                        effectTypes.skills.effects.allMeleeAlbion,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Heretic',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.inconnu,
                    race.minotaur,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.pietyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.pietyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.rejuvenation,
                        effectTypes.skills.effects.enhancements,
                        effectTypes.skills.effects.crushing,
                        effectTypes.skills.effects.flexible,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.allMagicAlbion,
                        effectTypes.skills.effects.allMeleeAlbion,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Infiltrator',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.briton,
                    race.inconnu,
                    race.saracen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.hitsCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.slashing,
                        effectTypes.skills.effects.thrusting,
                        effectTypes.skills.effects.criticalStrike,
                        effectTypes.skills.effects.envenom,
                        effectTypes.skills.effects.dualWield,
                        effectTypes.skills.effects.allMeleeAlbion,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Mauler',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.briton,
                    race.minotaur,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.power,
                        effectTypes.stats.effects.hits
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.powerCap,
                        effectTypes.statCaps.effects.hitsCap
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.fistWrapAlbion,
                        effectTypes.skills.effects.maulerStaffAlbion,
                        effectTypes.skills.effects.magnetismAlbion,
                        effectTypes.skills.effects.powerStrikeAlbion,
                        effectTypes.skills.effects.auraManipulationAlbion,
                        effectTypes.skills.effects.allMeleeAlbion,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    bonus: bonus,
                }
            },
            {
                name: 'Mercenary',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.halfOgre,
                    race.highlander,
                    race.inconnu,
                    race.minotaur,
                    race.saracen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.hitsCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.crushing,
                        effectTypes.skills.effects.slashing,
                        effectTypes.skills.effects.thrusting,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.dualWield,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.allMeleeAlbion,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Minstrel',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.briton,
                    race.highlander,
                    race.saracen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.charisma,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.charismaCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap,
                        effectTypes.mythStatCaps.effects.charismaMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.slashing,
                        effectTypes.skills.effects.thrusting,
                        effectTypes.skills.effects.instruments,
                        effectTypes.skills.effects.allMeleeAlbion,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Necromancer',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.briton,
                    race.inconnu,
                    race.saracen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.deathsight,
                        effectTypes.skills.effects.painworking,
                        effectTypes.skills.effects.deathServant,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    focus: [
                        effectTypes.focus.effects.deathsight,
                        effectTypes.focus.effects.painworking,
                        effectTypes.focus.effects.deathservant,
                        effectTypes.focus.effects.allFocus,
                    ],
                    bonus: bonus,
                }
            },
            {
                name: 'Paladin',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.highlander,
                    race.saracen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.pietyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap,
                        effectTypes.mythStatCaps.effects.pietyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.crushing,
                        effectTypes.skills.effects.slashing,
                        effectTypes.skills.effects.thrusting,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.chants,
                        effectTypes.skills.effects.twoHanded,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.allMeleeAlbion,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Reaver',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.briton,
                    race.inconnu,
                    race.saracen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.pietyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap,
                        effectTypes.mythStatCaps.effects.pietyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.crushing,
                        effectTypes.skills.effects.slashing,
                        effectTypes.skills.effects.thrusting,
                        effectTypes.skills.effects.flexible,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.soulrending,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.allMeleeAlbion,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Scout',
                defaultWeapons: weapon.ranged,
                races: [
                    race.none,
                    race.briton,
                    race.highlander,
                    race.inconnu,
                    race.saracen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.hitsCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.slashing,
                        effectTypes.skills.effects.thrusting,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.archeryAlbion,
                        effectTypes.skills.effects.allMeleeAlbion,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Sorcerer',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.halfOgre,
                    race.inconnu,
                    race.saracen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.matterMagic,
                        effectTypes.skills.effects.mindMagic,
                        effectTypes.skills.effects.bodyMagic,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    focus: [
                        effectTypes.focus.effects.matterMagic,
                        effectTypes.focus.effects.mindMagic,
                        effectTypes.focus.effects.bodyMagic,
                        effectTypes.focus.effects.allFocus,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Theurgist',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.halfOgre,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.earthMagic,
                        effectTypes.skills.effects.coldMagic,
                        effectTypes.skills.effects.windMagic,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    focus: [
                        effectTypes.focus.effects.earthMagic,
                        effectTypes.focus.effects.coldMagic,
                        effectTypes.focus.effects.windMagic,
                        effectTypes.focus.effects.allFocus,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Wizard',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.halfOgre,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.earthMagic,
                        effectTypes.skills.effects.fireMagic,
                        effectTypes.skills.effects.coldMagic,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    focus: [
                        effectTypes.focus.effects.earthMagic,
                        effectTypes.focus.effects.fireMagic,
                        effectTypes.focus.effects.coldMagic,
                        effectTypes.focus.effects.allFocus,
                    ],
                    bonus: bonus
                }
            },
        ]
    },
    {
        name: 'Hibernia',
        realmClasses: [
            {
                name: 'Animist',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.celt,
                    race.firbolg,
                    race.sylvan,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.arborealPath,
                        effectTypes.skills.effects.creepingPath,
                        effectTypes.skills.effects.verdantPath,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    focus: [
                        effectTypes.focus.effects.arboreal,
                        effectTypes.focus.effects.creeping,
                        effectTypes.focus.effects.verdant,
                        effectTypes.focus.effects.allFocus,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Bainshee',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.celt,
                    race.elf,
                    race.lurikeen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.spectralGuard,
                        effectTypes.skills.effects.phantasmalWail,
                        effectTypes.skills.effects.etherealShriek,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    focus: [
                        effectTypes.focus.effects.spectralGuard,
                        effectTypes.focus.effects.phantasmalWail,
                        effectTypes.focus.effects.etherealShriek,
                        effectTypes.focus.effects.allFocus,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Bard',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.firbolg
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.charisma,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.charismaCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap,
                        effectTypes.mythStatCaps.effects.charismaMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.regrowth,
                        effectTypes.skills.effects.nurture,
                        effectTypes.skills.effects.music,
                        effectTypes.skills.effects.blades,
                        effectTypes.skills.effects.blunt,
                        effectTypes.skills.effects.allMeleeHibernia,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Blademaster',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.elf,
                    race.firbolg,
                    race.minotaur,
                    race.shar,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.hitsCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.blades,
                        effectTypes.skills.effects.blunt,
                        effectTypes.skills.effects.piercing,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.celticDual,
                        effectTypes.skills.effects.allMeleeHibernia,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Champion',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.elf,
                    race.lurikeen,
                    race.shar,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.blades,
                        effectTypes.skills.effects.blunt,
                        effectTypes.skills.effects.piercing,
                        effectTypes.skills.effects.largeWeapons,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.valor,
                        effectTypes.skills.effects.allMeleeHibernia,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Druid',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.firbolg,
                    race.sylvan,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.empathy,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.empathyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.empathyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.regrowth,
                        effectTypes.skills.effects.nurture,
                        effectTypes.skills.effects.nature,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Eldritch',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.elf,
                    race.lurikeen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.lightMagic,
                        effectTypes.skills.effects.manaMagic,
                        effectTypes.skills.effects.voidMagic,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    focus: [
                        effectTypes.focus.effects.light,
                        effectTypes.focus.effects.mana,
                        effectTypes.focus.effects.voidFocus,
                        effectTypes.focus.effects.allFocus,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Enchanter',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.elf,
                    race.lurikeen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.lightMagic,
                        effectTypes.skills.effects.manaMagic,
                        effectTypes.skills.effects.enchantments,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    focus: [
                        effectTypes.focus.effects.light,
                        effectTypes.focus.effects.mana,
                        effectTypes.focus.effects.enchantments,
                        effectTypes.focus.effects.allFocus,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Hero',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.firbolg,
                    race.lurikeen,
                    race.minotaur,
                    race.shar,
                    race.sylvan,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.hitsCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.blades,
                        effectTypes.skills.effects.blunt,
                        effectTypes.skills.effects.piercing,
                        effectTypes.skills.effects.celticSpear,
                        effectTypes.skills.effects.largeWeapons,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.allMeleeHibernia,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Mauler',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.minotaur,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.power,
                        effectTypes.stats.effects.hits
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.powerCap,
                        effectTypes.statCaps.effects.hitsCap
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.fistWrapHibernia,
                        effectTypes.skills.effects.maulerStaffHibernia,
                        effectTypes.skills.effects.magnetismHibernia,
                        effectTypes.skills.effects.powerStrikeHibernia,
                        effectTypes.skills.effects.auraManipulationHibernia,
                        effectTypes.skills.effects.allMeleeHibernia,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    bonus: bonus,
                }
            },
            {
                name: 'Mentalist',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.celt,
                    race.elf,
                    race.lurikeen,
                    race.shar,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.lightMagic,
                        effectTypes.skills.effects.mentalism,
                        effectTypes.skills.effects.manaMagic,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    focus: [
                        effectTypes.focus.effects.light,
                        effectTypes.focus.effects.mentalism,
                        effectTypes.focus.effects.mana,
                        effectTypes.focus.effects.allFocus,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Nightshade',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.elf,
                    race.lurikeen,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.blades,
                        effectTypes.skills.effects.piercing,
                        effectTypes.skills.effects.criticalStrike,
                        effectTypes.skills.effects.celticDual,
                        effectTypes.skills.effects.allMeleeHibernia
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Ranger',
                defaultWeapons: weapon.ranged,
                races: [
                    race.none,
                    race.celt,
                    race.elf,
                    race.lurikeen,
                    race.shar,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.blades,
                        effectTypes.skills.effects.piercing,
                        effectTypes.skills.effects.archeryHibernia,
                        effectTypes.skills.effects.celticDual,
                        effectTypes.skills.effects.allMeleeHibernia,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Valewalker',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.celt,
                    race.firbolg,
                    race.sylvan,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.intelligenceCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap,
                        effectTypes.mythStatCaps.effects.intelligenceMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.arborealPath,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.scythe,
                        effectTypes.skills.effects.allMeleeHibernia,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Vampiir',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.lurikeen,
                    race.shar
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.power,
                        effectTypes.stats.effects.hits
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.powerCap,
                        effectTypes.statCaps.effects.hitsCap
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.piercing,
                        effectTypes.skills.effects.shadowMastery,
                        effectTypes.skills.effects.vampiiricEmbrace,
                        effectTypes.skills.effects.dementia,
                        effectTypes.skills.effects.allMeleeHibernia,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    bonus: bonus,
                }
            },
            {
                name: 'Warden',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.firbolg,
                    race.minotaur,
                    race.sylvan,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.empathy,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.empathyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap,
                        effectTypes.mythStatCaps.effects.empathyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.regrowth,
                        effectTypes.skills.effects.nurture,
                        effectTypes.skills.effects.blades,
                        effectTypes.skills.effects.blunt,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.allMeleeHibernia,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    bonus: bonus
                }
            },
        ]
    },
    {
        name: 'Midgard',
        realmClasses: [
            {
                name: 'Berserker',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.dwarf,
                    race.troll,
                    race.minotaur,
                    race.norseman,
                    race.valkyn,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.hitsCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.axe,
                        effectTypes.skills.effects.hammer,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.leftAxe,
                        effectTypes.skills.effects.allMeleeMidgard,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Bonedancer',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.kobold,
                    race.troll,
                    race.valkyn,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.pietyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.pietyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.darkness,
                        effectTypes.skills.effects.suppression,
                        effectTypes.skills.effects.boneArmy,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    focus: [
                        effectTypes.focus.effects.darkness,
                        effectTypes.focus.effects.suppression,
                        effectTypes.focus.effects.bonedancing,
                        effectTypes.focus.effects.allFocus,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Healer',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.dwarf,
                    race.frostalf,
                    race.norseman,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.pietyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.pietyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.mending,
                        effectTypes.skills.effects.pacification,
                        effectTypes.skills.effects.augmentation,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Hunter',
                defaultWeapons: weapon.ranged,
                races: [
                    race.none,
                    race.dwarf,
                    race.frostalf,
                    race.kobold,
                    race.norseman,
                    race.valkyn,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.spear,
                        effectTypes.skills.effects.archeryMidgard,
                        effectTypes.skills.effects.beastcraft,
                        effectTypes.skills.effects.allMeleeMidgard,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Mauler',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.norseman,
                    race.minotaur,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.power,
                        effectTypes.stats.effects.hits
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.powerCap,
                        effectTypes.statCaps.effects.hitsCap
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.fistWrapMidgard,
                        effectTypes.skills.effects.maulerStaffMidgard,
                        effectTypes.skills.effects.magnetismMidgard,
                        effectTypes.skills.effects.powerStrikeMidgard,
                        effectTypes.skills.effects.auraManipulationMidgard,
                        effectTypes.skills.effects.allMeleeMidgard,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    bonus: bonus,
                }
            },
            {
                name: 'Runemaster',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.dwarf,
                    race.frostalf,
                    race.kobold,
                    race.norseman,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.pietyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.pietyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.darkness,
                        effectTypes.skills.effects.suppression,
                        effectTypes.skills.effects.runecarving,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    focus: [
                        effectTypes.focus.effects.darkness,
                        effectTypes.focus.effects.suppression,
                        effectTypes.focus.effects.runecarving,
                        effectTypes.focus.effects.allFocus,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Savage',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.dwarf,
                    race.kobold,
                    race.troll,
                    race.norseman,
                    race.valkyn,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.hitsCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.axe,
                        effectTypes.skills.effects.hammer,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.handToHand,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.allMeleeMidgard,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Shadowblade',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.kobold,
                    race.norseman,
                    race.valkyn,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.hitsCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.axe,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.leftAxe,
                        effectTypes.skills.effects.criticalStrike,
                        effectTypes.skills.effects.envenom,
                        effectTypes.skills.effects.allMeleeMidgard,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Shaman',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.frostalf,
                    race.kobold,
                    race.minotaur,
                    race.troll,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.pietyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.pietyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.mending,
                        effectTypes.skills.effects.subterranean,
                        effectTypes.skills.effects.augmentation,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Skald',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.dwarf,
                    race.kobold,
                    race.troll,
                    race.norseman,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.charisma,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.charismaCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap,
                        effectTypes.mythStatCaps.effects.charismaMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.axe,
                        effectTypes.skills.effects.hammer,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.battlesongs,
                        effectTypes.skills.effects.allMeleeMidgard,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Spiritmaster',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.frostalf,
                    race.kobold,
                    race.norseman,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.pietyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.pietyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.darkness,
                        effectTypes.skills.effects.suppression,
                        effectTypes.skills.effects.summoning,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    focus: [
                        effectTypes.focus.effects.darkness,
                        effectTypes.focus.effects.suppression,
                        effectTypes.focus.effects.summoning,
                        effectTypes.focus.effects.allFocus,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Thane',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.dwarf,
                    race.frostalf,
                    race.troll,
                    race.norseman,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.pietyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap,
                        effectTypes.mythStatCaps.effects.pietyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.axe,
                        effectTypes.skills.effects.hammer,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.stormcalling,
                        effectTypes.skills.effects.allMeleeMidgard,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    bonus: bonus,
                }
            },
            {
                name: 'Valkyrie',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.dwarf,
                    race.frostalf,
                    race.norseman,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.pietyCap,
                        effectTypes.statCaps.effects.acuityCap,
                        effectTypes.statCaps.effects.hitsCap,
                        effectTypes.statCaps.effects.powerCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap,
                        effectTypes.mythStatCaps.effects.pietyMythCap,
                        effectTypes.mythStatCaps.effects.acuityMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.spear,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.mending,
                        effectTypes.skills.effects.odinsWill,
                        effectTypes.skills.effects.allMeleeMidgard,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    bonus: bonus
                }
            },
            {
                name: 'Warrior',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.dwarf,
                    race.kobold,
                    race.troll,
                    race.minotaur,
                    race.norseman,
                    race.valkyn,
                ],
                effects: {
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [
                        effectTypes.statCaps.effects.strengthCap,
                        effectTypes.statCaps.effects.constitutionCap,
                        effectTypes.statCaps.effects.dexterityCap,
                        effectTypes.statCaps.effects.quicknessCap,
                        effectTypes.statCaps.effects.hitsCap,
                    ],
                    mythStatCaps: [
                        effectTypes.mythStatCaps.effects.strengthMythCap,
                        effectTypes.mythStatCaps.effects.constitutionMythCap,
                        effectTypes.mythStatCaps.effects.dexterityMythCap,
                        effectTypes.mythStatCaps.effects.quicknessMythCap
                    ],
                    resists: resists,
                    resistCaps: resistCaps,
                    skills: [
                        effectTypes.skills.effects.axe,
                        effectTypes.skills.effects.hammer,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.thrownWeapons,
                        effectTypes.skills.effects.allMeleeMidgard,
                    ],
                    bonus: bonus
                }
            },
        ]
    }
]