'use strict'; // <-- this semicolon necessary

function turnCoffeeRed() {
    document.getElementById("Coffee").style.color = "red"
}

function turn5thLiBlue() {
    let list = document.getElementsByClassName("FoodsList")[0]
    let fifthLi = Array.from(list.children)[4]
    fifthLi.style.color = "blue"
}

function bespokeSortList() {
    let list = document.getElementsByClassName("FoodsList")[0]
    let nodes = Array.from(list.children)
    let idToNodeMap = new Map(nodes.map(node => [node.id, node]));

    // sort
    let sorted = mergeSort(nodes.map(node => node.id))
                    .map(id => idToNodeMap.get(id))

    // remove each child of list
    for (let child of list.children)
        list.removeChild(child)

    // append each sorted node as new child to list
    for (let node of sorted)
        list.appendChild(node)
}

function builtInSortList() {
    let list = document.getElementsByClassName("DrinksList")[0]
    let nodes = Array.from(list.children)
    let idToNodeMap = new Map(nodes.map(node => [node.id, node]));

    // sort
    let sorted = nodes
                    .map(node => node.id)
                    .sort()
                    .map(nodeId => idToNodeMap.get(nodeId));

    // remove each child of list
    for (let child of list.children)
        list.removeChild(child)

    // append each sorted node as new child to list
    for (let node of sorted)
        list.appendChild(node)
}

 // Create a list dynamically

 // Links...tooo....something lol

 // Pictures

 // Dynamic resizing, has to do with media type or something

 // Card elements that combine pictures and text

 // Input validation

turnCoffeeRed()
bespokeSortList()
builtInSortList()
turn5thLiBlue()


// Vue App

// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     }
// })
