window.onload = function(){
  eg();
}

var eg = function(){
  var x = 4;
  var obj = {
    x: 3,
    bar: function(){
      var x = 2;
      setTimeout(function(){
        var x = 1;
        alert(this.x);
      }, 1000);
    }
  };

  //undefined
  obj.bar();
}