import {Race, RaceCode} from "../types/race";
import {effectTypes} from "./effects";

export const race: Record<RaceCode, Race> = {
    none: {
        name: 'none',
        resists: {}
    },
    avalonian: {
        name: 'Avalonian',
        resists: {
            [effectTypes.resists.effects.crush.code]: 2,
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.spirit.code]: 5,
        }
    },
    briton: {
        name: 'Briton',
        resists: {
            [effectTypes.resists.effects.crush.code]: 2,
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.spirit.code]: 5,
        }
    },
    halfOgre: {
        name: 'Half Ogre',
        resists: {
            [effectTypes.resists.effects.thrust.code]: 2,
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.matter.code]: 5
        }
    },
    highlander: {
        name: 'Highlander',
        resists: {
            [effectTypes.resists.effects.crush.code]: 3,
            [effectTypes.resists.effects.slash.code]: 2,
            [effectTypes.resists.effects.cold.code]: 5
        }
    },
    inconnu: {
        name: 'Inconnu',
        resists: {
            [effectTypes.resists.effects.crush.code]: 2,
            [effectTypes.resists.effects.thrust.code]: 3,
            [effectTypes.resists.effects.heat.code]: 5,
            [effectTypes.resists.effects.spirit.code]: 5
        }
    },
    saracen: {
        name: 'Saracen',
        resists: {
            [effectTypes.resists.effects.slash.code]: 2,
            [effectTypes.resists.effects.thrust.code]: 3,
            [effectTypes.resists.effects.heat.code]: 5
        }
    },
    shar: {
        name: 'Shar',
        resists: {
            [effectTypes.resists.effects.crush.code]: 5,
            [effectTypes.resists.effects.energy.code]: 5
        }
    },
    celt: {
        name: 'Celt',
        resists: {
            [effectTypes.resists.effects.crush.code]: 2,
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.spirit.code]: 5
        }
    },
    elf: {
        name: 'Elf',
        resists: {
            [effectTypes.resists.effects.slash.code]: 2,
            [effectTypes.resists.effects.thrust.code]: 3,
            [effectTypes.resists.effects.spirit.code]: 5
        }
    },
    firbolg: {
        name: 'Firbolg',
        resists: {
            [effectTypes.resists.effects.crush.code]: 3,
            [effectTypes.resists.effects.slash.code]: 2,
            [effectTypes.resists.effects.heat.code]: 5
        }
    },
    lurikeen: {
        name: 'Lurikeen',
        resists: {
            [effectTypes.resists.effects.crush.code]: 5,
            [effectTypes.resists.effects.energy.code]: 5
        }
    },
    sylvan: {
        name: 'Sylvan',
        resists: {
            [effectTypes.resists.effects.crush.code]: 3,
            [effectTypes.resists.effects.thrust.code]: 2,
            [effectTypes.resists.effects.matter.code]: 5,
            [effectTypes.resists.effects.energy.code]: 5
        }
    },
    dwarf: {
        name: 'Dwarf',
        resists: {
            [effectTypes.resists.effects.slash.code]: 2,
            [effectTypes.resists.effects.thrust.code]: 3,
            [effectTypes.resists.effects.body.code]: 5
        }
    },
    frostalf: {
        name: 'Frostalf',
        resists: {
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.thrust.code]: 2,
            [effectTypes.resists.effects.spirit.code]: 5
        }
    },
    kobold: {
        name: 'Kobold',
        resists: {
            [effectTypes.resists.effects.crush.code]: 5,
            [effectTypes.resists.effects.energy.code]: 5
        }
    },
    troll: {
        name: 'Troll',
        resists: {
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.thrust.code]: 2,
            [effectTypes.resists.effects.matter.code]: 5
        }
    },
    norseman: {
        name: 'Norseman',
        resists: {
            [effectTypes.resists.effects.crush.code]: 2,
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.cold.code]: 5
        }
    },
    valkyn: {
        name: 'Valkyn',
        resists: {
            [effectTypes.resists.effects.slash.code]: 3,
            [effectTypes.resists.effects.thrust.code]: 2,
            [effectTypes.resists.effects.cold.code]: 5,
            [effectTypes.resists.effects.body.code]: 5
        }
    },
}