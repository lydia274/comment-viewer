import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "comment-viewer", // Replace with your actual base path
  plugins: [react()],
})
