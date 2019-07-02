var Student = /** @class */ (function () {
    // Create the class constructor
    // By default, these fields are `public` but because this is an example, we\
    // setting them explicitly
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// Refactor this function to make use of interfaces
/*
function greeter(person: string) {
    // Because `person` has a type annotation of `string`, the compiler will\
    // throw an error if the argument passed to the function is not of that\
    // type
    return "Hello " + person
}
*/
function greeter(person) {
    // The function still receives one arguments, but now it expects that\
    // argument to comply to the `Person` interface
    return "Hello " + person.firstName + " " + person.lastName;
}
// We can make `user` a simple object to comply with the `Person` interface
// let user = { firstName: "Jane", lastName: "User" }
// Or we can make it a `Student` object which has the fields of `Person`\
// (`firstName` and `lastName`)
var user = new Student("Jane", "M.", "Mcnamara");
document.body.innerHTML = greeter(user);
