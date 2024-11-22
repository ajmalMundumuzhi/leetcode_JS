// counter 2 - challenge 4 
const createCounter = function(init){
    let init = temp
    function increment(){
        return ++init
    }
    function decrement(){
        return --init
    }
    function reset(){
        init = temp
        return init
    }
    return{
        increment,
        decrement,
        reset
    }
}