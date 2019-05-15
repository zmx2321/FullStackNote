if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        // 如果不是函数来调用的话，抛出错误
        if (typeof this !== "function") {
            throw new TypeError("请使用函数执行");
        }
        /**
         *  Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组
         *
         * slice有两个用法，
         * 1、String.slice  返回字符串
         * 2、Array.slice  返回数组
         *
         * arguments是一个关键字，代表当前参数，在javascript中
         * 虽然arguments表面上以数组形式来表示，但实际上没有原生数组slice的功能，
         * 这里使用call方法算是对arguments对象不完整数组功能的修正
         *
         * slice返回一个数组，该方法只有一个参数的情况下表示除去数组内的第一个元素。
         * 就本上下文而言，原数组的第一个参数是“事件名称”，
         * 具体像“click”,"render"般的字符串，其后的元素才是处理函数所接纳的参数列表
         *
         * 这段代码的目的是为了拿到参数里除第一个以外后面的所有参数
         * 需要借用的方法slice在Array.prototype 上，然后call接受两个参数，
         * 第一个是需要借用方法的对象，第二个是传进方法的参数，也就是1
         */
        var aArgs = Array.prototype.slice.call(arguments, 1),
        // 保留原有的this,原来的函数
        fToBind = this,
        // 空函数
        fNop = function () {},
        // 处理完之后，bind返回的值
        fBound = function () {
            // 用apply修改this
            // 如果当前实例是由fBound创建的，就把这个this留住了，否则就把用户传过来的oThis传过去
            return fToBind.apply(this instanceof fBound ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        }
        if (this.prototype) {
            fNop.prototype = this.prototype;
        }
        fBound.prototype = new fNop();
        return fBound;
    }
}

/**
 * 执行一个bind
 * bind -> 用原来的函数加上apply(this)，
 * 如果要bind(a) => 原来的函数.apply(a)
 */

