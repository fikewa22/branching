var numericalGrade = 92;
var letterGrade;

switch (true) {
  case numericalGrade >= 90:
    letterGrade = "A";
    break;
  case numericalGrade >= 89:
    letterGrade = "B";
    break;
  case numericalGrade >= 79:
    letterGrade = "C";
    break;
  case numericalGrade >= 69:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}

console.log(`Numerical grade: ${numericalGrade}, Letter grade: ${letterGrade}`);