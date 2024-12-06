import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        host: true,
        proxy: {
            '/api': {
                target: 'http://mallangs2-two-env.eba-b7cptgum.ap-northeast-2.elasticbeanstalk.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/api/v1'),
            },
        },
    },
    include: '**/*.svg?react',
});
