const person = {
    firstName: "kalyani",
    lastName: "yaramasi",

};
const women = Object.create(person);
women.firstname = "navitha"
console.log(person.firstName + women.firstName);

