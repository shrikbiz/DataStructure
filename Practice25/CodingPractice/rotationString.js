const tests = [
    {
        string1: "ABCD",
        string2: "DABC",
    },
    {
        string1: "ABCD",
        string2: "BACD",
    },
    {
        string1: "ABCD",
        string2: "BA",
    },
    {
        string1: "ABCD",
        string2: "DaBC",
    },
    {
        string1: "ABCDABC",
        string2: "BCDABCA",
    },
    {
        string2: "ABCDABZ",
        string1: "BZABCDA",
    },
    {
        string1: "ABCDAB",
        string2: "BCDABCA",
    },
    {
        string1: "ABCDA",
        string2: "BCDA",
    },
];

function isRotation(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    if (string1 === "" && string2 === "") return true;

    let index = 0;
    // finds all the matching index from string2
    while (index < string2.length) {
        const startString1 = string1[0];
        if (startString1 === string2[index]) {
            if (isPossibleMatch(string1, string2, index)) {
                return true;
            }
        }
        index++;
    }
    return false;
}

function isPossibleMatch(string1, string2, index2) {
    let index1 = 0;
    while (index1 < string1.length) {
        const string1Letter = string1[index1];
        const string2Letter = string2[index2];
        if (string1Letter === string2Letter) {
            index2++;
            index1++;
            index2 = index2 % string2.length;
        } else {
            return false;
        }
    }
    return true;
}

function runTests(tests) {
    tests.forEach(({ string1, string2 }) =>
        console.log(
            `For ${string1} and ${string2} the return value is: ${isRotation(
                string1,
                string2
            )}`
        )
    );
}

runTests(tests);

/**
 * startString2Index % string2.length
 *
 * length = 10;
 *
 * len   =      10  10   10
 * index =      0   12   19
 * newIndex =   0   2    9
 * 10%12
 *
 *
 *
 */
