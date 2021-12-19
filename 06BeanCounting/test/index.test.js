const chai = require("chai");
const assert = chai.assert;
const countBs = require('../index');

describe("#countBs", function(){
    
    
    it("should test return countBs", function(){
        
        assert.equal(countBs("BABCBEB"),4,"countBs ne retourne pas la bonne valeur")
    })
})
