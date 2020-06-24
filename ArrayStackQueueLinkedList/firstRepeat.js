//HASH TABLE

// find out first repeated character in string
// str = 'green apple';
// ' ' => 1,
// 'g' => 1,
// 'r' => 1,
// 'e' => 3,
// 'n' => 1,
// 'p' => 2,
// 'l' => 1
// answer => e

// solution 1
let str = "green apple";
let firstRepeat = (str) => {
  let store = new Map();
  for (let i in str) {
    let count = store.has(str[i]) ? store.get(str[i]) : 0;
    store.set(str[i], count + 1);
  }
  console.log(store);
  for (let i in str) {
    if (store.get(str[i]) > 1) return str[i];
  }
  return "no value are just once";
};
console.log(firstRepeat(str));

//solution 2  (if we are returning char that is repeated first, not first repeated char)

// let str = "a green apple";

// let firstRepeat = () => {
//   let store = new Set();
//   for (let i = 0; i < str.length; i++) {
//     if (store.has(str[i])) return `${str[i]}`;
//     store.add(str[i]);
//   }
// };

// console.log(firstRepeat());
