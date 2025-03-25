import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio/", // Keep this if you are deploying to a subdirectory
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This makes the server accessible from other devices in the same network
    port: 5173,       // This is the default port, you can change if needed
    open: true,       // Automatically open the app in the browser when the server starts
  },
});
