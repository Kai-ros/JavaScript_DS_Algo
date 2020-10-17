function validBraces(braces) {
    let braceStack = [];
  
    const openBraceSet = new Set(["(","[","{"]);
    const closeToOpenBraceMap = new Map([
      [")", "("],
      ["]", "["],
      ["}", "{"]
    ]);
  
    for (brace of braces) {
      if (openBraceSet.has(brace)) {
        braceStack.push(brace);
      } else {
        const actualOpen = braceStack.pop();
        const expectedOpen = closeToOpenBraceMap.get(brace);
  
        if (actualOpen !== expectedOpen) {
          return false;
        }
      }
    }
  
    return braceStack.length === 0;
  }