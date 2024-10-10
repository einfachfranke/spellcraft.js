import {RealmClassName} from "./realm";

export type Config = {
    qualityEffectsImbuePoints: boolean
    spellcraftItemBonus: boolean
    showMythical:boolean
    useStatCaps:boolean
    useMythicalStatCaps: boolean
    useResistCaps: boolean
    useBonus: boolean
    useArcheryAsSkillName: boolean
    useEdenImport: boolean
    excludeClasses: RealmClassName[]
}