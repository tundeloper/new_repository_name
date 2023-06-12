// implementing queue with alinked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
    

  pop() {
    if(!this.first) return undefined
    var currentHead = this.first
    this.first = currentHead.next
    this.length--
    if(this.length === 0) this.tail = null;
    return currentHead
  }

  push(val) {
    var newHhead = new Node(val)
    if(!this.first) {
      this.first = newHhead
      this.tail = this.first
    } else {
      newHhead.next = this.first
      this.first = newHhead
    }
    this.length++
    return this
  }
}


