// arguments.callee指向的就是函数本身
function show(n) {
    var arr = [];
    return (function () {
        arr.unshift(n);
        n--;
        if (n != 0) {
            arguments.callee();
        }
        return arr;
    })()
}

console.log(show(5));

// 递归函数用到了这个
function factorial(num) {
    if(num <= 0) {
        return 1;
    } else {
        return num*arguments.callee(num - 1);
    }
}

console.log(factorial(5));

// uncurrying函数
Function.prototype.uncurrying = function() {
    var self = this;
    return function() {
        var obj = Array.prototype.shift.call(arguments);
        return self.apply(obj,arguments);
    };
};

var push = Array.prototype.push.uncurrying();
(function() {
    // Array.prototype.push.call(arguments,4);
    push(arguments,4);
    console.log(arguments);
})(1,2,3);

// 同理我们可以运用到其他函数
for(var i = 0, fn, ary = ['push','shift','forEach']; fn = ary[i++];) {
    Array[ fn ] = Array.prototype[ fn ].uncurrying;
}
