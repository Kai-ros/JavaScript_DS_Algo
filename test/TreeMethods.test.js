const { BinaryTree } = require("@ericchase/binary-tree")
const { retrieveNode } = require("../source/TreeMethods.js");

test('canary', () => {
  expect(true).toBeTruthy();
});

test('print simple binary tree in level order', () => {
  expect(retrieveNode(BinaryTree.fromArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 15).getValue())
    .toBe(15);
});

test('print simple binary tree in level order', () => {
  expect(retrieveNode(BinaryTree.fromArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 20).getValue())
    .toBe(undefined);
});
