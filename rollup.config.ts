import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { RollupOptions, defineConfig } from 'rollup'

function buildConfig() {
  function createConfig(input: string, target: string) {
    return {
      input: input,
      plugins: [json(), typescript(), terser()],
      external: ['axios', 'lodash-es', 'vue', 'react'],
      output: [
        {
          format: 'cjs',
          file: `dist/cjs/${target}.js`,
          esModule: false,
          sourcemap: true,
          globals: {
            axios: 'axios',
            'lodash-es': '_'
          }
        },
        {
          format: 'es',
          file: `dist/esm/${target}.js`,
          sourcemap: true,
          globals: {
            axios: 'axios',
            'lodash-es': '_'
          }
        },
        {
          format: 'umd',
          globals: {
            axios: 'axios',
            'lodash-es': '_'
          },
          name: 'NiceAxios',
          file: `dist/umd/${target}.umd.js`,
          sourcemap: true
        },
        {
          format: 'iife',
          file: `dist/iife/${target}.js`,
          name: 'Test',
          extend: true,
          globals: {
            axios: 'axios',
            'lodash-es': '_'
          }
        }
      ]
    } as RollupOptions
  }

  return [
    createConfig('src/index.ts', 'index'),
    createConfig('src/hooks/vueHooks.ts', 'vue-hooks'),
    createConfig('src/hooks/reactHooks.ts', 'react-hooks')
  ]
}

export default defineConfig(buildConfig())
