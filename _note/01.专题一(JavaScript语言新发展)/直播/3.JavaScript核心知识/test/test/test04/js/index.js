/**
 * test2-1 拓展
 * 请写出以下代码执行结果
 */
function C1(name) {
    // new里面没有传值，不存在name
    // 构造函数不存在name，没有注册，就在原型链上找
    if (name) this.name = name;
}

function C2(name) {
    // 没有传值 this.name = undefind
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

/*
1、yideng
2、undefined
3、fe
yidengundefinedfe
*/