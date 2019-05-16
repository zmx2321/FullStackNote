/**
 * test10【仔细思考】
 * 写出如下代码执行结果，并解释为什么
 */
var length = 10;
function fn() {
    console.log(this.length);
}

var yideng = {
    length: 5,

    method: function (fn) {
        fn();

        // arguments.fn();
        // methods也是arguments
        // 参数的个数
        // fn挂在arguments上，相当于的参数，method有两个参数
        // this指向arguments
        // arguments调用了fn
        arguments[0]();
    }
};

// 第一个值为函数，第二个值为1
yideng.method(fn, 1);  // 10, 2