import {Config} from "./types/config";

export const config: Config = {
    useRouter: true,
    qualityEffectsImbuePoints: false,
    spellcraftItemBonus: true,
    showMythical: true,
    useArcheryAsSkillName: true,
    useEdenImport: true,
    excludeEffectTypes: [],
    excludeEffects: [
        '86',
        '87',
        '88',
        'xa',
        'xb',
        'xc',
        'xd',
        'xe',
        'xf',
        'xg',
        'xh',
        'xi',
        'xj',
        'xk',
        'xl',
        'xm',
        'xn',
        'xo',
    ],
    excludeClasses: [
        'Mauler',
        'Vampiir'
    ],
    excludeRaces: [
        'minotaur'
    ]
}

