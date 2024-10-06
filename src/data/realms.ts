import {race} from "./race";
import {effectTypes} from "./effects";
import {Effect, EffectTypeMythStatCode, EffectTypeStatCode} from "../types/effects";
import {Realm, RealmClass} from "../types/realm";
import {weapon} from "./weapon";

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
                    race.saracen,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits
                    ],
                    statCaps: [],
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
                    focus: []
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power
                    ],
                    statCaps: [],
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
                    ]
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.rejuvenation,
                        effectTypes.skills.effects.enhancements,
                        effectTypes.skills.effects.smite,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    focus: []
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
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
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.rejuvenation,
                        effectTypes.skills.effects.enhancements,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.staff,
                        effectTypes.skills.effects.allMeleeAlbion,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    focus: []
                }
            }, {
                name: 'Heretic',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.inconnu,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.rejuvenation,
                        effectTypes.skills.effects.enhancements,
                        effectTypes.skills.effects.crushing,
                        effectTypes.skills.effects.flexible,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.allMagicAlbion,
                        effectTypes.skills.effects.allMeleeAlbion,
                    ],
                    focus: []
                }
            }, {
                name: 'Infiltrator',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.briton,
                    race.inconnu,
                    race.saracen,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.slashing,
                        effectTypes.skills.effects.thrusting,
                        effectTypes.skills.effects.criticalStrike,
                        effectTypes.skills.effects.envenom,
                        effectTypes.skills.effects.dualWield,
                        effectTypes.skills.effects.allMeleeAlbion,
                    ],
                    focus: []
                }
            }, {
                name: 'Mercenary',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.halfOgre,
                    race.highlander,
                    race.inconnu,
                    race.saracen,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.crushing,
                        effectTypes.skills.effects.slashing,
                        effectTypes.skills.effects.thrusting,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.dualWield,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.allMeleeAlbion,
                    ],
                    focus: []
                }
            }, {
                name: 'Minstrel',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.briton,
                    race.highlander,
                    race.saracen,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
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
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.slashing,
                        effectTypes.skills.effects.thrusting,
                        effectTypes.skills.effects.instruments,
                        effectTypes.skills.effects.allMeleeAlbion,
                        effectTypes.skills.effects.allMagicAlbion,
                    ],
                    focus: []
                }
            }, {
                name: 'Necromancer',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.briton,
                    race.inconnu,
                    race.saracen,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
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
                    ]
                }
            }, {
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
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
                    statCaps: [],
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
                    focus: []
                }
            }, {
                name: 'Reaver',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.briton,
                    race.inconnu,
                    race.saracen,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
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
                    statCaps: [],
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
                    focus: []
                }
            }, {
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.slashing,
                        effectTypes.skills.effects.thrusting,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.archeryAlbion,
                        effectTypes.skills.effects.allMeleeAlbion,
                    ],
                    focus: []
                }
            }, {
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
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
                    ]
                }
            }, {
                name: 'Theurgist',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.halfOgre,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
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
                    ]
                }
            }, {
                name: 'Wizard',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.avalonian,
                    race.briton,
                    race.halfOgre,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
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
                    ]
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
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
                    ]
                }
            }, {
                name: 'Bainshee',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.celt,
                    race.elf,
                    race.lurikeen,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
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
                    ]
                }
            }, {
                name: 'Bard',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.firbolg
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
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
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.regrowth,
                        effectTypes.skills.effects.nurture,
                        effectTypes.skills.effects.music,
                        effectTypes.skills.effects.blades,
                        effectTypes.skills.effects.blunt,
                        effectTypes.skills.effects.allMeleeHibernia,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    focus: []
                }
            }, {
                name: 'Blademaster',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.elf,
                    race.firbolg,
                    race.shar,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.blades,
                        effectTypes.skills.effects.blunt,
                        effectTypes.skills.effects.piercing,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.celticDual,
                        effectTypes.skills.effects.allMeleeHibernia,
                    ],
                    focus: []
                }
            }, {
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
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
                    statCaps: [],
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
                    focus: []
                }
            }, {
                name: 'Druid',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.firbolg,
                    race.sylvan,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.empathy,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.regrowth,
                        effectTypes.skills.effects.nurture,
                        effectTypes.skills.effects.nature,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    focus: []
                }
            }, {
                name: 'Eldrich',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.elf,
                    race.lurikeen,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
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
                    ]
                }
            }, {
                name: 'Enchanter',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.elf,
                    race.lurikeen,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
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
                    ]
                }
            }, {
                name: 'Hero',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.firbolg,
                    race.lurikeen,
                    race.shar,
                    race.sylvan,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [],
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
                    focus: []
                }
            }, {
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.intelligence,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
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
                    ]
                }
            }, {
                name: 'Nightshade',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.elf,
                    race.lurikeen,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
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
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.blades,
                        effectTypes.skills.effects.piercing,
                        effectTypes.skills.effects.criticalStrike,
                        effectTypes.skills.effects.celticDual,
                        effectTypes.skills.effects.allMeleeHibernia
                    ],
                    focus: []
                }
            }, {
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.blades,
                        effectTypes.skills.effects.piercing,
                        effectTypes.skills.effects.archeryHibernia,
                        effectTypes.skills.effects.celticDual,
                        effectTypes.skills.effects.allMeleeHibernia,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    focus: []
                }
            }, {
                name: 'Valewalker',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.celt,
                    race.firbolg,
                    race.sylvan,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
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
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.arborealPath,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.scythe,
                        effectTypes.skills.effects.allMeleeHibernia,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    focus: []
                }
            }, {
                name: 'Warden',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.celt,
                    race.firbolg,
                    race.sylvan,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
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
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.regrowth,
                        effectTypes.skills.effects.nurture,
                        effectTypes.skills.effects.blades,
                        effectTypes.skills.effects.blunt,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.allMeleeHibernia,
                        effectTypes.skills.effects.allMagicHibernia,
                    ],
                    focus: []
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
                    race.norseman,
                    race.valkyn,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.axe,
                        effectTypes.skills.effects.hammer,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.leftAxe,
                        effectTypes.skills.effects.allMeleeMidgard,
                    ],
                    focus: []
                }
            }, {
                name: 'Bonedancer',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.kobold,
                    race.troll,
                    race.valkyn,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
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
                    ]
                }
            }, {
                name: 'Healer',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.dwarf,
                    race.frostalf,
                    race.norseman,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.mending,
                        effectTypes.skills.effects.pacification,
                        effectTypes.skills.effects.augmentation,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    focus: []
                }
            }, {
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.spear,
                        effectTypes.skills.effects.archeryMidgard,
                        effectTypes.skills.effects.beastcraft,
                        effectTypes.skills.effects.allMeleeMidgard,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    focus: []
                }
            }, {
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
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
                    ]
                }
            }, {
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.axe,
                        effectTypes.skills.effects.hammer,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.handToHand,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.allMeleeMidgard,
                    ],
                    focus: []
                }
            }, {
                name: 'Shadowblade',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.kobold,
                    race.norseman,
                    race.valkyn,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.stealth,
                        effectTypes.skills.effects.axe,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.leftAxe,
                        effectTypes.skills.effects.criticalStrike,
                        effectTypes.skills.effects.envenom,
                        effectTypes.skills.effects.allMeleeMidgard,
                    ],
                    focus: []
                }
            }, {
                name: 'Shaman',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.frostalf,
                    race.kobold,
                    race.troll,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.mending,
                        effectTypes.skills.effects.subterranean,
                        effectTypes.skills.effects.augmentation,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    focus: []
                }
            }, {
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
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
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.axe,
                        effectTypes.skills.effects.hammer,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.battlesongs,
                        effectTypes.skills.effects.allMeleeMidgard,
                        effectTypes.skills.effects.allMagicMidgard,
                    ],
                    focus: []
                }
            }, {
                name: 'Spiritmaster',
                defaultWeapons: weapon.twoHand,
                races: [
                    race.none,
                    race.frostalf,
                    race.kobold,
                    race.norseman,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.piety,
                        effectTypes.stats.effects.acuity,
                        effectTypes.stats.effects.hits,
                        effectTypes.stats.effects.power,
                    ],
                    statCaps: [],
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
                    ]
                }
            }, {
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
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
                    statCaps: [],
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
                    focus: []
                }
            }, {
                name: 'Valkyrie',
                defaultWeapons: weapon.rightAndLeftHand,
                races: [
                    race.none,
                    race.dwarf,
                    race.frostalf,
                    race.norseman,
                ],
                effects: {
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
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
                    statCaps: [],
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
                    focus: []
                }
            }, {
                name: 'Warrior',
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
                    unused: [],
                    mythStatCaps: [],
                    resists: [],
                    resistCaps: [],
                    bonus: [],
                    stats: [
                        effectTypes.stats.effects.strength,
                        effectTypes.stats.effects.constitution,
                        effectTypes.stats.effects.dexterity,
                        effectTypes.stats.effects.quickness,
                        effectTypes.stats.effects.hits,
                    ],
                    statCaps: [],
                    skills: [
                        effectTypes.skills.effects.axe,
                        effectTypes.skills.effects.hammer,
                        effectTypes.skills.effects.sword,
                        effectTypes.skills.effects.shield,
                        effectTypes.skills.effects.parry,
                        effectTypes.skills.effects.thrownWeapons,
                        effectTypes.skills.effects.allMeleeMidgard,
                    ],
                    focus: []
                }
            },
        ]
    }
]

const statKeys: string[] = Object.keys(effectTypes.stats.effects)
const statValues: Effect[] = Object.values(effectTypes.stats.effects)

realms.forEach((realm: Realm): void => {
    realm.realmClasses.forEach((realmClass: RealmClass): void => {
        realmClass.effects.stats.forEach((effect: Effect): void => {
            const key: string = statKeys[statValues.indexOf(effect)]

            if (effectTypes.statCaps.effects[key as EffectTypeStatCode]) {
                realmClass.effects.statCaps.push(effectTypes.statCaps.effects[key as EffectTypeStatCode])
            }

            if (effectTypes.mythStatCaps.effects[key as EffectTypeMythStatCode]) {
                realmClass.effects.mythStatCaps.push(effectTypes.mythStatCaps.effects[key as EffectTypeMythStatCode])
            }
        })
    })
})