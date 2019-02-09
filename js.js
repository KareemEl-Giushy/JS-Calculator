// make a dynamic self-invocing function
/** dynamic function to select elemet like (jquery)
 ** 
 ** uses the querySelector and querySelector all
**/
(function () {
	'use strict';

	var el = function (element){
		if (element.charAt(0) === '#'){
			return document.querySelector(element);
		}else {
			return document.querySelectorAll(element);
		}
	};

// declaring the main variables
var viewer 		= el('#viewer'),

	equals 		= el('#equals'),

	nums 		= el('.num'),

	ops 		= el('.ops'),

	theNum 		= '',

	OldNum 		= '',
	
	result,

	operator;


}());