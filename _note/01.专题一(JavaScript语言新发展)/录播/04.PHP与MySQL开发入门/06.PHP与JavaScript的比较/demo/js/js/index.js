/**
 * js是面向原型链编程的语言
 */

function Car(color) {
  // 属性
  this.color = color;
}

let s = new Car("red");
console.log(s);

// 原型
// js的方法都是定义(挂载)在prototype上，因为共享
// 原型链相当于后端中的构造方法
// 和后端不一样的是，方法并不是挂在类上，而是挂在原型链上
// js顶层就是一个object，原型
Car.prototype.run = function () {
  console.log(this.color + " is run");
}

let s1 = new Car("yello");
console.log(s1);
s1.run();
s.run();


// 继承
let Cruze = function (color) {
  // 把原型拿过来, 接收一个变量 == parent（父类）
  Car.call(this, color);
}

// 创建一个对象的副本(父类的原型)
// 此时js的子类被指向父类里
let _prototype = Object.create(Car.prototype);
console.log(_prototype);

// 修正副本父类指向（constructor指向新定义的子类）
_prototype.constructor = Cruze;

console.log(_prototype);

// 如果直接挂在是按引用传递的
// 将修正过的子类指向父类原型
Cruze.prototype = _prototype;

// 在子类上挂载方法
Cruze.prototype.gogo = function() {
  console.log("gogogo");
}

// 实例化子类
let result = new Cruze("orange");
console.log(result);

// 实例化父类
let s2 = new Car("blue");
console.log(s2);