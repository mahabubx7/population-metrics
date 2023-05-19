import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.js"],
    testMatch: [
      "./tests/**/*.test.js",
      "./tests/**/*.test.jsx",
      "./tests/**/*.spec.js",
      "./tests/**/*.spec.jsx",
    ],
    globals: true,
  },
});
