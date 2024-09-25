import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_MAP_API_KEY': JSON.stringify(env.REACT_APP_MAP_API_KEY)
    },
  plugins: [
    react(),
    legacy()
  ]
}
})
