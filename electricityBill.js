function calculateElectricityBill(units, timeOfDay) {
  let rate;

  if (units <= 100) {
    rate = 5;
  } else if (units <= 300) {
    rate = 4;
  } else {
    rate = 3;
  }

  let totalBill = units * rate;

    if (timeOfDay >= 20 || timeOfDay < 8) {
    totalBill *= 1.1;
  }

  return `Total Bill: $${totalBill.toFixed(2)}`;
}


console.log(calculateElectricityBill(100, 10)); // Normal rate: $250.00
