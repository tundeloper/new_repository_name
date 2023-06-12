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
      if(!this.head) return undefined
      var currentHead = this.head
      this.head = currentHead.next
      this.length--
      if(this.length === 0) this.tail = null;
      return currentHead
    }
  

  
}
