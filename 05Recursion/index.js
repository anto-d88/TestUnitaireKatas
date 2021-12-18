module.exports = function isEven(n){

    if(n=== 0){

     
        return 1;
     
    }
    
    else if(n< 0) {
    
        return n *= isEven( n + 1);
    
    }
    
    else if(n>0){
    
        return n *= isEven(n - 1)
    
    }
   
}

// isEven(5)