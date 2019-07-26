/**
 * test10-0 附加题
 * 请描述你理解的函数式编程，并书写如下代码结果。那么你能使用Zone+RX 写出一段FRP的代码么？
 */
var Container = function(x) {
    this.__value = x;
}
Container.of = x => new Container(x);
Container.prototype.map = function(f){
    return Container.of(f(this.__value))
}
Container.of(3)
    .map(x => x + 1)
    .map(x => 'Result is ' + x);