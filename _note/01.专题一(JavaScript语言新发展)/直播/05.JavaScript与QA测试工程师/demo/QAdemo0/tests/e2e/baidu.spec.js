const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    // let driver = await new Builder().forBrowser('chrome').build();
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // 网址
        await driver.get('https://www.baidu.com/');
        // 搜索框的name(往wd文本框里面输入)回车
        await driver.findElement(By.name('wd')).sendKeys('javascript', Key.RETURN);
        // 下一个页面应该为标题等于搜索出来的页面标题
        await driver.wait(until.titleIs('javascript_百度搜索'), 1000);
    } finally {
        // 不管成功与否，退出driver
        await driver.quit();
    }
})();