import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import { AppRoutes } from './config'
import MainContentHandler from './components/MainContentHandler'
import { StyledAppContainer } from './components/Layout/styles'
import Layout from './components/Layout'
import { availableThemes } from './theme'
import { RootState } from './store'
import { useSelector } from 'react-redux'

function App() {

  const location = useLocation()
  const { selectedTheme } = useSelector((state: RootState) => state.theme)

  return (
    <ThemeProvider theme={availableThemes[selectedTheme]}>
      <CssBaseline />
      <StyledAppContainer>
        <Layout>
          <Routes>
            <Route path={AppRoutes.main} element={<MainContentHandler />} />
            <Route
              path={AppRoutes.undefined}
              element={<Navigate
                to={AppRoutes.main}
                state={{ from: location }} />}
            />
          </Routes>
        </Layout>
      </StyledAppContainer>
    </ThemeProvider>
  )
}

export default App
