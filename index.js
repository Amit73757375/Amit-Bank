const loginBtn = document.getElementById("login-btn");// Assuming you have a button with id "login-btn"
loginBtn.addEventListener("click",function(){

const loginPage = document.getElementById("login-page");// Assuming you have an element with id "login-page"
    loginPage.style.display = "none";// Hide the login page when clicked
const transactionArea = document.getElementById("transaction-area");// Assuming you have an element with id "transaction-area"
transactionArea.style.display = "block"// Show the transaction area when clicked
});
const depositBtn = document.getElementById("add-deposit");// Assuming you have a button with id "add-deposit"
depositBtn.addEventListener("click",function(){
    const depositAmount = document.getElementById("deposit-amount").value;// Get the value from the input field with id "deposit-amount"
    const depositNumber = parseFloat(depositAmount);// Convert the value to a number

    const currentDeposit = document.getElementById("current-deposit").innerText;// Get the current deposit value from the element with id "current-deposit"
    const currentDepositNumber = parseFloat(currentDeposit);// Convert the current deposit value to a number
    const totalDeposit = depositNumber + currentDepositNumber;// Calculate the total deposit
    document.getElementById("current-deposit").innerText = totalDeposit;// Update the current deposit value in the element with id "current-deposit"
    document.getElementById("deposit-amount").value = "";// Clear the input field after adding the deposit

    const currentBalance = document.getElementById("current-balance").innerText;// Get the current balance value from the element with id "current-balance"
    const currentBalanceNumber = parseFloat(currentBalance);// Convert the current balance value to a number
    const totalBalance = depositNumber + currentBalanceNumber;// Calculate the total balance
    document.getElementById("current-balance").innerText = totalBalance;// Update the current balance value in the element with id "current-balance"
});

const withdrawBtn = document.getElementById("add-withdraw");// Assuming you have a button with id "add-withdraw"
withdrawBtn.addEventListener("click",function(){
    const withdrawAmount = document.getElementById("withdraw-amount").value;// Get the value from the input field with id "withdraw-amount"
    const withdrawNumber = parseFloat(withdrawAmount);// Convert the value to a number
    const currentWithdraw = document.getElementById("current-withdraw").innerText;// Get the current withdraw value from the element with id "current-withdraw"
    const currentWithdrawNumber = parseFloat(currentWithdraw);// Convert the current withdraw value to a number
    const totalWithdraw = withdrawNumber + currentWithdrawNumber;// Calculate the total withdraw
    document.getElementById("current-withdraw").innerText = totalWithdraw;// Update the current withdraw value in the element with id "current-withdraw"
    document.getElementById("withdraw-amount").value = "";// Clear the input field after adding the withdraw

    const currentBalance = document.getElementById("current-balance").innerText;// Get the current balance value from the element with id "current-balance"
    const currentBalanceNumber = parseFloat(currentBalance);// Convert the current balance value to a number
    const totalBalance = currentBalanceNumber -withdrawNumber;// Calculate the total balance
    document.getElementById("current-balance").innerText = totalBalance;// Update the current balance value in the element with id "current-balance"
});
