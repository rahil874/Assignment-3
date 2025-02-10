function choosePlan(planType, wantsTrainer, wantsDietPlan) {
  if (planType === "VIP") {
    return "VIP ($80/month)";
  }
  if (planType === "Premium" && wantsDietPlan) {
    return "VIP ($80/month) - Required for Diet Plan";
  }
  if (planType === "Premium") {
    return "Premium ($50/month)";
  }
  if (planType === "Basic" && (wantsTrainer || wantsDietPlan)) {
    return "Upgrade to Premium or VIP for additional services";
  }
  return "Basic ($20/month)";
}

console.log(choosePlan("Basic", false, false)); // Basic ($20/month)
