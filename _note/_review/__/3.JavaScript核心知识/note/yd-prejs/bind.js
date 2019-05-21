if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            throw new TypeError("请使用函数执行");
        }
        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNop = function () { },
            fBound = function () {
                //this
                return fToBind.apply(this instanceof fBound ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
            }
        if (this.prototype) {
            fNop.prototype = this.prototype;
        }
        fBound.prototype = new fNop();
        return fBound;
    }
}
// bind (a)-> 原来的函数.apply(a)