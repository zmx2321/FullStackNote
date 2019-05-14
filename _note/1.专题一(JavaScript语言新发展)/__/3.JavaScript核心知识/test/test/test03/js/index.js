/**
 * test2-0
 * 请写出如下输出值，并解释为什么
 */
var num = 1;

function yideng() {
    "use strict";

    console.log(this)

    console.log(this.num++);
}

function yideng2() {
    console.log(++this.num);
}

(function () {
    "use strict";
    yideng2();
})();

yideng();

/*
1、2
2、Cannot read property 'num' of undefined
- 禁止this关键字指向全局对象
- 严格模式不允许this值为null或undefined
*/