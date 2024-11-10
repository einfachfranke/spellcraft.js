import React from 'react'
import ReactDOM, {Root} from 'react-dom/client'
import Setup from "./Setup"
import Overview from "./Overview"
import {Summary} from "./Summary"
import {Edit} from "./Edit"
import './theme/main.scss'
import {Router} from "./Router";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {items} from "./data/items";
import {Item} from "./types/items";
import {config} from "./config";

const root: Root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

const app: React.JSX.Element = (
    <div className={`app`}>
        <div className={`menu`}>
            <Setup/>
            <Overview/>
        </div>
        <div className={`content`}>
            <Summary/>
            <Edit/>
        </div>
    </div>
)

if (config.useRouter) {
    let url: string = '/Albion/Armsman/none/50/none'

    items.forEach((item: Item): void => {
        url += item.craft ? `/0/51/99/1/000-000-000-000${config.spellcraftItemBonus ? '-000' : ''}` : '/0/51/99/2/000'
    })

    const path: string[] = [':realm', ':realmClass', ':race', ':level', ':name']

    items.forEach((item: Item): void => {
        path.push(`:${item.code}Name`)
        path.push(`:${item.code}Level`)
        path.push(`:${item.code}Quality`)
        path.push(`:${item.code}Type`)
        path.push(`:${item.code}Values`)
    })

    root.render(
        <BrowserRouter>
            <Routes>
                <Route path={`${path.join('/')}`} element={(
                    <>
                        <Router/>
                        {app}
                    </>
                )}/>
                <Route path={`*`} element={(
                    <Navigate replace to={url}/>
                )}/>
            </Routes>
        </BrowserRouter>
    )
} else {
    root.render(app)
}


