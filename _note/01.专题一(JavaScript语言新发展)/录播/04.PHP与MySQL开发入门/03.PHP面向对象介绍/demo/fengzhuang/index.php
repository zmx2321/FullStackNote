<?php
    /**
     * 定义一个类 学习 public private protected 修饰符
     * -> 两个下划线是私有方法
     */
    class Person {
        public $x = "aa";
        public $name = "XX";  // 公有的
        private $name1 = "sm";  // 公有的
        private $age = 22;  // 私有的
        protected $money = 3;  // 受保护的

        // 私有成员方法（不能在类外部直接访问）
        private function getAge () {
            return $this -> age;
        }

        // 受保护的成员方法（不能在类外部直接访问）
        protected function getMoney () {
            return $this -> money;
        }

        // 公有方法(类内部可以访问私有方法和私有成员属性)
        public function userCard () {
            echo "name->". $this -> name. "-> age ->". $this -> getAge(). "-> money ->". $this -> getMoney();

            echo "<hr />";

            echo "name->". $this -> name1. "-> age ->". $this -> getAge(). "-> money ->". $this -> getMoney();
        }

        /**
         * 魔术方法
         */
        // __set
        public function __set($key, $value) {
            // 魔术方法的set只针对私有属性才能生效（protect private）
            // echo $key. ">>>>>". $value;
            if ($key == "name1" && $value == "zz") {
                $this -> name1 = "xiaoming";
            }
        }

        // __get
        public function __get($key) {
            if($key == "age") {
                return "girl not tell you";
            }
        }

        // __isset (判断，返回布尔值)
        // 判断这个东西有没有
        public function __isset($key) {
            if ($key == "age") {
                return "private age";
            }
        }

        // __unset
        public function __unset($key) {
            echo "aaa";

            if ($key == "age") {
                unset($this -> age);
            }
        }
    }

    $xw = new Person();
    echo $xw -> name;  // 私有的和受保护的成员变量没有权限访问

    echo "<hr />";

    echo $xw -> name1 = "zz";

    echo "<hr />";

    // 实例化的对象访问公有方法
    echo $xw -> userCard();

    echo "<hr />";

    // 取私有age
    echo $xw -> age;

    echo "<hr />";

    // 判断是否有值
    var_dump(isset($xw -> age));

    echo "<hr />";

    // 判断是否能拿到值
    echo isset($xw -> age);

    echo "<hr />";

    // 删除掉一个变量
    unset($xw -> x);
    echo $xw -> x;
