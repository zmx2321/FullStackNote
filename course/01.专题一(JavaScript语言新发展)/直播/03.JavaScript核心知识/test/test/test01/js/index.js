/**
 * test1
 * 请写出弹出值，并解释为什么
 */
alert(a);
a();

var a = 3;
function a() {
    alert(10);
}
alert(a);
a = 6;
a();

/**
 变量提升后实际上为
    function a() {
        alert(10);
    }
    var a;
    alert(a);  // 方法体
    a();  // 10
    a = 3

    alert(a);  // 3
    a = 6;
    a();  // a is not a function
 */