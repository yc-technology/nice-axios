import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import pkg from './package.json'

export default defineConfig({
  input: 'src/index.ts',
  plugins: [json(), typescript(), terser()],
  external: ['axios', 'lodash-es', 'vue', 'react'],
  output: [
    {
      format: 'cjs',
      file: pkg.main,
      esModule: false,
      sourcemap: true,
      globals: {
        axios: 'axios',
        'lodash-es': '_',
      },
    },
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true,
      globals: {
        axios: 'axios',
        'lodash-es': '_',
      },
    },
    {
      format: 'umd',
      globals: {
        axios: 'axios',
        'lodash-es': '_',
      },
      name: 'NiceAxios',
      file: pkg.umd,
      sourcemap: true,
    },
    {
      format: 'iife',
      file: pkg.jsdelivr,
      name: 'Test',
      extend: true,
      globals: {
        axios: 'axios',
        'lodash-es': '_',
      },
    },
  ],
})
