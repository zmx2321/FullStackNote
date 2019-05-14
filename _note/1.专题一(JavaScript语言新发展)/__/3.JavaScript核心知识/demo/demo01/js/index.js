/**
 * 手写一个bind
 */
Function.prototype.bind = function (oThis) {
    // 如果不是函数调用bind
    // 不是对象调用bind的话
    if (typeof this !== "function") {
        throw new TypeError("请使用函数执行");
    }

    // 把外面的参数拿过来
    var aArgs = Array.prototype.slice.call(arguments, 1);
}
