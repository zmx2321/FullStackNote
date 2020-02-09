# JavaScript核心知识(面试题)

> ### 1. 请写出弹出值，并解释为什么？
__<font color="#666">原题：</font>__

```
alert(a);
a();

var a = 3;
function a() {
    alert(10);
}
alert(a);
a = 6;
a();
```

__<font color="#666">考点：</font>__
> 变量提升、函数提升

__<font color="#666">答案：</font>__
> 1. 第一次输出：<br />
> function a() {
    alert(10);
}
> 2. 第二次输出：<br />
> 10
> 3. 第三次输出：<br />
> 3
> 4. 第四次输出：<br />
> a is not a function

__<font color="#666">解析：</font>__
<br />
其变形为：
```
// 函数提升
function a() {  // a => f
    alert(10);
}

// 变量提升
var a;  // undefind(被忽略)

alert(a);  // 第一个输出是函数体 => f(a)
a();  // 执行a方法，第二个输出是10

a = 3;

alert(a);  // 上面a被赋值，第三个输出是3
a = 6;
a();  // 函数被提升之后被赋值了，所以此时不存在f(a)，第四次输出a is not a function
```

__<font color="#f00">变量和函数提升注意事项：</font>__
- 变量提升
- 函数提升
    - 函数调用不论在哪里都可以执行函数
    - 函数优先于变量提升


__<font color="#666">扩展：</font>__
> #### <font color="#8BB0D2">1-1 示例：</font>
> #### 变量提升

```
if (false) {
    var a = 1;
}

console.log(a);
```
__<font color="#8BB0D2">答案：</font>__
> undefind

__<font color="#8BB0D2">解析：</font>__
<br />
这里存在变量提升，其变形是：
```
var a;  // 变量被提升到上面
if (false) {
    a = 1;
}

console.log(a);  // undefind
```

> #### <font color="#8BB0D2">1-2 示例：</font>
> #### 变量提升

```
alert(a);
a();

var a = 3;
```
__<font color="#8BB0D2">答案：</font>__
> undefind

__<font color="#8BB0D2">解析：</font>__
<br />
这里存在变量提升，其变形是：
```
var a;  // 变量被提升到上面
alert(a);
a();  // undefind

a = 3;
```

> #### <font color="#8BB0D2">1-3 示例：</font>
> #### 函数提升

```
test();
function test() {
    console.log(1);
}
```
__<font color="#8BB0D2">答案：</font>__
> 1

__<font color="#8BB0D2">解析：</font>__
<br />
说明函数提升的优先级比变量提升高，test();不管写在哪里都可以执行。其变形为：
```
// 函数提升
function test() {  // test => f
    console.log(1);
}
test();  // 执行函数
```

> #### <font color="#8BB0D2">1-4-1 示例：</font>
> #### 函数提升和变量提升混合

```
function test() {
    console.log(1);
}
var test = 2;
console.log(test);
```
__<font color="#8BB0D2">答案：</font>__
> 2

__<font color="#8BB0D2">解析：</font>__
<br />
<font color="#EB563B">注意：函数提升要比变量提升的优先级要高一些，且不会被变量声明覆盖，但是会被变量赋值之后覆盖。</font>
<br />
test函数先被提升，然后再被赋值，此时不存在test函数了，然后再进行变量提升，将var test提升到上面，其变形是：

```
// 函数提升
function test() {  // test => f
    console.log(1);
}
var test;  // 变量被提升到上面
test = 2;  // 被提升的函数会被变量赋值之后覆盖
console.log(test);  // 2
```

> #### <font color="#8BB0D2">1-4-2 示例：</font>
> #### 函数提升和变量提升混合

```
function test() {
    console.log(1);
}
var test;
console.log(test);
```
__<font color="#8BB0D2">答案：</font>__
> ƒ test() {
    console.log(1);
}

__<font color="#8BB0D2">解析：</font>__
<br />
此时var test;时，test值为undefind，undefind变量会被自动忽略，其变形是：
```
// 函数提升
function test() {  // test => f
    console.log(1);
}
var test;  // undefind（被自动忽略）
console.log(test);  // test => f
```

> #### <font color="#8BB0D2">1-4-3 示例：</font>
> #### 函数提升和变量提升混合

```
var test = 2;
function test() {
    console.log(1);
}
console.log(test);
```
__<font color="#8BB0D2">答案：</font>__
> 2

__<font color="#8BB0D2">解析：</font>__
<br />
函数提升优先于变量提升，被提升的函数会被变量赋值之后覆盖，其变形为：
```
// 函数提升（函数提升优先级比变量提升高）
function test() {  // test => f
    console.log(1);
}
var test;  // 变量被提升到上面
test = 2;  // 被提升的函数会被变量赋值之后覆盖
console.log(test);  // 2
```

> #### <font color="#D9462F">1-5 表达式中的提升（深度扩展）</font>

__<font color="#f00">表达式声明的函数注意事项：</font>__
- 表达式声明的函数只能在内部访问
- 表达式声明的函数无法被重写

> #### <font color="#8BB0D2">1-5-1示例：</font>
> #### 表达式中的提升

```
var test = function test() {
    
}

console.log(test);
```
__<font color="#8BB0D2">答案：</font>__
> ƒ test() {
}

__<font color="#8BB0D2">解析：</font>__
<br />
变量提升，将f(test)赋值给test变量，其变形为：
```
var test;
test = function test() {
    
}

console.log(test);  // test => f
```

> #### <font color="#8BB0D2">1-5-2 示例：</font>
> #### 自执行函数

```
(function test() {
    
})();

console.log(test);
```
__<font color="#8BB0D2">答案：</font>__
> test is not defind

__<font color="#8BB0D2">解析：</font>__
<br />
自执行函数无法提升到外部，所以找不到test方法
```
(function test() {
    // 只能在内部进行访问
})();

console.log(test);
```

> #### <font color="#8BB0D2">1-5-3 示例：</font>
> #### 表达式中的提升

```
var q = function test() {
    console.log("aaa", test);
};

q();
console.log(test);
```
__<font color="#8BB0D2">答案：</font>__
> 1. 第一次输出：<br />
> aaa <br />
> ƒ test() {
    console.log("aaa", test);
}
> 2. 第二次输出：<br />
> undefined

