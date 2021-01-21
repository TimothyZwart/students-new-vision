import Student from '../types/student';

export type StudentAverage = {
  grade: number;
  name: string;
  average: number;
};

function getStudentAverage(student: Student): StudentAverage {
  const { scores, grade, name } = student;
  if (scores.length == 0) {
    return { grade: grade, name: name, average: 0 };
  }
  let total = 0;

  for (let score of scores) {
    total = total + score.value;
  }
  let average = total / scores.length;

  return { grade: grade, name: name, average: average };
}

export function findLowestAverages(students: Student[]): StudentAverage[] {
  //Create A hashmap
  const map = new Map<number, StudentAverage>();

  for (let student of students) {
    let lowsestAvrageInGrade = Number.POSITIVE_INFINITY;
    if (map.has(student.grade)) {
      lowsestAvrageInGrade = map.get(student.grade)?.average as number;
    }
    const currentStudentAverage = getStudentAverage(student);
    if (currentStudentAverage.average <= lowsestAvrageInGrade) {
      map.set(currentStudentAverage.grade, currentStudentAverage);
    }
  }

  let lowestAveragedStudents = [];
  for (let student of map.values()) {
    lowestAveragedStudents.push(student);
  }

  return lowestAveragedStudents;
}

export default findLowestAverages;
