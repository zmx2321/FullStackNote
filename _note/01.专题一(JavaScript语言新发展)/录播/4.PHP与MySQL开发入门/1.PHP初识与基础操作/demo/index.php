<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>phpDemo</title>
</head>
<body>
	<?php

    //  引入外部文件
    // include不管有没错，都会执行(require与当前php文件融为一体)
    // require_once ("incud/a.php");
    include_once ("incud/a.php");

	  echo "phpDemo";
	  
	  // test
	  if (false){
		  $a = "test";
	  }
	  
	  echo "<br />"; 
	  
	  // 判断是否被声明(isset)
	  if(isset($a)) {
		  echo "我是一个声明的";
	  } else {
		  echo "我没声明";
	  }
	  
	  echo "<br />"; 
	  
	  // 内部方法无法读取外部变量（使用global）
	  $a = "我是外面的";
	  function test() {
	  	global $a;
	  	echo $a;
	  }

	  test();
	?>
</body>
</html>