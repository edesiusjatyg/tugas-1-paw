import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: "/tugas-1-paw/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                personalLogs: resolve(__dirname, 'personal-logs.html')
            }
        }
    }
});
