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
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '1px solid #0000001f',
                    },
                },
                notchedOutline: {
                    border: "1px solid #0000001f"
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&&': {
                        border: '1px solid #0000001f',
                    },
                },
            },
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
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '1px solid #ffffff1f',
                    },
                },
                notchedOutline: {
                    border: '1px solid #ffffff1f',
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&&': {
                        border: '1px solid #ffffff1f',
                    },
                },
            },
        },
    },
};

export const availableThemes = {
    [Theme.light]: createTheme(lightOptions),
    [Theme.dark]: createTheme(darkOptions)
}
