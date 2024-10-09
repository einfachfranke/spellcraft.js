import {create} from 'zustand'
import {realms} from "../data/realms";
import {SetupManager} from "./SetupManager";
import {ItemManager} from "./ItemManager";
import {items} from "../data/items";
import {SummaryManager} from "./SummaryManager";
import {weapon} from "../data/weapon";
import {Init, Store, StoreGet, StoreSet} from "../types/store";

export const useStore = create<Store>((set: StoreSet, get: StoreGet) => ({
    initial: true,
    fromUrl: (init: Init): void => {
        set({initial: false, ...init})
        get().setupManager.updateTitle()
    },
    setupManager: new SetupManager(set, get),
    realm: realms[0],
    realmClass: realms[0].realmClasses[0],
    race: realms[0].realmClasses[0].races[0],
    level: 50,
    name: '',
    itemManager: new ItemManager(set, get),
    activeItem: items[0],
    activeWeapon: weapon.rightAndLeftHand,
    items: items,
    summaryManager: new SummaryManager(set, get),
    summaryData: {
        unused: [],
        stats: [],
        statCaps: [],
        mythStatCaps: [],
        resists: [],
        resistCaps: [],
        skills: [],
        focus: [],
        bonus: []
    },
    highlightEffects: [],
    templateInfo: {
        utility: 0,
        useless: 0,
        price: 0
    }
}))
