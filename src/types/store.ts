import {Realm, RealmClass} from "./realm";
import {Race} from "./race";
import {Item} from "./items";
import {SetupManager} from "../store/SetupManager";
import {ItemManager} from "../store/ItemManager";
import {Weapon} from "./weapon";
import {SummaryManager} from "../store/SummaryManager";
import {Effect} from "./effects";
import {SummaryData, TemplateInfo} from "./summary";
import {PlayerLevel} from "./levels";

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
    initial: boolean,
    fromUrl: (init: Init) => void,
    setupManager: SetupManager,
    realm: Realm,
    realmClass: RealmClass,
    race: Race,
    level: PlayerLevel,
    name: string,
    itemManager: ItemManager,
    activeItem: Item,
    activeWeapon: Weapon,
    items: Item[],
    summaryManager: SummaryManager,
    summaryData: SummaryData,
    highlightEffects: Effect[],
    templateInfo: TemplateInfo
}