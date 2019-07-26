/**
 * test5
 * 请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
 *
 * 要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子
 * 类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句：将 红色的
 * Cruze买给了小王价格是14万。很多库里会使用Object.create(null)是什么原因么？
 */
function test(m) {
    // m.v = 5
    m = {
        v: 5
    }
}

var m = {
    k: 30
}

test(m);
alert(m.v);  // undefined

/*
    按值传递

    test中的m和外面的m没有关系，就是一个简单的实参
*/