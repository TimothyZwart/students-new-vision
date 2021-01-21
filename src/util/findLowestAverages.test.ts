import findLowestAverages from './findLowestAverages';

const data = [
  {
    _id: {
      $oid: '5dc197651c9d4400004c6410',
    },
    name: 'A',
    grade: 7,
    scores: [
      {
        subject: 'Math',
        value: 60,
      },
    ],
  },
  {
    _id: {
      $oid: '5dc197651c9d4400004c6410',
    },
    name: 'B',
    grade: 7,
    scores: [
      {
        subject: 'Math',
        value: 65,
      },
    ],
  },
];

const data2 = [
  {
    _id: {
      $oid: '5dc197651c9d4400004c6410',
    },
    name: 'A',
    grade: 7,
    scores: [
      {
        subject: 'Math',
        value: 60,
      },
    ],
  },
  {
    _id: {
      $oid: '5dc197651c9d4400004c6410',
    },
    name: 'B',
    grade: 7,
    scores: [
      {
        subject: 'Math',
        value: 65,
      },
    ],
  },
  {
    _id: {
      $oid: '5dc197651c9d4400004c6410',
    },
    name: 'C',
    grade: 8,
    scores: [
      {
        subject: 'Math',
        value: 60,
      },
    ],
  },
  {
    _id: {
      $oid: '5dc197651c9d4400004c6410',
    },
    name: 'D',
    grade: 8,
    scores: [
      {
        subject: 'Math',
        value: 65,
      },
    ],
  },
];

test('Single Grade Test', () => {
  expect(findLowestAverages(data)).toEqual([{ average: 60, grade: 7, name: 'A' }]);
});
test('Multiple Grade Test', () => {
  expect(findLowestAverages(data2)).toEqual([
    { average: 60, grade: 7, name: 'A' },
    { average: 60, grade: 8, name: 'C' },
  ]);
});
