/**
 * test3
 * 请写出以li的输出值，并用三种方法正确输出li里的数字
 *
 * js分成同步执行栈和异步执行队列
 * 同步先执行
 * 同步执行之后会拉异步执行队列
 * 异步队列 => ajax, setTimeOut, click
 */
var list_li = document.getElementsByTagName("li");

// 题
// for先执行(同步任务)
for (var i=0; i<list_li.length; i++) {
    // 点击的时候是在异步队列里
    // 点击的时候，同步已经执行完了，再点击事件，在异步队列里面取
    list_li[i].onclick = function () {
        console.log(i);  // 6
    }
}

// 解法1
// this
/*for (var i=0; i<list_li.length; i++) {
    list_li[i].onclick = function () {
        // 元素调用this，指向元素
        console.log(this.innerHTML);
    }
}*/

// 解法2【】
/*for (var i=0; i<list_li.length; i++) {
    // 闭包，立即执行
    list_li[i].onclick = (function (i) {
        console.log(i);
    })(i)
}*/

// 解法3 闭包(闭包很容易造成变量的无法回收和内存泄漏)
/*for (var i=0; i<list_li.length; i++) {
    (function (i) {
        list_li[i].onclick = function () {
            console.log(i);
        }
    })(i);
}*/
