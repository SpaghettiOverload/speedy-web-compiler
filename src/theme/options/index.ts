import { ThemeOptions } from "@mui/material"
import { lightOptions } from "./light"
import { Theme } from "../types"
import { darkOptions } from "./dark"

export const getThemeOptions = (theme: Theme): ThemeOptions => {
    switch (theme) {
        case Theme.light:
            return lightOptions
        default:
            return darkOptions
    }
}
