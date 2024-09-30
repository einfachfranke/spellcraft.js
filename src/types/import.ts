import {Effect} from "./effects";

export type EdenImport = Record<string, {name: string, effect: Effect | undefined}>