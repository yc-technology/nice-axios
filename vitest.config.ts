import { fileURLToPath } from 'url'
import { defineConfig } from 'vitest/config'

// 自定义你的vitest配置
export default defineConfig({
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    coverage: {
      reporter: ['text', 'json', 'html', 'json-summary'],
    },
  },
})
