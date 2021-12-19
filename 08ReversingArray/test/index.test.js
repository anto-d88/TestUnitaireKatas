const chai = require("chai");
const assert = chai.assert;
const  reverseArray = require('../index');
const  reverseArrayInPlace = require('../index');


describe("#reversArray", function(){

    it("should test return reverseArray", function(){

        assert.equal(reverseArray([1,2,3])[0,1,2],(3,2,1),"reverseArray ne returne pas la bonne valeur")
    })

    it("should test return reverseArray", function(){

        assert.isArray(reverseArray([1,2,3]),"reverseArray ne returne pas un array")
    })

    it("should test return reverseArray", function(){

        assert.isNumber(reverseArray([1,2,3])[0],"reverseArray ne returne pas un nombre")
    })


    
})

describe("#reverseArrayInPlace", function(){

    it("should test return reverseArrayInPlace", function(){

        assert.equal(reverseArrayInPlace([1,2,3])[0,1,2],(3,2,1),"reverseArrayInPlace ne returne pas la bonne valeur")
    })

    it("should test return reverseArrayInPlace", function(){

        assert.isArray(reverseArrayInPlace([1,2,3]),"reverseArrayInPlace ne returne pas u n array")
    })

    it("should test return reverseArrayInPlace", function(){

        assert.isNumber(reverseArrayInPlace([1,2,3])[0],"reverseArrayInPlace ne returne pas u n array")
    })
})