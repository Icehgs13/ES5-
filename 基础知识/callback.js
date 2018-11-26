// 回调函数
// var appendDiv = function(callback) {
//     for(var i = 0; i < 100; i++) {
//         var div = document.createElement('div');
//         div.innerHTML = i;
//         document.body.appendChild(div);
//         if(typeof callback == 'function') {
//             callback(div);
//         }
//     }
// }

// appendDiv(function(node) {
//     node.style.display = 'none';
// });

var arr = [1,4,3].sort(function(a,b){
    return a-b;
});

console.log(arr);


var Type = {};
// 这块的写法需要注意了，很牛逼
for(var i = 0,type; type = ['String','Array','Number'][i++];) {
    (function(type){
        Type['is' + type] = function(obj) {
            return Object.prototype.toString.call(obj) === '[object '+type+']';
        }
    })(type);
};

console.log(Type.isArray([]));
console.log(Type.isString("str"));

