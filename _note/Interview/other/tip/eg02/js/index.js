/**
 * 定义一个log方法，让它可以代理console.log的方法
 */

/*function log(msg){
	console.log(msg);
} 

log("hello world!") // hello world! */

//如果要传入多个参数
function log(){ 
	console.log.apply(console, arguments); 
};

/**
 * 对于apply和call两者在作用上是相同的，即是调用一个
 * 对象的一个方法，以另一个对象替换当前对象。将一个
 * 函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。
 * 但两者在参数上有区别的。对于第一个参数意义都一样，但对第二个
 * 参数： apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，
 * 而call则作为call的参数传入（从第二个参数开始）。 
 * 如 func.call(func1,var1,var2,var3)对应的apply写法为：func.apply(func1,[var1,var2,var3]) 。
 *
 * 2.在Javascript中什么是伪数组？如何将伪数组转化为标准数组？
 * 答案：
 * 伪数组（类数组）：无法直接调用数组方法或期望length属性有什么特殊的行为，但仍可以对真正
 * 数组遍历方法来遍历它们。典型的是函数的argument参数，还有像调用getElementsByTagName,document.childNodes之类的,
 * 它们都返回NodeList对象都属于伪数组。可以使用Array.prototype.slice.call(fakeArray)将数组转化为真正的Array对象
 */