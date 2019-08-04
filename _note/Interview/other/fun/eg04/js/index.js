window.onload = function(){
  eg();
}

var eg = function(){
	function fun(n, o){
		console.log(o);

		return {
			fun: function(m){
				return fun(m, n);
			}
		};
	}

	/**
	 * 最外层函数，第一个参数是0，第二个参数未定义
	 * n = 0
	 * o = underfind
	 */
	var a = fun(0);

	/**
	 * m = 1
	 * n = 0
	 * 回到最外层，返回值是return fun(m, n) ==> return fun(1, 0)
	 * 所以fun(n, o)就是fun(1, 0)，即o = 0
	 */
	a.fun(1);

	/**
	 * n = 0
	 * m = 2
	 * 最外层a=fun(0)故n=0,然后进到a.fun(2),执行里层的fun函数，得到
	 * m=2, 又上n=0,即return fun(m, n) ==> return fun(2, 0)
	 * 所以fun(n, o)就是fun(2, 0)，即o = 0
	 */
	a.fun(2);

	/**
	 * n = 0
	 * m = 3
	 * o = 0
	 */
	a.fun(3);

	/**
	 * fun(0) => n=0, o=undefind
	 * fun(1) => m=1, n=0, o=0, (m, n)=>(1, 0)=>(n, o)  n=1
	 * fun(2) => m=2, n=1, o=1, (m, n)=>(2, 1)=>(n, o)  n=2
	 * fun(3) => m=3, n=2, o=2, (m, n)=>(3, 2)=>(n, o)  n=3
	 */
	var b = fun(0).fun(1).fun(2).fun(3);

	/**
	 * fun(0) => n=0, o=undefind
	 * fun(1) => m=1, n=0, o=0, (m, n)=>(1, 0)=>(n, o)  n=1
	 * 
	 */
	var c = fun(0).fun(1);

	/**
	 * 由上得c.fun(1) => n=1，
	 * c.fun(2) => m=2, (m, n)=>(2, 1)=>(n, o) n=2 o=1
	 */
	c.fun(2);

	/**
	 * 由上得fun(2) => n=2,
	 * c.fun(2) => m=3, (m, n)=>(3, 2)=>(n, o) n=3 o=2
	 */
	c.fun(3);
}