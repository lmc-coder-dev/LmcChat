import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config
export default defineConfig({
    plugins: [vue(),tailwindcss()],
     css: {
        preprocessorOptions: {
            scss: {
                // 显式启用新版编译 API，避开 Dart Sass 的 legacy 废弃警告
                api: 'modern-compiler',
            },
        },
    },
});
