function getGrade(s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;
  if (90 <= score && score <= 100) return "A";
  if (80 <= score && score < 90) return "B";
  if (70 <= score && score < 80) return "C";
  if (60 <= score && score < 70) return "D";
  if (0 <= score && score < 60) return "F";
}
