/**
 * test4
 * 请写出输出值，并解释为什么
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