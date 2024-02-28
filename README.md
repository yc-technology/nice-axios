# nice-axios

[![NPM version](https://img.shields.io/npm/v/nice-axios?color=a1b858&label=)](https://www.npmjs.com/package/nice-axios)

the onion model of axios by @django

- Tree-shakable ESM
- Fully typed - with TSDocs

> This package is designed to be used as `devDependencies` and bundled into your dist.

## 🚀 Quick Start

- Install Dependency

```bash
pnpm add nice-axios
# or
npm i nice-axios
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

const addTokenPlugin: AjaxPlugin = async (next, config) => {
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

  const plugins: AjaxPluginFullConfig[] = [
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

| 属性              | 类型             | 描述              |
| ----------------- | ---------------- | ----------------- |
| baseURL           | string           | base url          |
| prefixURL         | string           | prefix url        |
| name              | string           | scope             |
| afterPluginOption | AjaxAfterOptions | afterPluginOption |
| defaultMeta       | AjaxConfigMeta   | defaultMeta       |

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
