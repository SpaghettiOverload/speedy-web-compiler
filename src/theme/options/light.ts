import { ThemeOptions } from "@mui/material";

export const lightOptions: ThemeOptions = {
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
}
