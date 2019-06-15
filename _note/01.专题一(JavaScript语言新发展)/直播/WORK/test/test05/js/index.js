/**
 * test4
 * 清写出以下代码输出值，并解释原因。
 *
 * Object.prototype 和 Function.prototype 打印的内容差距很大原因是什么呢？
 */
Object.prototype.a = 'a';
Function.prototype.a = 'a1';
function Person(){};

var yideng = new Person();
console.log(Person.a);
console.log(yideng.a);
console.log(1..a);
console.log(1.a);
console.log(yideng.__proto__.__proto__.constructor.constructor.constructor);