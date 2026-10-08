"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const {
  grades,
  calculateAverage,
  findTopStudent,
  filterFailed,
  addLetterGrade,
} = require("../main");

test("calculateAverage returns the group's average score", () => {
  assert.equal(calculateAverage(grades), 77.6);
});

test("calculateAverage returns zero for an empty group", () => {
  assert.equal(calculateAverage([]), 0);
});

test("findTopStudent returns the name with the highest score", () => {
  assert.equal(findTopStudent(grades), "Денис");
});

test("findTopStudent returns null for an empty group", () => {
  assert.equal(findTopStudent([]), null);
});

test("filterFailed returns names below the pass score", () => {
  assert.deepEqual(filterFailed(grades, 60), ["Студент_X"]);
});

test("addLetterGrade assigns letters without changing the original data", () => {
  const result = addLetterGrade(grades);

  assert.deepEqual(
    result.map((student) => student.letter),
    ["B", "A", "B", "B", "C"],
  );
  assert.equal(Object.hasOwn(grades[0], "letter"), false);
});