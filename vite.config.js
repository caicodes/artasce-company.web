import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

export default defineConfig({
  plugins: [vue(), vanillaExtractPlugin()],
})
