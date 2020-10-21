function moveElementToEnd(array, toMove) {
  if (array.length < 2) return array;
  let indexA = 0;
  let indexB = 1;

  while (indexB < array.length) {
    console.log("moveElementToEnd", array[indexA], array[indexB]);
    if (array[indexA] === toMove && array[indexB] !== toMove) {
      //swap
      let temp = array[indexA];
      array[indexA] = array[indexB];
      array[indexB] = temp;
      console.log("swap:", array);
      indexA++;
      console.log("moveElementToEnd -> indexA123", indexA);
    } else if (array[indexA] !== toMove && array[indexB] !== toMove) {
      indexA += 2;
      indexB += 1;
      console.log("moveElementToEnd -> indexA456", indexA, "indexB", indexB);
    }

    //in all cases there will be 1 indexB increment
    indexB += 1;
    console.log("moveElementToEnd -> indexB789", indexB);
  }
  console.log("moveElementToEnd -> array", array);
  return array;

  // Write your code here.
}

// Time complexity = O(N)
// Space Complexity = O(1)
// N = length of the array

moveElementToEnd([1, 2, 3, 4, 5], 3);
