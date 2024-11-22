// Counter - challenge 2 
// method 1 
const createCounter = function(n){
    return function(){
        return n++
    }
}
console.log(createCounter(2))
// method 2 
const CreateCounter = function(n){
    let count = n
    return function(){
        return count++
    }
}
console.log(CreateCounter(5))

// method 3 (using class method)
class Counter{
    constructor(n){
        this.n = n
    }
    increment(){
        return ++this.n
    }
}