__<font color="#8BB0D2">解析：</font>__
<br />
这里存在变量提升，且表达式声明的函数只能在内部进行访问，其变形为：
```
var q;
q = function test() {
    // 这里的test即当前方法地方法体
    console.log("aaa", test);
};

q();  // 执行q方法
// 在外部拿不到表达式中声明的函数的方法体
console.log(test);
```

> #### <font color="#8BB0D2">1-5-4 示例：</font>
> #### 表达式中的提升

```
var q = function test() {
    test = 1;

    console.log("aaa", typeof test);
};

q();
```
__<font color="#8BB0D2">答案：</font>__
> aaa <br />
> function

__<font color="#8BB0D2">解析：</font>__
<br />
这里存在变量提升，且表达式声明的函数只能在内部进行访问，并且无法进行重写，其变形为：
```
var q;
q = function test() {
    // test只能在内部进行访问
    // test无法被重写
    test = 1;

    // aaa function
    console.log("aaa", typeof test);  
};
q();
```

> #### <font color="#8BB0D2">1-6 变量提升中的null和undefind</font>

__<font color="#f00">变量提升中的null和undefind注意事项：</font>__
- 系统的undefind会被自动忽略
- 自己定义的undefind和null有意义

> #### <font color="#8BB0D2">1-6-1 示例：</font>
> #### 变量提升中的null和undefind

```
function test() {
    
}

var test;
console.log(test);
```
__<font color="#8BB0D2">答案：</font>__
> ƒ test() {}

__<font color="#8BB0D2">解析：</font>__
<br />
此时var test;时，test值为undefind，undefind变量会被自动忽略，其变形是：
```
// 函数提升
function test() {  // test => f
    
}
var test;  // undefind（被自动忽略）
console.log(test);  // test => f
```

> #### <font color="#8BB0D2">1-6-2 示例：</font>
> #### 变量提升中的null和undefind

```
function test() {
    
}

var test = null;
console.log(test);
```
__<font color="#8BB0D2">答案：</font>__
> null

__<font color="#8BB0D2">解析：</font>__
<br />
只要你给他赋了值，它都是有意义的，其变形是：
```
var test;
function test() {
    
}

test = null;
console.log(test);  // null
```

> #### <font color="#8BB0D2">1-6-3 示例：</font>
> #### 变量提升中的null和undefind

```
function test() {
    
}

var test = undefind;
console.log(test);
```
__<font color="#8BB0D2">答案：</font>__
> undefind

__<font color="#8BB0D2">解析：</font>__
<br />
只要你给他赋了值，它都是有意义的，其变形是：
```
var test;
function test() {
    
}

test = undefind;
console.log(test);  // undefind
```

---
<br/>


> ### 2. 请写出如下输出值，并写出把注释调的代码取消注释的值，并解释为什么?
__<font color="#666">原题：</font>__

```
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
```

__<font color="#666">考点：</font>__
> this指向

__<font color="#666">答案：</font>__
> - 未取消注释时:
    > 1. 第一次输出： <br />
        20
    > 2. 第二次输出： <br />
        50
> - 取消注释时：
    > 1. 第一次输出： <br />
        20
    > 2. 第二次输出： <br />
        60
    > 3. 第三次输出： <br />
        60
    > 4. 第四次输出： <br />
        60

__<font color="#666">解析：</font>__
<br />
未取消注释时: 
- `test.init();`的方法中，init是箭头函数的方法，箭头函数中的this是在定义函数的时候绑定的，即箭头函数的this是他父级的this，即箭头函数本身与init平级，也就是箭头函数本身所在的对象为test，而test的父执行上下文就是window，所以this指向在全局中，全局中的this是20
- 假使`var result = test.init();`，`new result();`中，new的时候，this就会指向new出来的对象，而在new出来的对象中，构造方法的this优先级要大于原型链，但在init方法中没有构造方法，所以，在new的时候，它的this指向的是被实例化的result()本身，即test.init()本身，所以它的最终值为被实例化后的test.init()中的被挂载在原型链上的值，50

```
this.a = 20;

var test = {
    a: 40,
    
    init: ()=> {
        console.log(this.a);
        
        function go() {
            console.log(this.a);
        }

        go.prototype.a = 50;

        return go;
    }
}

// 20 、50
new(test.init())();

/*
    new(test.init())();
    相当于
    var result = test.init();
    new result();
*/
```

取消注释时：
- 第一步同上。
- 第二步，因为`var p = test.init();`执行test.init返回go函数，所以`p();`的this指向在go上，又由于函数中的this执行的构造函数的优先级大于原型链，所以这里是60。
- `test.init()`返回的是go，所以this执行是go，优先级同上， 所以是60。
- 实例化指向被new出来的对象是go，优先级同上，所以是60
```
this.a = 20;

var test = {
    a: 40,
    
    init: ()=> {
        console.log(this.a);
        function go() {
            this.a = 60

            console.log(this.a);
        }

        go.prototype.a = 50;

        return go;
    }
}

var p = test.init();  // 20
p();  // 60
new(test.init())();  // 60、60

/*
    new(test.init())();
    相当于
    var result = test.init();
    new result();
*/
```

__<font color="#f00">this指向注意事项：</font>__
- this，谁调用指谁
- 构造函数的优先级(访问权限) > 原型链
- new的时候，this就会指向new出来的对象
- 箭头函数
    - 箭头函数相当于bind，会改变this的指向
    - 箭头函数的this是他父级的this
    - 箭头函数把this固定到他父级的同级作用
- 能改变this指向的关键词
    - bind
    - apply 
    - call
- 一般函数this指向在执行的时候绑定
- 箭头函数中的this是在定义函数的时候绑定
- 严格模式
    - 非严格模式下默认指向window， 
    - 严格模式下传null指向null，不传或者传undefined都指向undefined，即在严格模式下，没有写执行主体，this指向是undefined。


__<font color="#666">扩展：</font>__
> #### <font color="#8BB0D2">2-1 示例：</font>
> #### this指向

