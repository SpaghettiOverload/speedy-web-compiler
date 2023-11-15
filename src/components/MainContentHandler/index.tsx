import { useEffect, useState } from "react"
import { Box, Button, Fade, Input } from "@mui/material"
import { useSelector } from "react-redux"

import { useUserManagement } from "../../hooks"
import { RootState } from "../../store"
import { APP_CONFIG } from "../../config"
import { styles } from "./styles"

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
                <Input
                    placeholder={'John Doe'}
                    fullWidth
                    disableUnderline
                    sx={styles.nameInput} onChange={(e) => userManagement.setNewUserName(e.target.value)} />
                <Button
                    disabled={!userManagement.newUserName}
                    variant='outlined'
                    onClick={() => userManagement.handleLogIn(userManagement.newUserName)}
                >
                    {'Log In'}
                </Button>
            </Box>
        </Fade>
    ) : <></>
}

export default MainContentHandler
