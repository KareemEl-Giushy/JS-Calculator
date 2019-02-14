// make a dynamic self-invocing function
/** dynamic function to select elemet like (jquery)
 ** 
 ** uses the querySelector and querySelector all
**/

var el = function (element){
	'use strict';
	if (element.charAt(0) === '#'){
		return document.querySelector(element);
	}else {
		return document.querySelectorAll(element);
	}
};

/**
 ** isnumeric function
 **
 ** to check if it is a number
**/
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// declaring the main variables
var viewer 	= el('#viewer'),

equals 		= el('#equals'),

nums 		= el('.num'),

ops 		= el('.ops'),

clear 		= el('#clear'),

theNum 		= '';

// start the getting the data
for (var i = 0 ; i < nums.length; i++) {
	nums[i].addEventListener('click', function (){
		theNum += this.textContent;

		viewer.value = theNum;
		
		console.log('done putting the num');
	});
}

// get the operators
for (var i = 0 ; i < ops.length; i++) {
	ops[i].addEventListener('click', function (){
		
		theNum += this.textContent;

		viewer.value = theNum;
		console.log('done selecting the operator');
	});
}

// clear the values
clear.onclick = function () {
	
	if (viewer.value != 0 && theNum){
		theNum = '';
		errors = '';
		viewer.value = 0;
	}
	viewer.textContent = 0;
}

// the equals button
equals.onclick = function (){

	if (viewer.value != 0 && theNum){
		var error = document.createElement("div");
		// Checking if the user starts an operation with the * or /
		switch (theNum.charAt(0)) {
			case '*':
				console.log('error *');
				var node = document.createTextNode("you can\'t start with an operator");
			case '/':
				console.log('error /');
				var node = document.createTextNode("you can\'t start with an operator");
		}
		// + validation
		if (theNum.charAt(0) == '+' && theNum.charAt(1) == ''){
			console.log('error +');
			var node = document.createTextNode("you can\'t start with an operator");
		}
		// -validation
		if (theNum.charAt(0) == '-' && theNum.charAt(1) == ''){
			console.log('error -');
			var node = document.createTextNode("you can\'t start with an operator");
		}
		// check if it's a number or not (buggy)
		/*if (!isNumeric(theNum)){
			console.log('this is not a number');
			errors = 'this is not a number';
		}*/
		// printing the value
		if (error == ''){
			viewer.value = eval(theNum);
			theNum = '';
			console.log('equals');
		}else {
			error.appendChild(node);
		}
	}
}