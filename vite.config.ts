import { defineConfig } from 'vitest/config'
import tsconfigPaths  from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [
      ['src/http/controllers/**', 'prisma'] //o nome 'prisma' precisa ser exatamente o que vem no final da pasta criada "vitest-environment-prisma"
    ],
  }
}) 