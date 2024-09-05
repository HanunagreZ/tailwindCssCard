import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        base: '/tailwindCssCard/'  
      }
    }
  },
  root: "src",
});
