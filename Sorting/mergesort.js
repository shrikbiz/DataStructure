let array = [5, 4, 3, 2, 1];

let mergeSort = (array) => {
  if (array.length < 2) return array;
  let leftArr = array.slice(0, middlePointer(array.length));
  let rightArr = array.slice(middlePointer(array.length), array.length);
  mergeSort(leftArr);
  mergeSort(rightArr);
  console.log("🚀 -> leftArr, rightArr", leftArr, rightArr);
  sorting(leftArr, rightArr, array);
  return array;
};

let sorting = (left, right, arr) => {
  console.log(arr);
  let leftPnt = 0,
    rightPnt = 0,
    arrPnt = 0;
  while (leftPnt < left.length && rightPnt < right.length) {
    if (left[leftPnt] < right[rightPnt]) arr[arrPnt++] = left[leftPnt++];
    else arr[arrPnt++] = right[rightPnt++];
    // console.log("pnt", leftPnt, rightPnt, arrPnt);
  }
  //   console.log("arr", left, right, arr);
  while (leftPnt < left.length) arr[arrPnt++] = left[leftPnt++];
  while (rightPnt < right.length) arr[arrPnt++] = right[rightPnt++];
  //   console.log("pnt after:", leftPnt, rightPnt, arrPnt);
  console.log("result", arr);
};

let middlePointer = (number) => {
  return number % 2 === 0 ? number / 2 : (number + 1) / 2;
};

console.log("ans:", mergeSort(array));
