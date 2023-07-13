class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; 
        this.length = 0;
    }

    push(val) {
        const NewNode = new Node(val)
        if (!this.head) {
            this.head = NewNode
            this.prev = null
            this.tail = this.head
        } else {
            this.tail.next = NewNode
            NewNode.prev = this.tail
            this.tail = NewNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        const poppedNode = this.tail
       
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
        }
        this.length--
        poppedNode.prev = null
        return poppedNode
    }

    shift() {
        if (this.length === 0) return undefined
        const oldHead = this.head 

        
        shiftNode.next = null
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            const newHhead = oldHead.next
            newHhead.prev = null
            this.head = newHhead
            oldHead.next = null
        }
        this.length--
        return oldHead
        
    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if(index < 0 || index > this.length) return null
        var current, counter;
        console.log(this.length/2)
        if (index <= this.length / 2) {
          current = this.head
          counter = 0
          while (counter !== index) {
            current = current.next
            counter++
          }
        } else {
          current = this.tail
          counter = this.length - 1
          while (counter !== index) {
            current = current.prev
            counter--
          }
        }
        return current
    }

    set(index, val) {
        const foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if(index === this.length) {
            this.push(val)
          } else if(index === 0) {
            this.unshift(val)
          } else {
            var newNode = new Node(val)
            const beforeNode = this.get(index-1)
            const afterNode = beforeNode.next
            beforeNode.next = newNode, newNode.prev = beforeNode
            afterNode.prev = newNode, newNode.next = afterNode 
            this.length++
        }
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop
        var removedNode = this.get(index)
        
        // still the same
        // var beforeNode = removedNode.prev
        // var afterNode = removedNode.next
        // beforeNode.next = afterNode
        // afterNode.prev = beforeNode

        removedNode.prev.next = removedNode.next
        removedNode.next.prev = removedNode.prev
        removedNode.next = null
        removedNode.prev = null
        this.length--
        return removedNode
    }

}

