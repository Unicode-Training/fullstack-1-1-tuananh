const myArr = ["Item 1", "Item 2", 1, 2, 3];

//Lấy số lượng phần tử
// console.log(myArr.length);

//Thêm phần tử
myArr[myArr.length] = "Tuấn Anh";
myArr[myArr.length] = "An";

//Sửa phần tử
myArr[0] = "Ahihi";

//Lấy giá trị
// console.log(myArr[1]);

//Duyệt qua từng phần tử
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// for (const index in myArr) {
//   console.log(myArr[index]);
// }

// for (const value of myArr) {
//   console.log(value);
// }

console.log(myArr);

//Xóa phần tử
// let indexDel = 1;
// const newArr = [];
// for (const index in myArr) {
//   if (+index === indexDel) {
//     continue;
//   }
//   newArr[newArr.length] = myArr[index];
// }
// console.log(newArr);

//Thêm 1 phần tử vào đầu mảng myArr (không dùng hàm có sẵn)
const newItem = "JavaScript";
const newArr = [];
newArr[newArr.length] = newItem;
for (const index in myArr) {
  newArr[newArr.length] = myArr[index];
}
console.log(newArr);
