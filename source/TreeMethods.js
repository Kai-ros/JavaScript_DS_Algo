const { Node, BinaryTree } = require("@ericchase/binary-tree")

/* Classes
BinaryTree
hasRoot()
getRoot()

Node
hasLeftChild()
getLeftChild()
hasRightChild()
getRightChild()
getValue()
*/

exports.retrieveNode = function (tree, targetValue) {
    if (tree.hasRoot()) { 
        return (function recursiveRetrieveNode(current, targetValue) {
            // base case
            if (targetValue == current.getValue()) {
                return current
            }
            // left subarray
            if(current.hasLeftChild()) {
                let result = recursiveRetrieveNode(current.getLeftChild(), targetValue)
                if(targetValue == result.getValue())
                return result;
            }
            // right subarray
            if(current.hasRightChild()) {
                let result = recursiveRetrieveNode(current.getRightChild(), targetValue)
                if(targetValue == result.getValue())
                return result;
            }
            return Node.emptyNode
        })(tree.getRoot(), targetValue)
    }
    return Node.emptyNode
}

function depthFS(array, index) {
    let sum = 0
    if ((index < array.length) && (array[index] !== -1)) {
        let lSum = depthFS(array, index * 2 + 1) 
        let rSum = depthFS(array, index * 2 + 2)
        sum = array[index] + lSum + rSum
    }
    return sum
}

function dfsSum(array, index) {
    if ((index >= array.length) || (array[index] === -1)) {
        return 0
    }
    
    return array[index] + dfsSum(array, index * 2 + 1) + dfsSum(array, index * 2 + 2)
}

function treeBranchWeight(array) {
    // const leftWeight = depthFS(array, 1)
    // const rightWeight = depthFS(array, 2)
    const leftWeight = dfsSum(array, 1)
    const rightWeight = dfsSum(array, 2)
    let output = ''

    console.log('leftWeight ' + leftWeight)
    console.log('rightWeight ' + rightWeight)

    if ((!array.length > 0) ||(leftWeight === rightWeight)) {
        return output
    }

    return leftWeight > rightWeight ? 'Left' : 'Right'
}

let array1 = [1, 2, 3, 4, 5, 6]
let array2 = [1]
let array3 = [1, 2, 3]
let array4 = [1, 2, 3, -1, 5, 6]
let array5 = [1, 2, 3, 4, -1, 6]

console.log(treeBranchWeight(array1))
console.log(treeBranchWeight(array2))
console.log(treeBranchWeight(array3))
console.log(treeBranchWeight(array4))
console.log(treeBranchWeight(array5))
