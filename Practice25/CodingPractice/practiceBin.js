// JavaScript Program to sort distinct integer array from
// 1 to n using Mathematical formula

function sortArr(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let originalVal = arr[i] % (n + 1);
        let correctIdx = originalVal - 1;
        arr[correctIdx] += originalVal * (n + 1);
        console.log({ originalVal, correctIdx, arr });
    }

    for (let i = 0; i < n; i++) {
        const val = Math.floor(arr[i] / (n + 1));
        console.log("🚀 ~ sortArr ~ val:", val, arr[i], n + 1);
        arr[i] = val;
    }
}

// let arr = [8, 13, 23, 28, 33];
/**
 * x * 1 = 6  | Math.floor( 6  + y / x ) = 1 | (y +  6) % x = y
 * x * 2 = 12 | Math.floor( 12 + y / x ) = 2 | (y + 12) % x = y
 * x * 3 = 18 | Math.floor( 18 + y / x ) = 3 | (y + 18) % x = y
 * x * 4 = 24 | Math.floor( 24 + y / x ) = 4 | (y + 24) % x = y
 * x * 5 = 30 | Math.floor( 30 + y / x ) = 5 | (y + 30) % x = y
 *
 *  y = number less than 6
 *  x = 6
 */

let arr = [2, 1, 5, 4, 3];
sortArr(arr);
console.log(arr.join(" "));
