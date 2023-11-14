import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../store'
import { updateThemeState } from '../store/theme'
import { Theme } from '../theme'

export const useThemeManagement = () => {

    const dispatch = useDispatch()
    const { selectedTheme } = useSelector((state: RootState) => state.theme)

    const changeTheme = (newTheme: Theme) => {
        dispatch(updateThemeState({
            selectedTheme: newTheme
        }))
    }

    return {
        selectedTheme,
        changeTheme
    }
}
