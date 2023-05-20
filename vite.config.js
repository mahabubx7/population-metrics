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
    setupFiles: ["./src/setupTests.js"],
    testMatch: [
      "**/*.test.js",
      "**/*.test.jsx",
      "**/*.spec.js",
      "**/*.spec.jsx",
      "**/*/__test__/*.test.js",
      "**/*/__test__/*.spec.js",
      "**/*/__tests__/*.test.js",
      "**/*/__tests__/*.spec.js",
      "**/*/__test__/*.test.jsx",
      "**/*/__test__/*.spec.jsx",
      "**/*/__tests__/*.test.jsx",
      "**/*/__tests__/*.spec.jsx",
    ],
    globals: true,
  },
});
