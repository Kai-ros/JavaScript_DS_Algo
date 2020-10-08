
class LinkedList {
    constructor(head) {
        this.head = head;
    }

    length() {
        let length = 0;
        let node = this.head;
        while (node != undefined) {
            length++
            node = node.child
        }
        return length;
    }

    static traverse(head) {
        let node = head;
        let array = [];
        while(node !== undefined) {
            array.push(node.value)
            node = node.child
        }
        return array;
    }
}

class Node {
    constructor(value, parent, child) {
        this.value = value
        this.parent = parent
        this.child = child
    }
}

exports.LinkedList = LinkedList
exports.Node = Node
