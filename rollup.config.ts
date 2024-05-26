import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import addShebangPlugin from './plugins/rollupPluginAddShebang'
import { RollupOptions, defineConfig } from 'rollup'

function buildScript() {
  return {
    input: 'scripts/index.ts',
    plugins: [json(), typescript(), terser(), addShebangPlugin({ include: 'dist/script/**.js' })],
    external: ['swagger-typescript-api', 'node:path'],
    output: [
      {
        format: 'cjs',
        esModule: false,
        file: `dist/script/index.cjs`,
        sourcemap: true
      }
    ]
  } as RollupOptions
}

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
          sourcemap: true,
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
    createConfig('src/hooks/reactHooks.ts', 'react-hooks'),
    buildScript()
  ]
}

export default defineConfig(buildConfig())
