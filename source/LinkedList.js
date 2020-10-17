class LinkedList {
    constructor(head) {
        this.head = head;
    }

    length() {
        let length = 0;
        let node = this.head;
        while (node != undefined) {
            length++;
            node = node.child;
        }
        return length;
    }

    static traverse(head) {
        let node = head;
        let array = [];
        while (node !== undefined) {
            array.push(node.value);
            node = node.next;
        }
        return array;
    }

    static makeSinglyLinkedList(values) {
        let head = new Node(values[0]);

        let current = head;
        for (let i = 1; i < values.length; i++) {
            let next = new Node(values[i]);
            current.next = next;
            current = next
        }

        return head;
    }

    static makeDoublyLinkedList(values) { 
        let head = new Node(values[0])

        let current = head
        for (let i = 1; i < values.length; i++) {
            let next = new Node(values[i])
            next.prev = current
            current.next = next
            current = next
        }

        return head;
    }

    static toString(head) {
        return LinkedList.traverse(head).join(" -> ");
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }

    toString() {
        return LinkedList.traverse(this).join(" -> ");
    }
}

exports.LinkedList = LinkedList;
exports.Node = Node;
