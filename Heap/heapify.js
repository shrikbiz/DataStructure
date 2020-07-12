// write an algo/code in a way that array is sorted in heap type method

let numbers = [5, 3, 8, 4, 1, 2];

/**
 * [5, 3, 8, 4, 1, 2]
 *  |
 *
 * traverse through the array;
 * at each array we check if the number is less than its child;
 * if true -> swap() with greater child (child with greater value out of both child);
 * and we do it until its the end of the array or parent/i-th value is more than child value;
 *
 * unfortuately this solution will have time complexity of o(n);
 * space complexity O(1);
 *
 * for (num in numbers){
 * let child =  rightChild > leftChild? indexOfRightChild : indexOfLeftChild;
 * while(numbers[num] < numbers[child]){
 *      swap();
 *      num = child;
 *      child = rightChild > leftChild? indexOfRightChild : indexOfLeftChild;
 * }
 * }
 *  return numbers;
 *
 *
 *           3
 *         /   \
 *        15    10
 *      /   \
 *     4    1
 *
 * if (parent >= numbers.length) return;
  let child = greaterChildIndex(parent);
  if (numbers[parent] < numbers[child]) {
    swap(parent, child);
    heapTraverse(child, greaterChildIndex(child));
  }
 * 
 */

//using while loop
// let heapify = (numbers) => {
//   for (let parent in numbers) {
//     let child = greaterChild(parent);
//     while (numbers[parent] < numbers[child]) {
//       swap(parent, child);
//       parent = child;
//       child = greaterChild(parent);
//     }
//   }
//   return numbers;
// };

//using recursion
let heapify = (numbers) => {
  let lastParentIndex = Math.trunc(numbers.length / 2) - 1;
  for (let parent = lastParentIndex; parent >= 0; parent--) {
    heapTraverse(parent);
  }
  return numbers;
};

let heapTraverse = (parent) => {
  if (parent >= numbers.length) return;
  let child = greaterChildIndex(parent);
  if (numbers[parent] < numbers[child]) {
    swap(parent, child);
    heapTraverse(child, greaterChildIndex(child));
  }
};

let greaterChildIndex = (parent) => {
  return numbers[leftChild(parent)] > numbers[rightChild(parent)]
    ? leftChild(parent)
    : rightChild(parent);
};

let swap = (index1, index2) => {
  let temp = numbers[index1];
  numbers[index1] = numbers[index2];
  numbers[index2] = temp;
};

let leftChild = (index) => {
  return index * 2 + 1;
};
let rightChild = (index) => {
  return index * 2 + 2;
};

console.log(heapify(numbers));
