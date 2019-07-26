# 作业讲解

## 1. test1
### 题目：
```
console.log(a);
console.log(typeof yideng(a));
var flag = true;
if (!flag) {
    var a = 1;
}
if (flag) {
    function yideng(a) {
        yideng = a;
        console.log("yideng1");
    }
} else {
    function yideng(a) {
        yideng = a;
        console.log("yideng2");
    }
}
```
### 答案：
undefined、yideng is not a function
### 解析：
```
变量提升：
var a;  // a被提升了，a是undefind
var yideng;  //提升了函数名，yideng是undefind
console.log(a);
console.log(typeof yideng(a));  // typeof undefind
var flag = true;
if (!flag) {
    var a = 1;
}
// if...else...块级作用域内，方法在前无法提升，只能提升函数名
// 如果放下面，因为上面执行完了，就有提升
if (flag) {
    function yideng(a) {
        yideng = a;  // a为undefind，赋值给yideng
        console.log("yideng1");
    }
} else {
    function yideng(a) {
        yideng = a;
        console.log("yideng2");
    }
}

console.log(typeof yideng(a));  // 这里词法作用域里面执行完毕了，这里就能找到
```
### 拓展：
1. 如果只有一句
```
console.log(yideng);  // yideng is not defind
```
2. 如果不是
```
var yideng;  // 将函数名提升上来了
console.log(yideng);  // undefind

var flag = true;
if (flag) {
    // 词法作用域：从上到下解析
    // 函数体虽然能控制函数，但还是把函数名（函数体没提升）提升上来了
    function yideng(a) {
        yideng = a;
        console.log("yideng1");
    }
} else {
    function yideng(a) {
        yideng = a;
        console.log("yideng2");
    }
}

console.log(yideng(undefind));  // yideng1
console.log(yideng);  // 就有函数体了
```
```
var flag = true;
if (flag) {
    function yideng(a) {
        yideng = a;  // undefind
        console.log("yideng1");
    }
} 

// 因为是块级作用域，undefind只在作用域内生效
// 函数名，如果是表达式的，动不了，
// 不是表达式，函数内部调用
console.log(yideng(undefind));  // yideng1
console.log(typeof yideng);  // function
```

## 2. test2
### 题目：
```
function fn(){
    // 这里的this指window,length指iframe的个数
    //  0个，当前函数不在严格模式下，window下的iframe为0
    console.log(this.length);  
}
var yideng = {
    length:5,
    method:function(){
        // 一旦使用严格模式，window的this指向会变成undefind
        // 严格模式在函数内部
        "use strict";
        fn();  // 0
        // arguments就是指当前的方法被调用的时候，传了几个实参
        // 2个实参
        arguments[0]()
    }
}
// 软绑定，防止硬绑（改变this指向）
const result = yideng.method.bind(null);
result(fn,1);
```
### 答案：
* 0、2
### 解析：
见上注释

## 3. test3(附加题)
### 题目：
```
function yideng(a,b,c){
    console.log(this.length);
    console.log(this.callee.length);
}
function fn(d){
    arguments[0](10,20,30,40,50);
}
fn(yideng,10,20,30);
```
### 答案：

### 解析：

## 4. test4
### 题目：

### 答案：

### 解析：

## 3. test3
### 题目：

### 答案：

### 解析：

## 3. test3
### 题目：

### 答案：

### 解析：

## 3. test3
### 题目：

### 答案：

### 解析：

## 3. test3
### 题目：

### 答案：

### 解析：

## 3. test3
### 题目：

### 答案：

### 解析：

## 3. test3
### 题目：

### 答案：

### 解析：

## 3. test3
### 题目：

### 答案：

### 解析：
