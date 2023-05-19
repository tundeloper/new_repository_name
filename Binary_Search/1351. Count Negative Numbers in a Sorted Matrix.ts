//Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

function sort(arr:number[]):void{
        for(let i = 0; i<arr.length; i++){
            for(let j = 0; j < arr.length; j++) {
                if(arr[j] > arr[j+1]) {
                    const sort = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = sort
                }
            }
        }
    }

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums: number[], target:number): number[] {
    const arr :number[] = []
    sort(nums, )
    let middle:number = Math.floor((nums.length)/2)
    let start: number = middle -1
    let end :number = middle + 1
    if(nums[middle] === target) arr.push(middle)
    while(nums[start] >= target || nums[end] <= target) {
        console.log({start,end,middle})
        if(nums[start] === target) arr.push(start)
        if(nums[end] === target) arr.push(end)
        start--
        end++
    }

    sort(arr)
    return arr
};

targetIndices([1,2,5,2,3], 2)

////// Example 1
// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.

///// Example 2
// Input: nums = [1,2,5,2,3], target = 3
// Output: [3]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 3 is 3.

//// Example 3
// Input: nums = [1,2,5,2,3], target = 5
// Output: [4]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 5 is 4.

// time complexity O(n**2logn)