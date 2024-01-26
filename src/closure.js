// increment function has access to the variable environment of count, as both are defined in the same lexical scope. This is called Persistent Lexical Scope Reference, in other word a closure. Any declared variable inside the closure will be memorised but they cannot be accessed from outside the scope. A good example of this is the implementation of javascript modules.

function inner() {
  let count = 0;
  function increment() {
    count++;
    return count;
  }
  return increment;
}

const outer = inner();

console.log(outer());
