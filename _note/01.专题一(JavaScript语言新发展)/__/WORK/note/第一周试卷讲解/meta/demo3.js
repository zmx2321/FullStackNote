require("reflect-metadata");
class C {
    method() {
        console.log(this);
    }
}
Reflect.defineMetadata("yideng", "测试", C.prototype, "method");
let metadata = Reflect.getMetadata("yideng", C.prototype, "method");
console.log("🌶", metadata);

