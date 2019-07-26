window.onload = function(){
  eg();
}

var eg = function(){
	b();  //undefined

	var x = 'a';
	function b(){
		alert(x);
		var x = 'b';
	}
}