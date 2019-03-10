//Receive a 10-digit array, and return a phone number in
//the format (xxx) xxx-xxxx

//My dumb way
function createPhoneNumber(numbers){
    result = "("
    for (i=0; i<3; i++) {
        result += numbers[i].toString()
    }
    result += ") "
    for (i=3; i<6; i++) {
        result += numbers[i].toString()
    }
    result += "-"
    for (i=6; i<numbers.length; i++){
        result += numbers[i].toString()
    }
    return result
}


var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(createPhoneNumber(a))


//Smart alternatives

//Create strings from "array slicing"
function createPhoneNumber(numbers) {
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
  }

//Create the string format using "x"s instead of the digits\
//then replace each "x" by the correct digit, going from\
//left to right
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}