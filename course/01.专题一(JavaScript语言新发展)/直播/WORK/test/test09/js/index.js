/**
 * test8
 * 请问点击<buttion id=“test”></button>会有反应么？为什么？能解决么？
 */
$('#test').click(function(argument) {
    console.log(1);
});
setTimeout(function() {
    console.log(2);
}, 0);
while (true) {
    console.log(Math.random());
}