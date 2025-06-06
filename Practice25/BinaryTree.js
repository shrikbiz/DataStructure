class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    order = {
        preOrder: "PRE_ORDER",
        inOrder: "IN_ORDER",
        postOrder: "POST_ORDER",
    };
    constructor(arr) {
        if (!arr) {
            this.root = null;
        } else {
            this.addNodes(arr);
        }
    }
    addNodes(arr) {
        arr.forEach((num) => {
            if (!this.root) {
                this.root = new Node(num);
            } else {
                this.insert(num);
            }
        });
    }

    find(num) {
        let current = this.root;
        let saftyIndex = 0;

        while (current) {
            if (saftyIndex++ > 100) break;

            if (current.value === num) {
                console.log(`${num} is in the tree`);
                return current;
            } else if (current.value > num) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        console.log(`${num} is not in the tree`);
        return false;
    }

    insert(num) {
        let current = this.root;
        let saftyIndex = 0;

        while (true) {
            if (saftyIndex++ > 100) break;

            if (current.value >= num) {
                if (!current.left) {
                    current.left = new Node(num);
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = new Node(num);
                    break;
                }
                current = current.right;
            }
        }
    }

    dfs(order) {
        const array = [];
        this.dfsRecursor(this.root, array, order);
        console.log(`${order} is: ${array}`);
    }

    heightOfTheTree() {
        return this.heightOfTheTreeHelper(this.root, 0);
    }

    heightOfTheTreeHelper(tree, height) {
        if (!tree) return 0;
        return (
            1 +
            Math.max(
                this.heightOfTheTreeHelper(tree.left, height),
                this.heightOfTheTreeHelper(tree.right, height)
            )
        );
    }

    heightOf(num) {
        const subTree = this.find(num);
        return subTree && this.heightOfTheTreeHelper(subTree, 0);
    }

    minNum() {
        return this.minNumHelper(this.root);
    }

    minNumHelper(tree) {
        if (!tree) return Infinity;
        const left = this.minNumHelper(tree.left);
        const right = this.minNumHelper(tree.right);
        const minOfBranch = Math.min(left, right);
        return Math.min(minOfBranch, tree.value);
    }

    depthOfNode(num) {
        if (!this.find(num)) return false;
        return this.depthOfNodeHelper(this.root, num, 0);
    }

    depthOfNodeHelper(tree, num, depth) {
        if (!tree) return 0;
        if (tree.value === num) return depth;
        return (
            this.depthOfNodeHelper(tree.left, num, depth + 1) ||
            this.depthOfNodeHelper(tree.right, num, depth + 1)
        );
    }

    dfsRecursor(node, array, order) {
        if (!node) {
            return;
        }
        if (order === this.order.preOrder) array.push(node.value);
        this.dfsRecursor(node.left, array, order);
        if (order === this.order.inOrder) array.push(node.value);
        this.dfsRecursor(node.right, array, order);
        if (order === this.order.postOrder) array.push(node.value);
    }
    wholeTree() {
        return this.root;
    }

    bfs() {
        const list = [];
        this.bfsHelper(this.root, 0, list);
        // const newList = [];
        // list.forEach((subList) => newList.push(...subList));
        return list.flat();
    }

    bfsHelper(tree = this.root, depth, list) {
        if (!tree) return;
        // if (list[depth]) {
        //     list[depth].push(tree.value);
        // } else {
        //     list[depth] = [tree.value];
        // }

        list[depth] = [...(list[depth] || []), tree.value];
        this.bfsHelper(tree.left, depth + 1, list);
        this.bfsHelper(tree.right, depth + 1, list);
    }

    size(tree = this.root) {
        if (!tree) return 0;
        return 1 + this.size(tree.left) + this.size(tree.right);
    }

    countLeaves(tree = this.root) {
        if (!tree) return 0;
        if (!tree.left && !tree.right) return 1;
        return this.countLeaves(tree.left) + this.countLeaves(tree.right);
    }

    getAncestors(num, tree = this.root) {
        if (!tree) return false;
        if (tree.value === num) return true;

        const treeContainerNumer =
            this.getAncestors(num, tree.left) ||
            this.getAncestors(num, tree.right);

        if (treeContainerNumer) console.log(tree.value);
        return treeContainerNumer;
    }
}

function compareTree(tree1, tree2) {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;
    console.log(tree1.value);
    return (
        tree1.value === tree2.value &&
        compareTree(tree1.left, tree2.left) &&
        compareTree(tree1.right, tree2.right)
    );
}

const tree = new BinaryTree([
    20, 10, 30, 5, 15, 25, 35, 3, 7, 12, 17, 23, 27, 2, 4, 6, 8, 11, 13, 16, 18,
    21, 24, 26,
]);

console.log("countLeaves: ", tree.getAncestors(35));
// console.log("tree: ", JSON.stringify(tree.root));

// const num = 7;
// console.log(`Depth of ${num}`, tree.depthOfNode(num));

// tree.root

function validatingTree(tree, [min, max] = [-Infinity, Infinity]) {
    if (!tree) return true;
    if (tree.value > max || tree.value < min) {
        console.log("failed at: ", tree.value);
        return false;
    }
    return (
        validatingTree(tree.left, [min, tree.value - 1]) &&
        validatingTree(tree.right, [tree.value + 1, max])
    );
}

// console.log(`valid tree return: ${validatingTree(validTree)}`);

// console.log(`invalid tree return: ${validatingTree(invalidTree())}`);

// const tree1 = new BinaryTree([7, 4, 1, 6, 9, 8, 10]);
// const tree2 = new BinaryTree([7, 4, 1, 6, 9, 8, 10]);

// console.log(compareTree(tree1.wholeTree(), tree2.wholeTree()));
// console.log(tree.minNum());
// const height = tree.heightOfTheTree();
// console.log(height);
// console.log(10, tree.heightOf(10));
// console.log(7, tree.heightOf(7));
// console.log(4, tree.heightOf(4));
// console.log(100, tree.heightOf(100));
// // console.log(JSON.stringify(tree));
// tree.dfs(tree.order.preOrder);
// tree.dfs(tree.order.inOrder);
// tree.dfs(tree.order.postOrder);

// function factorial(num) {
//     if (num <= 1) return 1;
//     return num * factorial(num - 1);
// }

// console.log("result: ", factorial(12));

function invalidTree() {
    return {
        value: 7,
        left: {
            value: 4,
            left: {
                value: 1,
                left: null,
                right: null,
            },
            right: {
                value: 6,
                left: {
                    value: 5,
                    left: null,
                    right: null,
                },
                right: null,
            },
        },
        right: {
            value: 9,
            left: {
                value: 8,
                left: null,
                right: null,
            },
            right: {
                value: 10,
                left: null,
                right: {
                    value: 15,
                    left: null,
                    right: {
                        value: 16,
                        left: null,
                        right: {
                            value: 18,
                            left: {
                                value: 18,
                                left: null,
                                right: null,
                            },
                            right: {
                                value: 15,
                                left: null,
                                right: null,
                            },
                        },
                    },
                },
            },
        },
    };
}
