// Allow one function call - challenge 10 
const once = function(fn){
    let count = 0
    return function(...args){
        if(count == 0){
            count++
            return fn(...args)
        }else{
            return undefined
        }
    }
}