```
this.a = 20;
function test() {
    console.log(this.a);
}

test();  
```
__<font color="#8BB0D2">答案：</font>__
> 20

__<font color="#8BB0D2">解析：</font>__
<br />
谁调用指向谁，这里指window，即全局：
```
this.a = 20;
function test() {
    console.log(this.a);
}

// 相当于window.test();  window调用，指向window
test();  // 20
```

> #### <font color="#8BB0D2">2-2 示例：</font>
> #### this指向

```
this.a = 20;
var test = {
    a: 40,
    init: function () {
        console.log(this.a);
    }
}

test.init();
```
__<font color="#8BB0D2">答案：</font>__
> 40

__<font color="#8BB0D2">解析：</font>__
<br />
test调用init方法，this指向test：
```
this.a = 20;
var test = {
    a: 40,
    init: function () {
        console.log(this.a);
    }
}

// test调用init方法，this指向test
test.init();  // 40
```

> #### <font color="#8BB0D2">2-3 示例：</font>
> #### this指向

```
this.a = 20;
var test = {
    a: 40,
    init: function () {
        console.log(this.a);
    }
}

var fn = test.init;
fn();
```
__<font color="#8BB0D2">答案：</font>__
> 20

__<font color="#8BB0D2">解析：</font>__
<br />
相当于window.fn，这里的this指向window：
```
this.a = 20;
var test = {
    a: 40,
    init: function () {
        console.log(this.a);
    }
}

var fn = test.init;
// 相当于window.fn，这里的this指向window
fn();  // 20
```

> #### <font color="#8BB0D2">2-4 示例：</font>
> #### this指向

```
this.a = 20;
var test = {
    a: 40,
    init: function () {
        function go() {
            console.log(this.a);
        }

        go();
    }
}

test.init();
```
__<font color="#8BB0D2">答案：</font>__
> 20

__<font color="#8BB0D2">解析：</font>__
<br />
没有人调用go，相当于window.go，this指全局
```
this.a = 20;
var test = {
    a: 40,
    init: function () {
        function go() {
            console.log(this.a);
        }

        // 相当于window.go
        go();  // 20
    }
}

test.init();
```

> #### <font color="#8BB0D2">2-5 示例：</font>
> #### this指向优先级

```
this.a = 20;
var test = {
    a: 40,
    init: function () {
        function go() {
            this.a = 50;
        }

        go.prototype.a = 60;

        console.log((new go()).a);
    }
}

test.init();
```
__<font color="#8BB0D2">答案：</font>__
> 50

__<font color="#8BB0D2">解析：</font>__
<br />
构造函数的优先级(访问权限) > 原型链，并且用new调用go，this就指向实例，此时的this指向就是go，而构造方法的this指向优先级高，所以a就是在go的实例的构造方法中的值。
```
this.a = 20;
var test = {
    a: 40,
    
    // 构造函数的优先级(访问权限) > 原型链
    init: function () {
        // 构造方法
        function go() {
            this.a = 50;
        }

        // 原型链
        go.prototype.a = 60;

        // new的时候，this就会指向new出来的对象
        // 用new调go，this就指向实例
        console.log((new go()).a);
    }
}

test.init();  // 50
```

> #### <font color="#8BB0D2">2-6 示例：</font>
> #### 箭头函数中的this指向

```
this.a = 20;
var test = {
    a: 40,

    init: () => {
        console.log(this.a);
    }
}

test.init();
```
__<font color="#8BB0D2">答案：</font>__
> 20

__<font color="#8BB0D2">解析：</font>__
<br />
<font color="#EB563B">注意：箭头函数中的this是在定义函数的时候绑定，而不是在执行函数的时候绑定，所谓的定义时候绑定，就是this是继承自父执行上下文！！</font>
<br />
箭头函数相当于bind，会改变this的指向，它把这个this固定到他父级的同级作用域中了，即箭头函数本身与init平级，也就是箭头函数本身所在的对象为test，而test的父执行上下文就是window，所以this指向在全局中。
```
this.a = 20;
var test = {
    a: 40,
    /**
     * 箭头函数相当于bind，会改变this的指向
     * 箭头函数的this是他父级的this
     * 箭头函数把this固定到他父级的同级作用域去
     */
    init: () => {
        console.log(this.a);
    }
}

test.init();  // 20
```

> #### <font color="#8BB0D2">2-7 示例：</font>
> #### 全局this指向中的length

```
function fn() {
    console.log(this.length);
}

fn();  // iframe数量
```
__<font color="#8BB0D2">答案：</font>__
> 0

__<font color="#8BB0D2">解析：</font>__
<br />
在全局中，this的length指的是iframe的数量
```
function fn() {
    console.log(this.length);
}

fn();  // 0 => iframe数量
```

> #### <font color="#D9462F"> 2-8 能改变this指向的关键词（深度扩展）</font>
> #### bind、apply、call</font>

__<font color="#f00">表达式声明的函数注意事项：</font>__
- bind
    - es6对象写法和箭头函数的bind无法进行new
    - new对bind失效
    - bind的硬绑可以强制改变this指向
    - bind的软绑防止硬绑
- apply
- call

> #### <font color="#8BB0D2">2-8-1示例：</font>
> #### bind

```
this.a = 20;
function test() {
    console.log(this.a);
}

var obj = {
    a: 30,
}

// 如何才能使this指向obj，使a=30？
test();
```
__<font color="#8BB0D2">答案：</font>__
> test.bind(obj);

__<font color="#8BB0D2">解析：</font>__
<br />
使用bind改变this指向。
```
this.a = 20;
function test() {
    console.log(this.a);
}

var obj = {
    a: 30,
}

// 需要bind的this指向obj
var result = test.bind(obj);  // 30
result();
```

> #### <font color="#8BB0D2">2-8-1-1示例：</font>
> #### 当bind遇到箭头函数

```
var o = {
    foo: function () {
        console.log("hello");
    },
    
    bar() {
        console.log("world");
    }
}

o.bar();

var f = o.foo.bind({});
new f();

var p = o.bar.bind({});
p();

new p();
```
__<font color="#8BB0D2">答案：</font>__
> 1. 第一次输出：<br />
> world
> 2. 第二次输出：<br />
> hello
> 3. 第三次输出：<br />
> world
> 4. 第四次输出：<br />
> p is not a constructor


