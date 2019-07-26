# ES5核心技术
### question1
```
// let a = 25;
// 闭包[匿名函数自执行](无法访问外部)
(() => {
	alert(a);  // undefind(声明了，但没有赋值)
	let a = 30;
})();
alert(a);  // 上面注释[is not defind]（没有值）
```

```
(() => {
	let a;
	alert(a);  // undefind(声明了，但没有赋值)
	a = 30;
})();
```

### question2
```
this.a = 20;
let test = {
	a: 40,
	init: () => {
		console.log(this.a);
		function go() {
			this.a = 60;
			console.log(this.a);
		}
		go.prototype = 50;
		return go;
	}
};
let p = test.init();
p();
new (test.init())();
```
