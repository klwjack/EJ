var twoDimArray = [[1, 2], [3, 4], [5, 6, 7]];

function forEach(array, callback){
  for(var i = 0; i < array.length; i++){
    callback(array[i]);
  }
}

function combine(array1, array2){
  forEach(array2, function(elem){
    array1.push(elem);});
  return array1;
}
//console.log(combine([1,2], [3,4]));

/*function mergeArrays(mergeArr, currentElement){
  //console.log(currentElement);
  return mergeArr.concat(currentElement);
}*/

function mergeArrays(mergeArr, currentElement){
  return combine(mergeArr, currentElement);
}
console.log(twoDimArray.reduce(mergeArrays, []));
//console.log(twoDimArray.reduce(mergeArrays));

/*function filter(array, func){
  return array.reduce(function(evens, element){
    if(isEven(element)){
      evens.push(element);
    }
    return evens;
  }, []);
}*/

function filter(array, f){

  return array.reduce(function(arr, element){
    if(f(element)){
      arr.push(element);
    }
    return arr;
  },[]);

}


function evens(numbers){
  return filter(numbers, function(number){
    return number % 2 === 0;
  });
}

function isEven(num){
  return num % 2 === 0;
}
console.log(evens([1, 2, 3, 4]));

/*******************************************************************************
Time to do the above function(s): 02:25:25:1
Total time working so far: 03:19:37.5
*******************************************************************************/
