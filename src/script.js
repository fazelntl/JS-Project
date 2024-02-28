const root = function (x) {
  let res = x * x;
  return res * 2;
};
console.log(root(10), "the result");

let up = function (x, y) {
  if (x > y) return true;
  else if (x < y) return false;
};

// console.log(up(9, 5));
// let a = 20;
// if (a == 20) {
//   for (let runner = 0; runner < 1; runner++) {
//     console.log("hel");
//     alert("Welcome to Blandora" + runner);
//     prompt("Welcome to Blandora" + runner);
//   }
// }

// switch (prompt("Are you sure to continue")){
//     case 'yes':
//         alert("Welcome")
//         break;

//     case 'no':
//         alert("F.... u ")
//         break
// }
let hash = "";
for (let x = 0; x < 7; x++) {
  hash += "#";
  console.log(hash);
}

for (let x = 0; x <= 100; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("fizz buzz");
  } else if (x % 3 == 0) {
    console.log("Fizz");
  } else if (x % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(x);
  }
}

for (let v = 0; v < 9; v++) {
  for (let v = 0; v < 9; v++) {
    console.log("#");
  }
}
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person);

let arr = [1, 2, 3, 45, "fazel", "IS MY       NAME       "];
console.log(arr[4]);
console.log(arr[3]);
console.log(arr.length);
console.log(arr[4]);
console.log(arr[4].toUpperCase());
console.log(arr[5].toLowerCase());
console.log(typeof arr[5]);
arr.push(5);
console.log(arr[6]);
console.log(arr);
arr.pop();
console.log(arr);

let obj = { a: 2, b: 4, c: 6 };
console.log("a" in obj);
delete obj.a;
console.log(obj);
console.log(arr.trim());

