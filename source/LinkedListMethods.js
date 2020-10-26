const { LinkedList, Node } = require("./LinkedList.js")

function makeNodeListHead(linkedList, target) {
    if (typeof linkedList === "undefined") {
        return undefined
    }

    if (typeof linkedList.head === "undefined") {
        return linkedList
    }

    let current = linkedList.head
    let previous = current.parent
    let next = current.child

    if (typeof next === "undefined") {
        return linkedList
    }

    while (typeof current !== "undefined") {
        if (current.value === target) {
            if (typeof current.child !== "undefined") {
                next.parent = previous
                previous.child = next
            } else {
                previous.child = undefined
                // alternate way: delete previous.child
            }
            current.child = linkedList.head
            linkedList.head.parent = current
            current.parent = undefined
            linkedList.head = current
        }

        previous = current
        current = next
        if (typeof current !== "undefined") {
            next = current.child
        }
    }

    return linkedList
}

exports.makeNodeListHead = makeNodeListHead

function handicappedListIntersection(list1, list2) {
    let intersectionRoot = undefined
    let currentForIntersection = undefined
    let current1 = list1.head
    let current2 = list2.head

    while (current1 !== undefined && current2 !== undefined) {
        if (current1.value === current2.value) {
            if (currentForIntersection === undefined) {
                intersectionRoot = new Node(current2.value) // first node
                currentForIntersection = intersectionRoot
            } else {
                currentForIntersection.child = new Node(current2.value) // after first node
                currentForIntersection = currentForIntersection.child
            }
            current1 = current1.child
            current2 = current2.child
        }
        else if (current1.value < current2.value) {
            current1 = current1.child
        }
        else {
            current2 = current2.child
        }
    }
    return intersectionRoot
}

exports.handicappedListIntersection = handicappedListIntersection

// Given a sorted linked list, delete all duplicates such that each element appear only once.

function deleteDupes(listHead) {
    current = listHead

    while (current.next !== undefined) {
        const next = current.next

        if (current.value === next.value) {
            current.next = next.next
            if (current.next !== undefined) {
                current.next.prev = current
            }
        } else {
            current = next
        }
    }
    return listHead
}

console.log(deleteDupes(LinkedList.makeSinglyLinkedList([1, 2, 2, 3, 3, 4, 5])).toString())
