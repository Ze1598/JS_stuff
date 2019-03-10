//Example 1
const restaurant = {
  name: 'Italian Bistro',
  hasDineInSpecial: true,
  openRestaurant: function() {
      //Here the this opens up the scope of the 'restaurant' object to the if statement scope
    if (this.hasDineInSpecial) {
      return 'Unlock the door, post the special on the board, then flip the open sign.';
    } else {
      return 'Unlock the door, then flip the open sign.';
    }
  }
};
console.log(restaurant.openRestaurant());
console.log();

//Example 2 
let myObj = {
  name: 'Miti',
  sayHello() {
    return `${this.name} says hello!`;
  }
};
console.log(myObj.sayHello());

let yourObj = {
  name: 'Timer'
};
// Sets the sayHello method on yourObj to be the sayHello method on yourObj
yourObj.sayHello = myObj.sayHello;
console.log(yourObj.sayHello());
console.log();