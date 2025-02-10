function calculateGrade(marks, attendance) {
  if (attendance > 90 && marks <= 95) {
    marks = marks + 5;
  }
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
