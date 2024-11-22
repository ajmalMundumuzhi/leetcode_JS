// Array reduce transformation
const reduce = function(nums, fn, init){
    n = nums.length
    let val = init
    for(let i = 0; i < n; i++){
        val = fn(val, nums[i])
        // val = fn(0,1) = 0 + 1 = 1
        // instead code for reduce method 
    }
    return val
}