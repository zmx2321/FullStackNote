# PHP面向对象介绍
### 类的声明
```
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
```

### 构造方法
```
// 构造方法
public function __construct($age) {
    /**
     * 当这个类new的时候自动执行
     * 可以把一些成员的属性放到这个构造方法里面
     */

    // 把参数注册到当前的类上
    $this -> age = $age;
}
```

### 析构方法
* 当类不用使用其中相关的属性或方法的时候，析构执行 *
```
// 析构方法
public function __destruct() {
    // 用途 可以进行资源释放操作（数据库，流的释放或关闭）
    // 对象被销毁的时候执行 没有代码再去执行了

    echo "bye bye {$this -> name} <br />";
}
```

### 析构方法与构造方法实例
```
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
```

### 面向对象的封装
* 两个下划线是私有方法 *
#### 对私有成员的访问（魔术方法）
* __set()  外边的元素对里面的元素设值进行调用
* __get()
* __isset()  在外边对类的成员属性进行判断的时候进行调用
* __unset()  从类外释放这个变量的时候调用

#### 设置私有成员
* 封装后的成员在对象外部不能直接访问，只能在对象内部方法中使用$this访问
```
class Person {
    private $name;

    private function say() {
	return $this -> name;
    }
}
```


### 面向对象的继承和多态
#### 访问权限
* protected在类外部不能被访问，在子类中可以被访问 * 
|       | private | protected | public(默认) |
|: --- | : ---- : | : ---- : | : ---- : |
| 在同一类中 | 可以 | 可以 | 可以
| 在子类中 | 不可以 | 可以 | 可以
| 在类外部 | 不可以 | 不可以 | 可以

#### 多态
* 父类中定义的方法，子类可以对其重写或重载 *
* > 重载（overload）：方法名相同，参数名不一样
* > 重写（override）：方法名相同，参数名都一样

####继承和多态实例
```
<?php
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
```

