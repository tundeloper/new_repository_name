//Given an array of integers nums, sort the array in ascending order and return it.

const mergee = (arr1:number[], arr2:number[])=> {
    let i = 0
    let j = 0
    const result:number[] = []
    while(i < arr1.length && j < arr2.length) {
      if(arr2[j] > arr1[i]) {
        result.push(arr1[i])
        i++
      } else {
        result.push(arr2[j])
        j++
      }
    }
  
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++
    }
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++
    }
    // console.log(result)
    return(result)
  }
  
  function mergeSort(arr){
      if(arr.length <= 1) return arr;
      let mid = (arr.length/2);
      if(mid%2 !== 0) mid = mid+0.5
      let left = mergeSort(arr.slice(0,mid));
      let right = mergeSort(arr.slice(mid));
      return merge(left, right);
  }
  
mergeSort([1,5,2,5,3])
  