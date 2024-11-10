import {effectTypes} from "./effects";
import {EffectCode} from "../types/effects";

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
    | 'minotaur'

export type Race = {
    name: string,
    code: RaceCode
    resists: Partial<Record<EffectCode, number>>
}

export const race: Record<RaceCode, Race> = {
    none: {
        name: 'none',
        code: 'none',
        resists: {}
    },
    avalonian: {
        name: 'Avalonian',
        code: 'avalonian',
        resists: {
            [effectTypes.resists.effects.crush.code]: 2,
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.spirit.code]: 5,
        }
    },
    briton: {
        name: 'Briton',
        code: 'briton',
        resists: {
            [effectTypes.resists.effects.crush.code]: 2,
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.spirit.code]: 5,
        }
    },
    halfOgre: {
        name: 'Half Ogre',
        code: 'halfOgre',
        resists: {
            [effectTypes.resists.effects.thrust.code]: 2,
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.matter.code]: 5
        }
    },
    highlander: {
        name: 'Highlander',
        code: 'highlander',
        resists: {
            [effectTypes.resists.effects.crush.code]: 3,
            [effectTypes.resists.effects.slash.code]: 2,
            [effectTypes.resists.effects.cold.code]: 5
        }
    },
    inconnu: {
        name: 'Inconnu',
        code: 'inconnu',
        resists: {
            [effectTypes.resists.effects.crush.code]: 2,
            [effectTypes.resists.effects.thrust.code]: 3,
            [effectTypes.resists.effects.heat.code]: 5,
            [effectTypes.resists.effects.spirit.code]: 5
        }
    },
    saracen: {
        name: 'Saracen',
        code: 'saracen',
        resists: {
            [effectTypes.resists.effects.slash.code]: 2,
            [effectTypes.resists.effects.thrust.code]: 3,
            [effectTypes.resists.effects.heat.code]: 5
        }
    },
    shar: {
        name: 'Shar',
        code: 'shar',
        resists: {
            [effectTypes.resists.effects.crush.code]: 5,
            [effectTypes.resists.effects.energy.code]: 5
        }
    },
    celt: {
        name: 'Celt',
        code: 'celt',
        resists: {
            [effectTypes.resists.effects.crush.code]: 2,
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.spirit.code]: 5
        }
    },
    elf: {
        name: 'Elf',
        code: 'elf',
        resists: {
            [effectTypes.resists.effects.slash.code]: 2,
            [effectTypes.resists.effects.thrust.code]: 3,
            [effectTypes.resists.effects.spirit.code]: 5
        }
    },
    firbolg: {
        name: 'Firbolg',
        code: 'firbolg',
        resists: {
            [effectTypes.resists.effects.crush.code]: 3,
            [effectTypes.resists.effects.slash.code]: 2,
            [effectTypes.resists.effects.heat.code]: 5
        }
    },
    lurikeen: {
        name: 'Lurikeen',
        code: 'lurikeen',
        resists: {
            [effectTypes.resists.effects.crush.code]: 5,
            [effectTypes.resists.effects.energy.code]: 5
        }
    },
    sylvan: {
        name: 'Sylvan',
        code: 'sylvan',
        resists: {
            [effectTypes.resists.effects.crush.code]: 3,
            [effectTypes.resists.effects.thrust.code]: 2,
            [effectTypes.resists.effects.matter.code]: 5,
            [effectTypes.resists.effects.energy.code]: 5
        }
    },
    dwarf: {
        name: 'Dwarf',
        code: 'dwarf',
        resists: {
            [effectTypes.resists.effects.slash.code]: 2,
            [effectTypes.resists.effects.thrust.code]: 3,
            [effectTypes.resists.effects.body.code]: 5
        }
    },
    frostalf: {
        name: 'Frostalf',
        code: 'frostalf',
        resists: {
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.thrust.code]: 2,
            [effectTypes.resists.effects.spirit.code]: 5
        }
    },
    kobold: {
        name: 'Kobold',
        code: 'kobold',
        resists: {
            [effectTypes.resists.effects.crush.code]: 5,
            [effectTypes.resists.effects.energy.code]: 5
        }
    },
    troll: {
        name: 'Troll',
        code: 'troll',
        resists: {
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.thrust.code]: 2,
            [effectTypes.resists.effects.matter.code]: 5
        }
    },
    norseman: {
        name: 'Norseman',
        code: 'norseman',
        resists: {
            [effectTypes.resists.effects.crush.code]: 2,
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.cold.code]: 5
        }
    },
    valkyn: {
        name: 'Valkyn',
        code: 'valkyn',
        resists: {
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.thrust.code]: 2,
            [effectTypes.resists.effects.cold.code]: 5,
            [effectTypes.resists.effects.body.code]: 5
        }
    },
    minotaur: {
        name: 'Minotaur',
        code: 'minotaur',
        resists: {
            [effectTypes.resists.effects.crush.code]: 4,
            [effectTypes.resists.effects.heat.code]: 3,
            [effectTypes.resists.effects.cold.code]: 3
        }
    },
}