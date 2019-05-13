/**
 * test2
 * 请写出如下输出值，并写出把注释调的代码取消注释的值，并解释为什么
 */
this.a = 20;
var test = {
    a: 40,
    init: ()=> {
        console.log(this.a);
        function go() {
            // this.a = 60

            console.log(this.a);
        }

        go.prototype.a = 50;

        return go;
    }
}

// var p = test.init();
// p();
new(test.init())();

/*


(去掉注释后的答案)
*/