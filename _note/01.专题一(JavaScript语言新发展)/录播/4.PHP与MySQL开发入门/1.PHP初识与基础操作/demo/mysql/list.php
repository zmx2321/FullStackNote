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