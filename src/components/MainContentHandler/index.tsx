import { Box, Button, Fade, Input } from "@mui/material"
import { useSelector } from "react-redux"

import { useUserManagement } from "../../hooks"
import { RootState } from "../../store"
import { APP_CONFIG } from "../../config"

const MainContentHandler = (): JSX.Element => {
    const userManagement = useUserManagement()
    const { userName } = useSelector((state: RootState) => state.user)

    return !userName ? (
        <Fade in timeout={APP_CONFIG.DEFAUL_TIMEOUT}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Input onChange={(e) => userManagement.setNewUserName(e.target.value)} />
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
