import { Toolbar, styled } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(({ }) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
}))

export const styles = {
    absoluteContentCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
}
