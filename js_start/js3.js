//var -gllobally scoped
//we can access a var variable before initialization
//as long as the var variable is EVENTUALLY INITIALIZED
console.log(a);
var a=5;
//let a=8;if this written it will throw error
var b="Harry"
{
    var a=4
    console.log(a);
}
console.log(a);
//can be re-declared and update all existing values to latest one


//let && const-block scoped 


let c=5;
//let c=8;if this written it will throw error
let d="Harry"
{
    let c=4
    console.log(c);
}
console.log(c);
//can be updated but within the scope and cannot be re-declared in same scope
//const can neither be re declared nor updated
//const should be initialized immediately not separately