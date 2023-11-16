import { createTheme, Theme as MUITheme } from "@mui/material"
import { Theme, ThemeColorTypes } from "./types"
import { getPallete } from "./palettes"
import { getThemeOptions } from "./options"


const getTheme = (theme: Theme): MUITheme => createTheme(getThemeOptions(theme))
const getColor = (theme: Theme, type: ThemeColorTypes, gradient: number): string => getPallete(theme)[type][gradient]

export {
    getTheme,
    getColor
}
