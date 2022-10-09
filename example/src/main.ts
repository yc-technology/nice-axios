import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import Previewer from 'virtual:vue-component-preview'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import {AjaxResponse, createNiceAxios} from 'nice-axios'

const routes = setupLayouts(generatedRoutes)

const defaultToken = `XCCeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDAwMjAyMjA2MjIwMDAwMDAwMDAxIiwiZXhwIjo0ODY5OTUyMjIzfQ.VBSzJ9kM3MqHqn_xhMPHIo9UuFFUkljkMRBziqMEbsTOkE0x9rNw6PdhGTN8UIV9CmXU7CwfN_EwARra5Yr-Og`;

createNiceAxios([{
  order: 980,
  desc: 'test1',
  executor: (next, config) => {
    config.headers!['XCC-USER-LOGIN-TOKEN'] =  defaultToken;
    return next().then(() => {
      console.log('after test1')
    });
  },
},
  {
    order: 960,
    desc: 'test2',
    executor: (next, config) => {
      console.log('test2')
      return next().then(() => {
        console.log('after test2')
      });
    }

  },
  {
    order: 1020,
    desc: 'transform result struct',
    executor: (next, config) => {
      return next().then((data: AjaxResponse) => {
        console.log(data)
        data.data = {code:'SUCCESS', ...data.data}
        return data
      });
    }

  }
], {
  
  baseURL: '/api',
  afterPluginOption: {
    successCode:'SUCCESS',
    checkErrorCode: (code, message, result) => {
      console.error(code, message)
    },
    checkHttpErrorCode: (code, message) => {
      // console.error(code, message)
    }
  }
})

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    ctx.app.use(Previewer)
  },
)
