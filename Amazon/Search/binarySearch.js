array = [2, 4, 5, 6, 7, 8, 10, 12, 13, 15, 19];
let target = 2;

//rucursion

let binarySearchRecursion = (array, targetValue) => {
  return search(array, 0, array.length - 1, targetValue);
};

let search = (array, startIndx, stopIndx, targetVal) => {
  // base condition
  if (startIndx > stopIndx) return -1;

  // set length
  let len = stopIndx - startIndx + 1;

  //middle index + starting index : to get middle index in between startIndx and stopIndx
  let midIndx = startIndx + (len % 2 === 0 ? len / 2 : (len - 1) / 2);

  //middle value check
  if (array[midIndx] === targetVal) {
    return midIndx;
  }

  //recursion
  return search(
    array,
    array[midIndx] > targetVal ? startIndx : midIndx + 1,
    array[midIndx] > targetVal ? midIndx - 1 : stopIndx,
    targetVal
  );
};

let binarySearchIterative = (array, targetValue) => {
  let startIndx = 0;
  let stopIndx = array.length - 1;
  while (startIndx <= stopIndx) {
    //length of selected array
    let len = stopIndx - startIndx + 1;

    //set middle Index that will be between start and stop
    let midIndx = startIndx + (len % 2 === 0 ? len / 2 : (len - 1) / 2);

    //check for middle index
    if (array[midIndx] === targetValue) return midIndx;

    //set start and stop index for next iteration
    startIndx = array[midIndx] > targetValue ? startIndx : midIndx + 1;
    stopIndx = array[midIndx] > targetValue ? midIndx - 1 : stopIndx;
  }
  return -1;
};

// for (let i = 0; i < array.length; i++) {
//   console.log(
//     array[i],
//     " by recursion is at position",
//     binarySearchRecursion(array, array[i])
//   );

//   console.log(
//     array[i],
//     "by iterative is at position",
//     binarySearchIterative(array, array[i])
//   );
// }
// console.log(
//   target,
//   "by iterative is at position",
//   binarySearchIterative(array, target)
// );

function isPalindrome(string) {
  let left = 0;
  console.log("🚀 -> isPalindrome -> left", left);
  let right = string.legnth - 1; //0
  console.log("🚀 -> isPalindrome -> right", right, string.legnth);
  let isPal = true; //isPalindrome											//1
  while (left < right) {
    //true
    if (string[left] !== string[right]) isPal = false; //true isPal === fals
    left++;
    right--;
  }
  return isPal;
}

console.log(isPalindrome("ab"));
