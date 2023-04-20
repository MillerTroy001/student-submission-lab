"use strict";
// 1.
const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

const oldSubmissions = [
  { name: "Andrea", score: 20, date: "2018-01-24", passed: false },
];

// 2.
const addSubmission = (array, newName, newScore, newDate) => {
  // push to "placeholder array (parameter)"
  // dynamic destination for whatever we push
  let newPassed = null;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  array.push(newSubmission);
};

addSubmission(oldSubmissions, "James", 60, "2018-01-24");
console.log(oldSubmissions);
addSubmission(submissions, "James", 90, "2018-01-24");
console.log(submissions);

const addSubmissionV2 = (array, name, score, date) => {
  const newSubmission = {
    // name: name,
    // shorthand for object key/value pairs: we can only do this bc the key (left of :) is spelled the same as the variable (right of the :)
    name,
    // score: score,
    score,
    // date: date,
    date,
    passed: score >= 60,
  };
  array.push(newSubmission);
};

// 3.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

//deleteSubmissionByIndex(oldSubmissions, 0);
//console.log(oldSubmissions);
//deleteSubmissionByIndex(submissions, 2);
//console.log(submissions);

// 4.
const deleteSubmissionByName = (array, name) => {
  array.splice(name, 1);
};

//deleteSubmissionByName(submissions, "Jane");
//console.log(submissions);

// 5.
const editSubmission = (array, index, score) => {};

// 6.
const findSubmissionByName = (array, name) => {
  let foundName = array.find((object) => {
    //console.log(object);
    // console.log(name);
    return object.name === name;
  });
  if (foundName === undefined) {
    return `${name} is not present`;
  } else {
    return foundName;
  }
};

console.log(findSubmissionByName(submissions, "Joe")); //function seems to work, but was always coming back as undefined, when I added in that if else statement, the if always came back , never the else

// 7. "The superlative" (the most of something, can be highest, lowest, ect)
const findLowestScore = (array) => {
  // Step 1. Assign lowest score to first element (in the array)
  let lowestScoreHolder = array[0]; //array[0] is an object
  // Step 2. loop through all the things
  array.forEach((submissionFromArray) => {
    // Step 3a. check if there's a lowe score
    // Step 3b. IF there is: hand over the title of lowest score
    if (submissionFromArray.score < lowestScoreHolder.score) {
      lowestScoreHolder = submissionFromArray;
    }
  });
  // Step 4. Once we are done looping through the ENTIRE array, return lowest score.
  return lowestScoreHolder;
};
console.log(findLowestScore(submissions));

// 8.
const findAverageScore = (array) => {};

console.log(findAverageScore(submissions));

// 9.
const filterPassing = (array) => {
  let passed = array.filter((passing) => {
    return passing.passed === true;
  });
  return passed;
};
console.log(filterPassing(submissions));

// 10.
const filter90AndAbove = (array) => {
  let over90 = array.filter((over90) => {
    return over90.score >= 90;
  });
  return over90;
};
console.log(filter90AndAbove(submissions));
