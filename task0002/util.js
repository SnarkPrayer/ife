//1 判断是否为数组类型
function isArray(obj) {
    return (typeof obj == "object") && obj.constructor == Array;
}
var a = [0];
console.log(isArray(a), "<br/>");

//2 判断是否为字符串类型
function isString(str) {
    return (typeof str == "string") && str.constructor == String;
}
console.log(isString("test"), "<br/>");
console.log(isString(10), "<br/>");

//3 判断是否为数值类型
function isNumber(obj) {
    return (typeof obj == "number") && obj.constructor == Number;
}
console.log(isNumber("test"), "<br/>");
console.log(isNumber(10), "<br/>");

//4 判断是否为日期类型
function isDate(obj) {
    return (typeof obj == "object") && obj.constructor == Date;
}
console.log(isDate(new Date()), "<br/>");
console.log(isDate(10), "<br/>");

//5 判断是否为函数
function isFunction(obj) {
    return (typeof obj == "function") && obj.constructor == Function;
}
console.log(isFunction(function test() {}), "<br/>");
console.log(isFunction(10), "<br/>");

//6 判断是否为对象
function isObject(obj) {
    return (typeof obj == "object") && obj.constructor == Object;
}
console.log(isObject(new Object()), "<br/>");
console.log(isObject(10), "<br/>");
