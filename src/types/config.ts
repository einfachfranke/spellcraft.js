import {RealmClassName} from "./realm";
import {EffectCode, EffectTypeCode} from "./effects";

export type Config = {
    qualityEffectsImbuePoints: boolean
    spellcraftItemBonus: boolean
    showMythical:boolean
    useArcheryAsSkillName: boolean
    useEdenImport: boolean
    excludeEffectTypes: EffectTypeCode[]
    excludeClasses: RealmClassName[]
    excludeEffects: EffectCode[]
}