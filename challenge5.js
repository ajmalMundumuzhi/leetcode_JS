// Apply transform over each element in array - challenge 5 
const arr = [0,1,2]
const map = function (arr,fn){
    n = arr.length
    let res = new Array(n)
    for(let i = 0; i < n; i++){
        res[i] = fn(arr[i],i)
    }
}
console.log(map(4))