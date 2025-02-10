function calculateFinalAmount(orderAmount) {
  if (orderAmount > 1000) {
      orderAmount = orderAmount * 0.8;
      return orderAmount;
   }
  if (orderAmount < 1000 && orderAmount > 500) {
      orderAmount = orderAmount * 0.9;
      return orderAmount;
    }
  if (orderAmount < 500 && orderAmount > 50) {
      orderAmount = orderAmount * 1;
      return orderAmount;
      }

  if (orderAmount < 50) {
      orderAmount = orderAmount + 10;
      return orderAmount;

  }
}

console.log("Final Amount is", calculateFinalAmount(8000));
console.log("Final Amount is", calculateFinalAmount(800));
console.log("Final Amount is", calculateFinalAmount(400));
console.log("Final Amount is", calculateFinalAmount(40));
