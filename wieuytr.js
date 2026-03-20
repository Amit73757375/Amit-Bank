const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click",function(){
const loginPage = document.getElementById("login-page");
    loginPage.style.display = "none";
const transactionArea = document.getElementById("transaction-area");
transactionArea.style.display = "block"
});
//Deposit button event handel
const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click",function(){
 const depositNumber = getInputNumber("deposit-amount");
    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);
    document.getElementById("deposit-amount").value = "";
});
function updateSpanText(id , depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}
//withdraw button event handel
const withdrawBtn = document.getElementById("add-withdraw");
withdrawBtn.addEventListener("click",function(){
const withdrawNumber = getInputNumber("withdraw-amount");
updateSpanText("current-withdraw",withdrawNumber);
    document.getElementById("withdraw-amount").value = "";
    updateSpanText("current-balance", -1*withdrawNumber);
});
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}