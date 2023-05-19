function bubblesort(arr: number[]) {
    let noSwap = true
    for (let i = arr.length; i > 0; i--){
        for (let j = 0; j < i-1; j++) {
            if (arr[j] > arr[j+1]) {
                //es6 
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]

                //es5 
                // const sort = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = sort
                noSwap = false
            }
        }
        if(noSwap) break
    }
    
    console.log(arr)
    return arr
}

bubblesort([5,2,6,7,4,2])