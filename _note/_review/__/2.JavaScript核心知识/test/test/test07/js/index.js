/**
 * test5
 * 请写出输出值，并解释为什么
 *
 * 函数提升
 */
function yideng() {
    console.log(1);
}

(function () {
    if (false) {
        function yideng() {
            console.log(2);
        }
    }

    yideng();  // yideng is not a function
})();

/*
函数提升相当于
(function () {
    var yideng;  // undefind

    if (false) {
        function yideng() {
            console.log(2);
        }
    }

    yideng();  // yideng is not a function
})();


在早期的浏览器，js函数会提升到最外层  2


function yideng() {
    console.log(1);
}

if (false) {
    function yideng() {
        console.log(2);
    }
}

yideng();  // 1

有函数就特殊
*/