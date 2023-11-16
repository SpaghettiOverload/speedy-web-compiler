import { ColorPallete, Theme } from "../types";
import { darkPallete } from "./dark";
import { lightPallete } from "./light";

export const getPallete = (theme: Theme): ColorPallete => {
    switch (theme) {
        case Theme.light:
            return lightPallete
        default:
            return darkPallete
    }
}
