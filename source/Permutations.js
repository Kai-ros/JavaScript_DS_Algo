function factorial (n) {
  let product = 1
  for (let i = 2; i < n + 1; ++i) {
    product = product * i
  }
  return product
}

function nPr (n, r) {
  return factorial(n)/factorial(n-r)
}

function incrementPointers (pointers, n) {
  // start with last pointer
  let i = pointers.length - 1
  // increment last pointer
  ++pointers[i]

  // work backwards
  while (i >= 0) {
    // increment pointer again if equal to a higher pointer
    while (pointers.slice(0, i).includes(pointers[i])) {
      ++pointers[i] // increment pointer
    }

    // check if pointer is still less than n
    if (pointers[i] < n) {
      // reset lower pointer if necessary
      if (++i < pointers.length) {
        pointers[i] = 0
      } else {
        // done
        break
      }
    } else {
      // move to higher pointer and increment it
      ++pointers[--i]
    }
  }
}

function nChooseR (arr, r) {
  const n = arr.length

  // P(n, r) = n!/(n-r)!
  const choices = nPr(n, r)

  const pointers = Array.from(new Array(r).keys())
  const perms = new Array(choices)

  for (let c = 0; c < choices; ++c) {
    // Create new permutation
    // - Map pointers to actual elements
    perms[c] = pointers.map(p => arr[p])

    // Increment the pointers
    incrementPointers(pointers, n)
  }

  return perms
}

console.log(nChooseR(['a', 'b', 'c', 'd', 'e'], 3))
