module.exports = [
    { text: 'Home', link: '/' },
    {
      text: '链接',
      items: [
        { text: '链接1', link: 'https://github.com' },
        {
          text: '链接2',
          link: 'https://www.baidu.com'
        }
      ]
    },
    // 内部链接 以docs为根目录  
    { text: 'test', link: '/test/test' },
];