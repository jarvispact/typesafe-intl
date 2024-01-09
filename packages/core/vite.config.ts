import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/typesafe-intl-core.ts'),
            name: 'typesafe-intl-core',
            formats: ['umd'],
            fileName: (format) => `typesafe-intl-core.${format}.js`,
        },
    },
});
