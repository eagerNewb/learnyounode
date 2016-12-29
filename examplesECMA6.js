//Object.create Example
// const cat = {
// 	makeSound: function (){
// 		console.log(this.sound);
// 	}
// }


// var leemo = Object.create(cat);
// leemo.sound = "meoewmeow";
// leemo.makeSound();
// end Object.create

//start functional programming less1
// var electronics = [
// 	{type: "tvs", brand:"toshiba"},
// 	{type: "coffeemachine", brand:"saeco"},
// 	{type: "coffeemachine", brand:"philips"},
// 	{type: "washingmachine", brand:"whirlpool"},
// 	{type: "earphone", brand:"skullcandy"},
// 	{type: "headphone", brand:"sony"},
// 	{type: "gamingconsole", brand:"ps4"},
// 	{type: "gamingconsole", brand:"xbox"},
// 	{type: "gamingconsole", brand:"nintendo"},
// 	{type: "oven", brand:"whirlpool"}
// ]

// var byType = function(electronics){ //this right here is functional programming
// 									// assigning a function to a variable
// 	if (electronics.type === "gamingconsole") console.log(electronics.brand)
// }
// var byBrand = function(electronics){
// 	if(electronics.brand === "skullcandy" ) console.log(electronics.type)
// }
// filteredType = electronics.filter(byType)
// filteredBrand = electronics.filter(byBrand)
//end functional programming less1

//start functional programming less2
// var names = electronics.map(function(elec){
//     console.log(elec.type+"'s brand is "+elec.brand);
// })
// using arrow functions
// var names =electronics.map((elec) => { console.log(elec.type+"'s brand is "+elec.brand)})
//end function programming less2

//start functional programming less3
// var electronics = [
// 	{type: "tvs", quantity:4},
// 	{type: "coffeemachine", quantity:5},
// 	{type: "coffeemachine", quantity:10},
// 	{type: "washingmachine", quantity:10},
// 	{type: "earphone", quantity:20},
// 	{type: "headphone", quantity:9},
// 	{type: "gamingconsole", quantity:8},
// 	{type: "gamingconsole", quantity:11},
// 	{type: "gamingconsole", quantity:21},
// 	{type: "oven", quantity:6}
// ]
// var sum = electronics.reduce(function(mus, elec){
// 	return mus += elec.quantity;

// },0)
// console.log(sum);
//same function with arrow
// var sum = electronics.reduce((sum, elec) => sum += elec.quantity,0)
// console.log(sum);
 // this zero here is actually the sum variable which we pass as the first argument to the callback function
// usin g arrow functions
// var names =electronics.map((elec) => { console.log(elec.type+"'s brand is "+elec.brand)})
//end function programming less3


//start functional programming less4
// const fs = require('fs');

// let output = fs.readFileSync('bla.txt', 'utf8')
//   .trim() //removes line breaks ot space at end or start of string
//   .split('\n')
//   .map(line => line.split('\t')) //split every line on tab chars
//   .reduce()
// console.log('output',output);
//end functional programming less4
var newArr = [[1,2,2,2,2,2,2],[2,3,4,5,6,7],[3,5,6],[4,6,7]].map(subarray =>  console.log(Math.max.apply(Math, subarray)));