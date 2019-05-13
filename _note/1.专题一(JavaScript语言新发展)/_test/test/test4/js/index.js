/**
 * test2-1 拓展
 * 请写出以下代码执行结果
 */
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

/*
1、yideng
2、undefined
3、fe
yidengundefinedfe
*/