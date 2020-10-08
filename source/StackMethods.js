
  // Goal: remove minimum number of parenthesis to produce a valid string
  //          valid strings   empty string
  //                          only lowercase characters
  //                          (string)
  //                          st(rin)ng

  function balanceStringParentheses(inputString) {
    let inputArray = inputString.split("")
    let parStack = new Array()
    let indexStack = new Array()

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === "(") {
            parStack.push("(")
            indexStack.push(i)
        }
        if (inputArray[i] === ")") {
          if(parStack.length > 0 && parStack[parStack.length - 1] === "("){
            parStack.pop()
            indexStack.pop()   
          } else {
            parStack.push(")")
            indexStack.push(i)
          }
        }
    }

    // store each character of string into new string
    // if index is in indexStack, skip it
    for (let i = 0; i < indexStack.length; i++) {
        inputArray.splice(indexStack[i]-i, 1);
        // indexStack[0] - 0
        // indexStack[1] - 1
        // indexStack[2] - 2

        // i = 0,1,2
        //  v v   v
        // [3,5-1,7-2]
        // "leetc)o)de)"
        //  01234567
    }
    return inputArray.join("");
  }



console.log(balanceStringParentheses( "lee(t(c)o)de)" )); // lee(t(c)o)de
console.log(balanceStringParentheses( "(a(b(c)d)"     )); // a(b(c)d)
console.log(balanceStringParentheses( "a)b(c)d"       )); // ab(c)d
console.log(balanceStringParentheses( "a(b)c(d"       )); // a(b)cd
console.log(balanceStringParentheses( "))(("          )); // 
console.log(balanceStringParentheses( "abc"           )); // abc
console.log(balanceStringParentheses( "l)(()e(((e(t(c)o)d)))e)(((((" )); // lee(t(c)o)de
