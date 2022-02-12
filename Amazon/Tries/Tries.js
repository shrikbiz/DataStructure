class Node {
  constructor(value) {
    this.value = value;
    this.isEnd = false;
    this.children = new Map();
  }
}

class Tries {
  constructor() {
    this.root = new Node(" ");
  }

  insert(value) {
    this.inserValue(this.root, value, 0);
  }

  inserValue(root, str, i) {
    if (i === str.length) return;
    if (!root.children.has(str[i])) {
      let node = new Node(str[i]);
      root.children.set(str[i], node);
    }
    root = root.children.get(str[i]);
    if (i === str.length - 1) root.isEnd = true;
    this.inserValue(root, str, i + 1);
  }

  contains(value) {
    if (!value) return false;
    let root = this.root;
    for (let i = 0; i < value.length; i++) {
      if (!root.children.has(value[i])) return false;
      root = root.children.get(value[i]);
      if (i === value.length - 1 && root.isEnd) return true;
    }
    return false;
  }

  delete(value) {
    if (!this.contains(value))
      return `| ${value} | does not exist in this trie`;
    let position = 0;
    this.deleteValue(value, this.root, position);
    // this.check(this.root, value, position);
  }

  deleteValue(str, root, i) {
    if (i == str.length) {
      root.isEnd = false;
      return;
    }

    if (root.children.has(str[i]))
      this.deleteValue(str, root.children.get(str[i]), i + 1);
    else return;

    if (
      !root.children.get(str[i]).isEnd &&
      !root.children.get(str[i]).children.size
    ) {
      console.log(`deleting ${str[i]}`);
      root.children.delete(str[i]);
    } else if (i === str.length - 1) {
      root.children.get(str[i]).isEnd = false;
    }
  }

  checkStr(value) {
    this.check(this.root, value, 0);
  }

  check(root, str, i) {
    if (i > str.length - 1) return;
    console.log(
      "node:",
      root?.children?.get(str[i])?.value,
      " isEnd:",
      root?.children?.get(str[i])?.isEnd
    );
    if (root.children.has(str[i]))
      this.check(root.children.get(str[i]), str, i + 1);
    else console.log(str[i], "at", i, "is not in trie");
  }

  autoSuggest(value) {
    if (value === null || value === undefined) return "illegal argument";
    let root = this.root;
    let words = [];
    if (value === "") this.autoSuggestion(root, words, value);
    for (let i = 0; i < value.length; i++) {
      if (!root.children.has(value[i])) return [value];

      root = root.children.get(value[i]);
      if (i === value.length - 1) {
        if (!root.isEnd) words.push(value);
        this.autoSuggestion(root, words, value);
      }
    }
    return words;
  }

  autoSuggestion(root, words, word) {
    if (!root) return;

    if (root.isEnd) {
      words.push(word);
    }

    root.children.forEach((value, key) => {
      this.autoSuggestion(value, words, word + key);
    });
  }
}

let tries = new Tries();
tries.insert("canada");
tries.insert("cat");
tries.insert("shrikant");
tries.insert("shri");
tries.insert("shrik");
tries.checkStr("shrikant");
console.log(tries);
let value = undefined;
// console.log(`auto suggest for ${value} is:`, tries.autoSuggest(value));
