window.onload = function(){
  eg();
}

var eg = function(){
  x = {};
  function bar(){
    this.x = 2;
    return x;
  }

  var foo = new bar();

  //undefined
  alert(foo.x);
}