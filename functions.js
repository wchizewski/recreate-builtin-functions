// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

function includes(item, array) {
  let trueOrFalse = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      trueOrFalse = true;
    }
  }
  return trueOrFalse;
}

function indexOf(item, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1;
}

function reverse(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

function slice(start, stop, array) {
  let sliced = [];
  for (let i = start; i < array.length; i++) {
    if (i < stop){
      sliced.push(array[i]);
    }
  }
  return sliced;
}

function concat(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  return array1;
}

function join(sep, array) {
  let string = array[0];
  for (let i = 1; i < array.length; i++) {
    string += `${sep}${array[i]}`;
  }
  return string;
}

function max(array) {
  let maxNum = array[0]; 
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i]
    }
  }
  return maxNum;
}