__<font color="#8BB0D2">解析：</font>__
<br />
es6对象写法和箭头函数无法进行new。
```
var o = {
    foo: function () {
        console.log("hello");
    },
    
    // es6对象写法和箭头函数无法进行new，
    bar() {
        console.log("world");
    }
}

o.bar();  // world

var f = o.foo.bind({});
new f();  // hello

var p = o.bar.bind({});
p();  // world

// es6对象写法和箭头函数无法进行new
new p();  // p is not a constructor
```

> #### <font color="#8BB0D2">2-8-1-2示例：</font>
> #### bind的硬绑
> 强制改变this指向

```
this.a = 20;

function test() {
    console.log(this.a);
}

var obj = {
    a: 30,
}

test();

var result = test.bind(obj);
result();
```
__<font color="#8BB0D2">答案：</font>__
> 1. 第一次输出：<br />
> 20
> 2. 第二次输出：<br />
> 30

__<font color="#8BB0D2">解析：</font>__
<br />
一般函数是在定义的时候绑定，即谁调指谁，bind的硬绑可以强制改变this指向：
```
this.a = 20;

function test() {
    console.log(this.a);
}

var obj = {
    a: 30,
}

// 是window调的test，所以此时的test中的this指向window
test();  // 20

// bind强制将test中的this指向obj
test.bind(obj)();  // 30

/**
  var result = test.bind(obj);
  result();
*/
```

> #### <font color="#8BB0D2">2-8-1-3示例：</font>
> #### bind的软绑
> 不希望this被改变，防止被硬绑

```
this.a = 20;

function test() {
    console.log(this.a);  // 20
}

var obj = {
    a: 30,
}

var result = test.bind(null);
result();
```
__<font color="#8BB0D2">答案：</font>__
> 20

__<font color="#8BB0D2">解析：</font>__
<br />
x.bind(null)的时候是软绑，可以使防止this指向q强制被改变，防止被硬绑：
```
this.a = 20;

function test() {
    console.log(this.a);
}

var obj = {
    a: 30,
}

// 软绑，使test中的this依旧在window
// 防止硬绑
test.bind(null)();  // 20

/**
  var result = test.bind(obj);
  result();
*/
```

> #### <font color="#8BB0D2">2-8-1-4示例：</font>
> #### 当bind硬绑遇上new时

```
this.a = 20;

function test() {
    console.log(this.a);
}

var obj = {
    a: 30,
}

var result = test.bind(obj);
result();

new result();
```
__<font color="#8BB0D2">答案：</font>__
> 1. 第一次输出：<br />
> 30
> 2. 第二次输出：<br />
> undefined

__<font color="#8BB0D2">解析：</font>__
<br />
当bind硬绑遇上new时，new对bind失效：
```
this.a = 20;

function test() {
    console.log(this.a);
}

var obj = {
    a: 30,
}

var result = test.bind(obj);
result();  // 硬绑 => 30

// new对bind失效
new result();  // undefined
```

> #### <font color="#D9462F">2-8-1-5示例：<font color="#f00">[重点][重点][重点]</font></font>：
> <font color="#f00">手写一个bind</font>

<font color="#EB563B">__Array.prototype.slice.call(arguments)详解：__</font>

- Array.prototype.slice(start,end)
    - 选取数组索引start到end之间的数组，组成一个新数组，返回一个新数组，原数组不会发生变化
    - 该方法并不会修改数组，而是返回一个子数组
- [].slice.call(arguments, 0)
    - <font color="#f00">call（）和apply（）方法都是在特定的作用域中调用函数</font>，
    实际上等于设置函数体内this对象的值。
    <font color="#f00">apply和call方法的第一个参数都是特定的作用域</font>，
    第二个参数不同，apply第二个参数可以是Array的实例，也可以是arguments对象。
    <font color="#f00">call方法需要逐个列出需要传递的参数</font>。
    - arguments对象指数与数组类似（它并不是Array的实例），但是可以使用方括号语法访问每一个元素，使用length来确定传递进来多少个参数。
    - Array.prototype.slice.call()可以理解为：改变数组的slice方法的作用域，在特定作用域中去调用slice方法，call（）方法的第二个参数表示传递给slice的参数即截取数组的起始位置。
- slice返回一个数组，该方法只有一个参数的情况下表示除去数组内的第一个元素。
- 就本上下文而言，原数组的第一个参数是“事件名称”。
- 具体像“click”,"render"般的字符串，其后的元素才是处理函数所接纳的参数列表。
- 这段代码的目的是为了拿到参数里除第一个以外后面的所有参数。
- 需要借用的方法slice在Array.prototype 上，然后call接受两个参数，
- 第一个是需要借用方法的对象，第二个是传进方法的参数，也就是1

<font color="#EB563B">__fToBind.apply详解：__</font>
- 执行一个bind的逻辑
- bind -> 用原来的函数加上apply(this)
- 如果要bind(a) => 原来的函数.apply(a)

<br />

bind.js
```
// 为了不和原生的bind产生冲突
// 判断如果在原生的Function的原型链上没有那个值
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
    
        // 如果不是函数来调用的话，抛出错误
        if (typeof this !== "function") {
            throw new TypeError("请使用函数执行");
        }
        
        /**
         * 第一步是拿到
         * var result = test.bind(obj, "hello");
         * result("world"); 
         * 中的hello
         */
        
        // 这段代码的目的是为了拿到参数里除第一个以外后面的所有参数
        var aArgs = Array.prototype.slice.call(arguments, 1),
        
        // 保留原有的this,原来的函数
        fToBind = this,
        
        // 空函数
        fNop = function () {},
        
        // 处理完之后，bind返回的值
        fBound = function () {
            /**
             * 第二步是拿到
             * var result = test.bind(obj, "hello");
             * result("world"); 
             * 中的world
             */
        
            // 用apply修改this
            // 如果要bind(a) => 原来的函数.apply(a)
            // 如果当前实例是由fBound创建的，就把这个this留住了，否则就把用户传过来的oThis传过去
            // 然后要把后面的那参数连接上，此时不需要再把第一个参数去掉了，因为它是外部执行函数的值
            return fToBind.apply(this instanceof fBound ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        }
        
        // 如果在函数的原型链上挂载一个方法，则会报错，显示挂载的那个方法不是一个函数，所以需要做以下步骤
        // 判断如果最初的那个函数上有原型链
        if (this.prototype) {
            // 在空函数上挂载一个原型链，将最初的那个原型链赋值给空函数上的原型链
            fNop.prototype = this.prototype;
        }
        
        // 将实例化之后的空函数赋值给最终要返回的函数上的原型链上
        fBound.prototype = new fNop();
        
        // fBound是你要真正执行的一个函数
        // 为什么要return一个函数，因为bind得到一个函数，然后再执行
        // 返回最终要被执行的函数
        return fBound;
    }
}
```

