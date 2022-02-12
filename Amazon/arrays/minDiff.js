function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  console.log(arrayOne, arrayTwo);
  let finalDiff = Math.abs(arrayOne[0] - arrayTwo[0]);
  let answer = [arrayOne[0], arrayTwo[0]];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arrayOne.length && p2 < arrayTwo.length) {
    let diff = Math.abs(arrayOne[p1] - arrayTwo[p2]);
    console.log("smallestDifference -> diff", diff);
    console.log("smallestDifference -> a1, a2", arrayOne[p1], arrayTwo[p2]);
    if (diff < finalDiff) {
      finalDiff = diff;
      answer = [arrayOne[p1], arrayTwo[p2]];
    }
    arrayOne[p1] < arrayTwo[p2] ? p1++ : p2++;
  }
  return answer;
}

arrayOne = [-1, 5, 10, 20, 28, 3];
arrayTwo = [26, 134, 135, 15, 17];

console.log(smallestDifference(arrayOne, arrayTwo));
