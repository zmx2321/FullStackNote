<?php
    /**
     * 父类
     * 一般不实例化父类
     */
    class Person {
        // 成员属性
        public $name;
        private $age;
        protected $money;

        function __construct($name, $age, $money) {
            $this -> name = $name;
            $this -> age = $age;  // 私有的 继承不过来
            $this -> money = $money;  // 外部不能访问，但是可以被继承过去
        }

        public function userCard () {
            echo "name->". $this -> name. "-> age ->". $this -> age. "-> money ->". $this -> money;
        }
    }

    $s = new Person("zhangsan", 22, 100);
    $s -> userCard();


    class Yellow extends Person {
        function __construct($name, $age, $money) {
            parent::__construct($name, $age, $money);
        }

        // 重写
        // 类B在重写dom方法时需要为新加入的参数指定一个默认值
        public function userCard ($pp = null) {
            // php实现重载的办法
            parent::userCard();  // 执行父类方法
            echo "<br />";
            echo $pp;
        }

        // 子类方法，继承父类受保护成员
        public function test() {
            echo $this -> money;  // protected
            // echo $this -> age;  // private  无法被继承
        }
    }

    echo "<hr />";

    $y = new Yellow("zhangsan", 22, 100);
    $y -> userCard(123);

    echo "<hr />";

    $y -> test();