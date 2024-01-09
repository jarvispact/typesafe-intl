import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/typesafe-intl-react-intl.tsx'),
            name: 'typesafe-intl-react-intl',
            formats: ['umd'],
            fileName: (format) => `typesafe-intl-react-intl.${format}.js`,
        },
    },
    resolve: {
        alias: {
            '@typesafe-intl/core': resolve(__dirname, '../core/src/typesafe-intl-core.ts'),
        },
    },
});
