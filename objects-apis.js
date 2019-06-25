/*
*Objects, Interfaces and API's - Object-oriented programming
 */

/*
*let dog = {
	name: "Steve",
	color: "brown",
	breed: "Pug",
	size: "small",
	bark: function	(typeOfBark){
		console.log("Bark!");
	},
};
dog.bark();
*/

//Passing data by value and by reference

/*function x(y) {
	y = y + 5;
	console.log(y);
}

let y = 5;
x(y);
console.log(y);
*/

//Objects in js are passed in by reference. Anything done inside a function to an object is translated to the object
// orignally passed in. The number passed in by value.

function x(y) {
	y.num = y.num + 5;
	console.log(y);
}

let y = {
	name: "Tom",
	num: 10,
};
x(y);
console.log(y);


