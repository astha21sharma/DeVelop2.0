//functional programming(FP)-able to solve the problem
//by separating data from function.

var x=200;
var xnew=0;
var rate=3.2;

function convert(amount,rate)
{
    return amount * rate;
}

xnew=convert(x,rate);
console.log(xnew);



//many function by default return the value of undefined
console.log('hello');

//my own console implementation which doesn't return undefined
function consoleLog(val){
    console.log(val)
    return val
}

consoleLog('hello');
//js allowing me to use return key....i can have multiple
//function call,returning dataand value manipulating.
//MAKING FUNCTION PROGRAMMING POSSIBLE.


//more concepts and ideas in functional programming.

//First-Class Functions-Functions in JavaScript are “first-class citizens”.
//WE CAN pass to other functions,save in a variable,return from other functions
//NOTE:JavaScript is just a value - from this vantage point, almost no different then a string or a number.
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;


if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}
var xa= getNumber();
console.log(xa);

addTwoNums(getNumber(), getNumber());


//Higher-order function-either one or both of the following characteristics:
//It accepts other functions as arguments
//it returns functions when invoked
//
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

addTwoNums(specificNum, randomNum);



//Pure functions and side-effects
//returns the exact same result as long as it's given the same values
function addTwoNums(a, b) {
    console.log(a + b)
}
addTwoNums(5,6);
//it should not have side-effects. A side-effect is any
// instance where a function makes a change outside of itself.