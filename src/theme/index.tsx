import { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles'

export enum Theme {
    light = 'light',
    dark = 'dark'
}

const lightOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#9c27b0',
        },
        background: {
            default: '#fff',
            paper: '#fff',
        },
    },
};

const darkOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#5893df',
        },
        secondary: {
            main: '#2ec5d3',
        },
        background: {
            default: '#192231',
            paper: '#24344d',
        },
    },
};

export const availableThemes = {
    [Theme.light]: createTheme(lightOptions),
    [Theme.dark]: createTheme(darkOptions)
}
