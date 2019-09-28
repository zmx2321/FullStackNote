# 你不知道的html

##  跨域有几种解决方案
*jsonp*
```
$.ajax({
	type: "json"
});
```
*iframe*


## 同源策略(使cookie等不能在各个域名共享)
> 同源策略是一种约定，是浏览器最核心也是基本的安全功能；
> web是构建在同源策略基础之上的；
> 浏览器只是针对同源策略的一种实现
>> 同源策略是由Netcape(网景)公司提出的一个著名安全策略
>>> #### 同源
>>>> 协议相同(http(s)://)
>>>> 域名相同(www.baidu.com)
>>>> 端口相同(80)
>>> *二级域名和一级域名不是同源(父的永远比子的优先级高)*
>>> *如果非同源，那么在请求数据时，浏览器会在控制台报一个异常，提示拒绝访问*
>>> *提交表单不会受到同源策略的限制(跨站攻击)*
```
<form action="http://www.aa.com/a.php">
	<input type="text">
	<button type="submit">提交</button>
</form>
```


### 同源策略，三种行为受到限制(跨域)
* cookie(10-20kb), LocalStroage(离线缓存5M), IndexDb(50M)无法读取
* DOM无法获得
* AJAX请求不能发送

* LocalStroage超过2.5M就会出现性能的问题, *
* IndexDb类似关系型数据库(IndexDb和web sql是异步读取数据[回调]) *
`var db = openDatabase('mydatabase', '2.0', 'mydb', 2*1024);`

> * cookie是服务器写入浏览器的一小段信息，只有同源的网页才能共享，但是，两个网页一级域名相同，只是二级域名不能，则浏览器允许通过设置document.domain共享cookie(这种方法值适用于cookie和iframe[最实用])
```
A网页(http://w1.example.com/a.html)设置一个cookie
document.domain = "example.com"  // 设置同源策略

B网页(http://w2.example.com/b.html)就可以取到这个cookie
let allCookie = document.cookie

* 一般都是在后台加上domain，在domain域名下的所有数据可以共享 *
```


### 标签跨域
* img可以实现跨域
* iframe可以实现跨域
* script可以实现跨域
> ## img跨域
>> ### 测试网速
```
let s = new Image();
let start = Date.now();
s.src = "http://baidu.com/s.gif"  // 1kb
s.onload = (arg) => {
	let end = Date.now();
	t = end - start;
	v = 1 / t + "kb/s";
	...
}
```

>> ###css跨域(css攻击)
```
body{
	background: url(...)
}
```


# 跨域的原理
* jsonp
```
<script type="text" src="http://www.sss.com/index.pnp?callback=test"></script>
前端传过来一个callback
后端进行处理

if(callback){
	<!-- callback({"data": 123}) -->
	test({"data": 123})  // 方法
} else {
	{"data": 123}
}
```

前端就能获取到值(jq自己把这个写好了，不用手动加)
test(data) => {
	console.log(data);  // {"data": 123}
}
* ajax
```
/*会跨域*/
$.ajax({
	url: "http://www.xxx.com",
	success: (res) => {
		// body
	}
});
```

### 突破同源策略
img, iframe, script(jsonp), link(background)


### 语义化
> 尽量少些html
* 减少dom渲染 *
* 减小文件大小 *
* 1个html顶3个元素 * 
```
<header>
	<nav></nav>
</header>

<div class="content">
	<!-- <aside></aside>
	<article></article> -->

	<section></section>
	<section></section>

	<!-- <address></address> -->
</div>

<footer></footer>
```


### cors跨资源共享(攻击手段)
> 是跨源ajax最根本解决办法，相比jsonp只能发送get请求，cors允许任何类型的请求


### postMessage
域之间(跨窗口)通信
```
* 父窗口对子窗口通信 *
let popup = window.open("http://bbb.com", 'title');
popup.postMessage("Hello", "http://bbb.com")
```


### websocket跨窗口通信



### 高阶通信
> WebSocket，postMessage(ifarame, image)
> (代码压缩成图片)