window.onload = function(){
  eg();
}

var eg = function(){
	var a = 1,
		b = 2;

	console.log("" + a + b);  //12
	console.log(a + "" + b);  //12
	console.log(a + b + "");  //3
	console.log(a.toString() + b.toString());  //12
}