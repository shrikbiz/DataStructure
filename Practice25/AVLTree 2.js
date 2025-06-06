class AVL_N {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value, tree = this) {
        if (!tree) return;

        if (tree.value > value) {
            if (tree.left) {
                this.insert(value, tree.left);
            } else {
                tree.left = new AVL(value);
            }
        } else {
            if (tree.right) {
                this.insert(value, tree.right);
            } else {
                tree.right = new AVL(value);
            }
        }
    }
}

//------------AVL with Node--------

class Node {
    constructor(value) {
        this.value = value;
        this.height = 0;
        this.left = null;
        this.right = null;
    }
}

class AVL {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.insertValue(value, this.root);
    }

    insertList = (arr) => arr.forEach((num) => this.insert(num));

    insertValue(value, tree) {
        if (!tree) return new Node(value);
        if (tree.value > value) {
            tree.left = this.insertValue(value, tree.left);
        } else {
            tree.right = this.insertValue(value, tree.right);
        }
        // Sets the height of the node
        this.setHeight(tree);

        return this.balanceChecker(tree);
    }

    balanceChecker(tree) {
        if (this.isRightHeavy(tree)) {
            if (this.cxnHeightDiff(tree.right) > 0)
                tree.right = this.rightRotate(tree.right);
            return this.leftRotation(tree);
        } else if (this.isLeftHeavy(tree)) {
            if (this.cxnHeightDiff(tree.left) < 0)
                tree.left = this.leftRotation(tree.left);
            return this.rightRotate(tree);
        }
        return tree;
    }
    /**
     * eg:
     *           30
     *       20
     *    10
     */
    isLeftHeavy = (tree) => this.cxnHeightDiff(tree) > 1;

    /**
     * eg:
     *    10
     *       20
     *          30
     */
    isRightHeavy = (tree) => this.cxnHeightDiff(tree) < -1;

    /**
     *  10 = tree
     *        20  = newRoot
     *    15     30
     * --------
     *          20 = newRoot (return)
     *    10         30
     *       15
     */
    leftRotation(tree) {
        let newRoot = tree.right;
        tree.right = newRoot.left;
        newRoot.left = tree;
        this.setHeight(tree);
        this.setHeight(newRoot);
        return newRoot;
    }

    /**
     *              30 = tree
     *        20 = newRoot
     *     10   25
     * -------------
     *       20 = newRoot (return)
     *  10       30 = tree
     *        25
     */
    rightRotate(tree) {
        let newRoot = tree.left;
        tree.left = newRoot.right;
        newRoot.right = tree;
        this.setHeight(tree);
        this.setHeight(newRoot);
        return newRoot;
    }

    cxnHeightDiff = (tree) => this.height(tree.left) - this.height(tree.right);

    height = (tree) => (!tree ? -1 : tree.height);

    setHeight = (tree) => {
        tree.height =
            1 + Math.max(this.height(tree.right), this.height(tree.left));
    };
}

//---------------Testing---------------

function createTreeAndDoMethods(array) {
    console.log("Test for: ", array);
    const tree = new AVL();
    tree.insertList(array);
    doMethods(tree);
    console.log("-----------------------------");
}

function doMethods(tree) {
    console.log("🚀 ~ tree:", JSON.stringify(tree.root));
}

const tests = {
    arr1: [10, 5, 15, 13, 17, 12, 14, 6, 8],
    lR: [10, 20, 30],
    lRR: [10, 30, 20],
    // rR: [20, 30, 10],
    // rRR: [30, 10, 20],
};

Object.values(tests).forEach((value) => createTreeAndDoMethods(value));

// createTreeAndDoMethods(arr1);
// createTreeAndDoMethods(lR);
// createTreeAndDoMethods(lRR);
