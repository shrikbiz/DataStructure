let array = [5, 4, 7, 2, 1, 3, 5, 7, 9];

let countingSort = (array) => {
  let countingArray = [];
  for (let num of array) {
    countingArray[num] ? (countingArray[num] += 1) : (countingArray[num] = 1);
  }
  let index = 0;
  for (let count = 0; count < countingArray.length; count++) {
    if (countingArray[count]) {
      //index should always be less than array.length - 1
      //its not added to condition since it wont be exceeding the array.length -1
      for (let times = 0; times < countingArray[count]; times++) {
        array[index] = count;
        index++;
      }
    }
  }
  return array;
};

console.log(countingSort(array));
