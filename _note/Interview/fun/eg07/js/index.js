window.onload = function(){
  eg();
}

var eg = function(){
	function fn(){
  		this.a = 0;
  		this.b = function(){
  			alert(this.a);
		}
	}

	fn.prototype = {
		b: function(){
			this.a = 20;
			alert(this.a);
		},

		c: function(){
			this.a = 30;
			alert(this.a);
		}
	}

	var myfn = new fn();

	//0
	//原型链上的b方法不执行
	myfn.b();

	//30
	myfn.c();
}