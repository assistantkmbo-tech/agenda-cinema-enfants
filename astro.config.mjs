import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [{
      name: 'admin-index-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/admin' || req.url === '/admin/') {
            req.url = '/admin/index.html';
          }
          next();
        });
      }
    }]
  }
});
