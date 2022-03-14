const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage(studentList, gradeList) {
  return studentList.map((student, index) => {
    const newObj = {
      name: student,
      average:
        gradeList[index].reduce((acc, curr) => acc + curr) /
        gradeList[index].length,
    };
    return newObj;
  });
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];


console.log(studentAverage(students, grades));