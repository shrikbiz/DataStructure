/**
 * Given a text paragraph, display it in a right-aligned format
 * with a line width limit of maxWidth.
 *
 * The paragraph is provided as an array of strings, words, each
 * representing a word from the paragraph with punctuation included.
 * The output should format the paragraph into lines where each line
 * contains exactly maxWidth characters.
 *
 * Words within a line should be separated by a space, and additional
 * spaces may be added at the beginning of each line to achieve right
 * alignment.
 *
 * Each line should be filled with as many words as possible. If a
 * word's length exceeds maxWidth, it should begin on a new line and
 * continue across subsequent lines, breaking at maxWidth characters
 * per line, until the entire word has been displayed.
 *
 * ### Function Description
 * Complete the function rightAlign in the editor. The function has
 * the following parameters:
 *
 * | words => an array of strings, where each string represents a word.
 * | maxWidth => an integer indicating the line width limit.
 *
 *
 * The function is expected to return an array of strings, where each
 * string corresponds to a line. Each line should contain exactly maxWidth
 * characters.
 *
 * #### Constraints:
 * • 1 ≤ maxWidth ≤ 106
 * • 1 ≤ the length of all strings in words ≤ 106
 * • Each string in words consists only of ASCII characters with codes ranging
 * from 33 to 126, excluding the space character.
 */

function rightAlignment(words, maxWidth) {
    let result = [];
    let lineCountArray = [];
    let currentLine = [];
    let currentLength = 0;
    words.forEach((word, index) => {
        const addedLength = currentLength + word.length + (index === 0 ? 0 : 1);

        if (addedLength > 10) {
            result.push(currentLine);
            lineCountArray.push(currentLength);
            currentLine = [word];
            currentLength = word.length;
        } else {
            currentLine.push(word);
            currentLength = addedLength;
        }
    });
    result.push(currentLine);
    lineCountArray.push(currentLength);
    let output = [];
    result.forEach((lineArray, lineIndex) => {
        const arrLen = maxWidth - lineCountArray[lineIndex];
        const beforeSpace = new Array(arrLen >= 0 ? arrLen : 0)
            .fill(" ")
            .join("");

        output.push(`${beforeSpace}${lineArray.join(" ")}`);
    });
    output.forEach((line) => console.log(line));
}

/**
 * 10
 * This is a smaple example.
 * [[this is a], [smaple], [example]]
 * result = []
 * currentLine = [];
 * currentLength = 0;
 *
 *  this is a
 *     smaple
 *    example
 *
 */

const tests = [
    {
        words: "This is a smaple example.",
        maxWidth: 10,
    },
    {
        words: "The function is expected to return an array of strings supercalifraligoistc.",
        maxWidth: 13,
    },
];

function testIt() {
    tests.forEach(({ words, maxWidth }) => {
        const result = rightAlignment(words.split(" "), maxWidth);
        console.log(`
            Input: ${words}, ${maxWidth}. 
            Result: 
            ${result}
            ----
            `);
    });
}

testIt();
