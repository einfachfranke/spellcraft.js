import {RealmClassName} from "./realm";
import {EffectCode, EffectTypeCode} from "./effects";
import {RaceCode} from "../data/race";

export type Config = {
    useRouter: boolean
    qualityEffectsImbuePoints: boolean
    spellcraftItemBonus: boolean
    showMythical:boolean
    useArcheryAsSkillName: boolean
    useEdenImport: boolean
    excludeEffectTypes: EffectTypeCode[]
    excludeEffects: EffectCode[]
    excludeClasses: RealmClassName[]
    excludeRaces: RaceCode[]
}