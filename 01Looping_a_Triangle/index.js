
module.exports  = function triangle(){
  
    let str = "" 

    let testObject = {test:""}; 
    
    let array = []; 

    for(let i=1; i<=7; i++){
       
        if(i){
            
            str += "\n";
            
          }
          
        str += "#".repeat(i);
      
        testObject.test = str;
        
        array.push(testObject);
       
    }

    return array;
}