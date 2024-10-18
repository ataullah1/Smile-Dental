// console.log("Test");
// const a = () => {
//   let a = 5;
//   return a;
// };
// console.log(a());

// const b = () => "Hello";
// console.log(b());

// const lang = ["Javascript", "Python", "Java", "c"];

// const arrLen = (arr, func) => {
//   let lenArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     lenArr.push(element);
//   }
// };

// const callFunc = (lang, () => {});

let second = 0;

setInterval(() => {
  second++;
  if (second == 11) {
    second = 0;
  }
  console.log(second);
}, 1000);
