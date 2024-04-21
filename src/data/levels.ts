import {ItemLevel, PlayerLevel} from "../types/levels";

export const playerLevels: PlayerLevel[] = []
for (let i: number = 50; i > 0; i--) {
    playerLevels.push(i as PlayerLevel)
}

export const itemLevels: ItemLevel[] = []
for (let i: number = 51; i > 0; i--) {
    itemLevels.push(i as ItemLevel)
}