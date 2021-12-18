const chai = require("chai");
const assert = chai.assert;
const isEven = require('../index');

describe("#isEven", function(){

    it("should test return isEven() === 0",function(){

        assert.equal(isEven(0),1,"isEven ne retourne pas la bonne valeur")
    })

    it("should test return isEven() entierPositif",function(){

        assert.equal(isEven(5),120,"isEven ne retourne pas la bonne valeur")
    })

    it("should test return isEven() entierNegatif",function(){

        assert.equal(isEven(-5),-120,"isEven ne retourne pas la bonne valeur")
    })

    it("should test return isEven() Type ",function(){

        assert.isNumber(isEven(5),"ce n'est pas un nombre")
    })

    it("should test return isEven() Undefined",function(){

        assert.isUndefined(isEven(),"isEven ne retourne pas Undefined")
    })

    it("should test return isEven() NotNull",function(){

        assert.isNotNull(isEven(5),120,"isEven retourne Null")
    })
})