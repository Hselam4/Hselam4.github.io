"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */

const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount;

// Next create a Bank class, a Bank object should have an array of Account objects, and have 
// addAccount(), addSavingsAccount(interest), 
// addCheckingAccount(overdraft) methods each of which returns the number of the 
// created account. Also add a closeAccount(number) method that closes (removes from the 
// array) the account with that number, and a accountReport() method that returns a String
class Bank {
    static nextNumber = 0;
    /**
     * Bank constructor
     */
    constructor() {
        Bank.nextNumber++;
        this._account = [];
    }
    /**
     * add accounts
     */
    addAccount() {
        this._account.push(new Account(Bank.nextNumber++))
    }
    /**
     * 
     * @param {Number} interest is interest rate
     */
    addSavingsAccount(interest) {
        this._account.push(new SavingsAccount(Bank.nextNumber++, interest))
    }
    /**
     * 
     * @param {Number} overdraft is over draft
     */
    addCheckingAccount(overdraft) {
        this._account.push(new CheckingAccount(Bank.nextNumber++, overdraft))
    }
    /**
     * 
     * @param {Number} number  is account number
     */
    closeAccount(number) {
        let index = this._account.findIndex((item) => item._number === number)
        this._account.splice(index, 1)
    }
    /**
     * 
     * @returns bank reports 
     */
    accountReport() {
        let accountReport = ""
        for (let account of this._account) {
            accountReport += account.toString() + "\n"
        }
        return accountReport;
    }
}

exports.Bank = Bank;
// console.log(Bank.nextNumber)//0
//  let bank=new Bank()
//  bank.addAccount()
//  bank.addCheckingAccount(500)
// bank.addSavingsAccount(5)
// console.log( bank.accountReport())
// console.log(new SavingsAccount().toString())
// console.log(bank._account)
// console.log("+++++++++++++++++++++++++++=\n")
// bank.closeAccount(2)
// console.log(bank._account