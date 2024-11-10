import React, {useEffect, useState} from "react";
import {NavigateFunction, Params, useNavigate, useParams} from "react-router-dom";
import {useStore} from "./store/store";
import {Init, Store} from "./types/store";
import {ParamCodes} from "./types/paramCodes";
import {SetupManager} from "./store/SetupManager";

export const Router: React.FC = (): null => {
    const params: Readonly<Params<ParamCodes>> = useParams()
    const navigate: NavigateFunction = useNavigate()
    const [initial, setInitial] = useState<boolean>(true)

    const paramString: string = useStore((state: Store): string => state.paramString)
    const setupManager: SetupManager = useStore((state: Store): SetupManager => state.setupManager)

    const [location, setLocation] = useState<string>('')

    useEffect((): void => {
        window.addEventListener('popstate', (): void => {
            setLocation(window.location.href)
        })
    }, []);

    useEffect((): void => {
        const init: Init = setupManager.createInit(params, initial)

        if (initial) {
            init.activeWeapon = init.realmClass.defaultWeapons
            setInitial(false)
        }

        setupManager.setInit(init)
    }, [location])

    useEffect((): void => {
        if (initial) return

        if (window.location.href.includes(paramString)) return

        navigate(`/${paramString}`)
    }, [paramString])

    return null
}

