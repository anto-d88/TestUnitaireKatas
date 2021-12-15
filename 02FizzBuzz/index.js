for(i = 0; i<100; i++){
    if(i%5 === 0 && i%3 ===0){
       return i += "" + "FIZZBUZZ";
     }
     else if(i%5 === 0){
         return i += "" + "BUZZ";
     }
     else if(i%3 === 0){
         return i += "" + "FIZZ";
     }
};