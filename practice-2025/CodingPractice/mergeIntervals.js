/**
 * We are given an array of closed intervals called intervals, 
 * where each interval has a start time and an end time and is 
 * represented as intervals[i] = [starti, endi]. Your task is 
 * to merge the overlapping intervals and return a new output 
 * array consisting of only the non-overlapping intervals.


 */

const tests = [
    {
        intervals: [
            [1, 3],
            [5, 7],
            [8, 9],
            [10, 13],
        ],
        output: [
            [1, 3],
            [5, 7],
            [8, 9],
            [10, 13],
        ],
    },
    {
        intervals: [
            [10, 12],
            [12, 15],
        ],
        output: [[10, 15]],
    },
    {
        intervals: [[14, 20]],
        output: [[14, 20]],
    },
    {
        intervals: [
            [1, 5],
            [4, 6],
            [3, 7],
            [6, 8],
        ],
        output: [[1, 8]],
    },
    {
        intervals: [
            [1, 3],
            [2, 6],
            [15, 18],
            [8, 10],
            [18, 20],
        ],
        output: [
            [1, 6],
            [8, 10],
            [15, 10],
        ],
    },
];

function mergeInterval(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    let index = 1;
    while (index < intervals.length) {
        const current = intervals[index];
        const prev = merged[merged.length - 1];
        if (prev[1] >= current[0]) {
            prev[1] = current[1];
        } else {
            merged.push(current);
        }
        index++;
    }
    return merged;
}

/**
 * [1, 3], [2, 6], [15, 18], [8, 10], [18, 20],
 *
 * sort WRT to first number in sub-array
 * merged = [];
 * cache = intervals[0] // [1,3];
 * loop over starting with index 1;
 * compare:
 *   cache[1] >= current[1]:
 *     continue; // next iteration
 *   cache[1] <= current[0]:
 *     cache[0] = current[1];
 *     continue;
 *   else:
 *     merged.push(current);
 *     cache = current;
 *     continue;
 *
 * return merged
 */

tests.forEach(({ intervals, output }) => {
    console.log(
        `result: ${JSON.stringify(
            mergeInterval(intervals)
        )}, expected: ${JSON.stringify(output)}`
    );
});
