class ProrityQueue {
    constructor() {
        this.val = []
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.val.push(newNode)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.val.length - 1
        const element = this.val[index]
        while (index > 0) {  
            let parentIdx = Math.floor((index - 1) / 2)
            let parent = this.val[parentIdx]
            if (element.priority <= parent.priority) break
            this.val[parentIdx] = element
            this.val[index] = parent
            index = parentIdx
        }
    }

    dequeue() {
        const max = this.val
        const end = this.val.pop()
        if (this.val.length > 0) {
            this.val[0] = end
            // tikle down 
            this.sinkDown()
        }
        
        return max
    }

    sinkDown() {
        let idx = 0
        const length = this.val.length
        const element = this.val[idx]
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const righChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.val[leftChildIdx]
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx
                }
            }

            if (righChildIdx < length) {
                righChildIdx = this.val[leftChildIdx]
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = righChildIdx
                }
            }

            if (swap === null) break
            this.val[idx] = this.val[swap]
            this.val[swap] = element
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority
    }
}
// [41,39,33,18,27,12,55]
//  0  1  2  3  4  5  6