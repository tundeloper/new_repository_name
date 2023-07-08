function hash(key, arrayLen) {
    let total = 0;
    for (const char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen
    }
    return total
}

function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen
    }
    return total
}