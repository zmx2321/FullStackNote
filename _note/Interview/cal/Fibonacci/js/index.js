/**
 * 创建一个算法，实现返回裴波纳契数列中第x位的值
 * 注：裴波纳契数列（1, 1, 2, 3, 5, 8, 13……），
 * 第一位是0，第二位是1，之后每一位为其前两位数值的和
 */

var Fibonacci = function(num){
	if(num==1||num==2){
        return 1;
    }

    else{
        return Fibonacci(num-1)+Fibonacci(num-2);
    }
}

var res = Fibonacci(3);
console.log(res);