

// class student {




//     studentdetails(value1, value2, value3) {

//         this.studentName = value1
//         this.StuPlace = value2
//         this.student_Course = value3
//     }



// print_Student_details() {

// //     console.log(this.studentName, this.StuPlace, this.student_Course)
// // }
// // }

// // // const stu1 = new student()

// // stu1.studentdetails("Chethana", "Bangalore", "Playwright")

// // stu1.print_Student_details()

// // another exmaple 

// class vehicle {

//     #car;// private encapsulation data

//     setValue(name) {
//         this.#car = name;

//     }

//     getvalue() {
//         console.log("car name:" + this.#car);
//     }

// }
// let features = new vehicle()
// features.setValue("tayota")
// features.getvalue()

// // another example with constructor 

// class house {
//     constructor(children, parents) {
//         this.children = children;
//         this.parents = parents;


//     }
//     people(names) {
//         this.names = names
//     }
//     family() {
//         return this.names
//     }
// }
// let jointfamily = new house("children ", " parents")
// jointfamily.people("father mother kids");
// console.log(jointfamily.family());


// // another example 
// class person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//     }
//     setAge(newage) {
//         if (newage > 0) {
//             this.age = newage;

//         }


//     }
//     getAge() {
//         return this.age;
//     }
// }
// let details = new person("kalyani", "24")
// console.log(details.name)
// console.log(details.getAge());
// details.setAge(30);
// console.log(details.getAge());

// single inheritance 

// class Dog {
//     eat() {
//         console.log("animal is eating ");
//     }
// }
// class Animal extends Dog {
//     bark() {
//         console.log("dog is barking");


//     }
// }

// const d = new Animal();
// d.eat();
// d.bark();

// multilevel inhertance

// class A {
//     msgA() {
//         console.log("watsapp")
//     }
// }
// class B extends A {
//     msgb() {
//         console.log("facebook");
//     }
// }
// class C extends B {
//     msgc() {
//         console.log("instagram");
//     }
// }
// const notification = new C();
// notification.msgA();
// notification.msgb();
// notification.msgc();

//hirachical inheritance
class A {
    msgA() {
        console.log("watsapp")
    }
}
class B extends A {
    msgb() {
        console.log("facebook");
    }
}
class C extends A {
    msgc() {
        console.log("instagram");
    }
}
var mobile = new B();

mobile.msgA();
mobile.msgb();

// fun
