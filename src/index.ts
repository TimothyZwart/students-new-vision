import express from 'express';
import { readFileSync } from 'fs';
import findLowestAverageStudents from './util/findLowestAverages';
import groupByGrade from './util/groupByGrade';

const port = 5000;

const students = JSON.parse(readFileSync('./students.json', 'utf8'));

const lowAverageStudents = findLowestAverageStudents(students);
console.log('Students with lowest averages: ', lowAverageStudents);

const sortedStudents = groupByGrade(students);
console.log('Students in sorted order: ', sortedStudents);

const app = express();

app.get('/', function (req, res) {
  res.send(`<h1>Lowest Average</h1>
  ${lowAverageStudents.map((student) => {
    return `<p>${JSON.stringify(student)}</p>`;
  })}
  <br />
  <h1>Group By Grade</h1>
  ${sortedStudents.map((list) => {
    return `<div>${list.map((student) => {
      return `<p>${JSON.stringify(student)}</p>`;
    })}</div>`;
  })}
  `);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
