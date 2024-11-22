// filtered elements from array - challenge 6
const arr = [10,20,30,40]
const greaterThan10 = (n) => n > 10;

const filter = function(arr,fn){
    n = arr.length
    let filteredArray = new Array()

    for(let i = 0; i < n; i++){
        if(fn(arr[i],i)){
            filteredArray.push(arr[i])
        }
    }
    return filteredArray
}

const newArray = filter(arr,greaterThan10)
console.log(newArray)