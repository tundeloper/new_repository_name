class Node {
    constructor(val) {
        this.val = val,
            this.left = null,
            this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        // if (this.root === null) {
        //     this.root = newNode
        //     return this
        // } else {
        //     var current = this.root
        //     while (true) {
        //         if(val === current.val) return undefined
        //         if (val < current.val) {
        //             if (current.left === null) {
        //                 current.left = newNode
        //                 return this
        //             } else {
        //                 current = current.left
        //             }
        //         } else if(val > current.val) {
        //             if (current.right === null) {
        //                 current.right = newNode
        //                 return this
        //             } else {
        //                 current = current.right
        //             }
        //         }
        //     }
        // }

        if (!this.root) {
            this.root = newNode
            return this
        }

        var current = this.root
        while (true) {
            if(val = current.val) return this
            if (val < current.left) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }

    
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}