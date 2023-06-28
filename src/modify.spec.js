const path = require('path');
const ScoreCounter = require('score-tests');
const { getObjectKeys } = require('./modify');

const testSuiteName = 'Modify Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('getObjectKeys - only gets enumerable keys, and does NOT use hasOwnProperty', () => {
    function Person(name) {
      this.name = name;
    }
    Person.prototype.sayName = function () {
      return `My name is ${this.name}`;
    };

    const person = new Person('Bob');
    expect(getObjectKeys(person)).toEqual(['name']);
    expect(getObjectKeys(Person.prototype)).toEqual(['sayName']);

    expect(getObjectKeys({ a: 1, b: 2 })).toEqual(['a', 'b']);
    expect(getObjectKeys({ a: 1, b: 2, c: 3, d: 4 })).toEqual(['a', 'b', 'c', 'd']);
    expect(getObjectKeys({})).toEqual([]);
    expect(getObjectKeys({ 1: 'Still', 2: 'works' })).toEqual(['1', '2']);

    const stringContent = getObjectKeys.toString();
    expect(stringContent.includes('.hasOwn')).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getObjectKeys - does it in one line with an implicit return', () => {
    const stringContent = getObjectKeys.toString();
    const numLines = stringContent.split('\n').length;
    expect(numLines).toBe(1);

    expect(stringContent.includes('for (')).toBeFalsy();
    expect(stringContent.includes('return')).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
