ary = [5, 7, 1, 2, 6, 0, 3, 8, 9];

//取一个数，数组中依次与末尾的数比较，从后往前比较
var insertSort = function (ary){
	for(let i=1; i<ary.length; i++){
		let temp = ary[i];

		var j = i;
		while(j>0 && temp<ary[j-1]){
			ary[j] = ary[j-1];
			j--;
		}

		ary[j] = temp;  //插入数据
	}

	return ary;
}

var res = insertSort(ary);
console.log(res);