// node现在还不支持import
// import Rize from 'rize'
// 无头的比较适合集成环境
const Rize = require('rize')
const rize = new Rize();

rize
    .goto('https://github.com/')
    // 输入node
    .type('input.header-search-input', 'node')
    // 按回车
    .press('Enter')
    .waitForNavigation()
    // 查看是否会出现node.js内容
    .assertSee('Node.js')
    // .assertSee('xxx')  // 报错
    .end()  // Don't forget to call `end` function to exit browser!