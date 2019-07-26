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