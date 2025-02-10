function isEligibleForJob(age, experience, qualification) {
  if (
    age >= 21 &&
    age <= 55 &&
    experience >= 2 &&
    qualification === "Bachelor's Degree"
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isEligibleForJob(20, 2, "Bachelor's Degree"));
