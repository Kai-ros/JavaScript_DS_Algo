

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