html调用bind.js
```
function test(data1, data2) {
    console.log(data1);
    console.log(data2);
}

// 在test函数的原型链上挂载一个方法
test.prototype.me = function() {
    console.log("原型测试函数");
}

var obj = {
    a: 30
}

var result = test.bind(obj, "hello");
result("world");

var ins = new result("world");
ins.me();  // 执行原型链上的方法
```

> #### 2-9 请写出如下输出值，并解释为什么（扩展）
__<font color="#666">原题：</font>__

```
var num = 1;

function yideng() {
    "use strict";

    console.log(this)

    console.log(this.num++);
}

function yideng2() {
    console.log(++this.num);
}

(function () {
    "use strict";
    yideng2();
})();

yideng();
```

__<font color="#8BB0D2">考点：</font>__
> 严格模式下的this指向

__<font color="#8BB0D2">答案：</font>__
> 1. 第一次输出：<br />
> 2
> 2. 第二次输出：<br />
> Cannot read property 'num' of undefined

__<font color="#8BB0D2">解析：</font>__
<br />
<font color="#EB563B">注意：严格模式下传null指向null，不传或者传undefined都指向undefined，即在严格模式下，没有写执行主体，this指向都是undefined</font>
<br />

严格模式下`console.log(this);`没有主体，其值为undefind，`console.log(this.num++);`则变形为`console.log(undefind.num++);`，所以报错找不到num。
```
var num = 1;

function yideng() {
    "use strict";

    console.log(this);  // undefind

    console.log(this.num++);
}

function yideng2() {
    console.log(++this.num);
}

(function () {
    "use strict";
    yideng2();  // 2
})();

yideng();  // Cannot read property 'num' of undefined
```

> #### 2-10 请写出以下代码执行结果（扩展）
__<font color="#666">原题：</font>__

```
function C1(name) {
    if (name) this.name = name;
}

function C2(name) {
    this.name = name;
}

function C3(name) {
    this.name = name || "fe";
}

C1.prototype.name = "yideng";
C2.prototype.name = "lao";
C3.prototype.name = "yuan";

console.log((new C1().name) + (new C2().name) + (new C3().name));
```

__<font color="#8BB0D2">考点：</font>__
> 严格模式下的this指向

__<font color="#8BB0D2">答案：</font>__
> 1. 第一次输出：<br />
> yideng
> 2. 第二次输出：<br />
> undefined
> 3. 第三次输出：<br />
> fe

__<font color="#8BB0D2">解析：</font>__
<br />
<font color="#EB563B">注意：new的时候，this的指向，会指向构造函数</font>
<br />

- `new C1().name`：
    - C1的构造函数里面没有传值，不存在name，就在原型链上找。原型链上C1挂载了"yideng"，因此`new C1().name`的值为"yideng"
- `new C2().name`：
    - C2的构造函数里面注册了name，但这个name为undefind，所以这个undefind是一个有意义的值。
- `new C3().name`：
    - C3这个构造函数里面注册了一个name，但没有传值，但没有传值 `this.name = undefind`，所以这个短路语句中输出的就是fe。
```
function C1(name) {
    // 没有进到if里面，不存在name
    // 构造函数不存在name，没有注册，就在原型链上找
    if (name) {
        this.name = name;
    }
}

function C2(name) {
    // 注册了name，但没有传值 this.name = undefind
    // undefind也是有意义的值
    this.name = name;
}

function C3(name) {
    // 没有传值 fe
    this.name = name || "fe";
}

C1.prototype.name = "yideng";
C2.prototype.name = "lao";
C3.prototype.name = "yuan";

console.log((new C1().name) + (new C2().name) + (new C3().name));
```

---
<br />

> ### 3. 请写出以li的输出值，并用三种方法正确输出li里的数字
__<font color="#666">原题：</font>__

html:
```
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
</ul>
```

js：
```
var list_li = document.getElementsByTagName("li");

for (var i=0; i<list_li.length; i++) {
    list_li[i].onclick = function () {
        console.log(i);
    }
}
```

__<font color="#8BB0D2">考点：</font>__
> this扩展及同步执行和异步执行队列

__<font color="#8BB0D2">答案：</font>__
> 1. 解法1：<br />
> 使用this

```
...
    list_li[i].onclick = function () {
        console.log(this.innerHTML);
    }
...
```

> 2. 解法2：<br />
> 使用let

```
...
for (let i=0; i<list_li.length; i++) {
    list_li[i].onclick = function () {
        console.log(i+1);
    }
}
```

> 3. 解法3：<br />
> 使用闭包

```
...
    // 闭包，立即执行
    list_li[i].onclick = (function (i) {
        console.log(i);
    })(i)
...
或
...
    (function (i) {
        list_li[i].onclick = function () {
            console.log(i);
        }
    })(i);
...
```

__<font color="#8BB0D2">解析：</font>__
<br />
原因：
- 原来不管点击哪个li，输出的一直是6。
- 因为js分为同步执行栈和异步执行队列，意思是：js中同步执行的东西会先执行，同步执行之后，会拉异步执行队列。
- 所以就这里面的代码而言，for是同步的任务，先定义即先执行，而点击，真正干活的时候，是在异步队列里面的。
- 为什么一直会输出6，是因为它在执行异步队列里面的事件click的时候，同步执行栈中的for循环即同步事件早就已经被执行完了，再之后一直点击，一直执行异步执行栈的click，所以就会一直输出6。

