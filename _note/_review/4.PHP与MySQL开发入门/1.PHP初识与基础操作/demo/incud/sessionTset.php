<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>phpDemo</title>
</head>
<body>
<?php
    // 访问session
    session_start();
    echo $_SESSION['views'];
?>
</body>
</html>