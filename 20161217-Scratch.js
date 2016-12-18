/*third Run*/
function type(operand){
  var typeString = Object.prototype.toString.call(operand);
  return typeString.slice(typeString.indexOf(' ') + 1, -1);
}

function stringify(anything){
  //console.log('here', anything);

  if(type(anything) !== 'Array' &&
      type(anything) !== 'Object' && type(anything) !== 'String')
    return '' + anything;
  if(type(anything) === 'String')
    return '"' + anything + '"';

  if(type(anything) === 'Array'){
    str = '[';
    for(var i = 0; i < anything.length; i++){
      if(i === anything.length - 1)
        str += stringify(anything[i]);
      else
        str += stringify(anything[i]) + ',';
    }
    str += ']'
    return str;
  }
}

console.log(stringify([1, 'a', [true, 'b', [null], 'c'], 3]));
console.log(stringify([1, 'something', []]));
