let array = [8, 5, 2, 9, 5, 6, 3];

function insertionSort(array) {
    if (array.length < 2) return array;
    let i = 0;
    let insertArr = [];
    insertArr.push(array[0]);
    for (let arrPntr = 1; arrPntr < array.length; arrPntr++) {
        i++;
        let currNum = array[arrPntr];
        let iaPntr = insertArr.length - 1; //iaPntr is insertArr's Pointer
        let isSorted = false;

        while (!isSorted) {
            i++;
            console.log("insertionSort -> insertArr[iaPntr]", insertArr);
            if (iaPntr < 0 || insertArr[iaPntr] <= currNum) {
                insertArr[iaPntr + 1] = currNum;
                isSorted = true;
            } else {
                insertArr[iaPntr + 1] = insertArr[iaPntr];
                iaPntr--;
            }
        }
    }
    console.log(i);
    return insertArr;
}

// console.log(insertionSort(array));

function selectionSort(array) {
    for (let currPntr = 0; currPntr < array.length; currPntr++) {
        let smallestPntr = currPntr;
        // console.log("selectionSort -> currPntr", currPntr);
        // console.log("selectionSort -> smallestPntr", smallestPntr);
        for (let pntr = smallestPntr; pntr < array.length; pntr++) {
            //   console.log("selectionSort -> pntr", pntr);
            if (array[pntr] < array[smallestPntr]) smallestPntr = pntr;
        }
        swap(array, currPntr, smallestPntr);
    }
    return array;
}

let swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

console.log(selectionSort(array));
