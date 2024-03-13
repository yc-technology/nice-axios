import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import pkg from './package.json'

export default defineConfig({
  input: 'src/index.ts',
  plugins: [json(), typescript(), terser()],
  external: ['axios', 'lodash-es', 'vue'],
  output: [
    {
      format: 'cjs',
      file: pkg.main,
      esModule: false,
      sourcemap: true,
    },
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true,
    },
    {
      format: 'iife',
      file: pkg.jsdelivr,
      name: 'Test',
      extend: true,
      globals: {},
    },
  ],
})
