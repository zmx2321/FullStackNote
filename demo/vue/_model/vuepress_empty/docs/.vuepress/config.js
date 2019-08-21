module.exports = {
  title: '网站标题',
  description: '网站描述',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/vpdemo/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  // themeConfig: {
  //   sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
  //   lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  // }
  themeConfig: {
    nav:[
      { text: 'test', link: '/test/' }, // 内部链接 以docs为根目录
      { text: '博客', link: 'https://yhlben.github.io/' }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
          {
            text: '算法仓库',
            link: 'https://github.com/OBKoro1/Brush_algorithm'
          }
        ]
      }        
    ],
    sidebar:{
      /* "/": [
        ""
      ],

      "demo1": [
        '/', 
          {
            title: 'demo1',
            children: [
              '/demo1/demo1',
            ]
          }
      ] */

      '/': [
        '', 
        {
          title: 'demo1',
          children: [
            ["/demo1/demo1-1", "demo1-1"],
            ["/demo1/demo1-2", "demo1-2"],
          ]
        },
        {
          title: 'demo2',
          children: [
            '/demo2/demo2-1',
          ]
        }
      ],


      //   "/": [
      //     ""   // not "README.md"
      // ],
      // '/demo1/': [
      //     '/demo1/', 
      //     {
      //       title: '第二组侧边栏下拉框的标题1',
      //       children: [
      //         "/demo1/", "demo1"
      //       ]
      //     }
      //   ],
      //   // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
      //   '/demo2/': [
      //     '/demo2/', 
      //     {
      //       title: '第二组侧边栏下拉框的标题1',
      //       children: [
      //         "/demo2/demo2", "demo2"
      //       ]
      //     }
      //   ],

      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      
      // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
      // '/demo1/': [
      //   '/demo1/', 
      //   {
      //     title: '第二组侧边栏下拉框的标题1',
      //     children: [
      //       '/algorithm/simple/test' 
      //     ]
      //   }
      // ]
    }
  }
};