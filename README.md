# nice-axios

[![NPM version](https://img.shields.io/npm/v/nice-axios?color=a1b858&label=)](https://www.npmjs.com/package/nice-axios)

the onion model of axios by @django

- Tree-shakable ESM
- Fully typed - with TSDocs

> This package is designed to be used as `devDependencies` and bundled into your dist.

## 🚀 Quick Start

- Install Dependency

```bash
pnpm i nice-axios
# or
npm run nice-axios
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

const addTokenPlugin: AjaxPlugin = async (next, config) => {

  // Execute before request
  const token = localStorage.getItem('token')
  config.headers['xxx-TOKEN'] = token

  return next().then(() => {
    // Execute after request
  })
}

import { createNiceAxios } from 'nice-axios'
const niceAxios = createNiceAxios([addTokenPlugin],{...options})


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
