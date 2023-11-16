enum Theme {
    light = 'light',
    dark = 'dark'
}

enum ThemeColorTypes {
    Gray = 'Gray',
    Blue = 'Blue',
    Success = 'Success',
    Warning = 'Warning',
    Error = 'Error'
}

type ColorPallete = {
    [key in ThemeColorTypes]: {
        [key: number]: string
    }
}

export {
    Theme,
    ThemeColorTypes
}

export type {
    ColorPallete
}
