import Student from '../types/student';

export type StudentNameAndGrade = {
  grade: number;
  name: string;
};
export function groupByGrade(students: Student[]): StudentNameAndGrade[][] {
  // Hash Map
  const map = new Map<number, StudentNameAndGrade[]>();
  for (let student of students) {
    if (!map.has(student.grade)) {
      map.set(student.grade, []);
    }
    const listOfSameGradeStudents = map.get(student.grade);
    listOfSameGradeStudents?.push({ grade: student.grade, name: student.name });
  }
  const listOfStudentLists: StudentNameAndGrade[][] = [];
  for (let list of map.values()) {
    listOfStudentLists.push(list);
  }
  return listOfStudentLists;
}
export default groupByGrade;
