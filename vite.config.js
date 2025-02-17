import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from network and external tunnels
    port: 5173, // Default port (change if needed)
    cors: true // Enables Cross-Origin requests
  }
});
