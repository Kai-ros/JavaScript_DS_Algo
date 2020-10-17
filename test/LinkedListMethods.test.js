const { LinkedList, Node } = require("../source/LinkedList.js");
const { handicappedListIntersection, makeNodeListHead } = require("../source/LinkedListMethods.js");

test("canary", () => {
  expect(true).toBeTruthy();
});

// makeNodeListHead

test("move 3 to front", () => {
  let node1 = new Node(1);
  let node2 = new Node(2, node1);
  let node3 = new Node(3, node2);
  let node4 = new Node(4, node3);
  let node5 = new Node(5, node4);
  
  node1.child = node2;
  node2.child = node3;
  node3.child = node4;
  node4.child = node5;
  node5.child;

  expect(makeNodeListHead(new LinkedList(node1), 3).head.value).toBe(3);
});

test("move 5 to front", () => {
  let node1 = new Node(1);
  let node2 = new Node(2, node1);
  let node3 = new Node(3, node2);
  let node4 = new Node(4, node3);
  let node5 = new Node(5, node4);
  
  node1.child = node2;
  node2.child = node3;
  node3.child = node4;
  node4.child = node5;
  node5.child;

  expect(makeNodeListHead(new LinkedList(node1), 5).head.value).toBe(5);
});

test("try to move head to head", () => {
  let node1 = new Node(1);

  expect(makeNodeListHead(new LinkedList(node1), 1).head.value).toBe(1);
});

test("no linked list", () => {
  expect(makeNodeListHead(undefined)).toBe(undefined);
});

test("empty linked list", () => {
  expect(makeNodeListHead(new LinkedList()).head).toBe(undefined);
});

// handicappedListIntersection

test("find intersection of two lists", () => {
  let node1 = new Node(1);
  let node2 = new Node(3, node1);
  let node3 = new Node(9, node2);
  let node4 = new Node(11, node3);
  let node5 = new Node(14, node4);
  
  node1.child = node2;
  node2.child = node3;
  node3.child = node4;
  node4.child = node5;
  node5.child;

  let nodeA = new Node(3);
  let nodeB = new Node(7, nodeA);
  let nodeC = new Node(9, nodeB);
  let nodeD = new Node(12, nodeC);
  let nodeE = new Node(14, nodeD);
  
  nodeA.child = nodeB;
  nodeB.child = nodeC;
  nodeC.child = nodeD;
  nodeD.child = nodeE;
  nodeE.child;

  expect(LinkedList.traverse(handicappedListIntersection(new LinkedList(node1), new LinkedList(nodeA)))).toEqual([3,9,14]);
});
