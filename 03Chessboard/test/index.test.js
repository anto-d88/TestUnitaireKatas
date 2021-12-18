
const chai = require('chai');
const assert = chai.assert;
const echequier = require('../index');


describe("#echequier", function(){

    let arrayTest = echequier();

    it("should test return array", function(){

        assert.isArray(arrayTest,"ce 'est pas un array")
    })

    it("should test la longueur de l'array",function(){
    
        assert.strictEqual(arrayTest.length,8,"ça ne fonctionne pas");
    
    })

    
    it("should test object",function(){
    
        assert.isObject(arrayTest[0],"ce n'est pas un objet");
    
    })


    
    it("should test le type de valeur returner dans la variable testObjet",function(){
    
        assert.equal(arrayTest[0].test," # # # #" + "\n" + 
                                       "# # # # " + "\n" + 
                                       " # # # #" + "\n" + 
                                       "# # # # " + "\n" + 
                                       " # # # #" + "\n" + 
                                       "# # # # " + "\n" + 
                                       " # # # #" + "\n" + 
                                       "# # # # "+"\n", "le valeur est differente");
    
    })
})