import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ts-lib-rollup-starter',
  ignoreDeadLinks: true,
  themeConfig: {
    sidebar: [
      {
        text: '关于',
        items: [
          { text: '关于项目', link: '/README' },
          { text: '更新日志', link: '/CHANGELOG' },
          { text: '演示页面', link: '/docs/index' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: '所有导出', link: '/docsDist/modules#table-of-contents' },
          { text: '导出变量', link: '/docsDist/modules#variables-1' },
          { text: '导出方法', link: '/docsDist/modules#functions-1' },
        ],
      },
    ],
  },
})
