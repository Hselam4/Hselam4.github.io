const initialAmount = +prompt("enter initial amount");
const annualInterest = +prompt("enter annualInterest");
const numYears = +prompt("enter number years ");
let monthlyRate = annualInterest/12;
monthlyRate = monthlyRate/100;
const months = numYears * 12;

let balance =  initialAmount;
for (let i = 1; i <= months; i++){
    balance = balance + (monthlyRate * balance);
}
console.log("expect  1100 + if  1000 at 10% for 1 year ", balance);
