/*
new
this
bind
call
apply
*/

//new
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
// console.log(Car) would show all of the things in the Car object
  var car1 = new Car('Eagle', 'Talon TSi', 1993);
  
  console.log(car1.make);
  
  // this
  var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    job      : {
        title : "professional cat petter",
        pay : 4,
        printJob : function(){
            return this.title;
        }
    },
    fullName : function() {
    return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());
  console.log(this.firstName); // returns undefined b/c nothing is scoped to it, its in the window object

  //bind only just takes the function
let c1 = {
    z: 30,
    y: 20
}

let c2 = {
    z: 14,
    y: 67
}

function print(){
    console.log(z + "," + y);
}

let c1print = print.bind(c1);
let c2print = print.bind(c2);

  //call and apply

// call takes  individual parameters 
// apply uses array
var obj = {name:"Morgan"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

console.log(greeting.call(obj,"Augusta","GA","AMERICA"));

var obj = {name:"Morgan"};

var greeting = function(a,b,c){
    return "welcome " + this.name + " to" + a + " " +b+ " in " + c;
};

  // array of arguments to the actual function
var args = ["Augusta","Georgia","AMERICA"];  
console.log("Output using .apply() below ")
console.log(greeting.apply(obj,args));

// Dry code = don't repeat yourself, waste of time, and you only have to update once if you don't repeat it, its
// also faster