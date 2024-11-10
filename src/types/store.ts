import {Realm, RealmClass} from "./realm";
import {Item} from "./items";
import {SetupManager} from "../store/SetupManager";
import {ItemManager} from "../store/ItemManager";
import {Weapon} from "./weapon";
import {SummaryManager} from "../store/SummaryManager";
import {Effect} from "./effects";
import {SummaryType, TemplateInfo} from "./summary";
import {PlayerLevel} from "./levels";
import {Race} from "../data/race";

export type StoreSet = (partial: (Partial<Store> | ((state: Store) => (Partial<Store> | Store)) | Store), replace?: (boolean | undefined)) => void

export type StoreGet = () => Store

export type Init = {
    realm: Realm,
    realmClass: RealmClass
    race: Race
    level: PlayerLevel
    name: string
    items: Item[]
    activeItem: Item
    activeWeapon?: Weapon
}

export interface Store {
    setupManager: SetupManager,
    realm: Realm,
    realmClass: RealmClass,
    race: Race,
    level: PlayerLevel,
    name: string,
    paramString: string,
    loadSaveParamString: string,
    itemManager: ItemManager,
    activeItem: Item,
    activeWeapon: Weapon,
    items: Item[],
    summaryManager: SummaryManager,
    summaryTypes: SummaryType[][],
    highlightEffects: Effect[],
    templateInfo: TemplateInfo
}