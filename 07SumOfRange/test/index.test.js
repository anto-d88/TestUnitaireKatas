const chai = require("chai");
const assert = chai.assert;
const plage = require('../index');


describe("#plage", function(){
    
    it("should testplage return number", function(){

        assert.isNumber(plage(1,3)[0],"Ce n'est pas un nombre")
    })

    it("should test plage  return  array ", function(){

        assert.isArray(plage(1,3),"plage ne retourne pas un array")
    })

})