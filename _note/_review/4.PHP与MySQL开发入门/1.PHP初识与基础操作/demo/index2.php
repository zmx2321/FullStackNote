<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>phpDemo</title>
</head>
<body>
<?php
    // 数组
    $arrayTest = array("0" => "苹果", "1" => "测试");
    // 输出json
    echo json_encode($arrayTest);
    echo $arrayTest;
    echo $arrayTest[0];
?>
</body>
</html>