import {Effect, EffectType, EffectTypes, IncreaseType} from "../types/effects";
import {config} from "../config";

export const effectTypes: EffectTypes = {
    unused: {
        name: 'Unused',
        code: 'unused',
        default: true,
        effects: {
            unused: {
                name: '',
                code: '00',
                craft: true,
                utility: 0,
                maxValue: 0,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    0: {
                        imbue: 0,
                        gem: '',
                        value: 0,
                        price: 0
                    }
                },
                type: 'unused'
            }
        }
    },
    stats: {
        name: 'Stats',
        code: 'stats',
        default: false,
        effects: {
            strength: {
                name: 'Strength',
                code: 'sa',
                craft: true,
                utility: 0.6666667,
                maxValue: 75,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Fiery Essence Jewel',
                        value: 1,
                        price: 160
                    },
                    4: {
                        imbue: 1.5,
                        gem: 'Uncut Fiery Essence Jewel',
                        value: 4,
                        price: 920
                    },
                    7: {
                        imbue: 2.5,
                        gem: 'Rough Fiery Essence Jewel',
                        value: 7,
                        price: 3900
                    },
                    10: {
                        imbue: 3.5,
                        gem: 'Flawed Fiery Essence Jewel',
                        value: 10,
                        price: 13900
                    },
                    13: {
                        imbue: 4.5,
                        gem: 'Imperfect Fiery Essence Jewel',
                        value: 13,
                        price: 40100
                    },
                    16: {
                        imbue: 5.5,
                        gem: 'Polished Fiery Essence Jewel',
                        value: 16,
                        price: 88980
                    },
                    19: {
                        imbue: 6.5,
                        gem: 'Faceted Fiery Essence Jewel',
                        value: 19,
                        price: 193000
                    },
                    22: {
                        imbue: 7.5,
                        gem: 'Precious Fiery Essence Jewel',
                        value: 22,
                        price: 198920
                    },
                    25: {
                        imbue: 8.5,
                        gem: 'Flawless Fiery Essence Jewel',
                        value: 25,
                        price: 258240
                    },
                    28: {
                        imbue: 9.5,
                        gem: 'Perfect Fiery Essence Jewel',
                        value: 28,
                        price: 296860
                    }
                },
                type: 'stats'
            },
            constitution: {
                name: 'Constitution',
                code: 'sb',
                craft: true,
                utility: 0.6666667,
                maxValue: 75,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Earthen Essence Jewel',
                        value: 1,
                        price: 160
                    },
                    4: {
                        imbue: 1.5,
                        gem: 'Uncut Earthen Essence Jewel',
                        value: 4,
                        price: 920
                    },
                    7: {
                        imbue: 2.5,
                        gem: 'Rough Earthen Essence Jewel',
                        value: 7,
                        price: 3900
                    },
                    10: {
                        imbue: 3.5,
                        gem: 'Flawed Earthen Essence Jewel',
                        value: 10,
                        price: 13900
                    },
                    13: {
                        imbue: 4.5,
                        gem: 'Imperfect Earthen Essence Jewel',
                        value: 13,
                        price: 40100
                    },
                    16: {
                        imbue: 5.5,
                        gem: 'Polished Earthen Essence Jewel',
                        value: 16,
                        price: 88980
                    },
                    19: {
                        imbue: 6.5,
                        gem: 'Faceted Earthen Essence Jewel',
                        value: 19,
                        price: 193000
                    },
                    22: {
                        imbue: 7.5,
                        gem: 'Precious Earthen Essence Jewel',
                        value: 22,
                        price: 198920
                    },
                    25: {
                        imbue: 8.5,
                        gem: 'Flawless Earthen Essence Jewel',
                        value: 25,
                        price: 258240
                    },
                    28: {
                        imbue: 9.5,
                        gem: 'Perfect Earthen Essence Jewel',
                        value: 28,
                        price: 296860
                    }
                },
                type: 'stats'
            },
            dexterity: {
                name: 'Dexterity',
                code: 'sc',
                craft: true,
                utility: 0.6666667,
                maxValue: 75,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Vapor Essence Jewel',
                        value: 1,
                        price: 160
                    },
                    4: {
                        imbue: 1.5,
                        gem: 'Uncut Vapor Essence Jewel',
                        value: 4,
                        price: 920
                    },
                    7: {
                        imbue: 2.5,
                        gem: 'Rough Vapor Essence Jewel',
                        value: 7,
                        price: 3900
                    },
                    10: {
                        imbue: 3.5,
                        gem: 'Flawed Vapor Essence Jewel',
                        value: 10,
                        price: 13900
                    },
                    13: {
                        imbue: 4.5,
                        gem: 'Imperfect Vapor Essence Jewel',
                        value: 13,
                        price: 40100
                    },
                    16: {
                        imbue: 5.5,
                        gem: 'Polished Vapor Essence Jewel',
                        value: 16,
                        price: 88980
                    },
                    19: {
                        imbue: 6.5,
                        gem: 'Faceted Vapor Essence Jewel',
                        value: 19,
                        price: 193000
                    },
                    22: {
                        imbue: 7.5,
                        gem: 'Precious Vapor Essence Jewel',
                        value: 22,
                        price: 198920
                    },
                    25: {
                        imbue: 8.5,
                        gem: 'Flawless Vapor Essence Jewel',
                        value: 25,
                        price: 258240
                    },
                    28: {
                        imbue: 9.5,
                        gem: 'Perfect Vapor Essence Jewel',
                        value: 28,
                        price: 296860
                    }
                },
                type: 'stats'
            },
            quickness: {
                name: 'Quickness',
                code: 'sd',
                craft: true,
                utility: 0.6666667,
                maxValue: 75,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Airy Essence Jewel',
                        value: 1,
                        price: 160
                    },
                    4: {
                        imbue: 1.5,
                        gem: 'Uncut Airy Essence Jewel',
                        value: 4,
                        price: 920
                    },
                    7: {
                        imbue: 2.5,
                        gem: 'Rough Airy Essence Jewel',
                        value: 7,
                        price: 3900
                    },
                    10: {
                        imbue: 3.5,
                        gem: 'Flawed Airy Essence Jewel',
                        value: 10,
                        price: 13900
                    },
                    13: {
                        imbue: 4.5,
                        gem: 'Imperfect Airy Essence Jewel',
                        value: 13,
                        price: 40100
                    },
                    16: {
                        imbue: 5.5,
                        gem: 'Polished Airy Essence Jewel',
                        value: 16,
                        price: 88980
                    },
                    19: {
                        imbue: 6.5,
                        gem: 'Faceted Airy Essence Jewel',
                        value: 19,
                        price: 193000
                    },
                    22: {
                        imbue: 7.5,
                        gem: 'Precious Airy Essence Jewel',
                        value: 22,
                        price: 198920
                    },
                    25: {
                        imbue: 8.5,
                        gem: 'Flawless Airy Essence Jewel',
                        value: 25,
                        price: 258240
                    },
                    28: {
                        imbue: 9.5,
                        gem: 'Perfect Airy Essence Jewel',
                        value: 28,
                        price: 296860
                    }
                },
                type: 'stats'
            },
            acuity: {
                name: 'Acuity',
                code: 'si',
                craft: false,
                utility: 0.6666667,
                maxValue: 75,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'stats'
            },
            charisma: {
                name: 'Charisma',
                code: 'sg',
                craft: true,
                utility: 0.6666667,
                maxValue: 75,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Icy Essence Jewel',
                        value: 1,
                        price: 160
                    },
                    4: {
                        imbue: 1.5,
                        gem: 'Uncut Icy Essence Jewel',
                        value: 4,
                        price: 920
                    },
                    7: {
                        imbue: 2.5,
                        gem: 'Rough Icy Essence Jewel',
                        value: 7,
                        price: 3900
                    },
                    10: {
                        imbue: 3.5,
                        gem: 'Flawed Icy Essence Jewel',
                        value: 10,
                        price: 13900
                    },
                    13: {
                        imbue: 4.5,
                        gem: 'Imperfect Icy Essence Jewel',
                        value: 13,
                        price: 40100
                    },
                    16: {
                        imbue: 5.5,
                        gem: 'Polished Icy Essence Jewel',
                        value: 16,
                        price: 88980
                    },
                    19: {
                        imbue: 6.5,
                        gem: 'Faceted Icy Essence Jewel',
                        value: 19,
                        price: 193000
                    },
                    22: {
                        imbue: 7.5,
                        gem: 'Precious Icy Essence Jewel',
                        value: 22,
                        price: 198920
                    },
                    25: {
                        imbue: 8.5,
                        gem: 'Flawless Icy Essence Jewel',
                        value: 25,
                        price: 258240
                    },
                    28: {
                        imbue: 9.5,
                        gem: 'Perfect Icy Essence Jewel',
                        value: 28,
                        price: 296860
                    }
                },
                type: 'stats'
            },
            empathy: {
                name: 'Empathy',
                code: 'sh',
                craft: true,
                utility: 0.6666667,
                maxValue: 75,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Heated Essence Jewel',
                        value: 1,
                        price: 160
                    },
                    4: {
                        imbue: 1.5,
                        gem: 'Uncut Heated Essence Jewel',
                        value: 4,
                        price: 920
                    },
                    7: {
                        imbue: 2.5,
                        gem: 'Rough Heated Essence Jewel',
                        value: 7,
                        price: 3900
                    },
                    10: {
                        imbue: 3.5,
                        gem: 'Flawed Heated Essence Jewel',
                        value: 10,
                        price: 13900
                    },
                    13: {
                        imbue: 4.5,
                        gem: 'Imperfect Heated Essence Jewel',
                        value: 13,
                        price: 40100
                    },
                    16: {
                        imbue: 5.5,
                        gem: 'Polished Heated Essence Jewel',
                        value: 16,
                        price: 88980
                    },
                    19: {
                        imbue: 6.5,
                        gem: 'Faceted Heated Essence Jewel',
                        value: 19,
                        price: 193000
                    },
                    22: {
                        imbue: 7.5,
                        gem: 'Precious Heated Essence Jewel',
                        value: 22,
                        price: 198920
                    },
                    25: {
                        imbue: 8.5,
                        gem: 'Flawless Heated Essence Jewel',
                        value: 25,
                        price: 258240
                    },
                    28: {
                        imbue: 9.5,
                        gem: 'Perfect Heated Essence Jewel',
                        value: 28,
                        price: 296860
                    }
                },
                type: 'stats'
            },
            intelligence: {
                name: 'Intelligence',
                code: 'se',
                craft: true,
                utility: 0.6666667,
                maxValue: 75,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Dusty Essence Jewel',
                        value: 1,
                        price: 160
                    },
                    4: {
                        imbue: 1.5,
                        gem: 'Uncut Dusty Essence Jewel',
                        value: 4,
                        price: 920
                    },
                    7: {
                        imbue: 2.5,
                        gem: 'Rough Dusty Essence Jewel',
                        value: 7,
                        price: 3900
                    },
                    10: {
                        imbue: 3.5,
                        gem: 'Flawed Dusty Essence Jewel',
                        value: 10,
                        price: 13900
                    },
                    13: {
                        imbue: 4.5,
                        gem: 'Imperfect Dusty Essence Jewel',
                        value: 13,
                        price: 40100
                    },
                    16: {
                        imbue: 5.5,
                        gem: 'Polished Dusty Essence Jewel',
                        value: 16,
                        price: 88980
                    },
                    19: {
                        imbue: 6.5,
                        gem: 'Faceted Dusty Essence Jewel',
                        value: 19,
                        price: 193000
                    },
                    22: {
                        imbue: 7.5,
                        gem: 'Precious Dusty Essence Jewel',
                        value: 22,
                        price: 198920
                    },
                    25: {
                        imbue: 8.5,
                        gem: 'Flawless Dusty Essence Jewel',
                        value: 25,
                        price: 258240
                    },
                    28: {
                        imbue: 9.5,
                        gem: 'Perfect Dusty Essence Jewel',
                        value: 28,
                        price: 296860
                    }
                },
                type: 'stats'
            },
            piety: {
                name: 'Piety',
                code: 'sf',
                craft: true,
                utility: 0.6666667,
                maxValue: 75,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Watery Essence Jewel',
                        value: 1,
                        price: 160
                    },
                    4: {
                        imbue: 1.5,
                        gem: 'Uncut Watery Essence Jewel',
                        value: 4,
                        price: 920
                    },
                    7: {
                        imbue: 2.5,
                        gem: 'Rough Watery Essence Jewel',
                        value: 7,
                        price: 3900
                    },
                    10: {
                        imbue: 3.5,
                        gem: 'Flawed Watery Essence Jewel',
                        value: 10,
                        price: 13900
                    },
                    13: {
                        imbue: 4.5,
                        gem: 'Imperfect Watery Essence Jewel',
                        value: 13,
                        price: 40100
                    },
                    16: {
                        imbue: 5.5,
                        gem: 'Polished Watery Essence Jewel',
                        value: 16,
                        price: 88980
                    },
                    19: {
                        imbue: 6.5,
                        gem: 'Faceted Watery Essence Jewel',
                        value: 19,
                        price: 193000
                    },
                    22: {
                        imbue: 7.5,
                        gem: 'Precious Watery Essence Jewel',
                        value: 22,
                        price: 198920
                    },
                    25: {
                        imbue: 8.5,
                        gem: 'Flawless Watery Essence Jewel',
                        value: 25,
                        price: 258240
                    },
                    28: {
                        imbue: 9.5,
                        gem: 'Perfect Watery Essence Jewel',
                        value: 28,
                        price: 296860
                    }
                },
                type: 'stats'
            },
            hits: {
                name: 'Hits',
                code: 'sj',
                craft: true,
                utility: 0.25,
                maxValue: 200,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    4: {
                        imbue: 0.5,
                        gem: 'Raw Blood Essence Jewel',
                        value: 4,
                        price: 160
                    },
                    12: {
                        imbue: 1.5,
                        gem: 'Uncut Blood Essence Jewel',
                        value: 12,
                        price: 920
                    },
                    20: {
                        imbue: 2.5,
                        gem: 'Rough Blood Essence Jewel',
                        value: 20,
                        price: 3900
                    },
                    28: {
                        imbue: 3.5,
                        gem: 'Flawed Blood Essence Jewel',
                        value: 28,
                        price: 13900
                    },
                    36: {
                        imbue: 4.5,
                        gem: 'Imperfect Blood Essence Jewel',
                        value: 36,
                        price: 40100
                    },
                    44: {
                        imbue: 5.5,
                        gem: 'Polished Blood Essence Jewel',
                        value: 44,
                        price: 88980
                    },
                    52: {
                        imbue: 6.5,
                        gem: 'Faceted Blood Essence Jewel',
                        value: 52,
                        price: 133000
                    },
                    60: {
                        imbue: 7.5,
                        gem: 'Precious Blood Essence Jewel',
                        value: 60,
                        price: 198920
                    },
                    68: {
                        imbue: 8.5,
                        gem: 'Flawless Blood Essence Jewel',
                        value: 68,
                        price: 258240
                    },
                    76: {
                        imbue: 9.5,
                        gem: 'Perfect Blood Essence Jewel',
                        value: 76,
                        price: 296860
                    }
                },
                type: 'stats'
            },
            power: {
                name: 'Power',
                code: 'sk',
                craft: true,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Mytsic Essence Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 1,
                        gem: 'Uncut Mytsic Essence Jewel',
                        value: 2,
                        price: 980
                    },
                    3: {
                        imbue: 2,
                        gem: 'Rough Mytsic Essence Jewel',
                        value: 3,
                        price: 3900
                    },
                    5: {
                        imbue: 4,
                        gem: 'Flawed Mytsic Essence Jewel',
                        value: 5,
                        price: 13900
                    },
                    7: {
                        imbue: 6,
                        gem: 'Imperfect Mytsic Essence Jewel',
                        value: 7,
                        price: 40100
                    },
                    9: {
                        imbue: 8,
                        gem: 'Polished Mytsic Essence Jewel',
                        value: 9,
                        price: 88980
                    },
                    11: {
                        imbue: 10,
                        gem: 'Faceted Mytsic Essence Jewel',
                        value: 11,
                        price: 133000
                    },
                    13: {
                        imbue: 12,
                        gem: 'Precious Mytsic Essence Jewel',
                        value: 13,
                        price: 198920
                    },
                    15: {
                        imbue: 14,
                        gem: 'Flawless Mytsic Essence Jewel',
                        value: 15,
                        price: 258240
                    },
                    17: {
                        imbue: 16,
                        gem: 'Perfect Mytsic Essence Jewel',
                        value: 17,
                        price: 296860
                    }
                },
                type: 'stats'
            }
        }
    },
    statCaps: {
        name: 'Stat Caps',
        code: 'statCaps',
        default: false,
        effects: {
            strength: {
                name: 'Strength Cap',
                code: 'sl',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'statCaps'
            },
            constitution: {
                name: 'Constitution Cap',
                code: 'sm',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'statCaps'
            },
            dexterity: {
                name: 'Dexterity Cap',
                code: 'sn',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'statCaps'
            },
            quickness: {
                name: 'Quickness Cap',
                code: 'so',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'statCaps'
            },
            acuity: {
                name: 'Acuity Cap',
                code: 'sv',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'statCaps'
            },
            charisma: {
                name: 'Charisma Cap',
                code: 'sr',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'statCaps'
            },
            empathy: {
                name: 'Empathy Cap',
                code: 'ss',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'statCaps'
            },
            intelligence: {
                name: 'Intelligence Cap',
                code: 'sp',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'statCaps'
            },
            piety: {
                name: 'Piety Cap',
                code: 'sq',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'statCaps'
            },
            hits: {
                name: 'Hits Cap',
                code: 'st',
                craft: false,
                utility: 0.25,
                maxValue: 200,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'statCaps'
            },
            power: {
                name: 'Power Cap',
                code: 'su',
                craft: false,
                utility: 2,
                maxValue: 50,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'statCaps'
            }
        }
    },
    mythStatCaps: {
        name: 'Mythical Stat Caps',
        code: 'mythStatCaps',
        default: false,
        effects: {
            strength: {
                name: 'Strength Cap',
                code: 'ma',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'mythStatCaps'
            },
            constitution: {
                name: 'Constitution Cap',
                code: 'mb',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'mythStatCaps'
            },
            dexterity: {
                name: 'Dexterity Cap',
                code: 'mc',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'mythStatCaps'
            },
            quickness: {
                name: 'Quickness Cap',
                code: 'md',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'mythStatCaps'
            },
            acuity: {
                name: 'Acuity Cap',
                code: 'mi',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'mythStatCaps'
            },
            charisma: {
                name: 'Charisma Cap',
                code: 'mg',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'mythStatCaps'
            },
            empathy: {
                name: 'Empathy Cap',
                code: 'mh',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'mythStatCaps'
            },
            intelligence: {
                name: 'Intelligence Cap',
                code: 'me',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'mythStatCaps'
            },
            piety: {
                name: 'Piety Cap',
                code: 'mf',
                craft: false,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'mythStatCaps'
            },
        }
    },
    resists: {
        name: 'Resists',
        code: 'resists',
        default: false,
        effects: {
            crush: {
                name: 'Crush',
                code: 'ra',
                craft: true,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Fiery Shielding Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 1,
                        gem: 'Uncut Fiery Shielding Jewel',
                        value: 2,
                        price: 980
                    },
                    3: {
                        imbue: 2,
                        gem: 'Rough Fiery Shielding Jewel',
                        value: 3,
                        price: 4020
                    },
                    5: {
                        imbue: 4,
                        gem: 'Flawed Fiery Shielding Jewel',
                        value: 5,
                        price: 14080
                    },
                    7: {
                        imbue: 6,
                        gem: 'Imperfect Fiery Shielding Jewel',
                        value: 7,
                        price: 40340
                    },
                    9: {
                        imbue: 8,
                        gem: 'Polished Fiery Shielding Jewel',
                        value: 9,
                        price: 89280
                    },
                    11: {
                        imbue: 10,
                        gem: 'Faceted Fiery Shielding Jewel',
                        value: 11,
                        price: 133360
                    },
                    13: {
                        imbue: 12,
                        gem: 'Precious Fiery Shielding Jewel',
                        value: 13,
                        price: 199340
                    },
                    15: {
                        imbue: 14,
                        gem: 'Flawless Fiery Shielding Jewel',
                        value: 15,
                        price: 258720
                    },
                    17: {
                        imbue: 16,
                        gem: 'Perfect Fiery Shielding Jewel',
                        value: 17,
                        price: 297400
                    }
                },
                type: 'resists'
            },
            slash: {
                name: 'Slash',
                code: 'rb',
                craft: true,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Watery Shielding Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 1,
                        gem: 'Uncut Watery Shielding Jewel',
                        value: 2,
                        price: 980
                    },
                    3: {
                        imbue: 2,
                        gem: 'Rough Watery Shielding Jewel',
                        value: 3,
                        price: 4020
                    },
                    5: {
                        imbue: 4,
                        gem: 'Flawed Watery Shielding Jewel',
                        value: 5,
                        price: 14080
                    },
                    7: {
                        imbue: 6,
                        gem: 'Imperfect Watery Shielding Jewel',
                        value: 7,
                        price: 40340
                    },
                    9: {
                        imbue: 8,
                        gem: 'Polished Watery Shielding Jewel',
                        value: 9,
                        price: 89280
                    },
                    11: {
                        imbue: 10,
                        gem: 'Faceted Watery Shielding Jewel',
                        value: 11,
                        price: 133360
                    },
                    13: {
                        imbue: 12,
                        gem: 'Precious Watery Shielding Jewel',
                        value: 13,
                        price: 199340
                    },
                    15: {
                        imbue: 14,
                        gem: 'Flawless Watery Shielding Jewel',
                        value: 15,
                        price: 258720
                    },
                    17: {
                        imbue: 16,
                        gem: 'Perfect Watery Shielding Jewel',
                        value: 17,
                        price: 297400
                    }
                },
                type: 'resists'
            },
            thrust: {
                name: 'Thrust',
                code: 'rc',
                craft: true,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Airy Shielding Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 1,
                        gem: 'Uncut Airy Shielding Jewel',
                        value: 2,
                        price: 980
                    },
                    3: {
                        imbue: 2,
                        gem: 'Rough Airy Shielding Jewel',
                        value: 3,
                        price: 4020
                    },
                    5: {
                        imbue: 4,
                        gem: 'Flawed Airy Shielding Jewel',
                        value: 5,
                        price: 14080
                    },
                    7: {
                        imbue: 6,
                        gem: 'Imperfect Airy Shielding Jewel',
                        value: 7,
                        price: 40340
                    },
                    9: {
                        imbue: 8,
                        gem: 'Polished Airy Shielding Jewel',
                        value: 9,
                        price: 89280
                    },
                    11: {
                        imbue: 10,
                        gem: 'Faceted Airy Shielding Jewel',
                        value: 11,
                        price: 133360
                    },
                    13: {
                        imbue: 12,
                        gem: 'Precious Airy Shielding Jewel',
                        value: 13,
                        price: 199340
                    },
                    15: {
                        imbue: 14,
                        gem: 'Flawless Airy Shielding Jewel',
                        value: 15,
                        price: 258720
                    },
                    17: {
                        imbue: 16,
                        gem: 'Perfect Airy Shielding Jewel',
                        value: 17,
                        price: 297400
                    }
                },
                type: 'resists'
            },
            heat: {
                name: 'Heat',
                code: 'rd',
                craft: true,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Heated Shielding Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 1,
                        gem: 'Uncut Heated Shielding Jewel',
                        value: 2,
                        price: 980
                    },
                    3: {
                        imbue: 2,
                        gem: 'Rough Heated Shielding Jewel',
                        value: 3,
                        price: 4020
                    },
                    5: {
                        imbue: 4,
                        gem: 'Flawed Heated Shielding Jewel',
                        value: 5,
                        price: 14080
                    },
                    7: {
                        imbue: 6,
                        gem: 'Imperfect Heated Shielding Jewel',
                        value: 7,
                        price: 40340
                    },
                    9: {
                        imbue: 8,
                        gem: 'Polished Heated Shielding Jewel',
                        value: 9,
                        price: 89280
                    },
                    11: {
                        imbue: 10,
                        gem: 'Faceted Heated Shielding Jewel',
                        value: 11,
                        price: 133360
                    },
                    13: {
                        imbue: 12,
                        gem: 'Precious Heated Shielding Jewel',
                        value: 13,
                        price: 199340
                    },
                    15: {
                        imbue: 14,
                        gem: 'Flawless Heated Shielding Jewel',
                        value: 15,
                        price: 258720
                    },
                    17: {
                        imbue: 16,
                        gem: 'Perfect Heated Shielding Jewel',
                        value: 17,
                        price: 297400
                    }
                },
                type: 'resists'
            },
            cold: {
                name: 'Cold',
                code: 're',
                craft: true,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Icy Shielding Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 1,
                        gem: 'Uncut Icy Shielding Jewel',
                        value: 2,
                        price: 980
                    },
                    3: {
                        imbue: 2,
                        gem: 'Rough Icy Shielding Jewel',
                        value: 3,
                        price: 4020
                    },
                    5: {
                        imbue: 4,
                        gem: 'Flawed Icy Shielding Jewel',
                        value: 5,
                        price: 14080
                    },
                    7: {
                        imbue: 6,
                        gem: 'Imperfect Icy Shielding Jewel',
                        value: 7,
                        price: 40340
                    },
                    9: {
                        imbue: 8,
                        gem: 'Polished Icy Shielding Jewel',
                        value: 9,
                        price: 89280
                    },
                    11: {
                        imbue: 10,
                        gem: 'Faceted Icy Shielding Jewel',
                        value: 11,
                        price: 133360
                    },
                    13: {
                        imbue: 12,
                        gem: 'Precious Icy Shielding Jewel',
                        value: 13,
                        price: 199340
                    },
                    15: {
                        imbue: 14,
                        gem: 'Flawless Icy Shielding Jewel',
                        value: 15,
                        price: 258720
                    },
                    17: {
                        imbue: 16,
                        gem: 'Perfect Icy Shielding Jewel',
                        value: 17,
                        price: 297400
                    }
                },
                type: 'resists'
            },
            matter: {
                name: 'Matter',
                code: 'rf',
                craft: true,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Earthen Shielding Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 1,
                        gem: 'Uncut Earthen Shielding Jewel',
                        value: 2,
                        price: 980
                    },
                    3: {
                        imbue: 2,
                        gem: 'Rough Earthen Shielding Jewel',
                        value: 3,
                        price: 4020
                    },
                    5: {
                        imbue: 4,
                        gem: 'Flawed Earthen Shielding Jewel',
                        value: 5,
                        price: 14080
                    },
                    7: {
                        imbue: 6,
                        gem: 'Imperfect Earthen Shielding Jewel',
                        value: 7,
                        price: 40340
                    },
                    9: {
                        imbue: 8,
                        gem: 'Polished Earthen Shielding Jewel',
                        value: 9,
                        price: 89280
                    },
                    11: {
                        imbue: 10,
                        gem: 'Faceted Earthen Shielding Jewel',
                        value: 11,
                        price: 133360
                    },
                    13: {
                        imbue: 12,
                        gem: 'Precious Earthen Shielding Jewel',
                        value: 13,
                        price: 199340
                    },
                    15: {
                        imbue: 14,
                        gem: 'Flawless Earthen Shielding Jewel',
                        value: 15,
                        price: 258720
                    },
                    17: {
                        imbue: 16,
                        gem: 'Perfect Earthen Shielding Jewel',
                        value: 17,
                        price: 297400
                    }
                },
                type: 'resists'
            },
            body: {
                name: 'Body',
                code: 'rg',
                craft: true,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Dusty Shielding Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 1,
                        gem: 'Uncut Dusty Shielding Jewel',
                        value: 2,
                        price: 980
                    },
                    3: {
                        imbue: 2,
                        gem: 'Rough Dusty Shielding Jewel',
                        value: 3,
                        price: 4020
                    },
                    5: {
                        imbue: 4,
                        gem: 'Flawed Dusty Shielding Jewel',
                        value: 5,
                        price: 14080
                    },
                    7: {
                        imbue: 6,
                        gem: 'Imperfect Dusty Shielding Jewel',
                        value: 7,
                        price: 40340
                    },
                    9: {
                        imbue: 8,
                        gem: 'Polished Dusty Shielding Jewel',
                        value: 9,
                        price: 89280
                    },
                    11: {
                        imbue: 10,
                        gem: 'Faceted Dusty Shielding Jewel',
                        value: 11,
                        price: 133360
                    },
                    13: {
                        imbue: 12,
                        gem: 'Precious Dusty Shielding Jewel',
                        value: 13,
                        price: 199340
                    },
                    15: {
                        imbue: 14,
                        gem: 'Flawless Dusty Shielding Jewel',
                        value: 15,
                        price: 258720
                    },
                    17: {
                        imbue: 16,
                        gem: 'Perfect Dusty Shielding Jewel',
                        value: 17,
                        price: 297400
                    }
                },
                type: 'resists'
            },
            spirit: {
                name: 'Spirit',
                code: 'rh',
                craft: true,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Vapor Shielding Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 1,
                        gem: 'Uncut Vapor Shielding Jewel',
                        value: 2,
                        price: 980
                    },
                    3: {
                        imbue: 2,
                        gem: 'Rough Vapor Shielding Jewel',
                        value: 3,
                        price: 4020
                    },
                    5: {
                        imbue: 4,
                        gem: 'Flawed Vapor Shielding Jewel',
                        value: 5,
                        price: 14080
                    },
                    7: {
                        imbue: 6,
                        gem: 'Imperfect Vapor Shielding Jewel',
                        value: 7,
                        price: 40340
                    },
                    9: {
                        imbue: 8,
                        gem: 'Polished Vapor Shielding Jewel',
                        value: 9,
                        price: 89280
                    },
                    11: {
                        imbue: 10,
                        gem: 'Faceted Vapor Shielding Jewel',
                        value: 11,
                        price: 133360
                    },
                    13: {
                        imbue: 12,
                        gem: 'Precious Vapor Shielding Jewel',
                        value: 13,
                        price: 199340
                    },
                    15: {
                        imbue: 14,
                        gem: 'Flawless Vapor Shielding Jewel',
                        value: 15,
                        price: 258720
                    },
                    17: {
                        imbue: 16,
                        gem: 'Perfect Vapor Shielding Jewel',
                        value: 17,
                        price: 297400
                    }
                },
                type: 'resists'
            },
            energy: {
                name: 'Energy',
                code: 'ri',
                craft: true,
                utility: 2,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Light Shielding Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 1,
                        gem: 'Uncut Light Shielding Jewel',
                        value: 2,
                        price: 980
                    },
                    3: {
                        imbue: 2,
                        gem: 'Rough Light Shielding Jewel',
                        value: 3,
                        price: 4020
                    },
                    5: {
                        imbue: 4,
                        gem: 'Flawed Light Shielding Jewel',
                        value: 5,
                        price: 14080
                    },
                    7: {
                        imbue: 6,
                        gem: 'Imperfect Light Shielding Jewel',
                        value: 7,
                        price: 40340
                    },
                    9: {
                        imbue: 8,
                        gem: 'Polished Light Shielding Jewel',
                        value: 9,
                        price: 89280
                    },
                    11: {
                        imbue: 10,
                        gem: 'Faceted Light Shielding Jewel',
                        value: 11,
                        price: 133360
                    },
                    13: {
                        imbue: 12,
                        gem: 'Precious Light Shielding Jewel',
                        value: 13,
                        price: 199340
                    },
                    15: {
                        imbue: 14,
                        gem: 'Flawless Light Shielding Jewel',
                        value: 15,
                        price: 258720
                    },
                    17: {
                        imbue: 16,
                        gem: 'Perfect Light Shielding Jewel',
                        value: 17,
                        price: 297400
                    }
                },
                type: 'resists'
            }
        }
    },
    resistCaps: {
        name: 'Resist Caps',
        code: 'resistCaps',
        default: false,
        effects: {
            crush: {
                name: 'Crush Cap',
                code: 'rj',
                craft: false,
                utility: 4,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Midgard',
                    'Hibernia'
                ],
                values: {},
                type: 'resistCaps'
            },
            slash: {
                name: 'Slash Cap',
                code: 'rk',
                craft: false,
                utility: 4,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Midgard',
                    'Hibernia'
                ],
                values: {},
                type: 'resistCaps'
            },
            thrust: {
                name: 'Thrust Cap',
                code: 'rl',
                craft: false,
                utility: 4,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Midgard',
                    'Hibernia'
                ],
                values: {},
                type: 'resistCaps'
            },
            heat: {
                name: 'Heat Cap',
                code: 'rm',
                craft: false,
                utility: 4,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Midgard',
                    'Hibernia'
                ],
                values: {},
                type: 'resistCaps'
            },
            cold: {
                name: 'Cold Cap',
                code: 'rn',
                craft: false,
                utility: 4,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Midgard',
                    'Hibernia'
                ],
                values: {},
                type: 'resistCaps'
            },
            matter: {
                name: 'Matter Cap',
                code: 'ro',
                craft: false,
                utility: 4,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Midgard',
                    'Hibernia'
                ],
                values: {},
                type: 'resistCaps'
            },
            body: {
                name: 'Body Cap',
                code: 'rp',
                craft: false,
                utility: 4,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Midgard',
                    'Hibernia'
                ],
                values: {},
                type: 'resistCaps'
            },
            spirit: {
                name: 'Spirit Cap',
                code: 'rq',
                craft: false,
                utility: 4,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Midgard',
                    'Hibernia'
                ],
                values: {},
                type: 'resistCaps'
            },
            energy: {
                name: 'Energy Cap',
                code: 'rr',
                craft: false,
                utility: 4,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Midgard',
                    'Hibernia'
                ],
                values: {},
                type: 'resistCaps'
            }
        }
    },
    skills: {
        name: 'Skills',
        code: 'skills',
        default: false,
        effects: {
            allMagicAlbion: {
                name: 'All Magic',
                code: '33',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Finesse Fervor Sigil',
                        value: 1,
                        price: 160
                    }
                },
                type: 'skills'
            },
            allMagicHibernia: {
                name: 'All Magic',
                code: '58',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Finesse Nature Spell Stone',
                        value: 1,
                        price: 160
                    }
                },
                type: 'skills'
            },
            allMagicMidgard: {
                name: 'All Magic',
                code: '81',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Finesse Primal Rune',
                        value: 1,
                        price: 160
                    }
                },
                type: 'skills'
            },
            allMeleeAlbion: {
                name: 'All Melee',
                code: '32',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Finesse War Sigil',
                        value: 1,
                        price: 160
                    }
                },
                type: 'skills'
            },
            allMeleeHibernia: {
                name: 'All Melee',
                code: '57',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Finesse War Spell Stone',
                        value: 1,
                        price: 160
                    }
                },
                type: 'skills'
            },
            allMeleeMidgard: {
                name: 'All Melee',
                code: '80',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Finesse War Rune',
                        value: 1,
                        price: 160
                    }
                },
                type: 'skills'
            },
            arborealPath: {
                name: 'Arboreal Path',
                code: '53',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Steaming Nature Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Steaming Nature Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Steaming Nature Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Steaming Nature Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Steaming Nature Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Steaming Nature Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Steaming Nature Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Steaming Nature Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Steaming Nature Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Steaming Nature Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            archeryAlbion: {
                name: config.useArcheryAsSkillName ? 'Archery' : 'Longbows',
                code: '31',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Airy War Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Airy War Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Airy War Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Airy War Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Airy War Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Airy War Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Airy War Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Airy War Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Airy War Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Airy War Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            archeryHibernia: {
                name: config.useArcheryAsSkillName ? 'Archery' : 'Recurve Bow',
                code: '56',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Airy War Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Airy War Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Airy War Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Airy War Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Airy War Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Airy War Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Airy War Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Airy War Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Airy War Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Airy War Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            archeryMidgard: {
                name: config.useArcheryAsSkillName ? 'Archery' : 'Composite Bow',
                code: '78',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Airy War Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Airy War Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Airy War Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Airy War Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Airy War Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Airy War Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Airy War Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Airy War Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Airy War Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Airy War Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            augmentation: {
                name: 'Augmentation',
                code: '73',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Airy Chaos Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Airy Chaos Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Airy Chaos Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Airy Chaos Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Airy Chaos Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Airy Chaos Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Airy Chaos Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Airy Chaos Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Airy Chaos Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Airy Chaos Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            axe: {
                name: 'Axe',
                code: '62',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Earthen War Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Earthen War Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Earthen War Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Earthen War Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Earthen War Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Earthen War Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Earthen War Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Earthen War Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Earthen War Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Earthen War Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            battlesongs: {
                name: 'Battlesongs',
                code: '66',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Airy Primal Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Airy Primal Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Airy Primal Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Airy Primal Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Airy Primal Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Airy Primal Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Airy Primal Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Airy Primal Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Airy Primal Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Airy Primal Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            beastcraft: {
                name: 'Beastcraft',
                code: '65',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Earthen Primal Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Earthen Primal Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Earthen Primal Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Earthen Primal Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Earthen Primal Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Earthen Primal Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Earthen Primal Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Earthen Primal Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Earthen Primal Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Earthen Primal Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            blades: {
                name: 'Blades',
                code: '36',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Watery War Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Watery War Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Watery War Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Watery War Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Watery War Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Watery War Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Watery War Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Watery War Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Watery War Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Watery War Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            blunt: {
                name: 'Blunt',
                code: '37',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Fiery War Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Fiery War Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Fiery War Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Fiery War Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Fiery War Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Fiery War Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Fiery War Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Fiery War Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Fiery War Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Fiery War Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            bodyMagic: {
                name: 'Body Magic',
                code: '22',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Heated Evocation Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Heated Evocation Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Heated Evocation Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Heated Evocation Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Heated Evocation Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Heated Evocation Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Heated Evocation Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Heated Evocation Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Heated Evocation Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Heated Evocation Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            boneArmy: {
                name: 'Bone Army',
                code: '76',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Ashen Primal Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Ashen Primal Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Ashen Primal Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Ashen Primal Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Ashen Primal Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Ashen Primal Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Ashen Primal Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Ashen Primal Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Ashen Primal Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Ashen Primal Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            celticDual: {
                name: 'Celtic Dual',
                code: '41',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Icy War Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Icy War Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Icy War Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Icy War Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Icy War Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Icy War Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Icy War Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Icy War Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Icy War Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Icy War Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            celticSpear: {
                name: 'Celtic Spear',
                code: '40',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Earthen War Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Earthen War Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Earthen War Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Earthen War Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Earthen War Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Earthen War Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Earthen War Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Earthen War Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Earthen War Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Earthen War Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            chants: {
                name: 'Chants',
                code: '16',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Earthen Fervor Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Earthen Fervor Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Earthen Fervor Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Earthen Fervor Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Earthen Fervor Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Earthen Fervor Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Earthen Fervor Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Earthen Fervor Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Earthen Fervor Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Earthen Fervor Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            coldMagic: {
                name: 'Cold Magic',
                code: '19',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Icy Evocation Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Icy Evocation Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Icy Evocation Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Icy Evocation Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Icy Evocation Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Icy Evocation Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Icy Evocation Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Icy Evocation Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Icy Evocation Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Icy Evocation Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            creepingPath: {
                name: 'Creeping Path',
                code: '54',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Oozing Nature Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Oozing Nature Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Oozing Nature Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Oozing Nature Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Oozing Nature Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Oozing Nature Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Oozing Nature Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Oozing Nature Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Oozing Nature Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Oozing Nature Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            criticalStrike: {
                name: 'Critical Strike',
                code: '06',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Heated Battle Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Heated Battle Jewel',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Heated Battle Jewel',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Heated Battle Jewel',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Heated Battle Jewel',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Heated Battle Jewel',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Heated Battle Jewel',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Heated Battle Jewel',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Heated Battle Jewel',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Heated Battle Jewel',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            crossbow: {
                name: 'Crossbow',
                code: '35',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Vapor War Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Vapor War Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Vapor War Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Vapor War Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Vapor War Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Vapor War Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Vapor War Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Vapor War Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Vapor War Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Vapor War Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            crushing: {
                name: 'Crushing',
                code: '08',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Fiery War Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Fiery War Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Fiery War Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Fiery War Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Fiery War Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Fiery War Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Fiery War Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Fiery War Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Fiery War Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Fiery War Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            darkness: {
                name: 'Darkness',
                code: '68',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Icy Chaos Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Icy Chaos Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Icy Chaos Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Icy Chaos Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Icy Chaos Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Icy Chaos Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Icy Chaos Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Icy Chaos Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Icy Chaos Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Icy Chaos Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            deathServant: {
                name: 'Death Servant',
                code: '29',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Ashen Fervor Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Ashen Fervor Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Ashen Fervor Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Ashen Fervor Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Ashen Fervor Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Ashen Fervor Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Ashen Fervor Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Ashen Fervor Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Ashen Fervor Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Ashen Fervor Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            deathsight: {
                name: 'Deathsight',
                code: '27',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Vacuous Fervor Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Vacuous Fervor Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Vacuous Fervor Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Vacuous Fervor Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Vacuous Fervor Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Vacuous Fervor Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Vacuous Fervor Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Vacuous Fervor Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Vacuous Fervor Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Vacuous Fervor Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            dualWield: {
                name: 'Dual Wield',
                code: '12',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Icy War Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Icy War Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Icy War Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Icy War Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Icy War Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Icy War Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Icy War Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Icy War Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Icy War Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Icy War Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            earthMagic: {
                name: 'Earth Magic',
                code: '18',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Earthen Evocation Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Earthen Evocation Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Earthen Evocation Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Earthen Evocation Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Earthen Evocation Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Earthen Evocation Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Earthen Evocation Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Earthen Evocation Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Earthen Evocation Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Earthen Evocation Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            enchantments: {
                name: 'Enchantments',
                code: '49',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Vapor Arcane Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Vapor Arcane Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Vapor Arcane Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Vapor Arcane Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Vapor Arcane Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Vapor Arcane Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Vapor Arcane Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Vapor Arcane Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Vapor Arcane Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Vapor Arcane Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            enhancements: {
                name: 'Enhancements',
                code: '14',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Airy Fervor Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Airy Fervor Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Airy Fervor Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Airy Fervor Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Airy Fervor Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Airy Fervor Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Airy Fervor Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Airy Fervor Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Airy Fervor Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Airy Fervor Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            envenom: {
                name: 'Envenom',
                code: '05',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Dusty Battle Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Dusty Battle Jewel',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Dusty Battle Jewel',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Dusty Battle Jewel',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Dusty Battle Jewel',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Dusty Battle Jewel',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Dusty Battle Jewel',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Dusty Battle Jewel',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Dusty Battle Jewel',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Dusty Battle Jewel',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            etherealShriek: {
                name: 'Ethereal Shriek',
                code: '85',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Ethereal Arcane Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Ethereal Arcane Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Ethereal Arcane Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Ethereal Arcane Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Ethereal Arcane Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Ethereal Arcane Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Ethereal Arcane Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Ethereal Arcane Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Ethereal Arcane Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Ethereal Arcane Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            fireMagic: {
                name: 'Fire Magic',
                code: '20',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Fiery Evocation Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Fiery Evocation Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Fiery Evocation Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Fiery Evocation Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Fiery Evocation Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Fiery Evocation Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Fiery Evocation Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Fiery Evocation Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Fiery Evocation Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Fiery Evocation Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            flexible: {
                name: 'Flexible',
                code: '26',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Molten Magma War Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Molten Magma War Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Molten Magma War Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Molten Magma War Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Molten Magma War Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Molten Magma War Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Molten Magma War Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Molten Magma War Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Molten Magma War Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Molten Magma War Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            hammer: {
                name: 'Hammer',
                code: '61',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Fiery War Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Fiery War Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Fiery War Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Fiery War Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Fiery War Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Fiery War Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Fiery War Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Fiery War Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Fiery War Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Fiery War Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            handToHand: {
                name: 'Hand to Hand',
                code: '75',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Lightning Charged War Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Lightning Charged War Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Lightning Charged War Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Lightning Charged War Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Lightning Charged War Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Lightning Charged War Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Lightning Charged War Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Lightning Charged War Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Lightning Charged War Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Lightning Charged War Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            instruments: {
                name: 'Instruments',
                code: '17',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Vapor Fervor Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Vapor Fervor Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Vapor Fervor Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Vapor Fervor Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Vapor Fervor Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Vapor Fervor Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Vapor Fervor Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Vapor Fervor Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Vapor Fervor Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Vapor Fervor Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            largeWeapons: {
                name: 'Large Weapons',
                code: '39',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Heated War Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Heated War Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Heated War Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Heated War Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Heated War Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Heated War Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Heated War Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Heated War Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Heated War Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Heated War Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            leftAxe: {
                name: 'Left Axe',
                code: '64',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Icy War Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Icy War Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Icy War Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Icy War Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Icy War Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Icy War Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Icy War Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Icy War Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Icy War Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Icy War Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            lightMagic: {
                name: 'Light Magic',
                code: '47',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Fiery Arcane Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Fiery Arcane Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Fiery Arcane Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Fiery Arcane Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Fiery Arcane Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Fiery Arcane Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Fiery Arcane Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Fiery Arcane Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Fiery Arcane Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Fiery Arcane Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            manaMagic: {
                name: 'Mana Magic',
                code: '48',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Watery Arcane Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Watery Arcane Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Watery Arcane Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Watery Arcane Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Watery Arcane Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Watery Arcane Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Watery Arcane Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Watery Arcane Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Watery Arcane Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Watery Arcane Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            matterMagic: {
                name: 'Matter Magic',
                code: '23',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Dusty Evocation Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Dusty Evocation Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Dusty Evocation Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Dusty Evocation Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Dusty Evocation Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Dusty Evocation Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Dusty Evocation Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Dusty Evocation Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Dusty Evocation Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Dusty Evocation Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            mending: {
                name: 'Mending',
                code: '72',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Watery Chaos Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Watery Chaos Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Watery Chaos Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Watery Chaos Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Watery Chaos Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Watery Chaos Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Watery Chaos Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Watery Chaos Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Watery Chaos Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Watery Chaos Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            mentalism: {
                name: 'Mentalism',
                code: '51',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Earthen Arcane Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Earthen Arcane Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Earthen Arcane Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Earthen Arcane Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Earthen Arcane Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Earthen Arcane Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Earthen Arcane Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Earthen Arcane Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Earthen Arcane Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Earthen Arcane Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            mindMagic: {
                name: 'Mind Magic',
                code: '25',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Watery Evocation Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Watery Evocation Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Watery Evocation Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Watery Evocation Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Watery Evocation Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Watery Evocation Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Watery Evocation Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Watery Evocation Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Watery Evocation Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Watery Evocation Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            music: {
                name: 'Music',
                code: '45',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Airy Nature Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Airy Nature Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Airy Nature Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Airy Nature Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Airy Nature Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Airy Nature Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Airy Nature Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Airy Nature Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Airy Nature Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Airy Nature Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            nature: {
                name: 'Nature',
                code: '44',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Earthen Nature Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Earthen Nature Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Earthen Nature Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Earthen Nature Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Earthen Nature Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Earthen Nature Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Earthen Nature Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Earthen Nature Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Earthen Nature Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Earthen Nature Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            nurture: {
                name: 'Nurture',
                code: '42',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Fiery Nature Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Fiery Nature Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Fiery Nature Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Fiery Nature Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Fiery Nature Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Fiery Nature Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Fiery Nature Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Fiery Nature Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Fiery Nature Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Fiery Nature Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            odinsWill: {
                name: 'Odins Will',
                code: '77',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Valiant Primal Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Valiant Primal Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Valiant Primal Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Valiant Primal Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Valiant Primal Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Valiant Primal Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Valiant Primal Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Valiant Primal Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Valiant Primal Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Valiant Primal Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            pacification: {
                name: 'Pacification',
                code: '82',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Earthen Chaos Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Earthen Chaos Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Earthen Chaos Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Earthen Chaos Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Earthen Chaos Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Earthen Chaos Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Earthen Chaos Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Earthen Chaos Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Earthen Chaos Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Earthen Chaos Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            painworking: {
                name: 'Painworking',
                code: '28',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Salt Crusted Fervor Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Salt Crusted Fervor Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Salt Crusted Fervor Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Salt Crusted Fervor Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Salt Crusted Fervor Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Salt Crusted Fervor Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Salt Crusted Fervor Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Salt Crusted Fervor Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Salt Crusted Fervor Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Salt Crusted Fervor Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            parry: {
                name: 'Parry',
                code: '01',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Vapor Battle Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Vapor Battle Jewel',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Vapor Battle Jewel',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Vapor Battle Jewel',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Vapor Battle Jewel',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Vapor Battle Jewel',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Vapor Battle Jewel',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Vapor Battle Jewel',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Vapor Battle Jewel',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Vapor Battle Jewel',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            phantasmalWail: {
                name: 'Phantasmal Wail',
                code: '84',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Phantasmal Arcane Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Phantasmal Arcane Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Phantasmal Arcane Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Phantasmal Arcane Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Phantasmal Arcane Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Phantasmal Arcane Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Phantasmal Arcane Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Phantasmal Arcane Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Phantasmal Arcane Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Phantasmal Arcane Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            piercing: {
                name: 'Piercing',
                code: '38',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Dusty War Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Dusty War Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Dusty War Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Dusty War Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Dusty War Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Dusty War Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Dusty War Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Dusty War Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Dusty War Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Dusty War Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            polearm: {
                name: 'Polearm',
                code: '11',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Earthen War Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Earthen War Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Earthen War Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Earthen War Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Earthen War Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Earthen War Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Earthen War Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Earthen War Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Earthen War Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Earthen War Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            regrowth: {
                name: 'Regrowth',
                code: '43',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Watery Nature Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Watery Nature Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Watery Nature Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Watery Nature Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Watery Nature Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Watery Nature Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Watery Nature Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Watery Nature Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Watery Nature Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Watery Nature Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            rejuvenation: {
                name: 'Rejuvenation',
                code: '15',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Watery Fervor Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Watery Fervor Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Watery Fervor Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Watery Fervor Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Watery Fervor Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Watery Fervor Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Watery Fervor Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Watery Fervor Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Watery Fervor Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Watery Fervor Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            runecarving: {
                name: 'Runecarving',
                code: '70',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Heated Chaos Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Heated Chaos Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Heated Chaos Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Heated Chaos Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Heated Chaos Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Heated Chaos Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Heated Chaos Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Heated Chaos Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Heated Chaos Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Heated Chaos Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            scythe: {
                name: 'Scythe',
                code: '52',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Light War Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Light War Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Light War Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Light War Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Light War Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Light War Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Light War Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Light War Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Light War Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Light War Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            shield: {
                name: 'Shield',
                code: '02',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Fiery Battle Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Fiery Battle Jewel',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Fiery Battle Jewel',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Fiery Battle Jewel',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Fiery Battle Jewel',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Fiery Battle Jewel',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Fiery Battle Jewel',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Fiery Battle Jewel',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Fiery Battle Jewel',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Fiery Battle Jewel',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            slashing: {
                name: 'Slashing',
                code: '07',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Watery War Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Watery War Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Watery War Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Watery War Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Watery War Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Watery War Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Watery War Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Watery War Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Watery War Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Watery War Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            smite: {
                name: 'Smite',
                code: '13',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Fiery Fervor Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Fiery Fervor Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Fiery Fervor Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Fiery Fervor Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Fiery Fervor Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Fiery Fervor Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Fiery Fervor Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Fiery Fervor Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Fiery Fervor Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Fiery Fervor Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            soulrending: {
                name: 'Soulrending',
                code: '30',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Steaming Fervor Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Steaming Fervor Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Steaming Fervor Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Steaming Fervor Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Steaming Fervor Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Steaming Fervor Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Steaming Fervor Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Steaming Fervor Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Steaming Fervor Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Steaming Fervor Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            spear: {
                name: 'Spear',
                code: '63',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Heated War Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Heated War Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Heated War Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Heated War Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Heated War Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Heated War Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Heated War Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Heated War Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Heated War Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Heated War Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            spectralGuard: {
                name: 'Spectral Guard',
                code: '83',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Spectral Arcane Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Spectral Arcane Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Spectral Arcane Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Spectral Arcane Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Spectral Arcane Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Spectral Arcane Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Spectral Arcane Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Spectral Arcane Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Spectral Arcane Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Spectral Arcane Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            spiritMagic: {
                name: 'Spirit Magic',
                code: '24',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Vapor Evocation Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Vapor Evocation Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Vapor Evocation Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Vapor Evocation Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Vapor Evocation Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Vapor Evocation Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Vapor Evocation Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Vapor Evocation Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Vapor Evocation Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Vapor Evocation Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            staff: {
                name: 'Staff',
                code: '03',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Earthen Battle Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Earthen Battle Jewel',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Earthen Battle Jewel',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Earthen Battle Jewel',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Earthen Battle Jewel',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Earthen Battle Jewel',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Earthen Battle Jewel',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Earthen Battle Jewel',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Earthen Battle Jewel',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Earthen Battle Jewel',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            stealth: {
                name: 'Stealth',
                code: '04',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Airy Battle Jewel',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Airy Battle Jewel',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Airy Battle Jewel',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Airy Battle Jewel',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Airy Battle Jewel',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Airy Battle Jewel',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Airy Battle Jewel',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Airy Battle Jewel',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Airy Battle Jewel',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Airy Battle Jewel',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            stormcalling: {
                name: 'Stormcalling',
                code: '67',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Fiery Primal Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Fiery Primal Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Fiery Primal Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Fiery Primal Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Fiery Primal Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Fiery Primal Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Fiery Primal Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Fiery Primal Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Fiery Primal Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Fiery Primal Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            subterranean: {
                name: 'Subterranean',
                code: '74',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Fiery Chaos Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Fiery Chaos Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Fiery Chaos Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Fiery Chaos Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Fiery Chaos Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Fiery Chaos Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Fiery Chaos Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Fiery Chaos Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Fiery Chaos Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Fiery Chaos Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            summoning: {
                name: 'Summoning',
                code: '71',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Vapor Chaos Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Vapor Chaos Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Vapor Chaos Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Vapor Chaos Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Vapor Chaos Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Vapor Chaos Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Vapor Chaos Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Vapor Chaos Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Vapor Chaos Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Vapor Chaos Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            suppression: {
                name: 'Suppression',
                code: '69',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Dusty Chaos Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Dusty Chaos Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Dusty Chaos Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Dusty Chaos Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Dusty Chaos Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Dusty Chaos Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Dusty Chaos Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Dusty Chaos Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Dusty Chaos Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Dusty Chaos Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            sword: {
                name: 'Sword',
                code: '60',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Watery War Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Watery War Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Watery War Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Watery War Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Watery War Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Watery War Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Watery War Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Watery War Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Watery War Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Watery War Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            thrownWeapons: {
                name: 'Thrown Weapons',
                code: '79',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Midgard'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Vapor War Rune',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Vapor War Rune',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Vapor War Rune',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Vapor War Rune',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Vapor War Rune',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Vapor War Rune',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Vapor War Rune',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Vapor War Rune',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Vapor War Rune',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Vapor War Rune',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            thrusting: {
                name: 'Thrusting',
                code: '09',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Dusty War Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Dusty War Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Dusty War Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Dusty War Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Dusty War Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Dusty War Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Dusty War Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Dusty War Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Dusty War Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Dusty War Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            twoHanded: {
                name: 'Two Handed',
                code: '10',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Heated War Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Heated War Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Heated War Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Heated War Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Heated War Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Heated War Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Heated War Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Heated War Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Heated War Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Heated War Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            valor: {
                name: 'Valor',
                code: '46',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Airy Arcane Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Airy Arcane Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Airy Arcane Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Airy Arcane Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Airy Arcane Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Airy Arcane Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Airy Arcane Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Airy Arcane Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Airy Arcane Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Airy Arcane Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            verdantPath: {
                name: 'Verdant Path',
                code: '55',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Mineral Encrusted Nature Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Mineral Encrusted Nature Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Mineral Encrusted Nature Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Mineral Encrusted Nature Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Mineral Encrusted Nature Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Mineral Encrusted Nature Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Mineral Encrusted Nature Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Mineral Encrusted Nature Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Mineral Encrusted Nature Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Mineral Encrusted Nature Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            voidMagic: {
                name: 'Void Magic',
                code: '50',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Hibernia'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Icy Arcane Spell Stone',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Icy Arcane Spell Stone',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Icy Arcane Spell Stone',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Icy Arcane Spell Stone',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Icy Arcane Spell Stone',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Icy Arcane Spell Stone',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Icy Arcane Spell Stone',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Icy Arcane Spell Stone',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Icy Arcane Spell Stone',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Icy Arcane Spell Stone',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            },
            windMagic: {
                name: 'Wind Magic',
                code: '21',
                craft: true,
                utility: 5,
                maxValue: 11,
                realm: [
                    'Albion'
                ],
                values: {
                    1: {
                        imbue: 0.5,
                        gem: 'Raw Airy Evocation Sigil',
                        value: 1,
                        price: 160
                    },
                    2: {
                        imbue: 2.5,
                        gem: 'Uncut Airy Evocation Sigil',
                        value: 2,
                        price: 920
                    },
                    3: {
                        imbue: 5,
                        gem: 'Rough Airy Evocation Sigil',
                        value: 3,
                        price: 3900
                    },
                    4: {
                        imbue: 7.5,
                        gem: 'Flawed Airy Evocation Sigil',
                        value: 4,
                        price: 13900
                    },
                    5: {
                        imbue: 10,
                        gem: 'Imperfect Airy Evocation Sigil',
                        value: 5,
                        price: 40100
                    },
                    6: {
                        imbue: 12.5,
                        gem: 'Polished Airy Evocation Sigil',
                        value: 6,
                        price: 88980
                    },
                    7: {
                        imbue: 15,
                        gem: 'Faceted Airy Evocation Sigil',
                        value: 7,
                        price: 133000
                    },
                    8: {
                        imbue: 17.5,
                        gem: 'Precious Airy Evocation Sigil',
                        value: 8,
                        price: 198920
                    },
                    9: {
                        imbue: 20,
                        gem: 'Flawless Airy Evocation Sigil',
                        value: 9,
                        price: 258240
                    },
                    10: {
                        imbue: 22.5,
                        gem: 'Perfect Airy Evocation Sigil',
                        value: 10,
                        price: 296860
                    }
                },
                type: 'skills'
            }
        }
    },
    focus: {
        name: 'Focus',
        code: 'focus',
        default: false,
        effects: {
            allFocus: {
                name: 'All focus',
                code: 'fy',
                craft: false,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion',
                    'Midgard',
                    'Hibernia'
                ],
                values: {},
                type: 'focus'
            },
            arboreal: {
                name: 'Arboreal focus',
                code: 'fl',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Hibernia'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Steaming Stone',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Steaming Stone',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Steaming Stone',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Steaming Stone',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Steaming Stone',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Steaming Stone',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Steaming Stone',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Steaming Stone',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Steaming Stone',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Steaming Stone',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            bodyMagic: {
                name: 'Body Magic focus',
                code: 'fe',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Heat Sigil',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Heat Sigil',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Heat Sigil',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Heat Sigil',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Heat Sigil',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Heat Sigil',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Heat Sigil',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Heat Sigil',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Heat Sigil',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Heat Sigil',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            bonedancing: {
                name: 'Bonedancing focus',
                code: 'ft',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Midgard'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Ashen Rune',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Ashen Rune',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Ashen Rune',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Ashen Rune',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Ashen Rune',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Ashen Rune',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Ashen Rune',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Ashen Rune',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Ashen Rune',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Ashen Rune',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            coldMagic: {
                name: 'Cold Magic focus',
                code: 'fb',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Ice Sigil',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Ice Sigil',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Ice Sigil',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Ice Sigil',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Ice Sigil',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Ice Sigil',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Ice Sigil',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Ice Sigil',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Ice Sigil',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Ice Sigil',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            creeping: {
                name: 'Creeping focus',
                code: 'fm',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Hibernia'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Oozing Stone',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Oozing Stone',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Oozing Stone',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Oozing Stone',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Oozing Stone',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Oozing Stone',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Oozing Stone',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Oozing Stone',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Oozing Stone',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Oozing Stone',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            darkness: {
                name: 'Darkness focus',
                code: 'fu',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Midgard'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Icy Rune',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Icy Rune',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Icy Rune',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Icy Rune',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Icy Rune',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Icy Rune',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Icy Rune',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Icy Rune',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Icy Rune',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Icy Rune',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            deathservant: {
                name: 'Deathservant focus',
                code: 'fk',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Ashen Sigil',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Ashen Sigil',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Ashen Sigil',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Ashen Sigil',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Ashen Sigil',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Ashen Sigil',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Ashen Sigil',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Ashen Sigil',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Ashen Sigil',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Ashen Sigil',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            deathsight: {
                name: 'Deathsight focus',
                code: 'fi',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Vacuous Sigil',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Vacuous Sigil',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Vacuous Sigil',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Vacuous Sigil',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Vacuous Sigil',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Vacuous Sigil',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Vacuous Sigil',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Vacuous Sigil',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Vacuous Sigil',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Vacuous Sigil',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            earthMagic: {
                name: 'Earth Magic focus',
                code: 'fa',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Earth Sigil',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Earth Sigil',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Earth Sigil',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Earth Sigil',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Earth Sigil',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Earth Sigil',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Earth Sigil',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Earth Sigil',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Earth Sigil',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Earth Sigil',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            enchantments: {
                name: 'Enchantments focus',
                code: 'fn',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Hibernia'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Vapor Stone',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Vapor Stone',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Vapor Stone',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Vapor Stone',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Vapor Stone',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Vapor Stone',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Vapor Stone',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Vapor Stone',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Vapor Stone',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Vapor Stone',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            etherealShriek: {
                name: 'Ethereal Shriek focus',
                code: 'gb',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Hibernia'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Ethereal focus Stone',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Ethereal focus Stone',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Ethereal focus Stone',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Ethereal focus Stone',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Ethereal focus Stone',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Ethereal focus Stone',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Ethereal focus Stone',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Ethereal focus Stone',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Ethereal focus Stone',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Ethereal focus Stone',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            fireMagic: {
                name: 'Fire Magic focus',
                code: 'fc',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Fire Sigil',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Fire Sigil',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Fire Sigil',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Fire Sigil',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Fire Sigil',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Fire Sigil',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Fire Sigil',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Fire Sigil',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Fire Sigil',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Fire Sigil',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            light: {
                name: 'Light focus',
                code: 'fo',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Hibernia'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Fiery Stone',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Fiery Stone',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Fiery Stone',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Fiery Stone',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Fiery Stone',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Fiery Stone',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Fiery Stone',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Fiery Stone',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Fiery Stone',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Fiery Stone',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            mana: {
                name: 'Mana focus',
                code: 'fp',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Hibernia'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Watery Stone',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Watery Stone',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Watery Stone',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Watery Stone',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Watery Stone',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Watery Stone',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Watery Stone',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Watery Stone',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Watery Stone',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Watery Stone',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            matterMagic: {
                name: 'Matter Magic focus',
                code: 'ff',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Dust Sigil',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Dust Sigil',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Dust Sigil',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Dust Sigil',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Dust Sigil',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Dust Sigil',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Dust Sigil',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Dust Sigil',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Dust Sigil',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Dust Sigil',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            mentalism: {
                name: 'Mentalism focus',
                code: 'fq',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Hibernia'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Earthen Stone',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Earthen Stone',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Earthen Stone',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Earthen Stone',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Earthen Stone',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Earthen Stone',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Earthen Stone',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Earthen Stone',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Earthen Stone',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Earthen Stone',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            mindMagic: {
                name: 'Mind Magic focus',
                code: 'fh',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Water Sigil',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Water Sigil',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Water Sigil',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Water Sigil',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Water Sigil',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Water Sigil',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Water Sigil',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Water Sigil',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Water Sigil',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Water Sigil',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            painworking: {
                name: 'Painworking focus',
                code: 'fj',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Salt Crusted Sigil',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Salt Crusted Sigil',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Salt Crusted Sigil',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Salt Crusted Sigil',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Salt Crusted Sigil',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Salt Crusted Sigil',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Salt Crusted Sigil',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Salt Crusted Sigil',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Salt Crusted Sigil',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Salt Crusted Sigil',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            phantasmalWail: {
                name: 'Phantasmal Wail focus',
                code: 'ga',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Hibernia'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Phantasmal focus Stone',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Phantasmal focus Stone',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Phantasmal focus Stone',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Phantasmal focus Stone',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Phantasmal focus Stone',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Phantasmal focus Stone',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Phantasmal focus Stone',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Phantasmal focus Stone',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Phantasmal focus Stone',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Phantasmal focus Stone',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            runecarving: {
                name: 'Runecarving focus',
                code: 'fv',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Midgard'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Heated Rune',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Heated Rune',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Heated Rune',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Heated Rune',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Heated Rune',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Heated Rune',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Heated Rune',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Heated Rune',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Heated Rune',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Heated Rune',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            spectralGuard: {
                name: 'Spectral Guard focus',
                code: 'fz',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Hibernia'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Spectral Arcane focus Stone',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Spectral Arcane focus Stone',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Spectral Arcane focus Stone',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Spectral Arcane focus Stone',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Spectral Arcane focus Stone',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Spectral Arcane focus Stone',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Spectral Arcane focus Stone',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Spectral Arcane focus Stone',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Spectral Arcane focus Stone',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Spectral Arcane focus Stone',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            spiritMagic: {
                name: 'Spirit Magic focus',
                code: 'fg',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Vapor Sigil',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Vapor Sigil',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Vapor Sigil',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Vapor Sigil',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Vapor Sigil',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Vapor Sigil',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Vapor Sigil',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Vapor Sigil',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Vapor Sigil',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Vapor Sigil',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            summoning: {
                name: 'Summoning focus',
                code: 'fw',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Midgard'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Vapor Rune',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Vapor Rune',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Vapor Rune',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Vapor Rune',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Vapor Rune',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Vapor Rune',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Vapor Rune',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Vapor Rune',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Vapor Rune',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Vapor Rune',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            suppression: {
                name: 'Suppression focus',
                code: 'fx',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Midgard'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Dusty Rune',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Dusty Rune',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Dusty Rune',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Dusty Rune',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Dusty Rune',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Dusty Rune',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Dusty Rune',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Dusty Rune',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Dusty Rune',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Dusty Rune',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            verdant: {
                name: 'Verdant focus',
                code: 'fr',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Hibernia'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Mineral Encrusted Stone',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Mineral Encrusted Stone',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Mineral Encrusted Stone',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Mineral Encrusted Stone',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Mineral Encrusted Stone',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Mineral Encrusted Stone',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Mineral Encrusted Stone',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Mineral Encrusted Stone',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Mineral Encrusted Stone',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Mineral Encrusted Stone',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            voidFocus: {
                name: 'Void focus',
                code: 'fs',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Hibernia'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Icy Stone',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Icy Stone',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Icy Stone',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Icy Stone',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Icy Stone',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Icy Stone',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Icy Stone',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Icy Stone',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Icy Stone',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Icy Stone',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            },
            windMagic: {
                name: 'Wind Magic focus',
                code: 'fd',
                craft: true,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion'
                ],
                values: {
                    5: {
                        imbue: 0.5,
                        gem: 'Raw Air Sigil',
                        value: 5,
                        price: 160
                    },
                    10: {
                        imbue: 0.5,
                        gem: 'Uncut Air Sigil',
                        value: 10,
                        price: 980
                    },
                    15: {
                        imbue: 0.5,
                        gem: 'Rough Air Sigil',
                        value: 15,
                        price: 4020
                    },
                    20: {
                        imbue: 0.5,
                        gem: 'Flawed Air Sigil',
                        value: 20,
                        price: 14080
                    },
                    25: {
                        imbue: 0.5,
                        gem: 'Imperfect Air Sigil',
                        value: 25,
                        price: 40340
                    },
                    30: {
                        imbue: 0.5,
                        gem: 'Polished Air Sigil',
                        value: 30,
                        price: 89280
                    },
                    35: {
                        imbue: 0.5,
                        gem: 'Faceted Air Sigil',
                        value: 35,
                        price: 133360
                    },
                    40: {
                        imbue: 0.5,
                        gem: 'Precious Air Sigil',
                        value: 40,
                        price: 199340
                    },
                    45: {
                        imbue: 0.5,
                        gem: 'Flawless Air Sigil',
                        value: 45,
                        price: 258720
                    },
                    50: {
                        imbue: 0.5,
                        gem: 'Perfect Air Sigil',
                        value: 50,
                        price: 297400
                    }
                },
                type: 'focus'
            }
        }
    },
    bonus: {
        name: 'Bonus',
        code: 'bonus',
        default: false,
        effects: {
            arcaneSyphon: {
                name: 'Arcane Syphon',
                code: 'bo',
                craft: false,
                utility: 5,
                maxValue: 26,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            armorAbsorption: {
                name: 'Armor Absorption',
                code: 'bp',
                craft: false,
                utility: 5,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            armorFactor: {
                name: 'Armor Factor',
                code: 'ba',
                craft: false,
                utility: 1,
                maxValue: 50,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            blockChance: {
                name: 'Block Chance',
                code: 'bq',
                craft: false,
                utility: 5,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            bonusCoin: {
                name: 'Bonus Coin',
                code: 'bw',
                craft: false,
                utility: 5,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            buffEffectivness: {
                name: 'Buff Effectivness',
                code: 'be',
                craft: false,
                utility: 2,
                maxValue: 25,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            castingSpeed: {
                name: 'Casting Speed',
                code: 'bh',
                craft: false,
                utility: 5,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            debuffEffectivness: {
                name: 'Debuff Effectivness',
                code: 'bd',
                craft: false,
                utility: 2,
                maxValue: 25,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            dps: {
                name: 'DPS',
                code: 'bz',
                craft: false,
                utility: 0,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            encumberance: {
                name: 'Encumberance',
                code: 'ce',
                craft: false,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            enduranceRegeneration: {
                name: 'Endurance Regeneration',
                code: 'bv',
                craft: false,
                utility: 0,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            evadeChance: {
                name: 'Evade Chance',
                code: 'by',
                craft: false,
                utility: 2,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            fatigue: {
                name: 'Fatigue',
                code: 'bb',
                craft: false,
                utility: 2,
                maxValue: 25,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            healingEffectivness: {
                name: 'Healing Effectivness',
                code: 'bf',
                craft: false,
                utility: 2,
                maxValue: 25,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            healthRegeneration: {
                name: 'Health Regeneration',
                code: 'bt',
                craft: false,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            meleeCombatSpeed: {
                name: 'Melee Combat Speed',
                code: 'bm',
                craft: false,
                utility: 5,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            meleeDamage: {
                name: 'Melee Damage',
                code: 'bl',
                craft: false,
                utility: 5,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            mesmerizeReduction: {
                name: 'Mesmerize Reduction',
                code: 'ca',
                craft: false,
                utility: 0,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            parryChance: {
                name: 'Parry Chance',
                code: 'br',
                craft: false,
                utility: 2,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            powerPool: {
                name: 'Power Pool',
                code: 'bc',
                craft: false,
                utility: 2,
                maxValue: 25,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            powerRegeneration: {
                name: 'Power Regeneration',
                code: 'bu',
                craft: false,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            realmPoints: {
                name: 'Realm Points',
                code: 'bx',
                craft: false,
                utility: 2,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            resistPierce: {
                name: 'Resist Pierce',
                code: 'bn',
                craft: false,
                utility: 5,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            safeFall: {
                name: 'Safe Fall',
                code: 'cd',
                craft: false,
                utility: 0,
                maxValue: 50,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            spellDamage: {
                name: 'Spell Damage',
                code: 'bj',
                craft: false,
                utility: 5,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            spellDuration: {
                name: 'Spell Duration',
                code: 'bg',
                craft: false,
                utility: 2,
                maxValue: 25,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            spellLevel: {
                name: 'Spell Level',
                code: 'bs',
                craft: false,
                utility: 0,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            spellRange: {
                name: 'Spell Range',
                code: 'bi',
                craft: false,
                utility: 5,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            snareReduction: {
                name: 'Snare Reduction',
                code: 'cb',
                craft: false,
                utility: 0,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            stunReduction: {
                name: 'Stun Reduction',
                code: 'cc',
                craft: false,
                utility: 0,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            },
            styleDamage: {
                name: 'Style Damage',
                code: 'bk',
                craft: false,
                utility: 5,
                maxValue: 10,
                realm: [
                    'Albion',
                    'Hibernia',
                    'Midgard'
                ],
                values: {},
                type: 'bonus'
            }
        }
    }
}

export const effectByCode: Record<string, Effect> = {}
Object.values(effectTypes).forEach((effectType: EffectType): void => {
    Object.values(effectType.effects).forEach((effect: Effect): void => {
        effectByCode[effect.code] = effect
    })
})

export const effectTypeByCode: Record<string, EffectType> = {}
Object.values(effectTypes).forEach((effectType: EffectType): void => {
    effectTypeByCode[effectType.code] = effectType
})

effectTypes.skills.effects.allMeleeAlbion.increase = {
    type: IncreaseType.value,
    realm: {
        Albion: [
            effectTypes.skills.effects.crushing,
            effectTypes.skills.effects.slashing,
            effectTypes.skills.effects.thrusting,
            effectTypes.skills.effects.polearm,
            effectTypes.skills.effects.twoHanded,
            effectTypes.skills.effects.staff,
            effectTypes.skills.effects.flexible,
        ],
        Hibernia: [],
        Midgard: [],
    }
}
effectTypes.skills.effects.allMeleeHibernia.increase = {
    type: IncreaseType.value,
    realm: {
        Albion: [],
        Hibernia: [
            effectTypes.skills.effects.blades,
            effectTypes.skills.effects.blunt,
            effectTypes.skills.effects.piercing,
            effectTypes.skills.effects.largeWeapons,
            effectTypes.skills.effects.celticSpear,
            effectTypes.skills.effects.scythe,
        ],
        Midgard: [],
    }
}
effectTypes.skills.effects.allMeleeMidgard.increase = {
    type: IncreaseType.value,
    realm: {
        Albion: [],
        Hibernia: [],
        Midgard: [
            effectTypes.skills.effects.axe,
            effectTypes.skills.effects.hammer,
            effectTypes.skills.effects.sword,
            effectTypes.skills.effects.spear,
            effectTypes.skills.effects.handToHand
        ],
    }
}

effectTypes.skills.effects.allMagicAlbion.increase = {
    type: IncreaseType.value,
    realm: {
        Albion: [
            effectTypes.skills.effects.bodyMagic,
            effectTypes.skills.effects.matterMagic,
            effectTypes.skills.effects.spiritMagic,
            effectTypes.skills.effects.rejuvenation,
            effectTypes.skills.effects.enhancements,
            effectTypes.skills.effects.smite,
            effectTypes.skills.effects.instruments,
            effectTypes.skills.effects.deathsight,
            effectTypes.skills.effects.painworking,
            effectTypes.skills.effects.deathServant,
            effectTypes.skills.effects.soulrending,
            effectTypes.skills.effects.mindMagic,
            effectTypes.skills.effects.earthMagic,
            effectTypes.skills.effects.coldMagic,
            effectTypes.skills.effects.windMagic,
            effectTypes.skills.effects.fireMagic,
        ],
        Hibernia: [],
        Midgard: [],
    }
}
effectTypes.skills.effects.allMagicHibernia.increase = {
    type: IncreaseType.value,
    realm: {
        Albion: [],
        Hibernia: [
            effectTypes.skills.effects.arborealPath,
            effectTypes.skills.effects.creepingPath,
            effectTypes.skills.effects.verdantPath,
            effectTypes.skills.effects.regrowth,
            effectTypes.skills.effects.nurture,
            effectTypes.skills.effects.music,
            effectTypes.skills.effects.valor,
            effectTypes.skills.effects.nature,
            effectTypes.skills.effects.lightMagic,
            effectTypes.skills.effects.manaMagic,
            effectTypes.skills.effects.voidMagic,
            effectTypes.skills.effects.enchantments,
            effectTypes.skills.effects.mentalism,
        ],
        Midgard: [],
    }
}
effectTypes.skills.effects.allMagicMidgard.increase = {
    type: IncreaseType.value,
    realm: {
        Albion: [],
        Hibernia: [],
        Midgard: [
            effectTypes.skills.effects.darkness,
            effectTypes.skills.effects.suppression,
            effectTypes.skills.effects.boneArmy,
            effectTypes.skills.effects.mending,
            effectTypes.skills.effects.augmentation,
            effectTypes.skills.effects.pacification,
            effectTypes.skills.effects.runecarving,
            effectTypes.skills.effects.subterranean,
            effectTypes.skills.effects.battlesongs,
            effectTypes.skills.effects.summoning,
            effectTypes.skills.effects.stormcalling
        ],
    }
}

effectTypes.focus.effects.allFocus.increase = {
    type: IncreaseType.value,
    realm: {
        Albion: [
            effectTypes.focus.effects.earthMagic,
            effectTypes.focus.effects.coldMagic,
            effectTypes.focus.effects.fireMagic,
            effectTypes.focus.effects.windMagic,
            effectTypes.focus.effects.bodyMagic,
            effectTypes.focus.effects.matterMagic,
            effectTypes.focus.effects.spiritMagic,
            effectTypes.focus.effects.mindMagic,
            effectTypes.focus.effects.deathsight,
            effectTypes.focus.effects.painworking,
            effectTypes.focus.effects.deathservant,
        ],
        Hibernia: [
            effectTypes.focus.effects.arboreal,
            effectTypes.focus.effects.creeping,
            effectTypes.focus.effects.enchantments,
            effectTypes.focus.effects.light,
            effectTypes.focus.effects.mana,
            effectTypes.focus.effects.mentalism,
            effectTypes.focus.effects.verdant,
            effectTypes.focus.effects.voidFocus,
            effectTypes.focus.effects.spectralGuard,
            effectTypes.focus.effects.phantasmalWail,
            effectTypes.focus.effects.etherealShriek,
        ],
        Midgard: [
            effectTypes.focus.effects.bonedancing,
            effectTypes.focus.effects.darkness,
            effectTypes.focus.effects.runecarving,
            effectTypes.focus.effects.summoning,
            effectTypes.focus.effects.suppression,
        ]
    }
}

effectTypes.stats.effects.acuity.increase = {
    type: IncreaseType.acuity,
    realm: {Albion: [], Hibernia: [], Midgard: []},
    realmClass: {
        Armsman: effectTypes.stats.effects.acuity,
        Cabalist: effectTypes.stats.effects.intelligence,
        Cleric: effectTypes.stats.effects.piety,
        Friar: effectTypes.stats.effects.piety,
        Heretic: effectTypes.stats.effects.piety,
        Infiltrator: effectTypes.stats.effects.acuity,
        Mercenary: effectTypes.stats.effects.acuity,
        Minstrel: effectTypes.stats.effects.charisma,
        Necromancer: effectTypes.stats.effects.intelligence,
        Paladin: effectTypes.stats.effects.piety,
        Reaver: effectTypes.stats.effects.piety,
        Scout: effectTypes.stats.effects.acuity,
        Sorcerer: effectTypes.stats.effects.intelligence,
        Theurgist: effectTypes.stats.effects.intelligence,
        Wizard: effectTypes.stats.effects.intelligence,

        Animist: effectTypes.stats.effects.intelligence,
        Bainshee: effectTypes.stats.effects.intelligence,
        Bard: effectTypes.stats.effects.charisma,
        Blademaster: effectTypes.stats.effects.acuity,
        Champion: effectTypes.stats.effects.intelligence,
        Druid: effectTypes.stats.effects.empathy,
        Eldritch: effectTypes.stats.effects.intelligence,
        Enchanter: effectTypes.stats.effects.intelligence,
        Hero: effectTypes.stats.effects.acuity,
        Mentalist: effectTypes.stats.effects.intelligence,
        Nightshade: effectTypes.stats.effects.intelligence,
        Ranger: effectTypes.stats.effects.acuity,
        Valewalker: effectTypes.stats.effects.intelligence,
        Warden: effectTypes.stats.effects.empathy,

        Berserker: effectTypes.stats.effects.acuity,
        Bonedancer: effectTypes.stats.effects.piety,
        Healer: effectTypes.stats.effects.intelligence,
        Hunter: effectTypes.stats.effects.acuity,
        Runemaster: effectTypes.stats.effects.piety,
        Savage: effectTypes.stats.effects.acuity,
        Shadowblade: effectTypes.stats.effects.acuity,
        Shaman: effectTypes.stats.effects.piety,
        Skald: effectTypes.stats.effects.charisma,
        Spiritmaster: effectTypes.stats.effects.piety,
        Thane: effectTypes.stats.effects.piety,
        Valkyrie: effectTypes.stats.effects.piety,
        Warrior: effectTypes.stats.effects.acuity
    }
}

effectTypes.statCaps.effects.strength.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.stats.effects.strength
        ],
        Hibernia: [
            effectTypes.stats.effects.strength
        ],
        Midgard: [
            effectTypes.stats.effects.strength
        ],
    }
}
effectTypes.statCaps.effects.constitution.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.stats.effects.constitution
        ],
        Hibernia: [
            effectTypes.stats.effects.constitution
        ],
        Midgard: [
            effectTypes.stats.effects.constitution
        ],
    }
}
effectTypes.statCaps.effects.dexterity.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.stats.effects.dexterity
        ],
        Hibernia: [
            effectTypes.stats.effects.dexterity
        ],
        Midgard: [
            effectTypes.stats.effects.dexterity
        ],
    }
}
effectTypes.statCaps.effects.quickness.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.stats.effects.quickness
        ],
        Hibernia: [
            effectTypes.stats.effects.quickness
        ],
        Midgard: [
            effectTypes.stats.effects.quickness
        ],
    }
}
effectTypes.statCaps.effects.intelligence.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.stats.effects.intelligence
        ],
        Hibernia: [
            effectTypes.stats.effects.intelligence
        ],
        Midgard: [
            effectTypes.stats.effects.intelligence
        ],
    }
}
effectTypes.statCaps.effects.piety.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.stats.effects.piety
        ],
        Hibernia: [
            effectTypes.stats.effects.piety
        ],
        Midgard: [
            effectTypes.stats.effects.piety
        ],
    }
}
effectTypes.statCaps.effects.charisma.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.stats.effects.charisma
        ],
        Hibernia: [
            effectTypes.stats.effects.charisma
        ],
        Midgard: [
            effectTypes.stats.effects.charisma
        ],
    }
}
effectTypes.statCaps.effects.empathy.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.stats.effects.empathy
        ],
        Hibernia: [
            effectTypes.stats.effects.empathy
        ],
        Midgard: [
            effectTypes.stats.effects.empathy
        ],
    }
}
effectTypes.statCaps.effects.acuity.increase = {
    type: IncreaseType.acuityCap,
    realm: {Albion: [
            effectTypes.stats.effects.acuity
        ], Hibernia: [
            effectTypes.stats.effects.acuity
        ], Midgard: [
            effectTypes.stats.effects.acuity
        ]},
    realmClass: {
        Armsman: effectTypes.statCaps.effects.acuity,
        Cabalist: effectTypes.statCaps.effects.intelligence,
        Cleric: effectTypes.statCaps.effects.piety,
        Friar: effectTypes.statCaps.effects.piety,
        Heretic: effectTypes.statCaps.effects.piety,
        Infiltrator: effectTypes.statCaps.effects.acuity,
        Mercenary: effectTypes.statCaps.effects.acuity,
        Minstrel: effectTypes.statCaps.effects.charisma,
        Necromancer: effectTypes.statCaps.effects.intelligence,
        Paladin: effectTypes.statCaps.effects.piety,
        Reaver: effectTypes.statCaps.effects.piety,
        Scout: effectTypes.statCaps.effects.acuity,
        Sorcerer: effectTypes.statCaps.effects.intelligence,
        Theurgist: effectTypes.statCaps.effects.intelligence,
        Wizard: effectTypes.statCaps.effects.intelligence,

        Animist: effectTypes.statCaps.effects.intelligence,
        Bainshee: effectTypes.statCaps.effects.intelligence,
        Bard: effectTypes.statCaps.effects.charisma,
        Blademaster: effectTypes.statCaps.effects.acuity,
        Champion: effectTypes.statCaps.effects.intelligence,
        Druid: effectTypes.statCaps.effects.empathy,
        Eldritch: effectTypes.statCaps.effects.intelligence,
        Enchanter: effectTypes.statCaps.effects.intelligence,
        Hero: effectTypes.statCaps.effects.acuity,
        Mentalist: effectTypes.statCaps.effects.intelligence,
        Nightshade: effectTypes.statCaps.effects.intelligence,
        Ranger: effectTypes.statCaps.effects.acuity,
        Valewalker: effectTypes.statCaps.effects.intelligence,
        Warden: effectTypes.statCaps.effects.empathy,

        Berserker: effectTypes.statCaps.effects.acuity,
        Bonedancer: effectTypes.statCaps.effects.piety,
        Healer: effectTypes.statCaps.effects.intelligence,
        Hunter: effectTypes.statCaps.effects.acuity,
        Runemaster: effectTypes.statCaps.effects.piety,
        Savage: effectTypes.statCaps.effects.acuity,
        Shadowblade: effectTypes.statCaps.effects.acuity,
        Shaman: effectTypes.statCaps.effects.piety,
        Skald: effectTypes.statCaps.effects.charisma,
        Spiritmaster: effectTypes.statCaps.effects.piety,
        Thane: effectTypes.statCaps.effects.piety,
        Valkyrie: effectTypes.statCaps.effects.piety,
        Warrior: effectTypes.statCaps.effects.acuity
    }
}
effectTypes.statCaps.effects.hits.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.stats.effects.hits
        ],
        Hibernia: [
            effectTypes.stats.effects.hits
        ],
        Midgard: [
            effectTypes.stats.effects.hits
        ],
    }
}
effectTypes.statCaps.effects.power.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.stats.effects.power
        ],
        Hibernia: [
            effectTypes.stats.effects.power
        ],
        Midgard: [
            effectTypes.stats.effects.power
        ],
    }
}

effectTypes.mythStatCaps.effects.strength.increase = {
    type: IncreaseType.mythCap,
    realm: {
        Albion: [
            effectTypes.stats.effects.strength
        ],
        Hibernia: [
            effectTypes.stats.effects.strength
        ],
        Midgard: [
            effectTypes.stats.effects.strength
        ],
    }
}
effectTypes.mythStatCaps.effects.constitution.increase = {
    type: IncreaseType.mythCap,
    realm: {
        Albion: [
            effectTypes.stats.effects.constitution
        ],
        Hibernia: [
            effectTypes.stats.effects.constitution
        ],
        Midgard: [
            effectTypes.stats.effects.constitution
        ],
    }
}
effectTypes.mythStatCaps.effects.dexterity.increase = {
    type: IncreaseType.mythCap,
    realm: {
        Albion: [
            effectTypes.stats.effects.dexterity
        ],
        Hibernia: [
            effectTypes.stats.effects.dexterity
        ],
        Midgard: [
            effectTypes.stats.effects.dexterity
        ],
    }
}
effectTypes.mythStatCaps.effects.quickness.increase = {
    type: IncreaseType.mythCap,
    realm: {
        Albion: [
            effectTypes.stats.effects.quickness
        ],
        Hibernia: [
            effectTypes.stats.effects.quickness
        ],
        Midgard: [
            effectTypes.stats.effects.quickness
        ],
    }
}
effectTypes.mythStatCaps.effects.intelligence.increase = {
    type: IncreaseType.mythCap,
    realm: {
        Albion: [
            effectTypes.stats.effects.intelligence
        ],
        Hibernia: [
            effectTypes.stats.effects.intelligence
        ],
        Midgard: [
            effectTypes.stats.effects.intelligence
        ],
    }
}
effectTypes.mythStatCaps.effects.piety.increase = {
    type: IncreaseType.mythCap,
    realm: {
        Albion: [
            effectTypes.stats.effects.piety
        ],
        Hibernia: [
            effectTypes.stats.effects.piety
        ],
        Midgard: [
            effectTypes.stats.effects.piety
        ],
    }
}
effectTypes.mythStatCaps.effects.charisma.increase = {
    type: IncreaseType.mythCap,
    realm: {
        Albion: [
            effectTypes.stats.effects.charisma
        ],
        Hibernia: [
            effectTypes.stats.effects.charisma
        ],
        Midgard: [
            effectTypes.stats.effects.charisma
        ],
    }
}
effectTypes.mythStatCaps.effects.empathy.increase = {
    type: IncreaseType.mythCap,
    realm: {
        Albion: [
            effectTypes.stats.effects.empathy
        ],
        Hibernia: [
            effectTypes.stats.effects.empathy
        ],
        Midgard: [
            effectTypes.stats.effects.empathy
        ],
    }
}
effectTypes.mythStatCaps.effects.acuity.increase = {
    type: IncreaseType.mythAcuityCap,
    realm: {
        Albion: [
            effectTypes.stats.effects.acuity
        ], Hibernia: [
            effectTypes.stats.effects.acuity
        ], Midgard: [
            effectTypes.stats.effects.acuity
        ]
    },
    realmClass: {
        Armsman: effectTypes.statCaps.effects.acuity,
        Cabalist: effectTypes.statCaps.effects.intelligence,
        Cleric: effectTypes.statCaps.effects.piety,
        Friar: effectTypes.statCaps.effects.piety,
        Heretic: effectTypes.statCaps.effects.piety,
        Infiltrator: effectTypes.statCaps.effects.acuity,
        Mercenary: effectTypes.statCaps.effects.acuity,
        Minstrel: effectTypes.statCaps.effects.charisma,
        Necromancer: effectTypes.statCaps.effects.intelligence,
        Paladin: effectTypes.statCaps.effects.piety,
        Reaver: effectTypes.statCaps.effects.piety,
        Scout: effectTypes.statCaps.effects.acuity,
        Sorcerer: effectTypes.statCaps.effects.intelligence,
        Theurgist: effectTypes.statCaps.effects.intelligence,
        Wizard: effectTypes.statCaps.effects.intelligence,

        Animist: effectTypes.statCaps.effects.intelligence,
        Bainshee: effectTypes.statCaps.effects.intelligence,
        Bard: effectTypes.statCaps.effects.charisma,
        Blademaster: effectTypes.statCaps.effects.acuity,
        Champion: effectTypes.statCaps.effects.intelligence,
        Druid: effectTypes.statCaps.effects.empathy,
        Eldritch: effectTypes.statCaps.effects.intelligence,
        Enchanter: effectTypes.statCaps.effects.intelligence,
        Hero: effectTypes.statCaps.effects.acuity,
        Mentalist: effectTypes.statCaps.effects.intelligence,
        Nightshade: effectTypes.statCaps.effects.intelligence,
        Ranger: effectTypes.statCaps.effects.acuity,
        Valewalker: effectTypes.statCaps.effects.intelligence,
        Warden: effectTypes.statCaps.effects.empathy,

        Berserker: effectTypes.statCaps.effects.acuity,
        Bonedancer: effectTypes.statCaps.effects.piety,
        Healer: effectTypes.statCaps.effects.intelligence,
        Hunter: effectTypes.statCaps.effects.acuity,
        Runemaster: effectTypes.statCaps.effects.piety,
        Savage: effectTypes.statCaps.effects.acuity,
        Shadowblade: effectTypes.statCaps.effects.acuity,
        Shaman: effectTypes.statCaps.effects.piety,
        Skald: effectTypes.statCaps.effects.charisma,
        Spiritmaster: effectTypes.statCaps.effects.piety,
        Thane: effectTypes.statCaps.effects.piety,
        Valkyrie: effectTypes.statCaps.effects.piety,
        Warrior: effectTypes.statCaps.effects.acuity
    }
}

effectTypes.resistCaps.effects.crush.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.resists.effects.crush
        ],
        Hibernia: [
            effectTypes.resists.effects.crush
        ],
        Midgard: [
            effectTypes.resists.effects.crush
        ],
    }
}
effectTypes.resistCaps.effects.slash.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.resists.effects.slash
        ],
        Hibernia: [
            effectTypes.resists.effects.slash
        ],
        Midgard: [
            effectTypes.resists.effects.slash
        ],
    }
}
effectTypes.resistCaps.effects.thrust.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.resists.effects.thrust
        ],
        Hibernia: [
            effectTypes.resists.effects.thrust
        ],
        Midgard: [
            effectTypes.resists.effects.thrust
        ],
    }
}
effectTypes.resistCaps.effects.heat.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.resists.effects.heat
        ],
        Hibernia: [
            effectTypes.resists.effects.heat
        ],
        Midgard: [
            effectTypes.resists.effects.heat
        ],
    }
}
effectTypes.resistCaps.effects.cold.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.resists.effects.cold
        ],
        Hibernia: [
            effectTypes.resists.effects.cold
        ],
        Midgard: [
            effectTypes.resists.effects.cold
        ],
    }
}
effectTypes.resistCaps.effects.matter.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.resists.effects.matter
        ],
        Hibernia: [
            effectTypes.resists.effects.matter
        ],
        Midgard: [
            effectTypes.resists.effects.matter
        ],
    }
}
effectTypes.resistCaps.effects.body.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.resists.effects.body
        ],
        Hibernia: [
            effectTypes.resists.effects.body
        ],
        Midgard: [
            effectTypes.resists.effects.body
        ],
    }
}
effectTypes.resistCaps.effects.spirit.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.resists.effects.spirit
        ],
        Hibernia: [
            effectTypes.resists.effects.spirit
        ],
        Midgard: [
            effectTypes.resists.effects.spirit
        ],
    }
}
effectTypes.resistCaps.effects.energy.increase = {
    type: IncreaseType.cap,
    realm: {
        Albion: [
            effectTypes.resists.effects.energy
        ],
        Hibernia: [
            effectTypes.resists.effects.energy
        ],
        Midgard: [
            effectTypes.resists.effects.energy
        ],
    }
}



