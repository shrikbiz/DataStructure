class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}

class AVL {
    constructor() {
        this.root = null;
    }

    insertList = (arr) => arr.forEach((num) => this.insert(num));

    insert(value) {
        this.root = this.insertValue(value, this.root);
    }

    insertValue(value, tree) {
        if (!tree) return new Node(value);

        if (tree.value > value) {
            tree.left = this.insertValue(value, tree.left);
        } else {
            tree.right = this.insertValue(value, tree.right);
        }
        this.setHeight(tree);
        return this.balance(tree);
    }

    setHeight(tree) {
        tree.height =
            1 + Math.max(this.height(tree.left), this.height(tree.right));
    }

    height = (tree) => tree?.height ?? -1;

    balance(tree) {
        if (this.isLeftHeavy(tree)) {
            if (this.subTreeHeightDiff(tree.left) < 0) {
                tree.left = this.rotateLeft(tree.left);
            }
            return this.rotateRight(tree);
        } else if (this.isRightHeavy(tree)) {
            if (this.subTreeHeightDiff(tree.right) > 0) {
                tree.right = this.rotateRight(tree.right);
            }
            return this.rotateLeft(tree);
        }

        return tree;
    }

    /**
     *       30 = tree
     *     20 = newTree
     *   10   25
     * -----
     *     20 = newTree
     * 10     30 = tree
     *      25
     */
    rotateRight(tree) {
        const newTree = tree.left;
        tree.left = newTree.right;
        newTree.right = tree;
        this.setHeight(tree);
        this.setHeight(newTree);
        return newTree;
    }

    /**
     *    10 = tree
     *       20 = newTree
     *    15    30
     * ......
     *
     *         20
     *    10       30
     *       15
     */
    rotateLeft(tree) {
        const newTree = tree.right;
        tree.right = newTree.left;
        newTree.left = tree;
        this.setHeight(tree);
        this.setHeight(newTree);
        return newTree;
    }

    subTreeHeightDiff = (tree) =>
        this.height(tree.left) - this.height(tree.right);

    isRightHeavy = (tree) => this.subTreeHeightDiff(tree) < -1;

    isLeftHeavy = (tree) => this.subTreeHeightDiff(tree) > 1;

    delete(value) {
        if (!this.root) return;
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(tree, value) {
        if (!tree) return;
        if (tree.value < value) {
            tree.rigth = this.deleteNode(tree.right, value);
        } else if (tree.value > value) {
            tree.left = this.deleteNode(tree.left, value);
        } else {
            // value === tree.value;
            if (!tree.left && !tree.right) {
                // left and right root are empty, it should return null
                return null;
            } else if (!tree.left) {
                // if left is empty it should return right
                return tree.right;
            } else if (!tree.right) {
                // if right is empty it should return left
                return tree.left;
            } else {
                // left and right both are not empty
                // This also means that we have not replaced the main removing node
                // with right child's min value.

                // Assign the right sub-tree's min value;
                tree.value = this.min(tree.right);
                // delete that min valued node in right sub-tree;
                tree.right = this.deleteNode(tree.right, tree.value);
            }
        }
        return tree;
    }

    min(tree) {
        if (!tree) return;
        return tree.left ? this.min(tree.left) : tree.value;
    }
}

function createTreeAndDoMethods(array) {
    console.log("Test for: ", array);
    const tree = new AVL();
    tree.insertList(array);
    doMethods(tree);
    tree.delete(13);
    console.log("delete 13: ", JSON.stringify(tree.root));
    console.log("-----------------------------");
}

function doMethods(tree) {
    console.log("🚀 ~ tree:", JSON.stringify(tree.root));
}

const tests = {
    arr1: [10, 5, 15, 13, 17, 12, 14, 6, 8],
    // lR: [10, 20, 30],
    // lRR: [10, 30, 20],
    // rR: [20, 30, 10],
    // rRR: [30, 10, 20],
};

Object.values(tests).forEach((value) => createTreeAndDoMethods(value));
