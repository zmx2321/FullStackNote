# JavaScript核心知识
## 变量提升、函数提升

### 1. 变量提升
#### 示例1-1：
```
if (false) {
    // 使用var => undefind
    var a = 1;
    // 使用let => a is not defined
    // let a = 1;
    // 不使用 => a is not defined
    // a = 1;
}

console.log(a);  // undefind
```

##### 解析：
* 在这里存在变量提升 *

```
if (false) {
    var a = 1;
}

console.log(a);  // undefind
```
相当于就是
```
var a;
if (false) {
    a = 1;
}

console.log(a);  // undefind
```


#### 示例1-2：
```
alert(a);  // undefind
var a = 3;
```
* 变量提升后 *
```
var a;
alert(a);  // undefind
a = 3;
```

### 2. 函数提升：
* 函数调用不论在哪里都可以执行函数 *
* 函数优先于变量提升
#### 示例2-1：
```
test();  // 1
function test() {
    console.log(1);
}
```
函数提升后
```
function test() {
    console.log(1);
}
test();  // 1
```

### 3. 两种提升混合：
#### 示例3-1：
```
function test() {
    console.log(1);
}
var test = 2;  // 如果变量赋值被放在函数上面，答案一致
console.log(test);
```
变量和函数提升后
```
function test() {
    console.log(1);
}
var test;
test = 2;
console.log(test);  // 2
```

##### 解析：
* 变量提升优先级在函数提升之前

#### 示例3-1：
```
function test() {
    console.log(1);
}
var test;  // 如果变量为undefind, 变量则被忽略掉，则函数提升
console.log(test);  // 输出test函数体
```

### 4. 扩展
* 表达式中只能在内部访问且无法被重写
#### 示例4-1：
```
var test = function test() {}

console.log(test);  // 输出函数体
```

#### 示例4-2：
```
(function test() {
    // 只能在内部进行访问
})();

console.log(test);  // test is not defind
```

#### 示例4-3：
```
var q = function test() {
    console.log("test", test);
    // 只能在内部进行访问
};

q();
/*
test ƒ test() {
    console.log("test", test);
    // 只能在内部进行访问
}
*/
console.log(test);  // test is not defind
```
#### 示例4-4：
```
var q = function test() {
    // test只能在内部进行访问,并且无法进行重写
    test = 1;

    console.log("test", typeof test);  // function
};
q();
```

### 5. 变量提升中的null和undefind
#### 示例5-1：
```
function test() {}

var test = null;
console.log(test);  // null
```
#### 示例5-2：
```
function test() {}

var test;
console.log(test);
/*
ƒ test() {

}
*/
```
#### 示例5-3：
```
function test() {}

var test = undefined;
console.log(test);  // undefind
// 赋值undefind表示有意义，系统默认无意义忽略
```

### 6. 变量提升总结
* 函数表达式定义的时候，函数的名字外部不能访问，内部也不能修改



## this指向
* this谁调用指向谁 *
### 1. 简单的this指向
#### 示例1-1：
```
this.a = 20;
function test() {
    console.log(this.a);
}

// 相当于window.test();  window调用，指向window
test();  
```
#### 示例1-2：
```
this.a = 20;
var test = {
    a: 40,
    init: function () {
        console.log(this.a);
    }
}

// test调用init方法，this指向test,
test.init();  // 40
```
#### 示例1-3：
```
this.a = 20;
var test = {
    a: 40,
    init: function () {
        console.log(this.a);
    }
}

var fn = test.init;
// 相当于window.fn,这里的this指向window
fn();  // 20
```
#### 示例1-4：
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
#### 示例1-5：
```
this.a = 20;
var test = {
    a: 40,
    init: function () {
        // 构造函数的优先级(访问权限) > 原型链
        function go() {
            this.a = 50;
        }

        go.prototype.a = 60;

        // new的时候，this就会指向new出来的对象
        // 用new调go，this就指向实例
        console.log((new go()).a);
    }
}

test.init();
```
#### 示例1-6：
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

### 2. 能改变this指向的关键词(bind，apply, call)
#### 2-1-1(bind):
##### 示例2-1-1-1：
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

#### 示例1-7：
```
function fn() {
    console.log(this.length);
}

fn();  // iframe数量
```


##### 示例2-1-1-2：
* 箭头函数或者es6对象写法，不能new改变this指向
```
var o = {
    foo: function () {
        console.log("hello");
    },
    // es6对象写法
    bar() {
        // console.log(this);
        console.log("world");
    }
}

// o.bar();

var f = o.foo.bind({});
new f();  // hello
var p = o.bar.bind({});
p();  // world
// es6方式和箭头函数无法进行new
new p();  // p is not a constructor
```

##### 示例2-1-1-3-1：
* 硬绑
> 强制改变this指向
```
this.a = 20;

function test() {
    console.log(this.a);  // 30
}

var obj = {
    a: 30,
}

var result = test.bind(obj);
result();
```

##### 示例2-1-1-3-2：
* 软绑
> 不希望this被改变
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

##### 示例2-1-1-3-3：
* 当bind硬绑遇上new时
```
this.a = 20;

function test() {
    console.log(this.a);  // 20
}

var obj = {
    a: 30,
}

var result = test.bind(obj);
new result();  // undefined
```

##### 示例2-1-1-4
```
function test(data1, data2) {
	console.log(data1);
	console.log(data2);
}

var obj = {
    a: 30
}

var result = test.bind(obj, "hello");
result("world");  // 输出hello world
```

##### 示例2-1-1-5
> ** <label style="color:red">重点：手写bind</label> **
- 见demo案例


### call
```
var a = function(){
     console.log(this);    // 'littledu'
     console.log(typeof this);      //  Object
     console.log(this instanceof String);    // true
}
a.call('littledu');
```


## 块级作用域
### 示例1：
* 可以直接执行
```
{
    console.log("1");
}
```

### 示例2：
* 块级作用域加数组
* {}+[] ：根据语句优先原则  {}被理解为复合语句块，因此相当于 {}; +[]   。[]为空，结果为0
* js把()中的语句当做一个表达式，因此{}不能被理解为语句块，而被理解为"[object Object]" + ""，console.log("[object Object]"+"")打印结果为[object Object]
* [] == 0, 会把数组tostring()
```
{} + [];  // 0

console.log({}+[]);  // [object Object]
```

### 示例3：
* [object Object]有什么区别
> Object是类型，object是为了区分是Object表现出来的值
> typeof {}  // 为了表示他是对象，用object


## 引用传递和值传递
### 1. 按值传递
#### 示例1：
* 类似一个txt文件，复制成两个txt文件，第二个文件改东西不会影响第一个文件
```
var a = 1;
var b = a;
b = 3;

alert(a);  // 1
alert(b);  // 3
```

### 2. 按引用传递(按地址传递)
* 对象，数组这些object
#### 示例1：
```
var a = {
    age: 25
};
var b = a;
b.xx = 33;

console.log(a);  // {age: 25, xx: 33}
console.log(b);  // {age: 25, xx: 33}
```

#### 示例2：
* 怕重写
* 重写就没有任何关联了
```
var a = {
    age: 25
};
var b = a;
var a = {
    xx: 66
};

console.log(a);  // {age: 25, xx: 33}
console.log(b);  // {age: 25, xx: 33}
```