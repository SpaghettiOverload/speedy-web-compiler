import { ThemeOptions } from "@mui/material";
import { ThemeColorTypes } from "../types";
import { darkPallete } from "../palettes/dark";

export const darkOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: darkPallete[ThemeColorTypes.Blue][20],
        },
        secondary: {
            main: darkPallete[ThemeColorTypes.Blue][20],
        },
        background: {
            default: darkPallete[ThemeColorTypes.Gray][100],
            paper: darkPallete[ThemeColorTypes.Gray][100],
        },
        success: {
            main: darkPallete[ThemeColorTypes.Success][60]
        },
        error: {
            main: darkPallete[ThemeColorTypes.Error][50]
        },
        warning: {
            main: darkPallete[ThemeColorTypes.Warning][60]
        }
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: `2px solid ${darkPallete[ThemeColorTypes.Blue][20]}`,
                    },

                },
                input: {
                    '&:-webkit-autofill': {
                        '-webkit-box-shadow': '0 0 0 100px #000 inset',
                        '-webkit-text-fill-color': '#fff'
                    },
                },
                notchedOutline: {
                    border: `1px solid ${darkPallete[ThemeColorTypes.Gray][60]}`,
                    borderRadius: '8px'
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&&': {
                        border: `1px solid ${darkPallete[ThemeColorTypes.Gray][60]}`,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    borderRadius: '8px',
                    background: darkPallete[ThemeColorTypes.Blue][20],
                    color: darkPallete[ThemeColorTypes.Gray][0],
                    padding: '10px',
                    textTransform: 'none',
                    '&:hover': {
                        background: darkPallete[ThemeColorTypes.Blue][30]
                    },
                    '&:click': {
                        background: darkPallete[ThemeColorTypes.Blue][20]
                    },
                    '&:disabled': {
                        background: '#1B3365'
                    }
                }
            }
        }
    },
}
