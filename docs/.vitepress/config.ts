import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: '我的知识库',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  outDir:"../dist",
  themeConfig: {
    nav: [
      { text: 'Start', link: '/know/', activeMatch: '^/$|^/guide/' },
    ],
    sidebar: [
      {
        text:"目录～",
        items: getGuideSidebar(),
      }
    ]
  }
})

function getGuideSidebar() {
  return [
    {
      text: '如何搭建vitepress',
      link: '../konws/如何搭建vitepress.md'
    },
  ]
}