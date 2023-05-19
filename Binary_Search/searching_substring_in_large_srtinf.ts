// Suppose you want to count the number time the smaller strings appears in the larger string

function naiveSearch(long:string, short:string) {
    // initia;ize varable count
    let count = 0;
    // loop over the long string 
    for (let i = 0; i < long.length; i++) {
        // loop over the short string
        //if the charater do match, keep going
        for (let j = 0; j < short.length; j++) {
            if(short[j] !== long[i+j]) {
                //if the doesnot match break 
                break;
            }
            // if complete inner loop and found one icrement count by 1
            if(j === short.length-1) count++
        }
    }
    // return count
    return count
}

naiveSearch('tunoitundjeitunsiaka', 'tun')

// time complexity O(n**2)