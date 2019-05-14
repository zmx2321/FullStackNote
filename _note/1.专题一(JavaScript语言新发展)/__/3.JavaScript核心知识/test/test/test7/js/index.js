/**
 * test5
 * 请写出输出值，并解释为什么
 */
function yideng() {
    console.log(1);
}

(function () {
    if (false) {
        function yideng() {
            console.log(2);
        }
    }

    yideng();
})();

/*

*/