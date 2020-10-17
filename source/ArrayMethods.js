
function isArrayCyclic(array, pos) {
    if(pos === -1) 
      return false;

    let hare = 0
    let tortoise = 0

    for (;; tortoise++) {
      if (tortoise === array.length - 1) {
        tortoise = pos
      }

      hare++
      if ( hare === array.length - 1) {
        hare = pos
      }

      hare++
      if ( hare === array.length - 1) {
        hare = pos
      }

      if (array[hare] === array[tortoise]) {
        return true
      }
    }
    return false
}

function formatPhoneNumber(array) {
    const area_code = array.slice(0,3).join('');
    const initial_three = array.slice(3,6).join('');
    const latter_four = array.slice(6,10).join('');

    return `(${area_code}) ${initial_three}-${latter_four}`
}

// Kadane's Algorithm
function subArraySum(array) {
    max = array[0]
    sum = array[0]

    for (let i = 1; i  < array.length; i++) {
        sum += array[i]
        if (sum < array[i]) sum = array[i]
        if (sum > max) max = sum
    }
    
    return max
}

// A version of Kadane's Algorithm
function maxStockProfits(stockPrices, k) {
    // all possible max profits
    let profits = [];
    
    let max_profit = 0;
    // profit = sell - buy
    let buy = stockPrices[0];
    for(let stock of stockPrices.slice(1)) { 
        const profit = stock - buy;
        if(profit > max_profit)
        {
            max_profit = profit;
        } else {
            // selling here
            profits.push(max_profit);
            // reset
            buy = stock;
            max_profit = 0;
        }
    }
    profits.push(max_profit);

    return profits
        .sort((a,b)=> b-a)
        .slice(0, k)
        .reduce(((a,b) => a+b), 0);
}

function arrayPermutations(originArray, destinationArray) {
    //for (let i = 0; i < destinationArray.length; i++) {
    //    destinationArray[i] = originArray[destinationArray[i]]
    //}
    return destinationArray.map(i => originArray[i])
}

console.log(arrayPermutations(['x', 'y', 'z', 'a'], [1, 3, 0, 2]))

function oddIntegerOut(array) {
    let occurrenceMap = new Map()

    for (let i of array) {
        if (occurrenceMap.has(i)) {
            let occurrences = occurrenceMap.get(i)
            occurrences++
            occurrenceMap.set(i, occurrences)
        } else {
            occurrenceMap.set(i, 1)
        }
    }

    for (let key of occurrenceMap.keys()) {
        if (occurrenceMap.get(key) % 2 !== 0) {
            return key
        }
    }
}

exports.oddIntegerOut = oddIntegerOut

function intersectionOfTwoArrays_Time(array1, array2) {
   let intersectionArray = new Array()
   let array1Set = new Set(array1)

   for (let i of array2) {
       if (array1Set.has(i)) {
            intersectionArray.push(i)
       }
   }
   return intersectionArray
}

function intersectionOfTwoArrays_Space(array1, array2) {
   let intersectionArray = new Array()

   for (let i of array1) {
       if(contains(array2, i)) {
           intersectionArray.push(i)
       }
        // for (let j of array2) {
        //     if (i === j) {
        //         intersectionArray.push(i)
        //         break
        //     }
        // }
   }
   return intersectionArray
}

function contains(array, element) {
    for (let i of array) {
        if (element === i) {
            return true
        }
    }
    return false
}

exports.intersectionOfTwoArrays_Time = intersectionOfTwoArrays_Time;
exports.intersectionOfTwoArrays_Space = intersectionOfTwoArrays_Space;


function mostCommonItems(array) {
    let tallyMap = new Map()
    let mostCommonArray = new Array()
    let itemCount = 1

    for (let item of array) {
        if (tallyMap.has(item)) {
            let value = tallyMap.get(item)
            value++
            tallyMap.set(item, value)

            if (value > itemCount) {
                itemCount = value
            }
        } else {
            tallyMap.set(item, 1)
        }
    }

    for (let item of tallyMap.keys()) {
        if (tallyMap.get(item) === itemCount) {
            mostCommonArray.push(item)
        }
    }
    return mostCommonArray
}

exports.mostCommonItems = mostCommonItems;

function reverseInPlace(array) {
    let temp = null;
    let front = 0;
    let back = array.length - 1;
    
    while(front < back) {
        temp = array[front];
        array[front] = array[back];
        array[back] = temp;
        front++;
        back--;
    }
    return array;
}

exports.reverseInPlace = reverseInPlace;

// JS built in methods
const items = [
    { name: 'Bike',  price: 100 },
    { name: 'TV',  price: 200 },
    { name: 'Album',  price: 10 },
    { name: 'Book',  price: 5 },
    { name: 'Phone',  price: 500 },
    { name: 'Comp',  price: 1000 },
    { name: 'KB',  price: 25 }
  ]
  
  const filteredItems = items.filter(item => item.price <= 100)
  const itemNames = items.map(item => item.name)
  const founditem = items.find(item => item.name === 'KB')
  const hasCheapItems = items.some(item =>  item.price <= 100)
  const hasPriceyItems = items.every(item =>  item.price >= 100)
  const includesKeyboard = items.includes(0)
  const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
  }, 0)
  
//   console.log('All items: ')
//   console.log(items)
  
//   console.log('Filtered items: ')
//   console.log(filteredItems)
  
//   console.log('Item names: ')
//   console.log(itemNames)
  
//   console.log('Found item: ')
//   console.log(founditem)
  
//   console.log('Has cheap items? ')
//   console.log(hasCheapItems)
  
//   console.log('Has pricey items? ')
//   console.log(hasPriceyItems)
  
//   console.log('Includes Keyboard? ')
//   console.log(includesKeyboard)
  
//   console.log('Total: ')
//   console.log(total)
  
//   items.forEach(item => console.log(item.price))
  