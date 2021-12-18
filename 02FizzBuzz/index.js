module.exports = function FizzBuzz() {

        let array = [];

    for(i = 1; i <= 100; i++){

        if(i%3 === 0 && i%5 === 0){

            array[i] = "FizzBuzz"
        
        }
        
        else if(i%5 === 0){
        
            array[i] = "Fizz"
        
        }
        
        else if(i%3 === 0){
        
            array[i] = "Buzz"
        
        }
        
        else{
        
            array[i] = i
        
        }
    }
    
    return array

}
