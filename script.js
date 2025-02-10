//1. ATM Withdrawal System

// function atmWithdrawal(balance, amount, pin, enteredPin) {
//   // Check if entered PIN matches the actual PIN
//   if (enteredPin !== pin) {
//     return "Incorrect PIN";
//   }

//   // Check if the withdrawal amount is greater than the balance
//   if (amount > balance) {
//     return "Insufficient Funds";
//   }

//   // Check if the amount is a multiple of 100
//   if (amount % 100 !== 0) {
//     return "Enter amount in multiples of 100";
//   }

//   // If all checks pass, proceed with the withdrawal
//   balance -= amount;
//   return `Withdrawal successful. New balance: ${balance}`;
// }

// console.log(atmWithdrawal(2000, 1500, 1234, 1234));











// function calculateFinalAmount(orderAmount) {
//   if (orderAmount > 1000) {
//       orderAmount = orderAmount * 0.8;
//       return orderAmount;
//     //console.log("Order Amount:", orderAmount);
//   }
//   if (orderAmount < 1000 && orderAmount > 500) {
//       orderAmount = orderAmount * 0.9;
//       return orderAmount;
//     //console.log("Order Amount:", orderAmount);
//   }
//   if (orderAmount < 500 && orderAmount > 50) {
//       orderAmount = orderAmount * 1;
//       return orderAmount;
//     //console.log("Order Amount:", orderAmount);
//   }
// //   if (orderAmount > 50) {
// //       orderAmount = orderAmount * 1;
// //       return orderAmount;
// //     //console.log("Order Amount:", orderAmount);
// //   }
//   if (orderAmount < 50) {
//       orderAmount = orderAmount + 10;
//       return orderAmount;
//     //console.log("Final Amount:", orderAmount);
//   }
// }



// console.log("Final Amount is", calculateFinalAmount(8000));
// console.log("Final Amount is", calculateFinalAmount(800));
// console.log("Final Amount is", calculateFinalAmount(400));
// console.log("Final Amount is", calculateFinalAmount(40));





// function calculateFinalAmount(orderAmount) {
//     let discountedAmount = orderAmount;

//     if (orderAmount > 1000) {
//         discountedAmount = orderAmount * 0.8;
//     } else if (orderAmount >= 500) {
//         discountedAmount = orderAmount * 0.9;
//     }
//     let finalAmount = discountedAmount;
//     if (orderAmount < 50) {
//         finalAmount = discountedAmount + 10;
//     }
//     return finalAmount;
// }

// console.log("Final Amount is", calculateFinalAmount(8000));
// console.log("Final Amount is", calculateFinalAmount(800));
// console.log("Final Amount is", calculateFinalAmount(400));
// console.log("Final Amount is", calculateFinalAmount(40));





function calculateGrade(marks, attendance) {
    if (attendance>90  && marks <=95){marks= marks+5}
    let grade;
    switch (true) {
      case marks > 90:
        grade = "A";
        break;
      case marks >= 80 && marks < 90:
        grade = "B";
        break;
      case marks >= 70 && marks < 80:
        grade = "C";
        break;
      case marks >= 60 && marks < 70:
        grade = "D";
        break;
      default:
        grade = "F";
    }
    return grade;
}
console.log(calculateGrade(99, 91));
