"use strict";
const assert = require("assert");
const methods = require("./codeQuality1.js");
const isVowel = methods.isVowel;
const computeCommission = methods.computeCommission;
const calcDownpayment = methods.calcDownpayment;
const convertFahrenheit = methods.convertFahrenheit;
const  calcDistance =  methods.calcDistance;
const  compoundInterest =  methods.compoundInterest;

describe("isVowel", function () {
    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    }); 
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    }); 
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel(""), false);
    });
});

describe("test of ComputCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeCommission(true, 3500), 70);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeCommission(false, 3500), 105);
    });
   });

   describe("compoundInterest",function(){
    it("compoundInterest", function(){
      assert.strictEqual(compoundInterest(100,10,1),110.51248958123354);
    });
    it("compoundInterest", function(){
      assert.strictEqual(compoundInterest(10000,5,10),16453.089347785855);
    });

      });

   describe("calcDownpayment",function(){
    it("tests 40000 cost", function(){
      assert.strictEqual(calcDownpayment(40000),2000);
    });
        it("tests 50000 cost", function(){
          assert.strictEqual(calcDownpayment(50000),2500);
        });
        it("tests 100000 cost", function(){
          assert.strictEqual(calcDownpayment(100000),7500);
        });
        it("tests 200000 cost", function(){
          assert.strictEqual(calcDownpayment(200000),5000);
        });
      });

      describe("convertFahrenheit",function(){
        it("convertFahrenheit", function(){
          assert.strictEqual(convertFahrenheit(32),0);
        });
            it("convertFahrenheit", function(){
              assert.strictEqual(convertFahrenheit(0),-17.77777777777778);
            });
            it("convertFahrenheit", function(){
              assert.strictEqual(convertFahrenheit(212),100);
            });
            it("convertFahrenheit", function(){
              assert.strictEqual(convertFahrenheit(100),37.77777777777778);
            });
          });

          describe("calcDistance",function(){
            it("calcDistance", function(){
              assert.strictEqual(calcDistance(0,0,5,5),7.0710678118654755);
            });
              });
  