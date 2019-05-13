/**
 * test3
 * 请写出以li的输出值，并用三种方法正确输出li里的数字
 */
var list_li = document.getElementsByTagName("li");

for (var i=0; i<list_li.length; i++) {
    list_li[i].onclick = function () {
        console.log(i);
    }
}

/*

*/