// function moveElementToEnd(array, toMove) {
//   if (array.length < 2) return array;
//   let indexA = 0;
//   let indexB = 1;

//   while (indexB < array.length) {
//     console.log("moveElementToEnd", array[indexA], array[indexB]);
//     if (array[indexA] === toMove && array[indexB] !== toMove) {
//       //swap
//       let temp = array[indexA];
//       array[indexA] = array[indexB];
//       array[indexB] = temp;
//       console.log("swap:", array);
//       indexA++;
//       console.log("moveElementToEnd -> indexA123", indexA);
//     } else if (array[indexA] !== toMove && array[indexB] !== toMove) {
//       indexA += 2;
//       indexB += 1;
//       console.log("moveElementToEnd -> indexA456", indexA, "indexB", indexB);
//     }

//     //in all cases there will be 1 indexB increment
//     indexB += 1;
//     console.log("moveElementToEnd -> indexB789", indexB);
//   }
//   console.log("moveElementToEnd -> array", array);
//   return array;

//   // Write your code here.
// }

// // Time complexity = O(N)
// // Space Complexity = O(1)
// // N = length of the array

// moveElementToEnd([1, 2, 3, 4, 5], 3);

function spiralTraverse(array) {
  // let result = []; //the one dimentional array
  // while (array.length > 0) {
  //   result = result.concat(array[0]); //time: O(n), n = length of array[0]
  //   // console.log("spiralTraverse -> result", result, array);
  //   let index = 1;
  //   let leftWall = [];
  //   while (index < array.length - 1) {
  //     let subArray = array[index];
  //     result.push(subArray[subArray.length - 1]);
  //     leftWall.push(subArray[0]);
  //     array[index].pop(); //time: O(1)
  //     array[index].shift(); // time: O(n)
  //     index++;
  //   }

  //   result = result.concat(array[array.length - 1].reverse());
  //   if (leftWall.length > 0) {
  //     result = result.concat(leftWall.reverse());
  //   }
  //   //above on can also be done as:
  //   //let reverse = leftWall.reverse();
  //   //if(leftWall.length > 0) result.concate(reverse);

  //   array.shift(); // time: O(n), where n is length of array
  //   array.pop();
  // }

  // return result;
  let result = []; //the one dimentional array
  while (array.length > 0) {
    result = result.concat(array[0]); //time: O(n), n = length of array[0]
    let index = 1;
    let leftWall = [];
    while (index < array.length - 1) {
      let subArray = array[index];
      if (subArray[1]) result.push(subArray[subArray.length - 1]);
      if (subArray[0]) leftWall.push(subArray[0]);
      array[index].pop(); //time: O(1)
      array[index].shift(); // time: O(n)
      console.log("spiralTraverse -> index", index, array, leftWall, result);
      index++;
    }
    result = result.concat(array[array.length - 1].reverse());
    if (leftWall.length > 0) result = result.concat(leftWall.reverse()); // push() time: O(1), reverse() time O(n)
    array.shift(); // time: O(n), where n is length of array
    array.pop(); // time O(1)
  }

  return result;
}

console.log(
  spiralTraverse([
    [1, 2, 3],
    [12, 13, 4],
    [11, 14, 5],
    [10, 15, 6],
    [9, 8, 7],
  ])
);
