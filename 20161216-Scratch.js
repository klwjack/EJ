function Answer(value){
  this._val = value;
}

Answer.prototype.get = function fn1(){
  return this._val;
};

function FirmAnswer(value){
  Answer.call(this, value);
}

FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;
FirmAnswer.prototype.get = function fn2(){
  return Answer.prototype.get.call(this) + '!!';
};

var luckyAnswer = new FirmAnswer(7);
console.log(luckyAnswer.get()); //=> '7!!'


function identify(){
  return this.name.toUpperCase();
}

function speak(){
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: 'Kyle'
};

var you = {
  name: 'Reader'
};

/*console.log(identify.call(me)); //KYLE
console.log(identify.call(you)); //READER

speak.call(me); //Hello, I'm KYLE
speak.call(you); //Hello, I'm READER*/

function identify(context){
  return context.name.toUpperCase();
}

function speak(context){
  var greeting = "Hello, I'm " + identify(context);
  console.log(greeting);
}

console.log(identify(you)); //READER
speak(me);  //Hello, I'm KYLE

/*
function foo(num){
  console.log("foo: " + num);

  //keep track of how many times 'foo' is called
  this.count++
}

foo.count = 0;

var i;

for(i = 0; i < 10; i++){
  if(i > 5){
    foo(i);
  }
}
//foo: 6
//foo: 7
//foo: 8
//foo: 9

//how many times was 'foo' called
console.log(foo.count); // 0 --- WTF?
//console.log(count); // Nan --- WTF??


function foo(num){
  console.log("foo: " + num);

  //keep track of how many times 'foo' is called
  foo.count++
}

foo.count = 0;

var i;

for(i = 0; i < 10; i++){
  if(i > 5){
    foo(i);
  }
}
//foo: 6
//foo: 7
//foo: 8
//foo: 9

//how many times was 'foo' called
console.log(foo.count); // 0 --- WTF?

function foo(num){
  console.log("foo: " + num);

  //keep track of how many times 'foo' is called
  //Note: 'this' IS actually 'foo' now, based on
  //how 'foo' is called (see below)
  this.count++;
}

foo.count = 0;

var i;

for(i = 0; i < 10; i++){
  if(i > 5){
    //using 'call(...)', we ensure the 'this'
    //points at the function object ('foo') itself
    foo.call(foo, i);
  }
}
//foo: 6
//foo: 7
//foo: 8
//foo: 9

//how many times was 'foo' called?
console.log(foo.count); //4
*/

/*
//this code fails
function foo(){
  var a = 2;
  this.bar();
}

function bar(){
  console.log(this.a);
}

foo(); //RerefernceError: a is not defined
*/

/*
function baz(){
  //call-stack is: 'baz'
  //so, our call-site is in the global scope

  console.log('baz');
  bar(); // <-- call-site for 'bar'
}

function bar(){
  //call-stack is: 'baz' -> 'bar'
  //so, our call-site is in 'baz'

  console.log('bar')
  foo(); // <-- call-site for 'foo'
}

function foo(){
  //call-stack is: 'baz' -> 'bar' -> 'foo'
  //so, our call-site is in 'bar'
  debugger;
  console.log('foo');
}

baz(); // <-- call-site for 'baz'
*/
/*
//default binding this
function foo(){
  //"use strict";
  console.log(this.a);
}

var a = 2;

foo(); //2 or if in strict mode, global object is not eligible  for
      //default binding os TypeError: 'this' is 'undefined'
      //strict mode of the call site is irrelevant

//implicit binding
function foo(){
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo(); //2

function foo(){
  debugger;
  console.log(this.a);
}

var obj2 = {
  a: 42,
  foo: foo
};

var obj1 = {
  a: 2,
  obj2: obj2
};

obj1.obj2.foo(); //42
*/
/*
//implicityly lost
function foo(){
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

var bar = obj.foo; //function reference/alias

var a = 'oops, global'; //'a' also property on global object

bar(); //undefined
obj.foo(); //2
//although bar appears to bea reference to obj.foo, it's actually just another
//reference to foo itself.  and it is the call-site that really matters, and
//the call-site is bar(), which is aplain, undecorated call, and thus the
//default binding applies
*/
/*
function foo(){
  console.log(this.a);
}

function doFoo(fn){
  //'fn' is just another reference to 'foo'

  fn(); // <-- call-site!
}

var obj = {
  a: 2,
  foo: foo
};

var a = "oops, global"; //'a' also property on global object
doFoo(obj.foo); // 'oops, global' or undefined
*/

function foo(){
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

var a = "oops, global"; //'a' also property on global object

setTimeout(obj.foo, 100); //'oops, global'
