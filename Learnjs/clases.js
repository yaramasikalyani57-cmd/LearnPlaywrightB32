class student {

};// just class example its a empty template 

class person {

    sayHi() {// method(functiopn  inside class )

        console.log("hello everyone");

    }
}
//creating object from the  class 

const person2 = new person();
person2.sayHi();

// using constructor in side class 

class car {
    constructor() {

        console.log("i am running")

    }
}
const display = new car();// constructor rens automatically after creating object

// using this keyword inside class 

class Car {
    constructor(color) {
        this.color = color;// it stores values inside object
    }
}
const c = new Car("red");
console.log(c.color)// it display stored value 

// using static keyword

class mathTool {
    static add(a, b) {
        return a + b;
    }
}
console.log(mathTool.add(2, 3))//

class teacher {

    static greet() {
        console.log("hello students")
    }
}
teacher.greet();//


// combined example 

class mobile {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;

    }
    // showDetails() {
    //     console.log("brand:" + this.brand + " ,this.price");



    // }

    // static welcome() {
    //     console.log("wlecome to mobile store");


    // }

}
const features = new mobile("vivo", 300000);
// features.showDetails();
// mobile.welcome();

console.log(features.brand);
console.log(features.price);