解决方法：
- 解法一使用this：
    - 点击li的时候，是元素调用this，this指向就是元素，异步执行的时候，每次点击，this指向的都是当前元素。
    ```
    ...
        list_li[i].onclick = function () {
            // 元素调用this，指向元素
            console.log(this.innerHTML);
        }
    ...
    ```
- 解法二使用let：
    -  如果使用let，块级作用域可以直接执行。
    -  这里的i不是直接从当前元素取的，是遍历list_li数组，并从其中数，而数组是从0开始的，因此这里要+1
    ```
    ...
    // 如果这里使用let，说明循环里面是块级作用域
    for (let i=0; i<list_li.length; i++) {
        list_li[i].onclick = function () {
            // 这里需要i+1
            console.log(i+1);
        }
    }
    ```
- 解法三使用闭包：
    - 将click事件放在闭包里面，闭包可以立即执行，因为在循环中，所以每次点击执行的时候，得到一个i然后输出一个i。
    - <font color="#EB563B">注意：闭包很容易造成变量的无法回收和内存泄漏。</font>
    ```
    ...
        // 得到一个变量i
        (function (i) {
            list_li[i].onclick = function () {
                console.log(i+1);
            }
            // 输出一个变量i
        })(i);
    ...
    ```

<br />
<font color="#f00">关于异步队列：<br /></font>
什么东西会放异步队列里呢，ajax、setTimeOut、click……
<br /><br />

<font color="#f00">关于let：<br /></font>
- let存储的是块级作用域，块级作用域就是`{ …… }`，块级作用域中代码是可以执行的。
- 但它有一个问题，可以举例说明：
    - `console.log({} + []); // [object Object]`：
        - 这里的`{}`指表达式即对象，而`[]`隐式转换成`""`。
        - 而表达式输出就是`[object Object]`，后面为空，所以总输出就是`[object Object]`。
    - `{} + []  // 0 `：
        - 这里的`{}`指的是块级作用域，而它也能被等价地转换为`+[]`。
        - 此时，[]被转换为字符串''，隐式转换成 toString。
        - 而一元加号又会将字符串''转换为数字 0。
        - 显然`{} + []`结果为 0。

<br />

<font color="#f00">关于`[object Object]`：<br /></font>
- object（小写）：
    -  "object"是一个字符串，你不定义的话没有意义，`typeof {};  // object`，小写主要是为了区别于Object。
        - 只要检查的变量是一个对象，或者是 Null，那它就会返回 object，这当然不够精确，所以有了 instanceof。
        - typeof 是为了检查数据类型，instanceof是为了看一个变量是否是某个对象的实例。
- Object（大写）：
    - Object 是 JavaScript 中一个重要的对象，其它对象都是基于它的，包括你创建的函数。Object 是一种对象类型。

<br />

<font color="#f00">关于闭包：<br /></font>
- 什么是闭包?
    - 简单来说，<font color="#f00">
    闭包就是能够读取其他函数内部变量的函数</font>，在本质上，闭包是将函数内部和函数外部连接起来的桥梁。例如在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成“定义在一个函数内部的函数“。
    - 闭包是 JS 函数作用域的副产品。
    
由于 JS 的函数内部可以使用函数外部的变量，所以这段代码正好符合了闭包的定义：
```
// 变量声明
var local = "str";

// 函数声明
function foo () {
    console.log(str);
}
```
- 为什么需要闭包？
    - 局部变量无法共享和长久的保存，而全局变量可能造成变量污染，所以我们希望有一种机制既可以长久的保存变量又不会造成全局污染。
- 何时使用？
    - 变量既想反复使用，又想避免全局污染
- 如何使用？
    - 定义外层函数，封装被保护的局部变量。
    - 定义内层函数，执行对外部函数变量的操作。
    - 外层函数返回内层函数的对象，并且外层函数被调用，结果保存在一个全局的变量中。
- 缺点：
    - 占用更多内存
    - 不容易被释放
- 怎么解决闭包的内存泄漏？
    - 严格说起来不算是闭包的问题，主要是因为ie的bug，ie在我们使用完闭包之后，依然回收不了闭包里面引用的变量。
    - 什么是内存泄露？
        - 定义：一块被分配的内存既不能使用，也不能回收。从而影响性能，甚至导致程序崩溃。
        <font color="#f00">
        通俗来说，内存泄露是指你用不到（访问不到）的变量，依然占居着内存空间，不能被再次利用起来。</font>
        - 起因：JavaScript的垃圾自动回收机制会按一定的策略找出那些不再继续使用的变量，释放其占有的内存。然而由于一些原因导致在这种机制下内存管理器不能正确解读JavaScript变量的生命周期，从而没有释放其内存，而也没有再被使用。循环引用是导致以上情况的主要原因之一。
    - 解决办法：
        - 常用的解决方法就是在JavaScript代码段运行完之时将形成循环引用的JavaScript对象手动设置为空，切断引用。
        ```
          function example() {
              var element = document.getElementByID("div1");  //div1用完之后一直驻留在内存中
              
              element.onclick = function() {
                  alert("This is a leak!"); // 这里用div1导致内存泄露
              }
              
              // 添加的语句
              element = null;  // 最后应将div1解除引用来避免内存泄露
          }
        ```

---
<br />

> ### 4. 请写出输出值，并解释为什么。
__<font color="#666">原题：</font>__

```
function test(m) {
    m = {
        v: 5
    }
}

var m = {
    k: 30
}

test(m);
alert(m.v);
```

__<font color="#8BB0D2">考点：</font>__
> 了解按引用传递和按引用传递

__<font color="#8BB0D2">答案：</font>__
> undefined

__<font color="#8BB0D2">解析：</font>__
- 按值传递：
    - 哪些数据类型是按值传递的？
        - 基本数据类型存放在栈区，访问是按值访问。
        - 基本的数据类型有：undefined、boolean、number、string、null。
    - 当基本类型的数据赋值时，赋的是实际的值。当变量a赋值给变量b的时候，a和b相互独立，是没有关联关系的。
