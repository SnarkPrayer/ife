//2. JavaScript数据类型及语言基础

//2.1 任务描述

//创建一个JavaScript文件，比如util.js；
//实践判断各种数据类型的方法，并在util.js中实现以下方法：

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

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function unique(arr) {
	if (toString.call(arr) !== '[object Array]') {
		throw Error("参数必须为数组！")
	} else {
		for (var i = 0; i < arr.length; i++) {
			for (var j = i + 1; j < arr.length; j++) {
				if (arr[i] === arr[j]) {
					arr.splice(j, 1);
					j--;
				}
			}
		}
		return arr;
	}
}


//测试用例
var d = new Array(1, 3, 5, 7, 5, 3);
var b = unique(d);
console.log(b);


// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
function trim(str) {
	var result = "";
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) !== " " && str.charAt(i) !== "") {
			return result += str[i];
		}
	}
	return result;
}

//indexof
function trimin(str) {
	var result = "";
	for (var i = 0; i < str.length; i++) {
		if (["", " "].indexOf(str.charAt(i)) == -1) {
			return result += str[i];
		}
	}
	return result;
}


// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
	var reg = /^\s+|\s+$/g;
	return str.replace(reg, "");
}

// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		fn(arr[i], i);
	}
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];

function output(item) {
	console.log(item)
}
each(arr, output); // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];

function output(item, index) {
	console.log(index + ': ' + item)
}
each(arr, output); // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var count = 0;
	for (var attr in obj) {
		count++;
	}
	return count;
}

// 使用示例
var obj = {
	a: 1,
	b: 2,
	c: {
		c1: 3,
		c2: 4
	}
};
console.log(getObjectLength(obj)); // 3

// 判断是否为邮箱地址
function isEmail(emailStr) {
	return /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i.test(emailStr);
}

//测试用例
var mail = "cpf2015@gmail.com"
console.log(isEmail(mail));


// 判断是否为手机号
function isMobilePhone(phone) {
	return /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/.test(phone);
}

//测试用例
var phonenum = "13000000000"
console.log(isMobilePhone(phonenum));


//3. DOM

//3.1 任务描述

//先来一些简单的，在你的util.js中完成以下任务：

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
	var clana = element.className;
	if (a = "") {
		clana = newClassName;
	} else {
		clana = clana + " " + newClassName;
	}
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
	element.className = element.className.replace(oldClassName, "");
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
	return element.parentNode == siblingNode.parentNode
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
	var position = {x,y};
	var current = element.offsetParent;
	var left = element.offsetLeft;
	var top = element.offsetright;
	while(current != null){
		left+=current.offsetLeft;
		top+=current.offsetTop;
		current = current.offsetParent;
	}
	position.x = left;
	position.y = right;
	return position;

}
// your implement
