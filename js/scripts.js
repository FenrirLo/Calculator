var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
}

var multiply = function(number1, number2) {
	return number1 * number2;
}

var divide = function(number1, number2) {
	return number1 / number2;
}

var number1 = parseInt(prompt("What's your first number you want to insert to add"));
var number2 = parseInt(prompt("Please select your second number you want to add."));

var result = divide(number1, number2);
alert(result);

//BMI Calculator
var divide = function(height, weight) {
	return weight / height;
}

var weight = parseInt(prompt("What is your weight in LB."));
var height = parseInt(prompt("Whats your height in inches?"));
var height = height * height;
var result = divide(weight, height);
alert("Your BMI is " + result);

//Convertion Calc for F to C - works without function but WHY?
function celcius(celcius) {
	return (celcius);
};

var F = prompt("What is the temp in degrees Farenheit?");
var F = ((F - 32) * (5 / 9));
alert("The tempature in Celcius is " + F);
