/*

Implement a text search function which will highlight the search text in a given string

Conditions
- A single letter will not match the same query more than once
- If there are consecutive bolded strings, they should be joined together
*/

// Examples
console.log(textSearch("The Quick Brown Fox Jumps Over The Lazy Dog.", "fox"));
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'

console.log(textSearch("The hardworking Dog overtakes the lazy dog.", "dog"));
// 'The hardworking d<b>Dog</b> overtakes the lazy <b>dog</b>'

console.log(textSearch("aaa", "aa"));
// ("<b>aa</b>a");
// This is because the second character cannot be used as a match again.

console.log(textSearch("aaaa", "aa"));
// Correct: '<b>aaaa</b>'
// Wrong: '<b>aa</b><b>aa</b>'

function textSearch(text, query) {
    const matchIndexes = getIndexesOfQuery(text, query);
    const result = [];
    matchIndexes.forEach(([startIndex, endIndex], index) => {
        if (index === 0) {
            result.push(text.slice(0, startIndex));
        }
        const current = `<b>${text.slice(startIndex, endIndex + 1)}</b>`;
        result.push(current);

        if (endIndex !== text.length) {
            const startIndexOfNext =
                matchIndexes[index + 1]?.[0] ?? text.length;
            result.push(text.slice(endIndex + 1, startIndexOfNext));
        }
    });
    return result.join("");
}

function getIndexesOfQuery(text, query) {
    const result = [];
    const visited = new Array(text.length).fill(false);
    let index = 0;
    while (index < text.length - query.length + 1) {
        let letter = text.charAt(index);

        if (letter.toLowerCase() === query.charAt(0) && !visited[index]) {
            let queryIndex = 0;
            let textIndex = index;
            while (queryIndex < query.length && textIndex < text.length) {
                const queryLetter = query.charAt(queryIndex);
                const textLetter = text.charAt(textIndex);
                if (textLetter.toLowerCase() === queryLetter.toLowerCase()) {
                    queryIndex++;
                    textIndex++;
                } else {
                    break;
                }
            }
            if (queryIndex === query.length) {
                result.push([index, textIndex - 1]);
            }
            for (let i = index; i < textIndex; i++) {
                visited[i] = true;
            }
        }
        index++;
    }

    return result;
    // return indexes (start, end) of all the matching string | num[][]
}

// Chat GPT response:

function textSearchByChatGPT(text, query) {
    const used = new Array(text.length).fill(false);
    const matches = [];

    for (let i = 0; i <= text.length - query.length; i++) {
        let match = true;
        for (let j = 0; j < query.length; j++) {
            if (
                used[i + j] ||
                text[i + j].toLowerCase() !== query[j].toLowerCase()
            ) {
                match = false;
                break;
            }
        }
        if (match) {
            matches.push([i, i + query.length - 1]);
            for (let j = 0; j < query.length; j++) {
                used[i + j] = true;
            }
        }
    }

    // Merge consecutive/overlapping matches
    const merged = [];
    for (const [start, end] of matches) {
        if (
            merged.length &&
            merged[merged.length - 1][1] >= start - 1 // overlap or adjacent
        ) {
            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                end
            );
        } else {
            merged.push([start, end]);
        }
    }

    // Build final string with <b> tags
    let result = "";
    let i = 0;
    for (const [start, end] of merged) {
        result += text.slice(i, start);
        result += `<b>${text.slice(start, end + 1)}</b>`;
        i = end + 1;
    }
    result += text.slice(i);

    return result;
}
