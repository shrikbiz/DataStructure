const ThousandthName = [
    "",
    "thousand",
    "million",
    "billion",
    "trillion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
];
const Zeroths = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

const Tenths = [
    "",
    "",
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninty",
];

const Teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

/**
 *
 * @param {number} number
 */
function digitsToWords(number) {
    const digits = number.toString();
    console.log("🚀 ~ digitsToWords ~ digits:", digits);
    const lastIndex = digits.length - 1;
    let pointer = lastIndex;
    const words = [];
    while (pointer >= 0) {
        const index = lastIndex - pointer;
        const current = Number(digits[pointer]);
        const remainder = index % 3;
        if (remainder === 0) {
            const next = Number(digits[pointer - 1]);
            if (current !== 0 && next !== 1) {
                const suffix = ThousandthName[index / 3];
                const zeroth = pointer - 3 < 0 ? null : Zeroths[current];
                if (suffix) words.push(suffix);
                if (zeroth) words.push(zeroth);
            } else if (pointer - 3 < 0) {
                const suffix = ThousandthName[index / 3];
                words.push(suffix);
            }
            //if zero, do nothing.
        } else if (remainder === 1) {
            const previous = Number(digits[pointer + 1]);

            if (current === 1) {
                words.push(Teens[previous]);
            } else if (current !== 0) {
                words.push(Tenths[current]);
            }
            //if zero, do nothing.
        } else {
            // current % 3 === 2
            if (current !== 0) {
                words.push(Zeroths[current] + " hundred");
            }
            //if zero, do nothing.
        }
        pointer--;
    }

    return words.reverse().join(" ");
}

const test = [
    10, 11, 12, 13, 14, 19, 20, 30, 40, 50, 60, 70, 100, 150, 200, 250, 300,
    1000, 9_000, 900, 84_920, 2_398_283_049, 10_000_000_000_000,
    100_000_000_000, 100_000_000_000_000_000_000_000,
];

test.forEach((num) => {
    console.log(num, digitsToWords(num));
});

/**
 * // belowThousand
 * zero
 * ten
 * hunderd
 * // thousand
 * zero
 * ten
 * hunderd
 * // million
 * zero
 * ten
 * hunderd
 * // billion
 * zero
 * ten
 * hunderd
 * // trillion
 * zero
 * ten
 * hunderd
 * // quadrillion
 * zero
 * ten
 * hunderd
 * // quintillion
 * zero
 * ten
 * hunderd
 * // sextillion
 * zero
 * ten
 * hunderd
 * // septillion
 * zero
 * ten
 * hunderd
 *
 */
