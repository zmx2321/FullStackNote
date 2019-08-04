/**
 * 数组[1, 2, 3, 4, 5, 6]随机删除3,4,5，这三个数字一个或多个
 */

window.onload = function(){
  eg();
}

var eg = function(){
  var items = [1, 2, 3, 4, 5, 6];

  var arrTemp = items.splice(2, 3);
  console.log(arrTemp);

   var a=[11,22,33];
	b=a.splice(0,1,"x","y",[6,7,8]);

  //var item = items[Math.floor(Math.random()*items.length)];
}