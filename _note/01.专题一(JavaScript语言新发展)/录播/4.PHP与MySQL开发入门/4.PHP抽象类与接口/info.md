# PHP抽象类与接口
### 抽象类与接口的区别
* 接口是对动作的抽象，表示这个对象能做什么
* 抽象类是对根源的抽象，是对一类事物的抽象描述

#### 抽象类实例
```
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
```

### 接口
```
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
```