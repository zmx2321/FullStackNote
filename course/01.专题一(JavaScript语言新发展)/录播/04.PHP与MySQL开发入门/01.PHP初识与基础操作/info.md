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

### php连接mysql增删改查
```
<?php
    // 连接数据库
    $con = mysql_connect("localhost", "root", "root");

    if (!$con) {
        // php中连接字符串用点（.）不用加（+）
        die("Could not connect:" .mysql_error());
    } else {
        // 数据库连接成功
        echo "mysql connect ok <br />";

        // 解决中文乱码
        mysql_query('SET NAMES UTF8');

        // 指定数据库
        mysql_select_db("bookticket", $con);

        // 新增
        // $sql = "INSERT INTO `user` (`user_name`, `user_password`, `user_sex`, `user_phone`, `user_balance`) VALUES ('张o', '123123', '女', '134897425', 128.0)";
        // 删除
        // $sql = "DELETE FROM `user` WHERE `user_id` = 5";
        // 修改
         $sql = "UPDATE `user` SET `user_name`='2333', `user_phone`=111  WHERE `user_id` = 6";

        $result = mysql_query($sql, $con);

        if (!$result) {
            die("Error:" .mysql_error());
        } else {
            echo "success";
        }
    }
```

### 前后台用form联通
```
<form action="mysql.php">
    <label for="username">
        <span>名称</span>
        <input type="text" id="username" name="username" />
    </label>
    <label for="phone">
        <span>手机</span>
        <input type="text" id="phone" name="phone" />
    </label>
    <input type="submit" value="提交" />
    <input type="reset" value="重置" />
</form>

<?php
    // 连接数据库
    $con = mysql_connect("localhost", "root", "root");

    if (!$con) {
        // php中连接字符串用点（.）不用加（+）
        die("Could not connect:" .mysql_error());
    } else {
        // 数据库连接成功
        echo "mysql connect ok <br />";

        // 解决中文乱码
        mysql_query('SET NAMES UTF8');

        // 指定数据库
        mysql_select_db("bookticket", $con);

        $username = $_REQUEST['username'];
        $phone = $_REQUEST["phone"];

        // 新增
        // $sql = "INSERT INTO `user` (`user_name`, `user_password`, `user_sex`, `user_phone`, `user_balance`) VALUES ('张o', '123123', '女', '134897425', 128.0)";
        // 删除
        // $sql = "DELETE FROM `user` WHERE `user_id` = 5";
        // 修改
        // $sql = "UPDATE `user` SET `user_name`='2333', `user_phone`=111  WHERE `user_id` = 6";

        // char型要加''符号
        $sql = "INSERT INTO `user` (`user_name`, `user_password`, `user_sex`, `user_phone`, `user_balance`) VALUES ('".$username."', '123123', '女', $phone, 128.0)";

        $result = mysql_query($sql, $con);

        if (!$result) {
            die("Error:" .mysql_error());
        } else {
            echo "success";
        }
    }
```

### 输出数据库数据到页面
```
<?php
// 连接数据库
$con = mysql_connect("localhost", "root", "root");

if (!$con) {
    // php中连接字符串用点（.）不用加（+）
    die("Could not connect:" .mysql_error());
} else {
    // 数据库连接成功
    echo "mysql connect ok <br />";

    // 后台解决中文乱码
    mysql_query('SET NAMES UTF8');
    // 报头（前端解决中文乱码）
    header("Content-type: text/html; charset=utf-8");

    // 指定数据库
    mysql_select_db("bookticket", $con);

    $sql = "select * from `user`";

    $result = mysql_query($sql, $con);

    $arr = array();

    while ($row = mysql_fetch_array($result)) {
        /*echo $row['user_name']."".$row['user_phone'];
        echo "<br />";*/
        array_push($arr,
            array(
                "user_name" => $row['user_name'],
                "user_phone" => $row['user_phone']
            )
        );

        $result1 = array("errcode"=>0, "result"=>$arr);

        echo json_encode($result1);
    }
}
```
