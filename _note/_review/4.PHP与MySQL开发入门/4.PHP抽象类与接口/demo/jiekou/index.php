<?php
    /**
     * 1、接口声明的关键字 interface
     * 2、接口可以声明常量也可以抽象方法
     * 3、几口中的方法都是抽象方法 不用abstract去定义
     * 4、接口不能被实例化 需要一个类去实现它
     * 5、一个类不能继承多个类 但可以实现多个接口
     */
    interface Person {
        // 常量用const
        const NAME = "xiaoming";

        public function run();

        public function eat();
    }

    interface Study {
        public function study();
    }

    class Student implements Person, Study {
        const data = 3.14;

        // 实现Person接口
        public function run() {
            echo "run";
        }

        // 实现Person接口
        public function eat() {
            echo "eat";
        }

        // 实现Study接口
        public function study() {
            echo "study";
        }

        public function test() {
            // 获取自己的常量
            echo self::data;
        }

        public static function test1 () {
            echo "aaa";
        }
    }

    $xw = new Student();
    $xw -> eat();
    $xw -> eat();
    $xw -> study();

    // 使用静态变量
    echo $xw::NAME;
    echo $xw -> test();
    // 通过类可以直接找到常量
    echo Student::data;

    // 通过类执行静态方法
    echo Student::test1();