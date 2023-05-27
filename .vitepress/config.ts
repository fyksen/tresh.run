import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tresh.Run",
  description: "A wiki about all things treshhold running",
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ['script', { defer: true, 'data-domain': 'tresh.run', src: 'https://plausible.tresh.run/js/script.js' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki/' }
    ],

    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: 'Introduction', link: '/wiki/' },
          { text: 'Lactate', link: '/wiki/lactate/' },
          { text: 'Easy Running', link: '/easy-running' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fyksen/tresh.run' }
    ]
  }
})
