import {Weapon, WeaponCode} from "../types/weapon";

export const weapon: Record<WeaponCode, Weapon> = {
    rightAndLeftHand: {
        name: 'R. Hand + L. Hand',
        code: 'rightAndLeftHand',
        itemCodes: [
            'rightHand',
            'leftHand'
        ]
    },
    twoHand: {
        name: '2-Hand',
        code: 'twoHand',
        itemCodes: [
            'twoHand'
        ]
    },
    ranged: {
        name: 'Ranged',
        code: 'ranged',
        itemCodes: [
            'ranged'
        ]
    },
    leftAndTwoHand: {
        name: 'L. Hand + 2-Hand',
        code: 'leftAndTwoHand',
        itemCodes: [
            'leftHand',
            'twoHand'
        ]
    }
}