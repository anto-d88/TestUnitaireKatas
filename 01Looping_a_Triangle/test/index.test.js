const chai = require("chai");
const assert = chai.assert;
const triangle = require('../index');


describe("#triangle",function(){

    let arrayObject= triangle();
    
    it("should return array",function(){
    
        assert.isArray(arrayObject,"ce n'est pas un array");
    
    })

    
    it("should count element",function(){
    
        assert.strictEqual(arrayObject.length,7,"ça ne fonctionne pas");
    
    })

    
    it("should find object",function(){
    
        assert.isObject(arrayObject[0],"ce n'est pas un objet");
    
    })


    
    it("should find same string",function(){
    
        assert.strictEqual(arrayObject[0].test,"#######","le valeur est differente");
    
    })
})