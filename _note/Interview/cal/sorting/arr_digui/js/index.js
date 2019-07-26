//递归：当前函数自己调用自己执行

function sum(n){
	if(n === 0){
		return 0;
	}

	if(n%3 === 0){
		return sum(n - 1);
	}

	return n + sum(n - 1);
}

var total = sum(3);
console.log(total);