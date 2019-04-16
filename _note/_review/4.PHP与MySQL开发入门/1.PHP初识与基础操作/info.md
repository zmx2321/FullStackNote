# PHP初识与基础操作

### 基本写法
```
<?php
  echo "phpDemo";
?>
```

### 引入外部文件
* include不管有没错，都会执行(require与当前php文件融为一体)

### php数组
```
// 数组
$arrayTest = array("0" => "苹果", "1" => "测试");
// 输出json
echo json_encode($arrayTest);
echo $arrayTest;
echo $arrayTest[0];
```

### session会话
* 在每次开始的时候进行一次session_start() *
```
// 设置session
session_start();
$_SESSION['views'] = 1;

// 访问session
session_start();
echo $_SESSION['views'];
```

### 请求
```
<form action="incud/subinfo.php" method="post">
    <input type="text" name="username" />
    <input type="submit" value="提交" />
</form>

<?php
    // 接收前端信息(路由)$_REQUEST 自动检测
    echo $_REQUEST['username'];  // $_GET['username']  $_POST['username']

    // 设置报头(header)解决中文乱码[Content-type:<=(冒号)]
    header("Content-type: text/html; charset=utf-8");

    $username = $_REQUEST['username'];
    if($username == "admin") {
        echo json_encode(array('msg' => '登录成功',  'errorCode' => 'ok'));
        echo "登录成功";
    } else {
        echo "登录失败";
    }
```
### 
