module.exports = function fizzbuzz() {

    for(let i = 1; i<=100; i++){

        if(i%5 === 0 && i%3 === 0){
       return "FIZZBUZZ" }
        
        else if(i%5 === 0){
       return "BUZZ"}
       
        else if(i%3 === 0){
       return "FIZZ"}
      
        else{
          return i ;
    }
}
}