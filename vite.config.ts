import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import progress from 'vite-plugin-progress'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    progress(),
    svgr()
  ],
})
