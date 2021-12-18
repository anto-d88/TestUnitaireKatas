const chai = require("chai");
const assert = chai.assert;
const min = require('../index');


describe("#min", function(){


    it("should test si c'est bien une fonction", function(){

        assert.isFunction(min,"ce n'est pas une fonction")
    })

    it("should test function min", function(){

        assert.strictEqual(min(0,10),0,"min ne retourne pas la bonne valeur")
    })


    it("should test function min", function(){

        assert.strictEqual(min(0,-10),-10,"min ne retourne pas la bonne valeur")
    })


    it("should test le type des arguments min", function(){

        assert.isNumber(min(),"min ne retourne pas la bonne valeur")
    })
})