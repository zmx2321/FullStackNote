<?php
    // 接收前端信息(路由)$_REQUEST 自动检测
    echo $_REQUEST['username'];  // $_GET['username']  $_POST['username']

    // 设置报头(header)解决中文乱码[Content-type:<=(冒号)]
    header("Content-type: text/html; charset=utf-8");

    $username = $_REQUEST['username'];
    if($username == "admin") {
        echo json_encode(array('msg' => '登录成功', errorCode => 'ok'));
        echo "登录成功";
    } else {
        echo "登录失败";
    }
