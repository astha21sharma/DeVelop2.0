//creating FUNCTION

function addtwo() {
  //without parameters
  var a = 5;
  var b = 4;
  var c = a + b;
  console.log(c);
}
addtwo();

function addtwo1(a, b) {
  //with parameters
  var c = a + b;
  console.log(c);
}
addtwo1(1, 4);

//Arrow function-COMMONLY USED THESE DAYS
//...............................................................
//for small in line function
let x = 2;
const square = (x) => {
  return x * x;
};

console.log(square(2));

const hello = () => {
  console.log("hey how are you. I am toh Fine yaar");
  return 40;
};

//as it has no return so normal call can work too
hello();
let n = hello();
console.log(n);

//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//creating ARRAY
var train = []; //empty array
var train1 = ["ram", "lakshman", "hari"];
console.log(train[0]);
console.log(train1[2]);
console.log(train1[0]);

//function that takes an array as input and display all items of this array

function listArrayItems(arr) {
  //here arr specifies that it stands for arr
  for (var i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i]); //can output two things side by side
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
console.log(colors);//with this it is printed as it is
//but with the above function we can print it with our convenience
listArrayItems(colors);

//FOR DISPLAY OF EACH ELEMENT OF THE ARRAY
//THERE ARE THESE IN BUILT FUNCTION IN JS TOO
var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(element) {
    console.log(element);
}); 

//ALSO IN FOR LOOP SYNTAX SHEET
var myArray = [1, 2, 3, 4, 5];
for (var element of myArray) {
    console.log(element);
}


//example
function letterFinder(word, match) {
  for (i = 0; i < word.length; i++) {
    if (word[i] == match) {
      //check if the current characater, word[i], is equal to the match
      console.log("Found the", match, "at", i);
      return;
    }
    console.log("---No match found at", i);
  }
}
letterFinder("test", "e");

//ARRAYS are objects
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push("pear"); // ['apple', 'pear']
console.log(fruits);
fruits.pop();
console.log(fruits); // ['apple']

//example
function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  console.log(arr);
  return arr; //for line 69
}
arrayBuilder(1, 2, 3);
//OR
var p = arrayBuilder(1, 2, 3);
console.log(p);

//REFER HARRY NOTES
//SLICE,SPLICE,SHIFT,UNSHIFT...

