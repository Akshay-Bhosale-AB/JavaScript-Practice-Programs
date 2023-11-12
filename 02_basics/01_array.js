const newArr = [2,7,6,1,5,42];
console.log(newArr);

// console.log(newArr.pop());
// newArr.push(150);
// console.log(newArr)

// Slice function slice the array
console.log(newArr.slice(2,5));

//Spice function add element and also delete an element at desired position
newArr.splice(2, 2, 3);
console.log(newArr);
