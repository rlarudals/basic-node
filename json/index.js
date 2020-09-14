const students = [
  {
    name: "오민형",
    age: 18,
    gender: "m",
    grade: 2,
    printHandler: () => {
      console.log(`오민형은 18세 입니다.`);
    },
  },
  {
    name: "방효진",
    age: 18,
    gender: "fm",
    grade: 2,
    printHandler: () => {
      console.log(`방효진은 18세 입니다.`);
    },
  },
];

console.log(students[1].name);

students[1].printHandler();
