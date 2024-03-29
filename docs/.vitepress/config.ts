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
    {
      text: 'vscode调试',
      link: '../konws/vscode调试.md'
    },
    {
      text: '简单cli',
      link: '../konws/简单cli.md'
    },
    {
      text: 'vue3源码探索',
      link: '../konws/vue3源码探索.md'
    }
  ]
}