- 按引用传递：
    - 引用类型指的是对象，可以拥有属性和方法，并且我们可以修改其属性和方法。
    - 引用对象存放的方式是：在栈中存放对象变量标示名称和该对象在堆中的存放地址，在堆中存放数据。
    - 对象使用的是引用赋值。当我们把一个对象赋值给一个新的变量时，赋的其实是该对象在堆中的地址，而不是堆中的数据。
    - 也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。
    - 哪些数据类型是按引用传递的？
        - 对象、数组、原型链

<br />
<font color="#EB563B">注意：基本数据类型存放在栈区，对象的地址（对象名）存放在栈区，值存放在堆区。</font>
<br />

- `test(m)`中的m和外面的m没有关系，就是一个简单的实参。
- 函数的值是按值传递，但这个值和外部的值指向指向同一个地址，就是一个实参，但这个实参的指向，和外部的m对象的指向的值是同一个。
- 首先m.k=30，之后将m对象当做实参代入test方法，重写m对象，重写即两个m没有关系，即test方法中的m.v=5，由于两个m对象没有关系，方法中的m为局部变量，所以m.v获取不到，即为undefind。
```
function test(m) {
    m = {
        v: 5
    }
}

var m = {
    k: 30
}

test(m);  // 这个m是按值传递的，就是一个简单的实参
alert(m.v);  // undefined
```

__<font color="#666">扩展：</font>__
> #### <font color="#8BB0D2">4-1 示例：</font>
> #### 按值传递

```
var a = 1;
var b = a;

b = 3;

alert(a);
alert(b);
```
__<font color="#8BB0D2">答案：</font>__
> 1. 第一次输出：<br />
> 1
> 2. 第二次输出：<br />
> 3

__<font color="#8BB0D2">解析：</font>__
```
var a = 1;
var b = a;

b = 3;

alert(a);  // 1
alert(b);  // 3
```

> #### <font color="#8BB0D2">4-2 示例：</font>
> #### 按引用传递(按址传递)

```
var a = {
    qq: 25
};
var b = a;

b.xx = 1;

console.log(a);
console.log(b);
```
__<font color="#8BB0D2">答案：</font>__
> 1. 第一次输出：<br />
> {qq: 25, xx: 1}
> 2. 第二次输出：<br />
> {qq: 25, xx: 1}

__<font color="#8BB0D2">解析：</font>__
当对象被赋值，其实就是对象的地址被赋值，两个对象其实就是指向同一个地址（即指向同一个堆内存中），被赋值的对象改变的话，其实就是改变堆内存中的值，因此如果一个对象被另一个对象赋值的话，两个对象是相互关联的，他们的输出相同。
```
var a = {
    qq: 25
};
var b = a;

b.xx = 1;

console.log(a);  // {qq: 25, xx: 1}
console.log(b);  // {qq: 25, xx: 1}
```

> #### <font color="#8BB0D2">4-3 示例：</font>
> #### 按引用传递(重写)

```
var a = {
    qq: 25
};
var b = a;

b = {
    x: 11
};

console.log(a);
console.log(b);
```
__<font color="#8BB0D2">答案：</font>__
> 1. 第一次输出：<br />
> {qq: 25}
> 2. 第二次输出：<br />
> {xx: 11}

__<font color="#8BB0D2">解析：</font>__
当对象被赋值时，如果那个对象重写了，那么两个对象不再有关联。
```
var a = {
    qq: 25
};
var b = a;

b.xx = 11;

console.log(a);  // {qq: 25}
console.log(b);  // {xx: 11}
```

> #### <font color="#8BB0D2">4-4 示例：</font>
> #### 按引用传递(重写2)

```
function test(m) {
    m.v = 5;
}

var m = {
    k: 30
}

test(m);
console.log(m);
```
__<font color="#8BB0D2">答案：</font>__
> {k: 30, v: 5}

__<font color="#8BB0D2">解析：</font>__
- `test(m)`中的m和外面的m没有关系，就是一个简单的实参。
- m是一个对象，test方法中把m对象传入当做实参，m.k是一个属性，之后再执行test方法，将外面的m对象代入，对象中再添加一个属性m.v。
```
function test(m) {
    m.v = 5;
}

var m = {
    k: 30
}

test(m);
console.log(m);  // {k: 30, v: 5}
```

> #### <font color="#8BB0D2">4-5 示例：</font>
> #### 按引用传递(重写3)

```
function test(x) {
    m = {
        v: 5
    }
}

var m = {
    k: 30
}

test(m);
console.log(m);
```
__<font color="#8BB0D2">答案：</font>__
> {v: 5}

__<font color="#8BB0D2">解析：</font>__
- `test(m)`中的m和外面的m没有关系，就是一个简单的实参。
- 首先执行`m.k=30;`，再执行test方法，将m对象的值传入当做实参，但test方法它接收的实参是x，x未定义（x is not defined），所以他这里就只是执行了方法，重写了m的值，但m.k的值并没有带过去，所以输出的只有m.v的值
```
function test(x) {
    m = {
        v: 5
    }
}

var m = {
    k: 30
}

test(m);
console.log(m);  // {v: 5}
```

---
<br />

> ### 5. 请写出输出值，并解释为什么。
__<font color="#666">原题：</font>__

```
function yideng() {
    console.log(1);
}

(function () {
    if (false) {
        function yideng() {
            console.log(2);
        }
    }

    yideng();
})();
```

__<font color="#8BB0D2">考点：</font>__
> 函数提升，浏览器历史

__<font color="#8BB0D2">答案：</font>__
> yideng is not a function

__<font color="#8BB0D2">解析：</font>__
<br />
<font color="#EB563B">注意：在if{...}else{...}等的逻辑判断中，无法将整个函数提升出来，但仅只在函数中体现。有函数，就特殊（提升），因为他和函数的作用域有关。</font>
<br />

