let array = [4, 2, 5, 9, 1, 3];

let quicksort = (array) => {
  return sort(array, 0, array.length - 1);
};

let sort = (array, start, end) => {
  if (start >= end) return array; //conditional blocking
  let boundry = partition(array, start, end);
  array = sort(array, start, boundry - 1); //leftSort
  array = sort(array, boundry + 1, end); //rightSort
  return array;
};

let partition = (array, start, end) => {
  let pivot = end;
  let boundry = start - 1;
  let index = start;
  while (index <= pivot) {
    if (array[pivot] >= array[index]) swap(array, index++, ++boundry);
    else index++;
  }
  // for (let index = start; index <= pivot; index++) {
  //   if (array[pivot] >= array[index]) swap(array, index, ++boundry);
  // }
  return boundry;
};

const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

console.log(quicksort(array));

