//For in loop syntax
//'''''''''''''''''''''''''
/*for (variable in object) {
  // code to be executed
}*/


let person = {
    name: "John",
    age: 30,
    job: "developer"
  };
  
  for (key in person) {
    console.log(key  + person[key]);
    console.log(key +":" + person[key]);
  }

  //FOR OF LOOP
  /*for (variable of object) {
    // code to be executed
  }*/

  let numbers = [1, 2, 3, 4, 5];

for ( ere of numbers) {//neccessarily it shouln't be ony word recognised by the system it can be any variable
  console.log(ere);
}

// for (let number of numbers) {
//     console.log(number);
//   }

  //while loop
  