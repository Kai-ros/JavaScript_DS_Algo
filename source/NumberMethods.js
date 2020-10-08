

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

console.log("result: " + descendingOrder(1224943534))


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