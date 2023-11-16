import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppBar, Box, Button, Fade, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"

import { RootState } from "store";
import LimeLogo from "assets/lime-logo.png";
import { useUserManagement } from "hooks";
import { APP_CONFIG } from "config";
import { useThemeManagement } from "hooks";

import { Theme } from "theme/types";
import { StyledToolbar, styles } from "./styles";

const Counter = () => {

    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevCount) => prevCount + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [seconds])

    return <Fragment> {seconds} </Fragment>
}

const LeftContent = () => {

    const { userName } = useSelector((state: RootState) => state.user)

    return (
        <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box component={'img'} src={LimeLogo} maxWidth={'100px'} />
            <Typography variant="h6">
                {`Hi, ${userName}`}
            </Typography>
        </Box>
    )
}

const ThemeSelector = () => {

    const themeManagement = useThemeManagement()

    return (
        <FormControl size="small">
            <InputLabel size="small">Theme</InputLabel>
            <Select
                size="small"
                value={themeManagement.selectedTheme}
                label="Theme"
                onChange={(e) => themeManagement.changeTheme(e.target.value as Theme)}
            >
                {Object.keys(Theme).map((theme) => {
                    return <MenuItem key={theme} value={theme}>{theme}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

const RightContent = () => {

    const userManagement = useUserManagement()

    return (
        <Box gap={3} sx={[styles.absoluteContentCenter]}>
            <Typography sx={{ color: 'black' }}>
                You are here for: <Counter /> seconds
            </Typography>
            <Button variant='contained' onClick={userManagement.handleLogOut}>
                {'Log Out'}
            </Button>
            <ThemeSelector />
        </Box>
    )
}

const Header = () => {

    const { userName } = useSelector((state: RootState) => state.user)
    const isLoggedIn = !!userName

    return isLoggedIn ? (
        <Fade in timeout={APP_CONFIG.DEFAUL_TIMEOUT}>
            <AppBar position="fixed" >
                <Fade in timeout={APP_CONFIG.DEFAUL_TIMEOUT + 500}>
                    <StyledToolbar>
                        <LeftContent />
                        <RightContent />
                    </StyledToolbar>
                </Fade>
            </AppBar>
        </Fade>
    ) : <Box sx={{ position: 'absolute', right: 24, top: 12 }}> <ThemeSelector /></Box>
}

export default Header
