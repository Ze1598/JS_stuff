//Global scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';
const myNightSky = () => {
    stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};
console.log(myNightSky());
//Night Sky: The Moon, North Star, The Milky Way
console.log(stars);
//Sirius
console.log();
console.log();



//Block scope
const colorOfSky = () => {
  let color = 'blue'; 
  return color;
};
console.log(colorOfSky());
// blue 
//console.log(color); 
// undefined
console.log();

const colorOfShirt = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};
colorOfShirt();
console.log();

const cloudCount = () => {
  let i = 2;
  console.log(i); // 2
  for (let i = 0; i < 10; i++) {
    console.log(i); // All numbers from 0 to 9
  }
};

cloudCount();
//console.log(i); // undefined
