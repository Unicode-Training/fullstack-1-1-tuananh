//Function

// function getMessage(msg, type = "success") {
//   console.log("Hello anh em");
//   console.log(msg);
//   console.log(type);
//   return "Ahihi";
//   console.log("abc");
// }

// function getMessage() {
//   console.log("getMessage");
// }
// getMessage();

//Expression Function
// const getMessage = function () {
//   console.log("Hello");
// };
// const abc = getMessage;
// abc();

//Rest parameter
// const sum = function (a, b, ...args) {
//   console.log(a, b);
//   console.log(args);
// };
// sum(1, 2, 3, 4, 5, 6, 7, 8);

//Spread Operator
// const values = [10, 20];
// const sum = function (a, b) {
//   console.log(a, b);
// };
// sum(...values);

// let data = "An"; //Biến toàn cục
// const doSomething = function () {
//   console.log(data);
//   let a = 10; //Biến cục bộ
// };
// doSomething();
// console.log(a);

//Callback function

// const display = function (fn, ...args) {
//   console.log("display");
//   if (typeof fn === "function") {
//     fn(...args);
//   }
// };

// const doSomething = function (value, type) {
//   console.log("doSomething");
//   console.log(value);
//   console.log(type);
// };

// display(doSomething, "An", "success");

//setTimeout
// setTimeout(
//   function (value) {
//     console.log("Hello anh em", value);
//   },
//   2000,
//   "An",
// );

//setInterval
// setInterval(
//   function (value) {
//     console.log("Hello anh em", value);
//   },
//   1000,
//   "An",
// );

//Ví dụ: Ứng dụng callback
// const funcA = function (callback) {
//   setTimeout(function () {
//     console.log("funcA");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 2000);
// };
// const funcB = function (callback) {
//   setTimeout(function () {
//     console.log("funcB");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1500);
// };
// const funcC = function (callback) {
//   setTimeout(function () {
//     console.log("funcC");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 500);
// };
// funcA(function () {
//   funcB(function () {
//     funcC();
//   });
// });

//Closure
// - Hàm cho phép truy cập và giữ các biến bên ngoài phạm vi của nó

// let a = 10;
// const display = function () {
//   console.log("display");
//   let b = 20;
//   return function () {
//     console.log("showMessage");
//     console.log("a", a);
//     console.log("b", b);
//   };
// };
// const showMessage = display();
// showMessage();

//Nguyên tắc khi làm việc với biến
// - Biến toàn cục chỉ bị hủy khi tắt tab trình duyệt
// - Biến cục bộ của hàm sẽ bị hủy khi hàm thực thi xong
// - Hàm closure giữ biến cục bộ của hàm cho cho dù nó đã thực thi xong

// const counter = function () {
//   let count = 1;
//   return function () {
//     count++;
//     return count;
//   };
// };

// const increment = counter();
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// increment = null;

// const increment2 = counter();
// console.log(increment2());
// console.log(increment2());
// console.log(increment2());

// const doSomething = function () {
//   let count = 1;
//   count++;
//   return count;
// };
// console.log(doSomething());

//Lợi ích closue
// - Private được biến trong hàm
// - Vẫn giữ được giá trị
// - Tạo nhiều ngữ cảnh khác nhau

// const span = document.querySelector("span");
// const btn = document.querySelector("button");
// const counter = function () {
//   let count = 0;
//   return {
//     init() {
//       span.innerText = count;
//     },
//     increment() {
//       count++;
//       span.innerText = count;
//     },
//   };
// };
// const counterObj = counter();
// counterObj.init();
// btn.addEventListener("click", counterObj.increment);

//Arrow function
// const getMessage = () => {
//   console.log("getMessage");
// };
// getMessage();
// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// const getUser = () => ({
//   id: 1,
// });
// console.log(getUser());

// const users = [1, 2, 3, 4];
// const newUsers = users.filter((value) => value % 2 === 0);
// const newUsers = users.filter(function (value) {
//   return value % 2 === 0;
// });
// console.log(newUsers);

//Đệ quy: gọi lại chính hàm đang định nghĩa
//- Phần cơ sở: Điều kiện dừng
//- Lời gọi đệ quy
//- Cách hoạt động: Lưu kết quả sau mỗi lần đệ quy vào 1 stack nằm trên RAM, sau khi đệ quy kết thúc lấy giá trị trong stack ra để tính toán theo chiều ngược lại
// const showNumber = (n) => {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);
// const getTotal = (n) => {
//   if (n === 1) {
//     return 1;
//   }
//   const result = n + getTotal(n - 1);
//   return result;
// };
// console.log(getTotal(10));

//10 + getTotal(9)
//10 + 9 + getTotal(8)
//10 + 9 + 8 + getTotal(7)
//10 + 9 + 8 + 7 + getTotal(6)
//10 + 9 + 8 + 7 + 6 + getTotal(5)
//10 + 9 + 8 + 7 + 6 + 5 + getTotal(4)
//10 + 9 + 8 + 7 + 6 + 5 + 4 + getTotal(3)
//10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + getTotal(2)
//10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + getTotal(1)
//10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1

//Tính tổng các số chẵn từ 1 đến n (Dùng đệ quy)
const getTotal = (n) => {
  if (n < 2) {
    return 0;
  }
  if (n % 2 !== 0) {
    n--;
  }
  return n + getTotal(n - 2);
};
console.log(getTotal(10));
