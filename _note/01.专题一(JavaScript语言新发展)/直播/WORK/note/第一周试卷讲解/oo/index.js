function Car(color) {
    this.color = color;
}
Car.prototype.sail = function () {
    console.log(this.color);
}

function BWM(color) {
    //构造函数
    Car.call(this, color);
}
// BWM.prototype = Car.prototype;
// BWM.prototype = new Car();
var __proto = Object.create(Car.prototype);
//修正constructor
__proto.constructor = BWM;
BWM.prototype = __proto;
BWM.prototype.test = function () {
}

var bwm = new BWM("yellow");
bwm.sail();

class Car {
    constructor(color) {
        this.color = color;
    }
    sail() {
        console.log(this.color);
    }
}
class BWM extends Car {
    constructor(color) {
        super(color);
        console.log(super);
        super.ss = "🍌🍌🍌🍌🍌🍌";
        // this.color = color;
    }
    yideng(){
        console.log("111");
    }
}
BWM.prototype.yideng = function(){
    console.log("222");
}
const bwm = new BWM("yellow");
const car = new Car();
console.log(car.ss);

