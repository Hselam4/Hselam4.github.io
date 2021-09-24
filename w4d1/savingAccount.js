"use strict";
const { Account } = require("./account");

class SavingsAccount extends Account {
    
    constructor(number, interest) {
        super(number)
        this.setInteresRate(interestRate)////setInterest
    }
    
    setInterestRate(interestRate) {
        this._interestRate = interestRate
    }
    
    getInterest() {
        return this._interest;
    }
    
    addInterest() {
        let interestAmount = (this._balance * this._interestRate) / 100
        this.deposit(interestRateAmount);
    }
   
    toString() {
        return "SavingsAccount " + this._number + ":" + " balance: " + this._balance + " interestRate: " + this._interestRate;
    }
    endOfMonth() {
        return "Interest added SavingsAccount " + this._number + ":" + " balance: " + this._balance + " interestRate: " + this._interestRate;
    }
}

exports.SavingsAccount = SavingsAccount;