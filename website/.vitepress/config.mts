import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nice Axios',
  description: 'Axios Onion Model Wrapper',
  head: [
    [
      'link',
      {
        href: '/root.css',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/logo.svg'
      }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/api-examples' }
    ],

    logo: '/logo.svg',

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/quick-start' },
          { text: 'API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/sixdjango/nice-axios' }]
  }
})
