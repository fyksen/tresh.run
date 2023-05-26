import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tresh.Run",
  description: "A wiki about all things treshhold running",
  cleanUrls: true,
  head: [
    ['script', { defer: true, 'data-domain': 'tresh.run', src: 'https://plausible.tresh.run/js/script.js' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Main Topic', link: '/page1' }
    ],

    sidebar: [
      {
        text: 'Main Topic',
        items: [
          { text: 'Main 1', link: '/page1' },
          { text: 'Main 2', link: '/page2' }
        ]
      },
      {
        text: 'Second Topic',
        items: [
          { text: 'Second 1', link: '/second-page1' },
          { text: 'Second 2', link: '/second-page2' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fyksen/tresh.run' }
    ]
  }
})
