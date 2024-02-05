//recursion

let count=3
function example(){
    console.log(count);
    count=count -1;
    if(count===0) return;
    example();
}

//"There are actually several styles of coding, 
//also known as paradigms. A common style is called functional programming, or FP for short.

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!
//^- this is used to return value form one function and use in another function


//OBJECT ORIENTED PROGRAMMING(OOP)-
//In OOP, methods update properties stored in the object instead of generating new return values.
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false


//DIFFERENCE IN FP AND OOP-HOW OOP WORKS DIFFERENTLY
var purchase1={
    shoes: 400,
    statetax: 1.4,
    totalprice:function(){
        var calculation =this.shoes * this.statetax;
        console.log("total prices",calculation);
    }
}
purchase1.totalprice();


var purchase2={
    shoes: 40,
    statetax: 1.2,
    totalprice: function(){
        var calculation =this.shoes * this.statetax;
        console.log("total prices",calculation);
    }
}
purchase2.totalprice();

//help us creating the same answer function by reusing existing code