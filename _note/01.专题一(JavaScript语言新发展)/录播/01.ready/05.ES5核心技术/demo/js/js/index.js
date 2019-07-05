/**
 * ES5核心技术
 */
this.a = 20;
let test = {
    a: 40,
    init: () => {
        console.log(this.a);
        function go() {
            this.a = 60;
            console.log(this.a);
        }
        go.prototype = 50;
        return go;
    }
};
let p = test.init();
p();
new (test.init())();