import {RealmClassName} from "./realm";
import {
    EffectTypeBonusCode,
    EffectTypeCode,
    EffectTypeFocusCode,
    EffectTypeSkillCode,
} from "./effects";
import {RaceCode} from "../data/race";

export type Config = {
    useRouter: boolean
    qualityEffectsImbuePoints: boolean
    spellcraftItemBonus: boolean
    showMythical:boolean
    useArcheryAsSkillName: boolean
    useEdenImport: boolean
    excludeEffectTypes: EffectTypeCode[]
    excludeEffects: Array<EffectTypeSkillCode | EffectTypeFocusCode | EffectTypeBonusCode>
    excludeClasses: RealmClassName[]
    excludeRaces: RaceCode[]
}