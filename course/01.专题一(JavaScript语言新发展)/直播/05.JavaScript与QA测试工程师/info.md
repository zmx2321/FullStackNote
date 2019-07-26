# JavaScript与QA测试工程师
### 对开发的称呼：
* QA 测试
* FE 前端
* RD 后端
* OP 运维
* DB 数据库
* DBA 数据库开发

### 单元测试
* 原则：
> 单一职责,接口抽象，层次分离
* 断言库：
> 保证最小单元是否正常运行检测方法
> 能判断是否
* 测试风格
1. TDD => 关注所有的功能是否被实现
> 每一个功能都必须有对应的测试用例
2. BDD => 关注整体行为是否符合整体预期
> 编写的每一行代码都有目的，提供一个全面的测试用例集（国内大部分使用）

### 单元测试框架、单元测试生命周期
> 见ppt

### 自动化单元测试
#### 准备工作
**和npm一样，yarn和cnpm也是环境包工具**
`npm install -g yarn`
* 确定package包
`npm init -y`
* 如果装了一个包，为了防止发生变化报错，在本地加了一个锁，于是有了package-lock.json
* 去掉包(yarn remove xxx)
#### 开始
1. `npm init -y`
2. 新建一个tests/unit/index.js文件，新建一个tests/unit/index.spec.js文件
> unit存放所有的单测文件
3. 在index.js里面写方法，index.spec.js里面写测试
4. 将断言测试环境装进来
* 1. 使用[Krama](https://github.com/karma-runner/karma)

> 使用npm在本地安装
`npm install karma --save-dev`
>> save 是在开发的时候使用，编译完还在用，save-dev是在开发的时候使用，编译的时候不使用
> 或者使用yarn安装
`yarn add krama --dev`
_有一个bin文件夹_
>> yarn 有缓存，装的比npmn快
>>> 把包装在全局
`yarn global add karma-cli`
* 发布一个包
`npm login`
`npm publish`
5. 在package.js里面写测试
> script里面"unit" : "karma start" => 单测
6. npm run unit就可以直接运行单测文件
7. 在有krama的本地中初始化生成karma.conf.js文件
`krama init`
* 1. jasmine判断一下测试文件（断言）
* 2. 是否用require
* 3. 浏览器
* 4. 是否监听
8. 修改karma.conf.js，运行npm run unit
9. 报错，继续装依赖(cnpm)
`npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev`
10. 继续运行，安装
`npm install karma-phantomjs-launcher --save-dev`
11. 运行
12. 如果不行，改用chrome,要装chrome的启动器
`yarn add karma-chrome-launcher`
13. 成功之后打开浏览器返回success关掉浏览器
14. 代码测试覆盖率检查
`yarn add karma-coverage --dev`
15. 运行之后，把doc中的文件拿出来看结果


### e2e--端对端测试(selenium)
**selenium(浏览器自动化测试框架)**
> [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)
> npm install selenium-webdriver --save
```
test.spec.js
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q'));.sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();

```
1. 新建e2e文件夹
2. 新建*.spec.js
3. 从npm官网中复制
4. 从npm官网下载浏览器驱动，放到项目文件根目录中
5. package.js 
`node ./tests/e2e/baidu.spec.js`
6. 运行
`npm run e2e`


### e2e--端对端测试(rize)[爬虫]
> [rize](https://rize.js.org/)
> npm install --save-dev @types/puppeteer
> npm install --save-dev puppeteer rize
或
> yarn add --dev puppeteer rize
```
git.spec.js
rize
  .goto('https://github.com/')
  .type('input.header-search-input', 'node')
  .press('Enter')
  .waitForNavigation()
  .assertSee('Node.js')
  .end()  // Don't forget to call `end` function to exit browser!
```

1. 新建*.spec.js文件，复制
2. 安装
3. 运行
`node ./tests/e2e/baidu.spec.js`


### 测试react单元
```
"jasmine-core": "^3.4.0",
"jest-dom": "^3.2.2",

"react-dom": "^16.8.6",
"react-scripts": "^3.0.1",
"react-testing-library": "^7.0.1",
```
* 新建一个src文件夹，index.js
* 写一个react组件(也是一个单元)
* 写一个测试index.spec.js
* 用jest去测试react单元(facebook)
* unit改成react-script test -env-jsdom
* jest会把tests里的文件都执行了


### f2eTest(UI Recorder)
测试UI
PhantomCSS
BACKSTOPJS
* engine_script引擎脚本
* html_report    ./doc/..
* ci_report  ./doc/..
`backstop test`运行


### mochaRunner(测试异步)