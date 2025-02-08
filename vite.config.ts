import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "./",  // ✅ Ensures correct paths in production
  server: {
    host: "0.0.0.0", // ✅ More compatible with different environments
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" ? componentTagger() : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist", // ✅ Ensures Netlify deploys from the correct folder
    rollupOptions: {
      input: "index.html", // ✅ Ensures correct entry point
    },
  },
}));
