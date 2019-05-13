/**
 * test2-0
 * 请写出如下输出值，并解释为什么
 */
var num = 1;

function yideng() {
    "use strict";

    console.log(this.num ++);
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

*/