function foo() {
  this.count++
}
foo.count = 0;

for(let i = 0; i < 10; i++) {
  // How could you change this expression to pass assertion?
  // => Call foo every time with the same instance of 'this'
  foo.call(foo)
}

console.assert(foo.count === 10)