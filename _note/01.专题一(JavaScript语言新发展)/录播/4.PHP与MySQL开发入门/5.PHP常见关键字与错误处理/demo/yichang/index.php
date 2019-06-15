<?php
    /**
     * 异常处理
     */
    // tyr分支 有问题就抛出，没问题就继续执行
    try {

    }
    // catch分支 捕捉异常对象
    // 参数： 异常对象，使用的是类型约束，只能捕捉由Exception类实例化来的对象
    catch (Exception $e) {
        echo "错误文件为：";
        echo $e -> getFile();  // 得到异常文件
        echo ",发生错误的行为：";
        echo $e -> getLine();  // 得到发生错误的行为
        echo ",错误代码为：";
        echo $e -> getCode(); // 得到错误代码
        echo ",错误信息为：";
        echo $e -> getMessage();  // 得到错误信息

        echo e;
    }