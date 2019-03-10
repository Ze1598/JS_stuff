let person = {
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


//setter methods will prevent modifying an object's key type
console.log('Set examples:');
//If you try to modify the value of 'age' to a value that is not a number you'll receive the "error" message from the setter 
console.log('Try to modify \'person._age\'', person._age,  'to \'39\': ');
person.age = '39'; //logs 'Invalid input'
//However, if you modify 'age' to another number you'll receive the "success" message from the setter
console.log('Try to modify \'person._age\'', person._age,  'to 39: ');
person.age = 39; //reassigns person._age to 39
console.log('Now \'person._age\' is', person._age);
console.log();

//getter methods are used to get the property values inside of an object
console.log('Get examples:');
console.log(person.age);