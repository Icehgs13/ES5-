// currying函数

// 下面使用传统的方式实现的
var cost = (function() {
    var args = [];

    return function() {
        if(arguments.length === 0) {
            var money = 0;
            for(var i = 0; i < args.length; i++) {
                money += args[i];
            }
            return money;
        } else {
            [].push.apply(args,arguments);
        }
    }
})();

cost(100);
cost(200);
cost(300);

var a = cost();
console.log(a);

// 下面是用currying函数实现的，看看两者的区别
var currying = function(fn) {
    var args = [];

    return function() {
        if(arguments.length === 0) {
            return fn.apply(this,args);
        } else {
            [].push.apply(args,arguments);
            return arguments.callee;
        }
    }
}

var cost = (function(){
    var money = 0;

    return function(){
        for(var i = 0; i < arguments.length; i++) {
            money += arguments[i];
        }
        return money;
    }
})()

var cost = currying(cost);

cost(1000);
cost(5000);
cost(7000);

var c = cost();
console.log(c);
