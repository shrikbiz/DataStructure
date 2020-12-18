// HASH TABLE
//return first non repeated character in a string
//  string = 'a green apple'
// 'a' => 2,
// ' ' => 2,
// 'g' => 1,
// 'r' => 1,
// 'e' => 3,
// 'n' => 1,
// 'p' => 2,
// 'l' => 1
// return 'g'

//solution 1

// str = "A Green Apple";
// let nonRepeat = (str) => {
//   str = str.toLowerCase().replace(/ /g, "");
//   console.log(str);
//   let output = new Map();
//   for (let i in str) {
//     if (output.has(str[i])) output.delete(str[i]);
//     else output.set(str[i], i);
//   }
//   console.log(output.keys().next().value, output.keys());
// };

// nonRepeat(str);

// solution 2

str = "a green apple";

let nonRepeat = (str) => {
  let store = new Map();
  for (let i in str) {
    let count = store.has(str[i]) ? store.get(str[i]) : 0;
    store.set(str[i], count + 1);
  }
  console.log(store);
  for (let i in str) {
    if (store.get(str[i]) === 1) return str[i];
  }
  return "no value are just once";
};

console.log(nonRepeat(str));
