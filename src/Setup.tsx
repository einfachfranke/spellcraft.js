import React from 'react';
import {SetupManager} from "./store/SetupManager";
import {useStore} from "./store/store";
import {realms} from "./data/realms";
import {Realm, RealmClass} from "./types/realm";
import {Race} from "./types/race";
import {Store} from "./types/store";
import {playerLevels} from "./data/levels";
import {PlayerLevel} from "./types/levels";

const Setup: React.FC = () => {
    const setupManager: SetupManager = useStore((state: Store) => state.setupManager)
    const realm: Realm = useStore((state: Store) => state.realm)
    const realmClass: RealmClass = useStore((state: Store) => state.realmClass)
    const race: Race = useStore((state: Store) => state.race)
    const level: number = useStore((state: Store) => state.level)
    const name: string = useStore((state: Store) => state.name)

    return (
        <div className={`setup row`}>
            <div className={`col-6`}>
                <label htmlFor={'realm-select'}>Realm</label>
                <select
                    id={'realm-select'}
                    value={realm.name}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                        const realm: Realm | undefined = realms.find((realm: Realm): boolean => (
                            realm.name === e.target.value
                        ))
                        if (realm !== undefined) setupManager.setRealm(realm)
                    }}>
                    {realms.map((realm: Realm) => (
                        <option key={realm.name}>
                            {realm.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className={`col-6`}>
                <label htmlFor={'realm-class-select'}>Class</label>
                <select
                    id={'realm-class-select'}
                    value={realmClass.name}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                        const realmClass: RealmClass | undefined = realm.realmClasses.find((realmClass: RealmClass): boolean => (
                            realmClass.name === e.target.value
                        ))
                        if (realmClass !== undefined) setupManager.setRealmClass(realmClass)
                    }}>
                    {realm.realmClasses.map((realmClass: RealmClass) => (
                        <option key={realmClass.name}>
                            {realmClass.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className={`col-6`}>
                <label htmlFor={'race-select'}>Race</label>
                <select
                    id={'race-select'}
                    value={race.name}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                        const race: Race | undefined = realmClass.races.find((race: Race): boolean => (
                            race.name === e.target.value
                        ))
                        if (race !== undefined) setupManager.setRace(race)
                    }}>
                    {realmClass.races.map((race: Race) => (
                        <option key={race.name}>
                            {race.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className={`col-6`}>
                <label htmlFor={'level-select'}>Level</label>
                <select
                    id={'level-select'}
                    value={level}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
                        setupManager.setLevel(Number(e.target.value) as PlayerLevel)
                    }}>
                    {playerLevels.map((level: PlayerLevel) => (
                        <option key={level}>
                            {level}
                        </option>
                    ))}
                </select>
            </div>

            <div className={`col-12`}>
                <label htmlFor={'name-input'}>Name</label>
                <input
                    id={'name-input'}
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setupManager.setName(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Setup;