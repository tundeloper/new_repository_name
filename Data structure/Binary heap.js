class MaxBinaryHeap {
    constructor() {
        this.val = []
    }

    insert(element) {
        this.val.push(element)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.val.length - 1
        const element = this.val[index]
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2)
            let parent = this.val[parentIdx]
            if (element <= parent) break
            if(element > parent){ 
                this.val[parentIdx] = element
                this.val[index] = parent
            }
            index = parentIdx
        }
    }

    extractMax() {
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
                if (leftChild > element) {
                    swap = leftChildIdx
                }
            }

            if (righChildIdx < length) {
                righChildIdx = this.val[righChildIdx]
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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

// [41,39,33,18,27,12,55]
//  0  1  2  3  4  5  6