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
        'fistWrapAlbion',
        'maulerStaffAlbion',
        'magnetismAlbion',
        'powerStrikeAlbion',
        'auraManipulationAlbion',
        'fistWrapHibernia',
        'maulerStaffHibernia',
        'magnetismHibernia',
        'powerStrikeHibernia',
        'auraManipulationHibernia',
        'fistWrapMidgard',
        'maulerStaffMidgard',
        'magnetismMidgard',
        'powerStrikeMidgard',
        'auraManipulationMidgard',
        'shadowMastery',
        'vampiiricEmbrace',
        'dementia',
    ],
    excludeClasses: [
        'Mauler',
        'Vampiir'
    ],
    excludeRaces: [
        'minotaur'
    ]
}

