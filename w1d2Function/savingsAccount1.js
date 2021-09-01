let amount, initialAmount, interestRate, years;
function compoundInterest(initialAmount, interestRate, years) {
amount = initialAmount * (1 + ((interestRate / 100) / 12)) ** (years * 12);
return amount;
}
compoundInterest(initialAmount, interestRate, years)
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));