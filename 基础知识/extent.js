/*看下闭包和面向对象写法的区别*/ 

// 闭包写法
var extent = function() {
    var value = 0;
    return {
        call: function() {
            value++;
            console.log(value);
        }
    }
}

var extent = extent();
extent.call();
extent.call();
extent.call();

// 面向对象的写法
var extent = {
    value: 0,
    call: function() {
        this.value++;
        console.log(this.value);
    }
}

extent.call();
extent.call();
extent.call();

// 或者是这样写
var Extent = function() {
    this.value = 0;
}

Extent.prototype.call = function() {
    this.value ++;
    console.log(this.value);
}

var extent = new Extent();
extent.call();
extent.call();
extent.call();