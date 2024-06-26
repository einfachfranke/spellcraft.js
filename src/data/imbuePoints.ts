import {Quality} from "../types/quality";
import {ItemLevel} from "../types/levels";

const imbuePoints: Record<ItemLevel, Record<Quality, number>> = {
    51: {
        100: 32,
        99: 28,
        98: 24,
        97: 21,
        96: 18,
        95: 15,
        94: 10
    },
    50: {
        100: 31,
        99: 27,
        98: 23,
        97: 20,
        96: 17,
        95: 14,
        94: 10
    },
    49: {
        100: 31,
        99: 27,
        98: 23,
        97: 20,
        96: 17,
        95: 14,
        94: 10
    },
    48: {
        100: 30,
        99: 26,
        98: 23,
        97: 20,
        96: 17,
        95: 14,
        94: 10
    },
    47: {
        100: 29,
        99: 25,
        98: 22,
        97: 19,
        96: 16,
        95: 13,
        94: 10
    },
    46: {
        100: 29,
        99: 25,
        98: 22,
        97: 19,
        96: 16,
        95: 13,
        94: 9
    },
    45: {
        100: 28,
        99: 24,
        98: 21,
        97: 18,
        96: 16,
        95: 13,
        94: 9
    },
    44: {
        100: 27,
        99: 24,
        98: 21,
        97: 18,
        96: 15,
        95: 13,
        94: 9
    },
    43: {
        100: 27,
        99: 23,
        98: 20,
        97: 18,
        96: 15,
        95: 12,
        94: 9
    },
    42: {
        100: 26,
        99: 23,
        98: 20,
        97: 17,
        96: 15,
        95: 12,
        94: 9
    },
    41: {
        100: 26,
        99: 22,
        98: 19,
        97: 17,
        96: 14,
        95: 12,
        94: 8
    },
    40: {
        100: 25,
        99: 22,
        98: 19,
        97: 16,
        96: 14,
        95: 11,
        94: 8
    },
    39: {
        100: 24,
        99: 21,
        98: 18,
        97: 16,
        96: 14,
        95: 11,
        94: 8
    },
    38: {
        100: 24,
        99: 21,
        98: 18,
        97: 16,
        96: 13,
        95: 11,
        94: 8
    },
    37: {
        100: 23,
        99: 20,
        98: 17,
        97: 15,
        96: 13,
        95: 11,
        94: 8
    },
    36: {
        100: 23,
        99: 20,
        98: 17,
        97: 15,
        96: 13,
        95: 10,
        94: 7
    },
    35: {
        100: 22,
        99: 19,
        98: 17,
        97: 14,
        96: 12,
        95: 10,
        94: 7
    },
    34: {
        100: 21,
        99: 19,
        98: 16,
        97: 14,
        96: 12,
        95: 10,
        94: 7
    },
    33: {
        100: 21,
        99: 18,
        98: 16,
        97: 14,
        96: 12,
        95: 10,
        94: 7
    },
    32: {
        100: 20,
        99: 17,
        98: 15,
        97: 13,
        96: 11,
        95: 9,
        94: 7
    },
    31: {
        100: 20,
        99: 17,
        98: 15,
        97: 13,
        96: 11,
        95: 9,
        94: 6
    },
    30: {
        100: 19,
        99: 16,
        98: 14,
        97: 12,
        96: 11,
        95: 9,
        94: 6
    },
    29: {
        100: 18,
        99: 16,
        98: 14,
        97: 12,
        96: 10,
        95: 8,
        94: 6
    },
    28: {
        100: 18,
        99: 15,
        98: 13,
        97: 12,
        96: 10,
        95: 8,
        94: 6
    },
    27: {
        100: 17,
        99: 15,
        98: 13,
        97: 11,
        96: 10,
        95: 8,
        94: 6
    },
    26: {
        100: 16,
        99: 14,
        98: 12,
        97: 11,
        96: 9,
        95: 8,
        94: 5
    },
    25: {
        100: 16,
        99: 14,
        98: 12,
        97: 10,
        96: 9,
        95: 7,
        94: 5
    },
    24: {
        100: 15,
        99: 13,
        98: 12,
        97: 10,
        96: 9,
        95: 7,
        94: 5
    },
    23: {
        100: 15,
        99: 13,
        98: 11,
        97: 10,
        96: 8,
        95: 7,
        94: 5
    },
    22: {
        100: 14,
        99: 12,
        98: 11,
        97: 9,
        96: 8,
        95: 6,
        94: 5
    },
    21: {
        100: 13,
        99: 12,
        98: 10,
        97: 9,
        96: 7,
        95: 6,
        94: 4
    },
    20: {
        100: 13,
        99: 11,
        98: 10,
        97: 8,
        96: 7,
        95: 6,
        94: 4
    },
    19: {
        100: 12,
        99: 11,
        98: 9,
        97: 8,
        96: 7,
        95: 6,
        94: 4
    },
    18: {
        100: 12,
        99: 10,
        98: 9,
        97: 8,
        96: 6,
        95: 5,
        94: 4
    },
    17: {
        100: 11,
        99: 10,
        98: 8,
        97: 7,
        96: 6,
        95: 5,
        94: 4
    },
    16: {
        100: 10,
        99: 9,
        98: 8,
        97: 7,
        96: 6,
        95: 5,
        94: 3
    },
    15: {
        100: 10,
        99: 8,
        98: 7,
        97: 6,
        96: 5,
        95: 4,
        94: 3
    },
    14: {
        100: 9,
        99: 8,
        98: 7,
        97: 6,
        96: 5,
        95: 4,
        94: 3
    },
    13: {
        100: 9,
        99: 7,
        98: 6,
        97: 6,
        96: 5,
        95: 4,
        94: 3
    },
    12: {
        100: 8,
        99: 7,
        98: 6,
        97: 5,
        96: 4,
        95: 4,
        94: 3
    },
    11: {
        100: 7,
        99: 6,
        98: 6,
        97: 5,
        96: 4,
        95: 3,
        94: 2
    },
    10: {
        100: 7,
        99: 6,
        98: 5,
        97: 4,
        96: 4,
        95: 3,
        94: 2
    },
    9: {
        100: 6,
        99: 5,
        98: 5,
        97: 4,
        96: 3,
        95: 3,
        94: 2
    },
    8: {
        100: 5,
        99: 5,
        98: 4,
        97: 4,
        96: 3,
        95: 3,
        94: 2
    },
    7: {
        100: 5,
        99: 4,
        98: 4,
        97: 3,
        96: 3,
        95: 2,
        94: 2
    },
    6: {
        100: 4,
        99: 4,
        98: 3,
        97: 3,
        96: 2,
        95: 2,
        94: 1
    },
    5: {
        100: 4,
        99: 3,
        98: 3,
        97: 2,
        96: 2,
        95: 2,
        94: 1
    },
    4: {
        100: 3,
        99: 3,
        98: 2,
        97: 2,
        96: 2,
        95: 1,
        94: 1
    },
    3: {
        100: 2,
        99: 2,
        98: 2,
        97: 2,
        96: 1,
        95: 1,
        94: 1
    },
    2: {
        100: 2,
        99: 2,
        98: 1,
        97: 1,
        96: 1,
        95: 1,
        94: 1
    },
    1: {
        100: 1,
        99: 1,
        98: 1,
        97: 1,
        96: 1,
        95: 1,
        94: 0
    }
};

export default imbuePoints;