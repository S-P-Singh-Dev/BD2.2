const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ages = [10, 20, 30, 15, 17, 25];
let fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
let fileSizes = [50, 200, 75, 120, 30, 90, 150];

function filterEvenNumbers(numbers) {
  let filteredResult = numbers.filter((num) => num % 2 === 0);
  return filteredResult;
}

function filterAdultAges(ages) {
  let filteredAges = ages.filter((age) => age > 18);
  return filteredAges;
}

function filterLongWords(fruits) {
  let filteredWords = fruits.filter((fruit) => fruit.length > 5);
  return filteredWords;
}

function filterSmallFiles(fileSizes, filterParam) {
  let filteredFileSizes = fileSizes.filter((size) => size < filterParam);
  return filteredFileSizes;
}

app.get('/even-numbers', (req, res) => {
  let result = filterEvenNumbers(numbers);
  res.json(result);
});

app.get('/adult-ages', (req, res) => {
  let resultAdultAges = filterAdultAges(ages);
  res.json(resultAdultAges);
});

app.get('/long-words', (req, res) => {
  let resultLongWords = filterLongWords(fruits);
  res.json(resultLongWords);
});

app.get('/small-files', (req, res) => {
  let filterParam = parseFloat(req.query.filterParam);
  let resultSmallFiles = filterSmallFiles(fileSizes, filterParam);
  res.json(resultSmallFiles);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
