# NiceAxios

<p align="center">
  <a href="https://www.npmjs.com/package/nice-axios"><img src="https://badgen.net/npm/v/nice-axios" alt="npm package">
  </a>
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/sixdjango/nice-axios" alt="LICENSE">
  </a>
  <a href=""><img src="https://img.shields.io/github/package-json/author/sixdjango/nice-axios
  " alt="author">
  </a>
  <a href="https://www.npmjs.com/package/nice-axios"><img src="https://img.shields.io/npm/dy/nice-axios" alt="npm downloads">
  </a>
  <a href=""><img src="https://img.shields.io/github/actions/workflow/status/sixdjango/nice-axios/release.yml?branch=main
  " alt="github action state">
  </a>
  <a href=""><img src="https://img.shields.io/github/languages/top/sixdjango/nice-axios" alt="language top">
  </a>
  <a href=""><img src="https://img.shields.io/github/commits-since/sixdjango/nice-axios/latest" alt="git-hub-commits-since-latest-release">
  </a>

</p>

NiceAxios 是一个功能强大的库，它旨在为开发者提供一个更灵活、易扩展的方式来使用 [Axios](https://axios-http.com/)，一个广泛使用的基于 `Promise` 的 HTTP 客户端。通过利用"洋葱模型"（例如著名的 [Koa](https://koajs.com/) 服务器就是使用了这个模型）构建的插件系统，`NiceAxios` 为 `Axios` 请求流程提供了一种切面编程的方法，从而让开发者能够以模块化的方式拦截请求和响应，注入自定义逻辑或功能，以及重新定义请求的行为。
核心特性

<div align="center">

[![onion-model-image](./assets/onion-model.png)](./assets/onion-model.png)

</div>
- 灵活的插件系统：使用洋葱模型构建的插件机制，允许你以简单、直观的方式堆叠和执行中间件。
- 切面编程支持：为 Axios 请求和响应提供了一种切面编程的解决方案，使得操作更加灵活，方便在请求处理过程中注入自定义逻辑。
- 易于扩展：可以轻松实现并集成多种插件来满足不同的业务需求，提高代码的复用性和项目的可维护性。
- 无缝集成：设计上允许与现有的 Axios 实例和配置无缝集成，确保了对现有项目的友好支持。

## 🚀 Quick Start

- Install Dependency

```bash
pnpm add nice-axios
# or
npm i nice-axios
```

- CDN

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/lodash@4.17.21/lodash.min.js"></script>
<script src="./dist/umd/index.umd.js"></script>
```

## 🔍 Usage

- Basic

```js
import { createNiceAxios } from 'nice-axios'
const niceAxios = createNiceAxios()

niceAxios.get()
niceAxios.post()
...etc

```

- Plugins

```js
import { createNiceAxios } from 'nice-axios'

const addTokenPlugin: NiceAjaxExecutor = async (next, config) => {
    // Execute before request
    const token = 'test-token'
    if (config?.headers) {
      config.headers['xxx-TOKEN'] = token
    }

    return next(config).then((result: AxiosResponse) => {
      // Execute after request
      return result
    })
  }

  const plugins: NiceAjaxPlugin[] = [
    // generate plugin instance
    {
      // When the value is approximately small, the observer will be executed earlier before the request. On the contrary, the larger the value, the earlier the observer will be executed after the request.
      order: -100,
      executor: addTokenPlugin,
      desc: 'add token',
    },
  ]

  const niceAxios = createNiceAxios(plugins)
  const res = await niceAxios.get<AxiosResponse<string>>('https://httpd.apache.org/', {
    // meta: { allReturn: true },
  })
```

- Option

| Attributes        | Type             | Description       |
| ----------------- | ---------------- | ----------------- |
| baseURL           | string           | base url          |
| prefixURL         | string           | prefix url        |
| name              | string           | scope             |
| afterPluginOption | AjaxAfterOptions | afterPluginOption |
| defaultMeta       | AjaxConfigMeta   | defaultMeta       |

## 🤔 What

```ts
/**
 * 采用 compose 插件模式，对请求进行处理
 * 默认插件顺序是从左到右
 * - 请求前置插件 order 从小到大 [1,2,3,4,5] 越小越先执行
 * - 请求后置插件 order 从大到小 [-1,-2,-3,-4,-5] 越大越先执行
 * ## 执行顺序解释：
 * 1. 设计里面是”洋葱模型理念“，像洋葱一样，请求先从外层插件开始执行，然后依次往内层执行，最后返回结果
 * 2. 核心方法是 `compose`，`compose` 会将所有插件组合成一个函数，然后执行这个函数，这个函数会依次执行所有插件
 */
export type NiceAjaxExecutor = ComposePlugin<AjaxResponse, AjaxConfig>
```

### 🌰 Plugin Example

```ts
// 插件 1
const plugin1: NiceAjaxPlugin = {
  desc: '插件1',
  order: 1,
  executor: async (next, config) => {
    // 由于一个请求的生命周期中，config 都是一个对象引用。所以这里修改后会影响之后的 config 的值
    config.xx = xx
    // 这里可以传新的 config，新的 config 会覆盖原来的 config。注意这里是重新赋值 oldConfig = newConfig
    // next 在不断的调用下一个插件的关键
    return next(newConfig)
  },
}
```

## Star History

<a href="https://star-history.com/#sixdjango/nice-axios&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sixdjango/nice-axios&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sixdjango/nice-axios&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sixdjango/nice-axios&type=Date" />
  </picture>
</a>

## License

[MIT](./LICENSE) License © 2024 [Django](https://github.com/sixdjango)
