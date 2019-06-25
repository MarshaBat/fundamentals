/*
*Conditionals, Functions, Scopes and Loops.
 */

// equals
let equals = 1 === 1;

console.log(equals);

// greater than
let greaterThan = 5 > 1;

// less than
let lessThan = 2 < 5;

// greater than equal
let greaterThanEq = 5 >= 5;

// less than equal
let lessThanEq = 4 <= 9;

// not equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;
console.log(storeAIsLower);

if (storeAIsLower) {
	console.log("Store A has a lower price.")
} else if (storeB < storeA) {
	console.log("Store B has a lower price.")
} else {
	console.log("Their prices are equal.")
}

function compareStorePrices (storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if (storeAIsLower){
		console.log("Store A has a lower price.")
	}else if (storeB < storeA) {
		console.log("Store B has a lower price.")
	}else {
		console.log("Their prices are equal.")
	}
}

//compareStorePrices(10,5);
//compareStorePrices(7,10);

function squareNum (number){
	return number * number;
}

let squareNumber = squareNum(4);
console.log(squareNumber);

let x = 10;
function addNumbers(n,m,x) {
	console.log(x);
	let b;
	if (1===1){
		b = 8;
	}
	console.log(b);
		return n + m;
	}

	addNumbers(1, 2, 10);

addNumbers(2,3, 8);
console.log(x);

//					 0  1  2  3  4
//let ourArray = [1, 2, 3, 4, ['a', 'b', 'c', 'd']];
//console.log(ourArray[4][0]);

//					 0  1  2  3  4
//let ourArray = [1, 2, 3, 4, 5];
//console.log(ourArray[4]);

//for(let i=0; i<=5; i++){
	//console.log("i is equal to: " + i);
	//console.log(ourArray[i]);
//}

//					 0  1  2  3  4  5  6
//let ourArray = [1, 2, 3, 4, 5, 6, 7];
//console.log(ourArray[4]);

//for(let i=0; i<ourArray.length; i++){
	//console.log("i is equal to: " + i);
	//console.log(ourArray[i]);
//}

//					 0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];
//console.log(ourArray[4]);

//here-- value of arrlen is calculated as ourArray.length before loop starts, unlike the loop in line 93.
let arrlen = ourArray.length;
for(let i=0; i<arrlen; i++){
	//console.log("i is equal to: " + i);
	console.log(ourArray[i]);
	for(let j = 0; j<10; j++) {
		console.log('j is equal to: ' + j);
	}
}

//While Loop
//while(true){
	//console.log('Ran')
//}

let k =0;
while (k < 10){
	console.log('Ran');
	k = k + 1;
}