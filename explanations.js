// Types of Variables 

var favColor = 'blue';
var myArray = ['blue','red','green'];
var numOfFavColors = 3;
var hasGotFavolors = true;
var richObject = {
	firstName: 'Tom',
	lastName: 'Caron',
	favColors: ['blue','red','green'], 
	yearsAlive: 103,
	isMale: true
};

// Functions

var whatIsMyFavColor = function () {
	
	return false;

	return true;

	return 'blue';
}

var doSomething = function () {
	console.log("do Something!!!")
}

var area = function (width, height) {
	return width * height
}

var fullName = function (firstname, lastname) {
	return firstname + ' ' + lastName
}

// If Statements

var number1 = 10;
var number2 = 100;

if (number1 < number2) {
	alert('male');
};

var name1 = 'Rich';
var name2 = 'Bob';

if (name1 == 'Rich' && name2 == 'Bob') {
	alert('true!');
} else if (name2 == 'Rich') {
	alert('true!!');
} else {
	alert('False!!!')
}
