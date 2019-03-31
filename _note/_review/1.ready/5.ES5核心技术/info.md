# ES5核心技术
```
let a = 25;
(() => {
	alert(a);
	let a = 30;
})();
> a is not defined
```