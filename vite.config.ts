import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './src/app'),
            '@pages': path.resolve(__dirname, './src/pages/index.ts'),
            '@widgets': path.resolve(__dirname, './src/widgets/index.ts'),
            '@entities': path.resolve(__dirname, './src/entities/index.ts'),
            '@shared': path.resolve(__dirname, './src/shared'),
        },
    },

    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:4040',
                rewrite: (path) => path.replace('/api', ''),
            },
        },
    },
})
