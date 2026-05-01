//Array method
console.log(Array.prototype);

//length: Lấy ra số lượng phần của mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArr.length);
// myArr.length = 2;
// console.log(myArr);

//at(index): Lấy ra phần tử theo index
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArr.at(-1));

//concat(arr1, arr2, arr3,...): Nối các mảng thành 1 mảng
// const arr1 = ["Item 1", "Item 2", "Item 3"];
// const arr2 = ["A", "B", "C"];
// const arr3 = [1, 2, 3];
// const newArr = arr1.concat(arr2, arr3, "Tuấn Anh");
// console.log(newArr);

//indexOf(value): Tìm phần tử và trả về index đầu tiên tìm được
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArr.indexOf("Item 2"));

//lastIndexOf(value): Tìm phần tử và trả về index cuối cùng tìm được
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr.lastIndexOf("Item 2"));

//includes(value): Tìm phần tử trong mảng và trả về true/false
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr.includes("Item 1"));

//slice(start,end): Cắt mảng từ index start đến end-1 và trả về mảng mới
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArr.slice(-2));

//flat(): Làm phẳng mảng đa chiều thành 1 chiều
// const numbers = [1, 2, [3, 4, [5, 6], [7]]];
// console.log(numbers);
// const newArr = numbers.flat(Infinity);
// console.log(newArr);

//join(): Nối các phần thành chuỗi
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArr.join(" - "));

//push(value1, value2,...): Thêm các phần tử vào cuối mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.push("User 1", "User 2", "User 3");
// console.log(myArr);

//unshift(value1, value2,...): Thêm các phần vào đầu mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.unshift("User 1", "User 2", "User 3");
// console.log(myArr);

//pop(): Xóa phần tử cuối mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.pop();
// console.log(myArr);

//shift(): Xóa phần tử đầu mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.shift();
// console.log(myArr);

//splice(index, count): Xóa count phần tử index
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
// myArr.splice(1, 0, "A", "B", "C");
// console.log(myArr);

//reverse(): Đảo ngược mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
// myArr.reverse();
// console.log(myArr);

//sort(): Sắp xếp mảng theo thứ tự tăng dần (Sắp xếp theo chuỗi)
//Hàm sort nhận 1 callback gọi là compareFunc

// const names = ["Tung", "An", "Dat", "Tuan"];
// names.sort();
// console.log(names);

// const numbers = [2, 8, 1, 9, 10, 80];
// // console.log(numbers);
// numbers.sort((a, b) => {
//   //a: Số sau
//   //b: Số trước
//   //Nếu muốn số a đứng trước số b (Số sau đứng trước số trước) --> return về số âm
//   //Nếu muốn số a đứng sau số b --> return về số dương
//   //Nếu không muốn thay đổi --> return về số 0
//   //   console.log(`So sánh: ${b} với ${a}`);
//   //Tìm điều kiện sai: số trước > số sau
//   //   if (b > a) {
//   //     return -1; //Đổi chỗ
//   //   }
//   //   return a - b;
//   return b - a;
// });
// console.log(numbers);

//Bài tập: Sắp xếp mảng dưới theo thứ tự tăng dần (Theo tên)
// const customers = [
//   "Truong Van Hung",
//   "Ta Hoang An",
//   "Nguyen Tuan Anh",
//   "Pham Tuan Dung",
// ];

/*
[
  "Ta Hoang An",
  "Nguyen Tuan Anh",
  "Pham Tuan Dung",
  "Truong Van Hung"
];
*/
// const getFirstname = (fullname) => {
//   return fullname.split(" ").at(-1);
// };

// customers.sort((a, b) => {
//   if (getFirstname(b) > getFirstname(a)) {
//     return -1;
//   }
// });
// console.log(customers);

//Bài tập
// const numbers = [5, 2, 9, 1, 8, 3];
// const value = -1;
//1. Sắp xếp mảng theo thứ tự tăng dần
//2. Viết logic thêm value vào mảng sau khi đã sắp xếp (Đảm bảo không làm thay đổi thứ tự sắp xếp của mảng)

//1. --> [1, 2, 3, 5, 8, 9];

//2. --> [1, 2, 3, 5, 7, 8, 9];
// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);
// let index;
// for (let i = 0; i < numbers.length; i++) {
//   if (value <= numbers[i]) {
//     index = i;
//     break;
//   }
// }
// if (index === undefined) {
//   numbers.push(value);
// } else {
//   numbers.splice(index, 0, value);
// }

// console.log(numbers);

//Bài tập: Chunk array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;

// //[[1,2],[3,4],[5,6],[7,8],[9]]
// const chunkArr = [];
// for (const index in numbers) {
//   if (index % size === 0) {
//     const chunk = numbers.slice(index, +index + size);
//     chunkArr.push(chunk);
//   }
// }
// console.log(chunkArr);

//So sánh mảng
// - Không so sánh đc trực tiếp 2 mảng với nhau
// - So sánh dựa trên địa chỉ
// - Cách so sánh: Duyệt từng phần tử và so sánh các phần tử với nhau

//Array.isArray(value): Kiểm tra 1 giá trị có phải là mảng hay không?

// const arr1 = ["Item 1", "Item 2", 1, 2, [3], [[[5]]]]; //[3]
// const arr2 = ["Item 1", "Item 2", 1, 2, [3], [[[5]]]]; //[3]
// const compareArr = (arr1, arr2) => {
//   //Kiểm tra length
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (const index in arr1) {
//     if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {
//       return compareArr(arr1[index], arr2[index]);
//     }
//     if (arr1[index] !== arr2[index]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(compareArr(arr1, arr2));

//forEach(callback): Duyệt mảng và gửi value, index vào callback
// const myArr = ["Item 1", "Item 2", "Item 3"];
// myArr.forEach((value, index) => {
//   console.log(value, index);
// });

//map(callback):
// - Duyệt mảng giống forEach
// - Trả về 1 mảng mới có số lượng phần tử = mảng ban đầu
// - Giá trị từng phần tử của mảng chính là return của callback
// const myArr = ["Item 1", "Item 2", "Item 3"];
// const newArr = myArr.map((value, index) => {
//   console.log(value, index);
//   return `${index + 1} - ${value}`;
// });
// console.log(newArr);

//filter(callback)
// - Duyệt mảng giống forEach
// - Trả về mảng mới
// - Phần tử của mảng mới sẽ là phần tử của mảng ban đầu thỏa mãn điều kiện truthy trong callback
const numbers = [1, 2, 3, 4, 5, 6, 7];
const newArr = numbers.filter((value, index) => {
  console.log(value, index);
  //   return value % 2 === 0;
  return index;
});
console.log(newArr);
