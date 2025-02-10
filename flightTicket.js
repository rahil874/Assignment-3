function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
  let baseFare = 300;

    if (classType === "Business") {
    baseFare += 200;
  } else if (classType === "First") {
    baseFare += 500;
  }

    if (luggageWeight > 20) {
    let extraLuggage = Math.ceil((luggageWeight - 20) / 10); 
    baseFare += extraLuggage * 50;
  }

  if (isStudent) {
    baseFare *= 0.85; 
  } else if (isSenior) {
    baseFare *= 0.9; 
  }

  return `Final Fare: $${baseFare.toFixed(2)}`;
}


console.log(calculateFlightFare("Economy", 35, true, false));
