/**
 * test3
 * 请写出以li的输出值，并用三种方法正确输出li里的数字
 */
var list_li = document.getElementsByTagName("li");
// console.log(list_li[0]);

for (var i=0; i<list_li.length; i++) {
    // console.log(list_li[i].value);

    list_li[i].onclick = function () {
        // console.log(this.value);
        console.log(this.value);

        // console.log(i);
    }
}

/*
1、点击li输出6
2、

*/