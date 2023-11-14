/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import '@mui/material/styles'

declare global {
  interface ImportMetaEnv {
    VITE_NODE_ENV: string
  }
}
