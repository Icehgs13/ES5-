var people = {
    name: 'liming',
    say: function() {
        return this.name;
    }
}

var lilei = {
    name: 'lilei'
}
console.log(people.say());
var d = people.say.call(lilei);
console.log(d);