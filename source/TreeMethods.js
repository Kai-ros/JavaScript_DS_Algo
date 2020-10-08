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
