<?php
    /**
     * 本demo是为了测试构造方法和析构方法
     */
    class Person {
        // 修饰符默认public

        // 构造方法
        public function __construct($name, $age) {
            /**
             * 当这个类new的时候自动执行
             * 可以把一些成员的属性放到这个构造方法里面
             */

            echo "hello" .$name. "<hr />";

            // 把参数注册到当前的类上
            $this -> age = $age;
            $this -> name = $name;
        }

        // 析构方法
        public function __destruct() {
            // 用途 可以进行资源释放操作（数据库，流的释放或关闭）
            // 对象被销毁的时候执行 没有代码再去执行了

            echo "bye bye {$this -> name} <br />";
        }

        public function data () {
            return $this -> age;
        }
    }

    // 实例化(php中构造方法参数必须全部带上)
    $xiaowang = new Person("xiaohong", 30);
    // 执行对象中的方法
    echo $xiaowang -> data();

    echo "<br />";

    // 程序结束自动执行析构方法
    // $xiaowang1 = new Person("xiaoming", 20);
    new Person("xiaoming", 20);