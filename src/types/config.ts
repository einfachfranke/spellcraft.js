import {RealmClassName} from "./realm";
import {
    EffectTypeBonusCode,
    EffectTypeCode,
    EffectTypeFocusCode,
    EffectTypeSkillCode, ExcludableEffectSkillCode,
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
    excludeEffects: Array<ExcludableEffectSkillCode>
    excludeClasses: RealmClassName[]
    excludeRaces: RaceCode[]
}