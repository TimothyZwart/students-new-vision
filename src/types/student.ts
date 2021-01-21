type Id = {
  $oid: string;
};
type Test = {
  subject: string;
  value: number;
};
type Student = {
  _id: Id;
  name: string;
  grade: number;
  scores: Test[];
};

export default Student;
