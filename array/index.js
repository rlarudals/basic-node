const arr = [];
console.log(`현재 arr : ${arr}`);

setTimeout(() => {
  console.log("데이터를 1개 추가 합니다. push()");
  arr.push("가");
  console.log(`현재 arr : ${arr}`);
}, 1000);

setTimeout(() => {
  console.log("데이터를 1개 추가 합니다. push()");
  arr.push("나");
  console.log(`현재 arr : ${arr}`);
}, 2000);

setTimeout(() => {
  console.log("데이터를 1개 추가 합니다. push()");
  arr.push("다");
  console.log(`현재 arr : ${arr}`);
}, 3000);
