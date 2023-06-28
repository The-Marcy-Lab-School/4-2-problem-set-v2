const path = require('path');
const ScoreCounter = require('score-tests');
const {
  makeCounter,
  Circle,
  Teacher,
} = require('./from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('makeCounter - returns a function that increments by 1, starting from the given number', () => {
    const countFromFour = makeCounter(4);
    expect(countFromFour()).toBe(5);
    expect(countFromFour()).toBe(6);
    expect(countFromFour()).toBe(7);

    const countFromZero = makeCounter(0);
    expect(countFromZero()).toBe(1);
    expect(countFromZero()).toBe(2);
    expect(countFromZero()).toBe(3);

    const countFromNegative = makeCounter(-2);
    expect(countFromNegative()).toBe(-1);
    expect(countFromNegative()).toBe(0);
    expect(countFromNegative()).toBe(1);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('makeCounter - incrementor function starts from 1 if no argument provided', () => {
    const countFromOne = makeCounter();
    expect(countFromOne()).toBe(1);
    expect(countFromOne()).toBe(2);
    expect(countFromOne()).toBe(3);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Circle - constructor function adds only instance properties to each instance, not methods', () => {
    const radius1 = 4;
    const color1 = 'red';
    const circle1 = new Circle(radius1, color1);
    expect(circle1).toEqual({ radius: radius1, color: color1 });

    const radius2 = 8;
    const color2 = 'green';
    const circle2 = new Circle(radius2, color2);
    expect(circle2).toEqual({ radius: radius2, color: color2 });

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Circle.getArea - correctly returns the area of the circle', () => {
    const radius1 = 13;
    const color1 = 'white';
    const circle1 = new Circle(radius1, color1);
    expect(Math.PI * radius1 ** 2).toEqual(circle1.getArea());

    const radius2 = 7;
    const color2 = 'pink';
    const circle2 = new Circle(radius2, color2);
    expect(Math.PI * radius2 ** 2).toEqual(circle2.getArea());

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Circle.getCircumference - correctly returns the circumference of the circle', () => {
    const radius1 = 91;
    const color1 = 'gray';
    const circle1 = new Circle(radius1, color1);
    expect(2 * Math.PI * radius1).toEqual(circle1.getCircumference());

    const radius2 = 12;
    const color2 = 'yellow';
    const circle2 = new Circle(radius2, color2);
    expect(2 * Math.PI * radius2).toEqual(circle2.getCircumference());

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Circle.draw - returns the right message with color of the circle', () => {
    const radius1 = 91;
    const color1 = 'purple';
    const circle1 = new Circle(radius1, color1);
    expect(circle1.draw()).toEqual(`Drawing a ${color1} circle.`);

    const radius2 = 12;
    const color2 = 'orange';
    const circle2 = new Circle(radius2, color2);
    expect(circle2.draw()).toEqual(`Drawing a ${color2} circle.`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Circle.changeColor - changes the color of the circle', () => {
    const radius1 = 91;
    const color1 = 'purple';
    const circle1 = new Circle(radius1, color1);
    expect(circle1.color).toEqual(color1);
    const newColor1 = 'blue';
    expect(circle1.changeColor(newColor1)).toEqual(newColor1);
    expect(circle1.color).toEqual(newColor1);

    const radius2 = 12;
    const color2 = 'orange';
    const circle2 = new Circle(radius2, color2);
    expect(circle2.color).toEqual(color2);
    const newColor2 = 'green';
    circle2.changeColor(newColor2);
    expect(circle2.color).toEqual(newColor2);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Circle - adds methods to the prototype', () => {
    const circle1 = new Circle(10, 'yellow');
    const circlePrototype = Object.getPrototypeOf(circle1);
    expect(Object.getOwnPropertyNames(circlePrototype).sort()).toEqual([
      'changeColor',
      'constructor',
      'draw',
      'getArea',
      'getCircumference',
    ]);
  });

  it('Teacher - constructor function adds only instance properties to each instance', () => {
    let name = 'Mr. Smith';
    let school = 'Marcy Lab';
    let grade = 10;
    let subject = 'Coding';
    const teacher1 = new Teacher(name, school, grade, subject);
    expect(teacher1).toEqual({ name, school, grade, subject, students: [] });

    name = 'Mrs. Jones';
    school = 'Marcy Lab';
    grade = 11;
    subject = 'English';
    const teacher2 = new Teacher(name, school, grade, subject);
    expect(teacher2).toEqual({ name, school, grade, subject, students: [] });

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Teacher.addStudent - adds a student to the teacher\'s students array', () => {
    const name = 'Mr. Smith';
    const school = 'Marcy Lab';
    const grade = 10;
    const subject = 'Coding';
    const teacher = new Teacher(name, school, grade, subject);

    const student1 = { name: 'John', grade: 10 };
    teacher.addStudent(student1);
    expect(teacher.students).toEqual([student1]);

    const student2 = { name: 'Jane', grade: 10 };
    teacher.addStudent(student2);

    expect(teacher.students).toEqual([student1, student2]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // changeSchools
  it('Teacher.changeSchools - changes the school of the teacher', () => {
    const name = 'Maya';
    const school = 'Uncommon Schools';
    const grade = 10;
    const subject = 'Leadership';
    const teacher = new Teacher(name, school, grade, subject);

    const newSchool1 = 'Marcy Lab';
    expect(teacher.changeSchools(newSchool1)).toEqual(newSchool1);
    expect(teacher.school).toEqual(newSchool1);

    const newSchool2 = 'Goodwin';
    expect(teacher.changeSchools(newSchool2)).toEqual(newSchool2);
    expect(teacher.school).toEqual(newSchool2);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Teacher - adds methods to the prototype', () => {
    const teacher = new Teacher('Maya', 'Marcy', 'College', 'Coding');
    const teacherPrototype = Object.getPrototypeOf(teacher);
    expect(Object.getOwnPropertyNames(teacherPrototype).sort()).toEqual([
      'addStudent',
      'changeSchools',
      'constructor',
    ]);
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
