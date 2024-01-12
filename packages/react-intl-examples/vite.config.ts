import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@typesafe-intl/core': resolve(__dirname, '../core/src/typesafe-intl-core.ts'),
            '@typesafe-intl/react-intl': resolve(
                __dirname,
                '../react-intl/src/typesafe-intl-react-intl.tsx',
            ),
        },
    },
});
