import React, {useEffect, useState} from 'react';
import {SetupManager} from "./store/SetupManager";
import {useStore} from "./store/store";
import {realms} from "./data/realms";
import {Realm, RealmClass} from "./types/realm";
import {Store} from "./types/store";
import {playerLevels} from "./data/levels";
import {PlayerLevel} from "./types/levels";
import {config} from "./config";
import {Race} from "./data/race";
import {Item} from "./types/items";

const Setup: React.FC = (): React.JSX.Element => {
    const setupManager: SetupManager = useStore((state: Store): SetupManager => state.setupManager)
    const realm: Realm = useStore((state: Store): Realm => state.realm)
    const realmClass: RealmClass = useStore((state: Store): RealmClass => state.realmClass)
    const race: Race = useStore((state: Store): Race => state.race)
    const level: PlayerLevel = useStore((state: Store): PlayerLevel => state.level)
    const name: string = useStore((state: Store): string => state.name)
    const items: Item[] = useStore((state: Store): Item[] => state.items)
    const paramString: string = useStore((state: Store): string => state.paramString)
    const loadSaveParamString: string = useStore((state: Store): string => state.loadSaveParamString)
    const [fileSystemAPI, setFileSystemAPI] = useState<boolean>(false)

    useEffect(() => {
        if ('showOpenFilePicker' in window) {
            setFileSystemAPI(true)
        }
    }, []);

    useEffect((): void => {
        setupManager.createParamString()
    }, [realm, realmClass, race, level, name, items])

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
                    {realms.map((realm: Realm): React.JSX.Element => (
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
                    {realm.realmClasses.filter((realmClass: RealmClass): boolean => (
                        config.excludeClasses.indexOf(realmClass.name) === -1
                    )).map((realmClass: RealmClass): React.JSX.Element => (
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
                    {realmClass.races.filter((race: Race): boolean => (
                        config.excludeRaces.indexOf(race.code) === -1
                    )).map((race: Race): React.JSX.Element => (
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
                    {playerLevels.map((level: PlayerLevel): React.JSX.Element => (
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
                    autoComplete={'off'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        setupManager.setName(e.target.value.replace(/[^A-Za-z0-9\s]/g, '').replace(/^\s*/gm, ''))
                    }}
                />
            </div>
            {fileSystemAPI && (
                <>
                    <div className={`col-6`}>
                        <button onClick={(): Promise<void> => setupManager.load()}>
                            Load
                        </button>
                    </div>
                    <div className={`col-4`}>
                        <button disabled={paramString === loadSaveParamString}
                                onClick={(): Promise<void> => setupManager.save()}>
                            Save
                        </button>
                    </div>
                    <div className={`col-2`}>
                        <button disabled={!setupManager.fileSystemFileHandleExist()}
                                onClick={(): Promise<void> => setupManager.save(true)}>
                            As
                        </button>
                    </div>
                </>
            )}
            {!fileSystemAPI && (
                <>
                    <div className={`col-6`}>
                        <label className={'button'}
                               htmlFor="upload-cover">
                            Load
                        </label>
                        <input
                            style={{display: 'none'}}
                            id="upload-cover"
                            name="upload-cover"
                            type="file"
                            accept=".sct"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setupManager.loadOldSchool(e)}
                        />
                    </div>
                    <div className={`col-6`}>
                        <button onClick={(): void => setupManager.saveOldSchool()}>
                            Save
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Setup;