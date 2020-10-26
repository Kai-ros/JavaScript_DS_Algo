/*
You have a list of atomic items where every item has a value and a weight. The also have a bag to hold items in with a maximum weight of X.
Write a solution that maximizes the value of the items you place in the bag while ensuring that you don't exceed the maximum weight.

Ex.

Input: 
items = [
    {id: 'a', val: 10, w:3}
    {id: 'b', val: 6, w:8}
    {id: 'c', val: 3, w:3}
]
maxWeight = 8

Output:
bag = ['a', 'c']
Value: 13
Weight: 6 // < 8

*/ 

function knapsackProblem(items, maxWeight) {
    let outputBody = {
        bestValue: 0,
        combinedWeight: 0
    }

    for (let i = 0; i < items.length; i++) {
        if (items[i].weight > maxWeight) {
            continue
        }
        if (items[i].weight + outputBody.combinedWeight <= maxWeight) {
            outputBody.bestValue += items[i].value
            outputBody.combinedWeight += items[i].weight
        } else {
            if (items[i].value > outputBody.bestValue) {
                outputBody.bestValue = items[i].value
                outputBody.combinedWeight = items[i].weight              
            }
        }
    }
    return outputBody
}

/*
    for every item, recursive call function with newSet = {items - currentItem}
    keep weight checks, don't worry about values
    store the best return value with sum of weight from each recursive call
    after all items have been considered for the current call, return the value of best = {value, weight}
*/

function bestCombo(items, maxWeight) {
    let best = { value: 0, weight: 0 }

    for(let current of items) {
        if (current.weight <= maxWeight) {
            let result = bestCombo(items.filter(item => item != current), maxWeight - current.weight)
            if(result.value + current.value > best.value) {
                best.value = result.value + current.value
                best.weight = result.weight + current.weight
            }
        }
    }
    return best
}

// Happy path
// Output: 13
items1 = [
    {id: 'a', value: 10, weight:3},
    {id: 'b', value: 6, weight:8},
    {id: 'c', value: 3, weight:3}
]
// Everything weighs the same
// Output: 16
items2 = [
    {id: 'a', value: 10, weight:3},
    {id: 'b', value: 6, weight:3},
    {id: 'c', value: 3, weight:3}
]
// Outside weight and has best value
// Output: 6
items3 = [
    {id: 'a', value: 100, weight:9},
    {id: 'b', value: 6, weight:7},
    {id: 'c', value: 3, weight:3}
]
// Equal values
// Output: 10
items4 = [
    {id: 'a', value: 10, weight:5},
    {id: 'b', value: 10, weight:5},
    {id: 'c', value: 10, weight:5}
]
// All items fit
// Output: 30
items5 = [
    {id: 'a', value: 10, weight:1},
    {id: 'b', value: 10, weight:1},
    {id: 'c', value: 10, weight:1}
]
// No items fit
// Output: 0
items6 = [
    {id: 'a', value: 10, weight:50},
    {id: 'b', value: 10, weight:50},
    {id: 'c', value: 10, weight:50}
]

//console.log(knapsackProblem(items6, 7))

// 2 possible
// Output: 11
items7 = [
    {id: 'a', value: 5, weight:5},
    {id: 'b', value: 4, weight:4},
    {id: 'c', value: 3, weight:3},
    {id: 'd', value: 3, weight:2},
    {id: 'e', value: 1, weight:1}
]
console.log(bestCombo(items7, 10), {expectedValue: 11, expectedWeight: 10})



function evilProblem(N) {
    let terms = '1'
    if (N === 1) {
        return terms
    }

    for (let i = 1; i < N; i++) {

        // termsArray <- terms
        termsArray = terms.split('')
        termsArray.push(0) // fake element to the end

        // now we delete terms
        terms = ''

        // works with termsArray 
        let n = termsArray[0]
        let m = 1
        for (let j = 1; j < termsArray.length; j++) {
            if (n === termsArray[j]) {
                m++
            } else {
                terms += m
                terms += n
                n = termsArray[j]
                m = 1
            }
        }
    }

    return terms
}



function squareEveryDigit(number) {
    return Number(number.toString(10).split("").map(x => x * x).join(''))
}

function descendingOrder(number) {
    // separate into array      (base 10)
    let numberArray = number.toString(10).split("")
    // map of digits
    let numTallyArray = new Array(10).fill(0) // set each tally to 0 up front

    // store in ascending order
    let ascendingOrderArray = new Array()

    // traverse array
    for (let i = 0; i < numberArray.length; i++) {
        // tally digits
        numTallyArray[numberArray[i]] += 1
    }

    // reverse order traversal
    for (let i = numTallyArray.length; i-- > 0;) {
        // store i for number of times tally at i
        for(let j = 0; j < numTallyArray[i]; j++) {
            ascendingOrderArray.push(i)
        }
    }
    
    // glue it back into a #
    return Number.parseInt(ascendingOrderArray.join(''), 10)
}

//console.log("result: " + descendingOrder(1224943534))


// The sexy solution on CodeWars
function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
}

// My naive solution
function solution(number) {
    let sum = 0
    let threes = 0
    let fives = 0
    let multiples = new Set()

    if (number < 3) {
        return sum
    }

    let threeLoops = Math.floor(number / 3)
    let fiveLoops = Math.floor(number / 5)

    if (number % 3 === 0) {
        threeLoops -= 1
    }

    if (number % 5 === 0) {
        fiveLoops -= 1
    }

    for (let i = 0; i < threeLoops; i++) {
        threes += 3
        multiples.add(threes)
    }

    for (let i = 0; i < fiveLoops; i++) {
        fives += 5
        multiples.add(fives)
    }
    
    for (let multiple of multiples) sum += multiple
    
    return sum
}

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321