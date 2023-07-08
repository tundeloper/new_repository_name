class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % arrayLen
        }
        return total
    }

    set(key, value) {
        let index = this._hash()
        return index
    }
    
    get(key) {}
}