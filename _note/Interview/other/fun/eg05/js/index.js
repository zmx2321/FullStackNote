window.onload = function(){
  eg();
}

var eg = function(){
  function foo(a){
  	arguments[0] = 2;

  	alert(a);
  }

  //2
  foo(1);
}