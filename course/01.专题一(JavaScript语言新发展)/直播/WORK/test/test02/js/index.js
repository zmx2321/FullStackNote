/**
 * test2
 * 请写出如下输出值，并完成附加题的作答
 */
function fn(){
    console.log(this.length);
}
var yideng = {
    length:5,
    method:function(){
        "use strict";
        fn();
        arguments[0]()
    }
}
const result = yideng.method.bind(null);
result(fn,1);