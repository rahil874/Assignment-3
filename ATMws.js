function atmWithdrawal(balance, amount, pin, enteredPin) {
  // Check if entered PIN matches the actual PIN
  if (enteredPin !== pin) {
    return "Incorrect PIN";
  }

  // Check if the withdrawal amount is greater than the balance
  if (amount > balance) {
    return "Insufficient Funds";
  }

  // Check if the amount is a multiple of 100
  if (amount % 100 !== 0) {
    return "Enter amount in multiples of 100";
  }

  // If all checks pass, proceed with the withdrawal
  balance -= amount;
  return `Withdrawal successful. New balance: ${balance}`;
}

console.log(atmWithdrawal(2000, 1500, 1234, 1234));
