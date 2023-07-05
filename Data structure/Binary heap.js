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
        this.val[0] = end
        // tikle down 
        return max
    }
}

// [41,39,33,18,27,12,55]
//  0  1  2  3  4  5  6