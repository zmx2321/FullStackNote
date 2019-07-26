<?php
    /**
     * 抽象类
     * 1、含有抽象方法的类必须是抽象类
     * 2、抽象类不一定非得含有抽象方法
     * 3、抽象类可以存在普通方法
     * 4、抽象类不能被实例化 必须由一个子类去继承 并且把抽象类的抽象方法都实现了
     */
    abstract class Person {
        public function eat() {
            echo "eat";
        }

        // 抽象方法没有方法体
        public abstract function play ();
    }

    // 继承抽象类
    class Man extends Person {
        // 如果抽象类中有抽象方法，必须实现抽象方法
        public function play() {
            // TODO: Implement play() method.
            echo "play";
        }
    }

    // 实例化
    $man = new Man();

    // 子类就会有父类(抽象类)中的方法
    $man -> eat();
    $man -> play();