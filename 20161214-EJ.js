//methods p62
var doh = 'Doh';
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

var mack = [];
mack.push('Mack');
mack.push('the', 'Knife');
console.log(mack);
console.log(mack.join(' '));
console.log(mack.pop());
console.log(mack);

//objects p63
var day1 = {
  squirrel: false,
  events:['work','touched tree','pizza','running','television']
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

var descriptions = {
  work: 'Went to work',
  'touched tree':'Touched tree'
};
console.log(descriptions.work);
//console.log(descriptions.'touched tree'); Error - unexpected string
console.log(descriptions['touched tree']);

var anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log('left' in anObject);
//console.log(right in anObject); binary operator in has to be applied to a string
//and an object as in 'right' in anObject
console.log('right' in anObject);

var journal = [
  {events: ['work', 'touched tree', 'pizza', 'running', 'television'],
   squirrel: false},
  {events: ['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree',
             'brushed teeth'],
    squirrel: false},
  {events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
   squirrel: true},
  /* and so on... */
];
console.log(journal);

//mutability p65
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

console.log(object1 === object2); //testing with triple equal
console.log(object1 === object3); //testing with triple equal

object1.value = 15;
console.log(object2.value); //15
console.log(object3.value); //10

//javascript has no built in deep object comparison built-in

var journal = [];

function addEntry(events, didITurnIntoASquirrel){
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree',
           'brushed teeth'], false);
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

function phi(table){
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]))
//0.068599434
