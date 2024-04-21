import {ItemCode} from "./items";

export type WeaponCode = 'rightAndLeftHand' | 'twoHand' | 'ranged' | 'leftAndTwoHand'

export type Weapon = {
    name: string,
    code: string,
    itemCodes: ItemCode[]
}