class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

//Create an instance of 'Surgeon' called 'surgeonCurry'
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

//Create an instance of 'Surgeon' called 'surgeonDurant'
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

//Log the constructor method properties of each instance
console.log(surgeonCurry.name, surgeonCurry.department);
console.log(surgeonDurant.name, surgeonDurant.department);
console.log();

//Use the 'takeVacationDays' method on each instance
surgeonCurry.takeVacationDays(3);
console.log('Surgeon', surgeonCurry.name, 'has', surgeonCurry.remainingVacationDays, 'days of vacation left.');
surgeonDurant.takeVacationDays(5);
console.log('Surgeon', surgeonDurant.name, 'has', surgeonDurant.remainingVacationDays, 'days of vacation left.');
console.log();


//Class inheritance
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  //Static method: this type of methods can only be accessed from the parent classes, if accessed from a child it raises TypeError
  //This method generates a random integer between 0 and 10000
  static generatePassword() {
    return Math.floor(Math.random()*10000);
  }
}
//'Nurse' inherits from the 'HospitalEmployee' class ('HospitalEmployee' is the parent class of the child class 'Nurse')
class Nurse extends HospitalEmployee {
  constructor (name, certifications) {
    //the 'super' keyword calls the constructor of the parent class
    //'super(name)' passes the 'name' argument of the 'Nurse' class to the constructor of the 'HospitalEmployee' class
    //when the 'HospitalEmployee' constructor runs, it sets 'this._name = name' for new 'Nurse' instances
    super(name);
    //Then we define a new property specific to the 'Nurse' class
    this._certifications = certifications;
  }
  
  //Create a getter for the 'certifications'
  get certifications() {
    return this._certifications;
  }
  
  //Create a method exclusive to 'Nurse' that appends the method's input to 'certifications'
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

//Create an instance of 'Nurse'
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
//Modify 'nurseOlynyk' \'s 'remainingVacationDays' property and log it to the console
nurseOlynyk.takeVacationDays(5);
console.log('Nurse', nurseOlynyk.name, 'has', nurseOlynyk.remainingVacationDays, 'days of vacation left.');

//Now let's put 'Nurse' \'s 'addCertification' method to use
//Call the method with an input of 'Genetics'
nurseOlynyk.addCertification('Genetics');
//Then log to the console 'nurseOlynyk' 'certifications'
console.log(nurseOlynyk.name, 'current certifications are', nurseOlynyk.certifications);
console.log();

//Call the static method and generate a random integer between 0 and 10000
console.log(HospitalEmployee.generatePassword());