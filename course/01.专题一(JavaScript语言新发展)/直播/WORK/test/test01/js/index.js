/**
 * test1
 * 请写出如下代码输出值，并解释为什么
 */
console.log(a);
console.log(typeof yideng(a));
var flag = true;
if (!flag) {
    var a = 1;
}
if (flag) {
    function yideng(a) {
        yideng = a;
        console.log("yideng1");
    }
} else {
    function yideng(a) {
        yideng = a;
        console.log("yideng2");
    }
}