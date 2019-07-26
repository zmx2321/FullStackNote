window.onload = function(){
  eg();
}

var eg = function(){
  var x = 3;
  var foo = {
    x: 2,
    baz: {
      x: 1,
      baf: function(){
        return this.x;
      }
    }
  }

  var go = foo.baz.baf;

  //undefined
  alert(go());  

  /**
   * function(){
        return this.x;
      }
   */
  alert(foo.baz.baf);

  //1
  alert(foo.baz.baf());
}