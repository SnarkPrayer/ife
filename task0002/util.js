//1 判断是否为数组类型
function isArray(obj) {
	return (typeof obj == "object") && obj.constructor == Array;
}
var a = [0];
console.log(isArray(a));

//2 判断是否为字符串类型
function isString(str) {
	return (typeof str == "string") && str.constructor == String;
}
console.log(isString("test"));
console.log(isString(10));

//3 判断是否为数值类型
function isNumber(obj) {
	return (typeof obj == "number") && obj.constructor == Number;
}
console.log(isNumber("test"));
console.log(isNumber(10));

//4 判断是否为日期类型
function isDate(obj) {
	return (typeof obj == "object") && obj.constructor == Date;
}
console.log(isDate(new Date()));
console.log(isDate(10));

//5 判断是否为函数
function isFunction(obj) {
	return (typeof obj == "function") && obj.constructor == Function;
}
console.log(isFunction(function test() {}));
console.log(isFunction(10));

//6 判断是否为对象
function isObject(obj) {
	return (typeof obj == "object") && obj.constructor == Object;
}
console.log(isObject(new Object()));
console.log(isObject(10));

//数组去重
function unique(arr) {
	if (toString.call(arr) !== '[object Array]') {
		throw Error("参数必须为数组！")
	} else {
		for (var i=0;i<arr.length;i++) {
			for (var j=i+1;j<arr.length;j++) {
				if (arr[i]===arr[j]) {
					arr.splice(j,1);
					j--;
				}
			}
		}
		return arr;
	}
}

var d = new Array(1, 3, 5, 7, 5, 3);
var b = unique(d);
console.log(b);

//trim函数
function trim(str){
	var result = "";
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)!==" " && str.charAt(i)!==""){
			return result+=str[i];
		}
	}
	return result;
}

//indexof
function trimin(str){
	var result = "";
	for(var i=0;i<str.length;i++){
		if([""," "].indexOf(str.charAt(i)) == -1){
			return result+=str[i];
		}
	}
	return result;
}





















