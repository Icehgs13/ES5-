// call,apply的区别
var func = function(a,b,c) {
    console.log([a,b,c]);
}
// 第一个参数是函数内部的this
func.apply(null, [1,2,3]);

func.call(null, 1, 2, 3); 

var b = Math.max.apply(null,[1,3,2,5,4]);
console.log(b); 

