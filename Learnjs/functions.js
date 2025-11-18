function greet() {

    console.log("hello");


}// normal function
greet();

function add(a, b) {
    // console.log("sum:", a, b);
    return a + b;
}

console.log(add(3, 5));//function with paramateres

const kalyani = function () {
    console.log("hello buddies");
}
kalyani();


//Arrow functions

const student = () => {

    console.log("running");
}
student();

// arrow function with parameteres

const sum = (a, b) => {
    return a + b;
}
console.log(sum(2, 3));

//single line function
const rectangle = (a, b) => a * b;
console.log(rectangle(2, 3));

// function inside an object 

const birds = {

    sky() {
        console.log("birds are flying");

    }
};
birds.sky();// for calling the function
// console.log(birds);

//Anonymous function or no nmae

(function () {
    console.log("studying");

})();

