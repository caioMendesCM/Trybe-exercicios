const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addEntrie(obj, key, value) {
  obj[key] = value;
}

function listKeys(obj) {
  Object.keys(obj).forEach((key) => {
    console.log(key);
  });
}

function getObjectSize(obj) {
  return Object.keys(obj).length;
}

function listValues(obj) {
  Object.values(obj).forEach((value) => {
    console.log(value);
  });
}

function allLessons(){
  return Object.assign({}, {lesson1, lesson2, lesson3});
}

function getTotalStudents(lessons) {
  let students = 0;
  for(const lesson in lessons) {
    students += lessons[lesson].numeroEstudantes;
  }

  return students;
}

function getValueByNumber(obj, position) {
  let i = 0;
  for (const key in obj) {
    if (position === i) {
      return obj[key];
    } else {
      i += 1;
    }
  }
}

function verifyPair(obj, key, value) {
  let result = false;
  for(const innerKey in obj) {
    if (innerKey === key && obj[innerKey] === value) {
      result = true;
    }
  }
  return result;
}


// Bonus 

function getTeacherSubject (lessons, teacher) {
  for(const lesson in lessons) {
    if(lessons[lesson].professor === teacher) {
      return lessons[lesson].materia;
    }
  }
}

function getNumberOfStudentsMath (lessons, teacher) {
  let total = 0;
  
  for (const lesson in lessons) {
    if(lessons[lesson].materia === getTeacherSubject(lessons, teacher)) {
      total += lessons[lesson].numeroEstudantes;
    }
  }

  return total;
}

function createReport(lessons, teacher) {

  const aulas = [];

  for (const lesson in lessons) {
    if(lessons[lesson].professor === teacher) {
      aulas.push(lessons[lesson].materia);
    }
  }

  let report = {
    professor: teacher, 
    aulas: aulas, 
    estudantes: getNumberOfStudentsMath(lessons, teacher)
  }

  return report;
}

console.log(createReport(allLessons(), 'Maria Clara'));
