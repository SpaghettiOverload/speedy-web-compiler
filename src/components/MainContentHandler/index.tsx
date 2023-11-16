import { useEffect, useState } from "react"
import { Box, Button, Fade, TextField } from "@mui/material"
import { useSelector } from "react-redux"

import { useUserManagement } from "hooks"
import { RootState } from "store"
import { APP_CONFIG } from "config"

const MainContentHandler = (): JSX.Element => {
    const userManagement = useUserManagement()
    const { userName } = useSelector((state: RootState) => state.user)
    const { selectedTheme } = useSelector((state: RootState) => state.theme)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        if (selectedTheme) {
            setTimeout(() => {
                setLoading(false)
            }), APP_CONFIG.DEFAUL_TIMEOUT
        }
    }, [selectedTheme])

    return !userName && !loading ? (
        <Fade in={!loading} timeout={APP_CONFIG.DEFAUL_TIMEOUT * 2}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <TextField
                    placeholder={'John Doe'}
                    value={userManagement.newUserName}
                    onChange={(e) => userManagement.setNewUserName(e.target.value)} />
                <Button
                    disabled={!userManagement.newUserName}
                    variant='contained'
                    color="primary"
                    onClick={() => userManagement.handleLogIn(userManagement.newUserName)}
                >
                    {'Log In'}
                </Button>
            </Box>
        </Fade>
    ) : <></>
}

export default MainContentHandler
