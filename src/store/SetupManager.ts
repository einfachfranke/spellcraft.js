import {ItemManager} from "./ItemManager";
import {Realm, RealmClass} from "../types/realm";
import {Race} from "../types/race";
import {StoreGet, StoreSet} from "../types/store";
import {PlayerLevel} from "../types/levels";

export class SetupManager {
    private readonly set: StoreSet
    private readonly get: StoreGet

    constructor(set: StoreSet, get: StoreGet) {
        this.set = set
        this.get = get
    }

    setRealm(realm: Realm): void {
        const itemManager: ItemManager = this.get().itemManager
        const realmClass: RealmClass = realm.realmClasses[0]
        const race: Race = realm.realmClasses[0].races[0]

        itemManager.removeRealmEffects(realm)

        this.set({
            realm: realm,
            realmClass: realmClass,
            race: race,
            activeWeapon: realmClass.defaultWeapons,
            activeItem: itemManager.spreadActiveItem(this.get().activeItem),
            items: {...this.get().items}
        })

        this.updateTitle()
    }

    setRealmClass(realmClass: RealmClass): void {
        let race: Race | undefined = realmClass.races.find((race: Race): boolean => (
            race.name === this.get().race.name
        ))

        if (!race) {
            race = realmClass.races[0]
        }

        this.set({
            realmClass: realmClass,
            race: race,
            activeWeapon: realmClass.defaultWeapons
        })

        this.updateTitle()
    }

    setRace(race: Race): void {
        this.set({race})
    }

    setLevel(level: PlayerLevel): void {
        this.set({level})
    }

    setName(name: string): void {
        this.set({name})

        this.updateTitle()
    }

    updateTitle(): void {
        const name: string = this.get().name !== '' ? ` :${this.get().name}` : ''
        document.title = `DAoC ${this.get().realmClass.name} template${name}`;
    }
}