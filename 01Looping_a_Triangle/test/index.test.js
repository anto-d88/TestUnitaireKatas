const chai = require("chai");
const assert = chai.assert;
const triangle = require('../index');


describe("#triangle",function(){

    let arrayTest= triangle();
    
    it("should test return array",function(){
    
        assert.isArray(arrayTest,"ce n'est pas un array");
    
    })

    
    it("should test la longueur de l'array",function(){
    
        assert.strictEqual(arrayTest.length,7,"ça ne fonctionne pas");
    
    })

    
    it("should test object",function(){
    
        assert.isObject(arrayTest[0],"ce n'est pas un objet");
    
    })


    
    it("should test le type de valeur returner dans l'array'",function(){
    
        assert.strictEqual(arrayTest[0].test,"\n"+
                                               "#"+"\n"+
                                               "##"+"\n"+
                                               "###"+"\n"+
                                               "####"+"\n"+
                                               "#####"+"\n"+
                                               "######"+"\n"+
                                               "#######","le valeur est differente");
    
    })

})