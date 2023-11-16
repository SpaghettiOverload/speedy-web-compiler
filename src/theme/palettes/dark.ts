import { ColorPallete, ThemeColorTypes } from "../types";

export const darkPallete: ColorPallete = {
    [ThemeColorTypes.Gray]: {
        0: '#FFFFFF',
        5: '#E0E2E7',
        10: '#C1C6CF',
        15: '#A5AAB6',
        20: '#8A919E',
        30: '#727886',
        40: '#5B616E',
        50: '#464B55',
        60: '#32353D',
        70: '#282B31',
        80: '#1E2025',
        90: '#141519',
        100: '#0A0B0D'
    },
    [ThemeColorTypes.Blue]: {
        0: '#F5F8FF',
        5: '#B9CFFF',
        10: '#84AAFD',
        15: '#578BFA',
        20: '#3773F5',
        30: '#2162EE',
        40: '#1354E1',
        50: '#0A48CE',
        60: '#053BB1',
        70: '#03339A',
        80: '#012A82',
        90: '#011D5B',
        100: '#001033'
    },
    [ThemeColorTypes.Success]: {
        10: '#E3FFEB',
        20: '#A6F3BB',
        30: '#7CE69D',
        40: '#53D47F',
        50: '#29BC63',
        60: '#0DA048',
        70: '#048B3A',
        80: '#00722D',
        90: '#005720',
        100: '#003A14'
    },
    [ThemeColorTypes.Warning]: {
        10: '#FFEEE0',
        20: '#FFCDA6',
        30: '#FFB77C',
        40: '#FFA053',
        50: '#FF8A29',
        60: '#F17400',
        70: '#D25F00',
        80: '#A64B00',
        90: '#793600',
        100: '#4D2200'
    },
    [ThemeColorTypes.Error]: {
        10: '#FFEFEF',
        20: '#FFCBCB',
        30: '#FFA8A8',
        40: '#FF8484',
        50: '#FF6161',
        60: '#EA4E4E',
        70: '#C83939',
        80: '#A62828',
        90: '#841A1A',
        100: '#620E0E'
    }
}
