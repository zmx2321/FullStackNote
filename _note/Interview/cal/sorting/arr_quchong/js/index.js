var array = [9, 4, 3, 2, 1, 8, 3, 6, 7, 0, 1];

//利用对象的键值对方法
var obj = {};

for(var i=0; i<array.length; i++){
	var cur = array[i];
	
	if(obj[cur] == cur){
		// array.splice(i, 1);	//耗性能
		array[i] = array[array.length - 1];	// 把数组末尾那一项的值拿来替换当前项
		array.length--;	//再把数组末尾那一项的值删掉
		i--;
		continue;
	}
	obj[cur] = cur;
}

console.log(array);