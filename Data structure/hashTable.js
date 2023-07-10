class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
        return index
    }
    
    get(key) {
        let index = this._hash(key)
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                return this.keyMap[index][i]
            }
        }
    }

    value() {
        let valueArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!this.keyMap.includes(this, this.keyMap[i][j][1])) {
                        valueArr.push(this.keyMap[i][j][1 ])
                    }
                }
            }  
        }
    }

    key() {
        let kayArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!this.keyMap.includes(this, this.keyMap[i][j][1])) {
                        kayArr.push(this.keyMap[i][j][1 ])
                    }
                }
            }  
        }
    }
}