这里涉及到函数提升，变形为：
```
function yideng() {
    console.log(1);
}

(function () {
    // 因为逻辑的原因，函数体没有带出来。
    var yideng;  // undefind

    if (false) {
        function yideng() {
            console.log(2);
        }
    }

    yideng();  // yideng is not a function
})();
```
上面if中的方法没有执行，但函数提升出去了部分，yideng这个变量为undefind，并不是一个方法，所以这里调用yideng方法的时候报错不是一个function。
<br />
浏览器历史：
- 在最早期的浏览器中，它的答案等于2。它的函数提升会把整个函数提取出来。
- 后来有一段时间，它会等于1，就是不让它提升。
- 到现在，让函数提升，但不让函数体提升。

__<font color="#666">扩展：</font>__
> #### <font color="#8BB0D2">5-1 示例：</font>
> #### 函数提升

```
function yideng() {
    console.log(1);
}

if (false) {
    function yideng() {
        console.log(2);
    }
}

yideng();
```
__<font color="#8BB0D2">答案：</font>__
> 1

__<font color="#8BB0D2">解析：</font>__
当if{...}else{...}等逻辑判断不在函数体中的时候，它没有提升：
```
function yideng() {
    console.log(1);
}

if (false) {
    function yideng() {
        console.log(2);
    }
}

yideng();  // 1
```

> #### <font color="#8BB0D2">5-2 示例：</font>
> #### 函数提升

```
function test() {
    var a = 1;
}

test();

alert(a);
```
__<font color="#8BB0D2">答案：</font>__
> a is not defined

__<font color="#8BB0D2">解析：</font>__
函数里面什么都特殊，因为函数里面是私有作用域（局部变量）。
```
function test() {
    var a = 1;
}

test();

alert(a);  // a is not defined
```

---
<br />

> ### 6. 请用一句话算出0-100之间学生的学生等级，如90-100为一等生、80-90为二等生，以此类推。
> ### 【不允许使用if switch等】

__<font color="#8BB0D2">考点：</font>__
> 算法

__<font color="#8BB0D2">答案：</font>__
> `10 - parseInt(分数/10);`

__<font color="#8BB0D2">解析：</font>__
<br />
90~100 => 一等生 <br />
80~90 => 二等生 <br />
70~80 => 三等生 <br />
每一个等级差10，可以用取整解决。 <br />
假使这个学生他的成绩为98： <br />
parseInt(98 / 10) = 9, <br />
那么10 - 9 = 1，就是这个学生的等级。

---
<br />

> ### 7. 请用一句话遍历变量a。 <br />
> ### 禁止使用for, 已知var a = "abc";
__<font color="#666">原题：</font>__

```
var a = "abc";

// 请用一句话遍历变量a，禁止使用for。
...
```

__<font color="#8BB0D2">考点：</font>__
> es6中数组的使用及相关api

__<font color="#8BB0D2">答案：</font>__
> 1. 解法一：

```
var a = "abc";

console.log(...new Set(a));
```
> 2. 解法二：

```
var a = "abc";

console.log(Array.from(a));
```

> 3. 解法三：

```
var a = "abc";

console.log(Array.prototype.slice.call(a));
```

__<font color="#8BB0D2">解析：</font>__

> 1. 解法一： <br />
es6语法，但使用Set会去重。

```
var a = "abc";

// a b c
console.log(...new Set(a));
```
> 2. 解法二： <br />
es6语法。

```
var a = "abc";

// ["a", "b", "c"]
console.log(Array.from(a));  
```

> 3. 解法三： <br />
es5语法，比较老，使用call。

```
var a = "abc";

// ["a", "b", "c"]
console.log(Array.prototype.slice.call(a));
```

---
<br />

> ### 8. 写出如下代码执行结果，并解释为什么。
__<font color="#666">原题：</font>__

```
debugger
var length = 10;
function fn() {
    console.log(this.length);
    debugger
}

var yideng = {
    length: 5,

    method: function (fn) {
        fn();
        debugger

        arguments[0]();
        debugger
    }
};

debugger
yideng.method(fn, 1);
debugger
```

__<font color="#8BB0D2">考点：</font>__
> 函数提升，浏览器历史

__<font color="#8BB0D2">答案：</font>__
> 1. 第一次输出：<br />
> 10
> 2. 第二次输出：<br />
> 2

__<font color="#8BB0D2">解析：</font>__
<br />

<font color="#EB563B">注意：this.length指页面iframe的数量</font>
<br />

- 当程序执行到`yideng.method(fn, 1);`的时候，执行method方法，并带两个参数，fn和1。
- 语句的参数中第一个值为函数，第二个值为1，执行此语句，将参数代入，因为第一个参数是一个方法，则最上面fn方法开始执行，此时fn中打印的是`this.length`，此时的this指向的是window，一般默认`this.length`指iframe的数量，但在全局length已经被定义了，且为10，所以此时`this.length`的值为10。
- fn挂在arguments上，相当于的参数，method有两个参数
- 而在mothod方法下面的arguments，即是当前方法的参数，即method也是arguments。
- 然后进到method方法，此时两个参数都被带进去了，此时`fn = fn()`，所以方法中的`fn();`实际上是`fn()()`即为`undefind`。
- 而在mothod方法下面的arguments，即是当前方法的参数，又因为它是下面执行的语句带过来的，下面执行的那个语句带2个参数fn和1，因此，arguments是一个数组，arguments[0]=>fn，arguments[1]=>1。
- 运行到arguments[0]()之后，由于arguments[0]等价于fn，即fn()，此时再次执行fn方法。
- this指向arguments
- arguments调用了fn
- 而此时执行fn方法的时候，是在method的方法里，所以此时的this指向的是method，即arguments，而arguments的length即就是参数的个数，所以这里的`this.length`的值为2。
- 当执行完`arguments[0]();`方法后，此时method方法执行结束，跳出方法。

```
var length = 10;

function fn() {
    // 这里的this.length指页面iframe的数量
    console.log(this.length);  // 0
}

var yideng = {
    length: 5,

    method: function (fn) {
        fn();  // undefind

        arguments[0]();  // fn();
    }
};

// 第一个值为函数，第二个值为1
// fn挂到了arguments上，所以fn就是method的参数
yideng.method(fn, 1);  // 10, 2
```

---

<font color="#666" size="5">\~End~</font>