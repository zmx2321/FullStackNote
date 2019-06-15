# PHP PDO
* 当遇到php链接失误或者错误的时候，可以使用php pdo *
```
<?php
    header("Content-Type: text/html; charset=utf-8");
    $dbms = "mysql";
    $host = "localhost";
    $dbName = "bookticket";
    $user = "root";
    $pass = "root";
    $dsn = "$dbms: host=$host; dbname=$dbName;";

    try {
        $dbh = new PDO($dsn, $user, $pass);

        echo "连接成功<br />";

        /*foreach ($dbh -> query('select * from `user`') as $row) {
            print_r($row);
        }*/

        $query = $sql = "INSERT INTO `user` (`user_name`, `user_password`, `user_sex`, `user_phone`, `user_balance`) VALUES ('张o', '123123', '女', '134897425', 128.0)";
        $res = $dbh -> exec($query);

        echo "数据库添加成功，受影响的行数". $res;

        $dbh = null;  // 关闭连接
    } catch (PDOException $e) {
            die("Error:" .$e.getMessage(). "<br />");
    }
```

### 