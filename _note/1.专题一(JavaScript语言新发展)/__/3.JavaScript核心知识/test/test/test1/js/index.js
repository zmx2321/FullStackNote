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

/*
1、alert(a);
- 弹出a方法
function a() {
    alert(10);
}

2、a();
- 执行a方法
10

3、alert(a);
- a进行赋值，弹出a，是赋值之后的a

4、a();
- 将a重新赋值，a为值，不是方法
报错，a is not a function
*/