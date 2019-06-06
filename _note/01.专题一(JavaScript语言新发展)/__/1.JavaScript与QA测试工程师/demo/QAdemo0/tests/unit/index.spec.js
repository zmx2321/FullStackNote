// const add = require("index.js");

describe('测试基本函数api', function () {
    // it里面执行测试过程
    it('+1 函数的应用 ', function () {
        // 希望执行完add函数之后，变成2
        // 如果index.js不暴露，用window.add
        // expect(window.add(1)).toBe(3);
        expect(window.add(1)).toBe(1);
        // expect(window.add(2)).toBe(3);
    });
});