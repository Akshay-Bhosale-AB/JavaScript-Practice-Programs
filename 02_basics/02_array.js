const marvel_Heroes = ["Thor", "IronMan", "Spiderman"];
const dc_Herors =["Batman", "Superman", "Flash"];

//concat array

const newAdd = marvel_Heroes+" , " +dc_Herors;
console.log(newAdd);

// Using concat method
const newArr = marvel_Heroes.concat(dc_Herors);
console.log(newArr);

//Using Spread Operator (...array_name)
const all_Heros = [...marvel_Heroes, ...dc_Herors];
console.log(all_Heros);

// Flatten array using flat() method

const points = [4,6,1,[4,7],3,1,2,[1,2,4,[7,5]]];
console.log(points.flat(Infinity));

//Check given object is an array 
console.log(Array.isArray("Mahesh"));

//convert object to array using array from() method
console.log(Array.from('Rahul'));

//convert object or variable into array using of() function
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));