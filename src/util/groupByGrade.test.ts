import groupByGrade from './groupByGrade';

const data = [
  {
    _id: {
      $oid: '5dc197651c9d4400004c6410',
    },
    name: 'A',
    grade: 6,
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
        value: 65,
      },
    ],
  },
  {
    _id: {
      $oid: '5dc197651c9d4400004c6410',
    },
    name: 'D',
    grade: 7,
    scores: [
      {
        subject: 'Math',
        value: 65,
      },
    ],
  },
];

test('Basic Test Test', () => {
  expect(groupByGrade(data)).toEqual(
    expect.arrayContaining([
      expect.arrayContaining([expect.objectContaining({ grade: 6, name: 'A' })]),
      expect.arrayContaining([
        { grade: 7, name: 'D' },
        { grade: 7, name: 'B' },
      ]),
      expect.arrayContaining([expect.objectContaining({ grade: 8, name: 'C' })]),
    ]),
  );
});
