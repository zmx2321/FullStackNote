<?php
    /**
     * 类的声明
     */

    class Person {
        public $age;
        public function say($word) {
            echo "she say {$word}";
        }

        public function info() {
            // 调用自己类里面的方法用 ->
            // 定义数组的方法用 =>
            $this -> say("Hi");

            return $this -> age;
        }
    }

    $xiaohong = new Person();
    $xiaohong -> age = 22;
    $age = $xiaohong -> info();

    echo "<br />";

    echo $age;
