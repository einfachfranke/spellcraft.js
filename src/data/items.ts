import imbuePoints from "./imbuePoints";
import {Color} from "./color";
import {Item, ItemType, ItemTypeCode} from "../types/items";

export const itemType: Record<ItemTypeCode, ItemType> = {
    craft: {
        name: 'Craft',
        code: 'craft',
        value: '1',
        isCraftItem: true
    },
    drop: {
        name: 'Drop',
        code: 'drop',
        value: '2',
        isCraftItem: false,
    },
    rog: {
        name: 'Rog',
        code: 'rog',
        value: '3',
        isCraftItem: false,
    }
}

export const items: Item[] = [
    {
        name: 'Chest',
        code: 'chest',
        craft: true,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.craft,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'Head',
        code: 'head',
        craft: true,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.craft,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'Arms',
        code: 'arms',
        craft: true,
        level: 51,
        weapon: false,
        quality: 99,
        utility: 0,
        itemType: itemType.craft,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'Hands',
        code: 'hands',
        craft: true,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.craft,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'Legs',
        code: 'legs',
        craft: true,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.craft,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'Feet',
        code: 'feet',
        craft: true,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.craft,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'R. Hand',
        code: 'rightHand',
        craft: true,
        weapon: true,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.craft,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'L. Hand',
        code: 'leftHand',
        craft: true,
        weapon: true,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.craft,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: '2-Hand',
        code: 'twoHand',
        craft: true,
        weapon: true,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.craft,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'Ranged',
        code: 'ranged',
        craft: true,
        weapon: true,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.craft,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'Neck',
        code: 'neck',
        craft: false,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.drop,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'Mythical',
        code: 'mythical',
        craft: false,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.drop,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'Cloak',
        code: 'cloak',
        craft: false,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.drop,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'Jewel',
        code: 'jewel',
        craft: false,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.drop,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'Belt',
        code: 'belt',
        craft: false,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.drop,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'L. Ring',
        code: 'leftRing',
        craft: false,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.drop,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'R. Ring',
        code: 'rightRing',
        craft: false,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.drop,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },

    {
        name: 'L. Wrist',
        code: 'leftWrist',
        craft: false,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.drop,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    },
    {
        name: 'R. Wrist',
        code: 'rightWrist',
        craft: false,
        weapon: false,
        level: 51,
        quality: 99,
        utility: 0,
        itemType: itemType.drop,
        color: Color.itemDefault,
        imbue: {
            value: 0,
            max: imbuePoints['51']['100']
        },
        itemName: '',
        options: [],
        bonusOption: null
    }
]