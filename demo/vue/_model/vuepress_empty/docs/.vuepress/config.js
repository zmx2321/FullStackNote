module.exports = {
  title: '智慧楼宇可视化集成管理运营系统',
  description: '智慧楼宇可视化集成管理运营系统前端模块定义',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/smartbuildingsystem/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间

    nav:[
      
      { text: '接口地址', link: 'http://192.168.0.34:8080/swagger-ui.html#/' }, // 外部链接
      { text: 'test', link: '/test/test' }, // 内部链接 以docs为根目录  
      // 下拉列表
      /* {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
          {
            text: '算法仓库',
            link: 'https://github.com/OBKoro1/Brush_algorithm'
          }
        ]
      },  */    
    ],
    sidebar: {
      "/": [
        ["", "首页"],
        {
          title: '模块功能',
          collapsable: false,
          children: [
            ["/demo1/demo1-1", "1. 人员管理"],
            ["/demo1/demo1-2", "2. 车辆管理"],
            ["/demo1/demo1-3", "3. 楼宇管理"],
            ["/demo1/demo1-4", "4. 监控管理"],
            ["/demo1/demo1-5", "5. 统计管理"],
            ["/demo1/demo1-6", "6. 报警管理"],
            ["/demo1/demo1-7", "7. 巡更管理"],
            ["/demo1/demo1-8", "8. 预案管理"],
          ]
        },
        {
          title: '框架结构',
          collapsable: false,
          children: [
            ["/demo2/demo2-1", "1. 工具栏管理"],
            ["/demo2/demo2-2", "2. 快捷菜单栏管理"],
            ["/demo2/demo2-3", "3. 面板信息栏管理"],
            ["/demo2/demo2-4", "4. 树结构管理"],
          ]
        },
      ],
    }
  }
};