function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (x: number, y: number) => number;
combineValues = add;
// combineValues = printResult;
//combineValues = 5;

console.log(combineValues(8, 5));

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// //USed for the functions which does not return anything
// function printResult(num: number): void {
//   console.log("Result: " + num);
// }

// //Same as above but can used with return keyword too
// function printResult(num: number): void {
//   console.log("Result: " + num);
//   return;
// }

// //Can use undefined in TS as well but have to end with return keyword, just for demo purpose only
// function printResult(num: number): undefined {
//   console.log("Result: " + num);
//   return;
// }
