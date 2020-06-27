// Given an array of size n, find the majority element. The majority element is the element that appears more than floor(n/2) times.
// You may assume that the array is non-empty and the majority element always exist in the array.
// [1,2,3,3,3]
// output 3

// scratch board
// array = [1,2,3,3,3];

// for( item in array ){
// hash table
// key = array[i];

// value = number of times it occurred

// at each loop we check if the value is more than array.length/2
// if it is, return the key;
// }

// time complexity  = o(n);   //n is the number of items in array
// space complexity = o(n); // n is the number of values in array

let array = [];

let majority = (array) => {
  if (array.length === 0) return -1;
  let timesOccure = new Map();

  for (let i in array) {
    if (timesOccure.has(array[i]))
      timesOccure.set(array[i], timesOccure.get(array[i]) + 1);
    else timesOccure.set(array[i], 1);
    if (timesOccure.get(array[i]) > array.length / 2) return array[i];
  }
  return -1;
};

console.log(majority(array));
