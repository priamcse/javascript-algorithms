class Student {
  constructor(name) {
    this.name = name;
  }
  learn() {
    return `${this.name} leaning`;
  }
}
const student = new Student("priam");
console.log(student.learn());

class Teacher extends Student {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    return `${this.name} ${this.degree} teaching`;
  }
}

const teacher = new Teacher("John Smith", "Engineer");

console.log(teacher.teach());
