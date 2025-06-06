/**
 * Given a sorted list of nonoverlapping intervals and a new interval,
 * your task is to insert the new interval into the correct position
 * while ensuring that the resulting list of intervals remains sorted
 * and nonoverlapping. Each interval is a pair of nonnegative numbers,
 * the first being the start time and the second being the end time
 * of the interval.
 */

const tests = [
    {
        intervals: [
            [1, 3],
            [5, 7],
            [8, 9],
            [10, 13],
        ],
        newInterval: [2, 6],
        output: [
            [1, 7],
            [8, 9],
            [10, 13],
        ],
    },
    {
        intervals: [
            [1, 3],
            [5, 7],
            [8, 9],
            [10, 13],
        ],
        newInterval: [4, 9],
        output: [
            [1, 3],
            [4, 9],
            [10, 13],
        ],
    },
    {
        intervals: [
            [1, 3],
            [5, 7],
            [8, 9],
            [10, 13],
        ],
        newInterval: [4, 10],
        output: [
            [1, 3],
            [4, 13],
        ],
    },
    {
        intervals: [
            [1, 3],
            [6, 9],
        ],
        newInterval: [2, 5],
        output: [
            [1, 5],
            [6, 9],
        ],
    },
];

function insertInterval(intervals, newInterval) {
    const finalIntervals = [];
    let index = 0;

    while (index < intervals.length && newInterval[0] > intervals[index][1]) {
        finalIntervals.push(intervals[index++]);
    }

    while (index < intervals.length && newInterval[1] >= intervals[index][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
        // if (intervals[index][0] < tempInterval[0]) {
        //     tempInterval[0] = intervals[index][0];
        // }
        // if (tempInterval[1] >= intervals[index][1]) {
        //     index++;
        // } else {
        //     tempInterval[1] = intervals[index][1];
        //     index++;
        //     break;
        // }
    }
    finalIntervals.push(newInterval);

    while (index < intervals.length) {
        finalIntervals.push(intervals[index++]);
    }
    return finalIntervals;
}

/**
 *
 * [1, 3], [5, 7], [8, 9], [10, 13],
 * [2,6];
 *
 * [7, 9], [11, 13],
 * [4, 8];
 *
 *
 * finalIntervals = []; // new array
 * index = 0;
 *
 * In finalIntervals push all the interval that has interval[1] less than
 * newInterval[0]
 *   while(index<intervals.length):
 *      if(intervals[index][1] < newInterval[0]):
 *          finalIntervals.push(intervals[index][1])
 *          index++;
 *      else: break;
 *
 * Merge all the intervals into between newIntervals and rest of the intervals
 * while keeping track of index;
 *      tempInterval = [...newInterval]
 *      while(index < intervals.length && tempInterval[1] >= intervals[index][0]):
 *          if (intervals[index][0] < tempInterval[0]):
 *              tempInterval[0] = intervals[index][0]
 *              if(tempInterval[1] >= intervals[index][1]):
 *                  index++;
 *              else:
 *                  tempInterval[1] = intervals[index][1];
 *                  index++;
 *                  break;
 *      finalInterval.push(tempInterval);
 *
 * merge rest of the intervals in finalIntervals as it is
 *
 *
 * return final intervals
 */

tests.forEach(({ intervals, newInterval, output }) => {
    console.log(
        `result: ${JSON.stringify(
            insertInterval(intervals, newInterval)
        )}, expected: ${JSON.stringify(output)}`
    );
});
