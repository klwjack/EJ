function oldEnough(age){
  return age >= 18;
}

function every(array, func){
  var everyElemPassed = true;

  for(var i = 0; i < array.length; i++){
    if(!(func(array[i]))){
      everyElemPassed = false;
      break;
    }
  }

  return everyElemPassed;
}

function some(array, func){
  var elementPassed = false;
  for(var i = 0; i < array.length; i++){
    if(func(array[i])){
      elementPassed = true;
      break;
    }
  }
  return elementPassed;
}

function reduce(array, combineFunc, startVal){
  var currentVal = startVal;
  //console.log('start:', currentVal);
  /*if(startVal !== undefined){
    currentVal = startVal;
  }*/
  for(var i = 0; i < array.length; i++){
    currentVal = combineFunc(currentVal, array[i]);
    //console.log('here:', currentVal);
  }
  return currentVal;
}

function reduce(array, combineFunc, startVal){
  var currentVal = 0;
  if(startVal !== undefined){
    currentVal = startVal;
  }
  array.forEach(function(elem){
    currentVal = combineFunc(currentVal, elem);
  });
  return currentVal;
}

function every(array, f){
  return reduce(array, function(value, elem){
    if(!(f(elem))){
      return false;
    }
    return value;
  }, true);
}

function some(array, f){
  return reduce(array, function(value, elem){
    if(f(elem))
      return true;
    return value;
  }, false);
}

console.log(every([18, 20, 30], oldEnough));
console.log(every([20, 3, 30], oldEnough));
console.log(some([18, 20, 30], oldEnough));
console.log(some([20, 3, 30], oldEnough));
console.log(some([1, 3, 4], oldEnough));


//let's create an alien object
var alien = {
  kind: 'alien'
}

//and a person object
var person = {
  kind: 'person'
}

//and an object called 'zack'
var zack = {};

//assign alien as the prototype of zack
zack.__proto__ = alien;

//zack is now linked to alien
//it 'inherits' the properties of alien
console.log(zack.kind); //=> alien

//assign person as the prototype of zack
zack.__proto__ = person;
console.log(zack.kind); //=> person
console.log(alien.isPrototypeOf(zack)); //=> false
console.log(person.isPrototypeOf(zack)); //=> true

//prototype lookups are dynamic
var person = {};

var zack = {};
zack.__proto__ = person;
//zack doesn't respond to kind at this point
console.log(zack.kind); //=> undefined

//let's add kind to person
person.kind = 'person';

//now zack responds to kind
//because it finds 'kind' in person
console.log(zack.kind);

//new / updated properties are assigned to the object, not the prototype
var person = {
  kind: 'person'
};

var zack = {};
zack.kind = 'zack';

console.log(zack.kind); //=> 'zack'
//zack now has a 'kind' property

console.log(person.kind); //=> 'person'
//person has not been modified

//Object.create
var person = {
  kind: 'person'
};
//creates a new object which prototype is person
var zack = Object.create(person);
console.log(zack.kind); //=> person

//you can pass an object to Object.create to add specific properties for the
//new object
var zack = Object.create(person, {age: {value: 13}});
console.log(zack.age); //=> 13

//you can get the prototype of an object using Object.getPrototypeOf
var zack = Object.create(person);
console.log(Object.getPrototypeOf(zack)); //=> person

//in JavaScript you create an instance of a function like this:
function Foo(){}

var foo = new Foo();

//foo is now an instance of Foo
console.log(foo instanceof Foo); //=> true

//when we do this
function Foo(){
  this.kind = 'foo';
}
var foo = new Foo();
console.log(foo.kind); //=> 'foo'

//behind the scenes it is like doing something like this
/*Function Foo(){
  var this = {}; //this is not valid, just for illustration
  this.__proto__ = Foo.prototype;

  this.kind = 'foo';

  return this;
}*/

//The secret life of objects
var rabbit = {};
rabbit.speak = function(line){
  console.log("The rabbit says '" + line + "'");
};
rabbit.speak("I'm alive.");
// The rabbit says 'I'm alive.'

function speak(line){
  console.log("The "+ this.type + " rabbit says '" + line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: 'fat', speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
//The white rabbit says 'Oh my ears and whiskers, how late it's getting!'
fatRabbit.speak('I could sure use a carrot right now.');
//The fat rabbit says 'I could sure use a carrot right now'

speak.apply(fatRabbit, ['Burp!']);
//The fat rabbit says 'Burp!'
speak.call({type: 'old'}, 'Oh my.');
//The old rabbit says 'Oh my.'

//prototypes
var empty = {};
console.log(empty.toString);
//function toString(){...}
console.log(empty.toString());
//[object Object]

console.log(Object.getPrototypeOf({}) ==
            Object.prototype);
//true
console.log((Object.getPrototypeOf(Object.prototype)));
//null
/*******************************************************************************
  Time to do the above function(s): 02:24:37:2
  Total time working so far: 06:01:20.719
*******************************************************************************/
