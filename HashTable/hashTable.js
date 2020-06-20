let hash = (key, size) => {
  let hashedkey = 0;

  for (let i = 0; i < key.length; i++) {
    hashedkey = key.charCodeAt(i);
    console.log("hash -> key.charCodeAt(i)", key.charCodeAt(i));
    console.log(hashedkey);
  }
  console.log(hashedkey % size);
  let a = { name: "Shrikant", from: "india" };
  let b = { name: "Ronaldo", from: "protugal" };
  let c = [2, 3, 4, 4, 5, 2, 1, 5, 3];
  let bucket = new Map([
    [a, "Shri"],
    [b, "CR7"],
  ]);
  let set = new Set(c);
  set.add(6);
  //   let arr = Array(...set);
  let arr = [];
  arr.push(...set);
  console.log(bucket, set, arr);

};

key = "shrikant";
size = 10;

console.log(hash);
hash(key, size);
