// to be or not to be - challenge 3 
const expect = function(val){
    function toBe(n){
        if(val === n){
            return true;
        }else{
            throw new Error("Not equal")
        }
    }
     function notToBe(n){
        if(val !== n){
            return true
        }else{
            throw new Error("Equal")
        }
    }
    return{
        toBe,
        notToBe
    }
}