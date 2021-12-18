const chai = require("chai");
const assert = chai.assert;
const triangle = require('../index');


describe("#triangle",function(){

    let arrayObject= triangle();
    
    it("should test return array",function(){
    
        assert.isArray(arrayObject,"ce n'est pas un array");
    
    })

    
    it("should test la longueur de l'array",function(){
    
        assert.strictEqual(arrayObject.length,7,"ça ne fonctionne pas");
    
    })

    
    it("should test object",function(){
    
        assert.isObject(arrayObject[0],"ce n'est pas un objet");
    
    })


    
    it("should test le type de valeur returner dans la variable testObjet",function(){
    
        assert.strictEqual(arrayObject[0].test,""+"\n"+"#"+"\n"+"##"+"\n"+"###"+"\n"+"####"+"\n"+"#####"+"\n"+"######"+"\n"+"#######","le valeur est differente");
    
    })
})