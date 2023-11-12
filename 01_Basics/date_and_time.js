let myDate = new Date();
console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(`This is the ${myDate.getMonth()+1} th month.`);

let newDay = myDate.toLocaleString('default',{
    weekday: "long",
})

console.log(`Today is a ${newDay}`);

