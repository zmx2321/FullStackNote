const navConf = require('../config/navconfig');
const sidebarConf = require('../config/sidebarConf');

module.exports = {
  title: '博客demo',
  description: '博客demo描述',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/blog/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // string | boolean
    displayAllHeaders: true, // 默认值：false
    // 默认情况下，当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新
    activeHeaderLinks: true, // 默认值：true
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'webcodder/blog',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑文档',

    nav: navConf,  // 导航栏
    sidebar: sidebarConf  // 侧边栏
  }
};