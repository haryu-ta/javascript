//従来型のthis参照
var count = 10;

var Counter = function() {
    this.count = 0;
};

Counter.prototype.increment = function(){

    setTimeout(function(){
        this.count++;
        console.log(this.count);
    },1000);
};

var cou = new Counter().increment();
