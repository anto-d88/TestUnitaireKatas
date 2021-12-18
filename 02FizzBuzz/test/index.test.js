
const chai = require('chai');
const assert = chai.assert;
const FizzBuzz = require('../index');



describe("#FizzBuzz", function(){

    let arrayTest = FizzBuzz();
///////////////////////////////////////////////////////////////////////
    it("should test isarray", function(){

        assert.isArray(arrayTest,"ce n'est pas un array");
    })
////////////////////////////////////////////////////////////////////////
    it("should teste des index divisible par 3", function(){

        assert.equal(arrayTest[3],"Buzz","l'index ne retourne pas la bonne valeur");
    })

    it("should teste des index divisible par 3", function(){

        assert.equal(arrayTest[51],"Buzz","l'index ne retourne pas la bonne valeur");
    })

    it("should teste des index divisible par 3", function(){

        assert.equal(arrayTest[66],"Buzz","l'index ne retourne pas la bonne valeur");
    })

    it("should teste des index divisible par 3", function(){

        assert.equal(arrayTest[72],"Buzz","l'index ne retourne pas la bonne valeur");
    })

    it("should teste des index divisible par 3", function(){

        assert.equal(arrayTest[87],"Buzz","l'index ne retourne pas la bonne valeur");
    })

    it("should teste des index divisible par 3", function(){

        assert.equal(arrayTest[99],"Buzz","l'index ne retourne pas la bonne valeur");
    })

//////////////////////////////////////////////////////////////////////////

    it("should test des index divisible par 5", function(){

        assert.equal(arrayTest[5],"Fizz","l'index ne retourne pas la bonne valeur");
    })

    it("should test des index divisible par 5", function(){

        assert.equal(arrayTest[20],"Fizz","l'index ne retourne pas la bonne valeur");
    })

    it("should test des index divisible par 5", function(){

        assert.equal(arrayTest[40],"Fizz","l'index ne retourne pas la bonne valeur");
    })

    it("should test des index divisible par 5", function(){

        assert.equal(arrayTest[50],"Fizz","l'index ne retourne pas la bonne valeur");
    })

    it("should test des index divisible par 5", function(){

        assert.equal(arrayTest[70],"Fizz","l'index ne retourne pas la bonne valeur");
    })

    it("should test des index divisible par 5", function(){

        assert.equal(arrayTest[100],"Fizz","l'index ne retourne pas la bonne valeur");
    })
//////////////////////////////////////////////////////////////////////////////////

    it("should test des index divisible par 3 & 5", function(){
        assert.equal(arrayTest[15],"FizzBuzz","l'index ne return pas la bonne valeur");
    })

    it("should test des index divisible par 3 & 5", function(){
        assert.equal(arrayTest[30],"FizzBuzz","l'index ne return pas la bonne valeur");
    })

    it("should test des index divisible par 3 & 5", function(){
        assert.equal(arrayTest[45],"FizzBuzz","l'index ne return pas la bonne valeur");
    })

    it("should test des index divisible par 3 & 5", function(){
        assert.equal(arrayTest[60],"FizzBuzz","l'index ne return pas la bonne valeur");
    })

    it("should test des index divisible par 3 & 5", function(){
        assert.equal(arrayTest[75],"FizzBuzz","l'index ne return pas la bonne valeur");
    })

    it("should test des index divisible par 3 & 5", function(){
        assert.equal(arrayTest[90],"FizzBuzz","l'index ne return pas la bonne valeur");
    })
/////////////////////////////////////////////////////////////////////////////   

    it("should test de la longueur de l'array", function(){

        assert.strictEqual(arrayTest.length,101,"l'array n'est pas egal à 100");
    })

})
