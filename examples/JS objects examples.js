let person = {
  name: 'Jose',
  age: 19,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  //Function method created via the introduction of ES6
  sayMyName() {
      return `My name is ${this.name}`;
  }
};

//To access an object's propety either dot or bracket notation can be used, both will yield the same result (return the key's value)
console.log(person.name);
console.log(person.age);
console.log(person.weekendAlarm);
console.log();

console.log(person['name']);
console.log(person['age']);
//Though instead of using the key's name with the bracket notation, you can instead use variables
let day = 'Saturday';
let alarm;
if (day == 'Saturday' || day == 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}
console.log(person[alarm]); //logs the same value as person['weekendAlarm'] or person.weekendAlarm
console.log();

//Objects are mutable, so it means you can add and edit its contents even if they are assigned with const
//Example of adding a new property to the object
person.gender = 'male'; //equivalent to person['gender'] = 'male'
console.log(person.gender);
//Example of editing an already existing property
person['weekAlarm'] = 'Alarm set to 6AM'; //equivalent to person.weekAlarm = 'Alarm set to 6AM'
console.log(person['weekAlarm']);
console.log();

//Methods: these are keys which have functions assigned to them (key-function pairs)
//A normal way to add a method to an object
person.greet = () => {
    return 'Hello';
};
console.log(person.greet());

//I've altered the sayMyName method so that now it returns a string formatted to include the 'name' key's value at the end
console.log(person.sayMyName());
console.log();

//for the this statement, it is quite useful to help with scope problems: for example, say you have a method and that method has an if condition dependent on another key of the same object
//normally the if and the object would have different scopes, but if you use the this statement in the if condition you'll be able to use the object's scope
person.f = function() {
    //The condition simply tests if 'name' is not an empty string
    if (this.name){
        return this.name;
    }
};
console.log(person.f());
console.log();
console.log();

//A setter method in an object is a good way to prevent, for example, modifying the type of another key in the object 
//say the object has a number key and you want to stay a number no matter how many times it is modified, so when you'd try to modify it to a string or even a boolean you wouldn't be able to do it

//A getter method will "get" the value of the property of an object
let person2 = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
  
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }

};
console.log(person2._age);
console.log(person2.age);