
class Counter{
    constructor(){
        this.count = 0;
    }

    increment(){
        this.count++;
        console.log(this.count);
    }
}

class CountChild extends Counter{
    decrement(){
        this.count--;
        console.log(this.count);
    }
}
var count = new CountChild();
count.increment();
count.decrement();
