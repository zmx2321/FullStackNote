/**
 * test7
 * 请按照下方要求作答，并解释原理？请解释下babel编译后的async原理
 */
let a = 0;
let yideng = async () => {
    a = a + await 10;
    console.log(a)
}
yideng();
console.log(++a);