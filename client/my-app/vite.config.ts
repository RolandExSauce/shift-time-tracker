import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "devorlando.com",
    port: 443,
    https: {
      key: "../../SSL/certificate/server.key",
      cert: "../../SSL/certificate/server.crt",
    },
  },
  plugins: [react()],
});
