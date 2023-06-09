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
      { text: 'Wiki', link: '/wiki/' },
      { text: 'About site', link: '/about-site'},
      { text: 'Get updates', link: '/subscribe'}
      
    ],

    sidebar: {
      '/wiki/': [
      {
        text: 'Wiki',
        items: [
          { text: 'Introduction', link: '/wiki/' },
          { text: 'Lactate', link: '/wiki/lactate/' },
          { text: 'Easy Running', link: '/wiki/easy-running' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fyksen/tresh.run' }
    ]
  }
}})
