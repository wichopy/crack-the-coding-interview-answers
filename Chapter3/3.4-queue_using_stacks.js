/*

3.4
Implement a Queue class using 2 stacks.

*/
const assert = require('assert')

class Queue {
  constructor() {
    this.s1 = []
    this.s2 = []
  }
  add(val) {
    this.s1.push(val)
  }

  remove() {
    if (this.s2.length) {
      return this.s2.pop()
    }

    while (this.s1.length) {
      this.s2.push(this.s1.pop())
    }

    return this.s2.pop()
  }
}

const q = new Queue()

q.add(2)
q.add(6)
q.add(7)

assert.equal(q.remove(), 2)
assert.equal(q.remove(), 6)

q.add(1)

assert.equal(q.remove(), 7)
assert.equal(q.remove(), 1)
assert.equal(q.remove(), undefined)

console.log('All tests Passed')