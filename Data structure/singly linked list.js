class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);

    //if there is no Node create first node
    if (!this.head) {
      this.head = new Node(val);
      // head and tail are the same
      this.tail = this.head;
    } else {
      // take the current tail and take the 'next' propety and set it to new Node
      this.tail.next = newNode;
      // let the tail point to the new node
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null
    this.length--

    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current
  }

  shift() {
    if(!this.head) return undefined
    var currentHead = this.head
    this.head = currentHead.next
    this.length--
    if(this.length === 0) this.tail = null;
    return currentHead
  }

  unshift(val) {
    var newHhead = new Node(val)
    if(!this.head) {
      this.head = newHhead
      this.tail = this.head
    } else {
      newHhead.next = this.head
      this.head = newHhead
    }
    this.length++
    return this
  }

  get(index) {
    if(index < 0 || index > this.length) return null
    var current = this.head
    var counter = 0
    while(counter !== index) {
      current = current.next
      counter++
    }
    return current
  }

  set(index, val) {
    var foundNode = this.get(index)
    if(foundNode) {
      foundNode.val = val;
      return true
    }
    return false
  }

  insert(index, val) {
    if(index < 0 || index > this.length) return false
    if(index === this.length) {
      this.push(val)
    } else if(index === 0) {
      this.unshift(val)
    } else {
      var newNode = new Node(val)
      const prev = this.get(index-1)
      const temp = prev.next
      prev.next = newNode
      newNode.next = temp 
      this.length++
    }
    return true
  }

  remove(index) {
    if(index < 0 || index >= this.length) return undefined
    if(index === 0) return this.shift();
    if(index === this.length-1) return this.pop
    var previousNode = this.get(index-1)
    var removed = previousNode.next
    previousNode.next = removed.next
    this.length--
    return removed
    
  }

  reverse() {
    var node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}
