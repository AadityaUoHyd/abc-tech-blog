const { defineConfig, loadEnv } = require('vite');
const react = require('@vitejs/plugin-react-swc');
const path = require('path');

module.exports = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['VITE_', 'REACT_APP_']);
  return {
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_URL || 'http://localhost:3000',
          secure: false,
          changeOrigin: true,
        },
      },
    },
    plugins: [react()],
    root: './',
    envPrefix: ['VITE_', 'REACT_APP_'],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            firebase: ['firebase/app', 'firebase/storage', 'firebase/auth'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['firebase/app', 'firebase/storage', 'firebase/auth'],
    },
  };
});
