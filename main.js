"use strict";

const grades = [
  { name: "Макар", score: 85 },
  { name: "Денис", score: 92 },
  { name: "Анна", score: 78 },
  { name: "Даша", score: 88 },
  { name: "Студент_X", score: 45 },
];

function calculateAverage(data) {
  if (data.length === 0) {
    return 0;
  }

  const totalScore = data.reduce((sum, student) => sum + student.score, 0);
  return totalScore / data.length;
}

function findTopStudent(data) {
  if (data.length === 0) {
    return null;
  }

  const topStudent = data.reduce((top, student) =>
    student.score > top.score ? student : top,
  );
  return topStudent.name;
}

function filterFailed(data, passScore) {
  return data
    .filter((student) => student.score < passScore)
    .map((student) => student.name);
}

function addLetterGrade(data) {
  return data.map((student) => ({
    ...student,
    letter: student.score >= 90 ? "A" : student.score >= 75 ? "B" : "C",
  }));
}

function printReport() {
  console.log(`Средний балл группы: ${calculateAverage(grades).toFixed(1)}`);
  console.log(`Лучший студент: ${findTopStudent(grades)}`);
  console.log(`Не сдали (ниже 60 баллов): ${filterFailed(grades, 60).join(", ")}`);
  console.log("Оценки с буквенными обозначениями:");
  console.log(JSON.stringify(addLetterGrade(grades), null, 2));
}

if (require.main === module) {
  printReport();
}

module.exports = {
  grades,
  calculateAverage,
  findTopStudent,
  filterFailed,
  addLetterGrade,
};