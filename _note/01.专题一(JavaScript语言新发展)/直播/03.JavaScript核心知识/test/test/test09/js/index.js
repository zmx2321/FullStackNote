/**
 * test7
 * 请用一句话遍历变量a.
 * 禁止使用for, 已知var a = "abc";
 */
var a = "abc";

console.log(Array.from(a));  // ["a", "b", "c"]

console.log(...new Set(a));  // a b c

console.log(Array.prototype.slice.call(a));  // ["a", "b", "c"]