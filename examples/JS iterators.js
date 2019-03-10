//.forEach()
console.log('.forEach() examples');
console.log();

//Example 1: format the logging of each item from an array with an '-' at the beginning of each line
console.log('Example 1');
let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts'];
groceries.forEach(function(groceryItem) {
  console.log('- ' + groceryItem);
});
console.log();

//Example 2: to each number in the initial array, create a new array containining the same numbers, except each of the numbers in the new array are incremented by 2
console.log('Example 2');
let number_array = [1, 2, 3, 4, 5];
var number_array_ = [];
number_array.forEach(function(number) {
    number_array_.push(number += 2);
});
console.log(number_array + ' => ' + number_array_);
console.log();

//Example 3: log each element in the array at the end of the string 'I want to eat a '
//Example 3 using function expression
console.log('Example 3 using function expression');
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(function(fruit) {
  console.log('I want to eat a ' + fruit);
});
console.log();
//Example 3 using arrow function
console.log('Example 3 using arrow function');
fruits.forEach(fruit => console.log('I want to eat a ' + fruit));
console.log();


//.map()
console.log();
console.log('.map() examples');
console.log();

//Example 4: create a new array, which contains all the numbers from the original array, except each number is multiplied by 10
console.log('Example 4');
let number_array_2 = [1, 2, 3, 4, 5];
let number_array_2_ = number_array_2.map(function(number) {
  return number * 10;
});
console.log(number_array_2 + ' => ' + number_array_2_);
console.log();

//Example 5: create a new array that each item it contains is the first character of each string from the original array
console.log('Example 5');
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
let secretMessage = animals.map(string => string[0]);
console.log(secretMessage.join(''));
console.log();

//Example 6: create a new array containing all the numbers from the original array, with each number being divided by 100
console.log('Example 6');
let bigNumbers = [100, 200, 300, 400, 500];
let smallNumbers = bigNumbers.map(function(number) {
  return number / 100;
});
console.log(bigNumbers + ' => ' + smallNumbers);
console.log();


//.filter()
console.log();
console.log('.filter() examples');
console.log();

//Example 7: create a new array containing all the numbers from the original array which are less than 250
console.log('Example 7');
let randomNumbers = [375, 200, 3.14, 7, 13, 852];
let smallNumbers2 = randomNumbers.filter(number => number < 250);
console.log(randomNumbers + ' => ' + smallNumbers2);
console.log();

//Example 8: create a new array containing all strings from the original array which are longer than 7 characters (length bigger than 7)
//Example 8 using function expression
console.log('Example 8 using function expression');
let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
let longFavoriteWords = favoriteWords.filter(function(word) {
  return word.length > 7;
});
console.log(longFavoriteWords);
console.log();
//Example 8 using arrow function
console.log('Example 8 using arrow function');
let longFavoriteWords2 = favoriteWords.filter(word => word.length > 7);
console.log(longFavoriteWords2);
console.log();

//Practical examples using more than one method
console.log('Practical example 1');
let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
//Test if 'words' contains strings with less than 6 characters
console.log('Does it contain strings shorter than 6 characters => ' + words.some(function(word) {
  return word.length < 6;
}));
//Use .filter() to create a new array that contains only the strings from 'words' that are longer than 5 characters
let interestingWords = words.filter(word => word.length > 5);
//Test if all the strings contained in 'interestingWords' are in fact longer than 5 characters
console.log('Does \'interestingWords\' only contain strings longer than 5 characters => ' + interestingWords.every(word => word.length > 5));
console.log(words + ' => ' + interestingWords);
console.log();

console.log('Practical example 2');
let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];
let nums = [1, 50, 75, 200, 350, 525, 1000];
//A method to log each element from an array with string interpolation
cities.forEach(city => console.log('Have you visited ' + city + '?'));
//A method that will return a new string created from a condition
let longCities = cities.filter(city => city.length > 7);
console.log('Cities longer than 7 characters => ' +longCities);
//A method that will return a new array created from modifying the original elements
let smallerNums = nums.map(num => num - 5);
console.log('Numbers subtracted by 5 => ' + smallerNums);
//A method that will return a boolean value
console.log('Does \'nums\' only contain negative numbers => ' + nums.every(num => num < 0));