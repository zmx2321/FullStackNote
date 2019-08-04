/**
 * 冒泡排序
 */

array = [5, 7, 6, 2, 1, 0, 3, 8, 9];

var bubbleSort = function(array){
	var temp = "";

	for(var i=0; i<array.length; i++){	//遍历数组
		for(var j=0; j<array.length-i-1; j++){  //每一轮比较的次数(每次比较之后，把当前最值放到末尾)
			if(array[j] > array[j+1]){  //当前的数组和下一个数组进行两两比较
				temp = array[j];  //将当前数组的值存入临时变量
				array[j] = array[j+1];  //将当前数组的下一个赋值给当前数组
				array[j+1] = temp;  //将临时变量中的值放入当前数组的下一个
			}
		}
	}

	return array;  //返回当前数组
}

var res = bubbleSort(array);
console.log(res);