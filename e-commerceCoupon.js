function applyCoupon(orderAmount, couponCode) {
  let finalPrice = orderAmount;

  if (couponCode === "DISCOUNT10" && orderAmount > 500) {
    finalPrice = orderAmount * 0.9; 
  } else if (couponCode === "FREESHIP" && orderAmount > 200) {
    
    return orderAmount; 
  }

  return finalPrice;
}

console.log(applyCoupon(600, "DISCOUNT10")); // 540 (10% off)