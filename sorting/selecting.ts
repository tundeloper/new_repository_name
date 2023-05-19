function selection(arr:number[]) {
    for (let i = 0; i < arr.length; i++) {
        let lowest:number = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            } 
        }

        [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
}