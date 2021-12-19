const chai = require("chai");
const assert = chai.assert;
const countNs = require('../index2');

describe("#countNs", function(){

    it("should test return countNs", function(){

        assert.equal(countNs("aadzedazaa","a"),5,"countNs ne return pas la bonn valeur")
    })
})
