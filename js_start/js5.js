//empty object literal
var store={}
//object-collectuion of relative properties
var store= {
    name: "apple",
    opened: 2005,

}
console.log(store);
//if later you want to add something
store.manager = "hari";
console.log(store);

//here is an alternative syntax to the dot notation I used up until this point.
//This alternative syntax is known as the brackets notation.
//similar to array

var house={};
house['rooms']=4;//using the brackets notation, I essentially just wrap each property's key as a string,
// inside either the single or double quotes - just like with regular strings. 
house["color"]="pink";
console.log(house);

//this bracket notation is reALLY useful for displaying 
//with loop

var arr=['speed', "altitude","color"];
//DON'T FORGET TO USE SQUARE BRACKETS HERE
var drone={
    speed: 40,
    altitude:300,
    color: 'red',//DON'T FORGET USING COLONS HERE

}
for (var i=0;i<arr.length; i++)
{
console.log(drone[arr[i]]);
}