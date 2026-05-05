//find(callback):
// - Duyệt từng phần tử của mảng
// - Trả về phần tử đầu tiên tìm được thỏa mãn điều kiện truthy

//findIndex(callback)
// - Giống find nhưng trả về index

//findLast
// - Duyệt từng phần tử của mảng
// - Trả về phần tử cuối cùng tìm được thỏa mãn điều kiện truthy

//findLastIndex
// - Giống findLast nhưng trả về index

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const result = numbers.findLastIndex((value, index) => {
//   return value % 2 === 0;
// });
// console.log(numbers);

// console.log(result);

//some: Chỉ cần 1 phần tử thỏa mãn điều kiện
// const numbers = [1, 3, 5, 7, 8, 9];
// const result = numbers.some((value) => {
//   return value % 2 === 0;
// });
// console.log(result);

//every: Chỉ đúng khi tất cả phần tử thỏa mãn điều kiện
// const numbers = [1, 3, 5, 7, 11, 9];
// const result = numbers.every((value) => {
//   return value % 2 !== 0;
// });
// console.log(result);

//reduce(callback, initialValue)
//TH1: Có initialValue --> vòng lặp chạy từ đầu
//TH2: Không có initialValue --> vòng lặp bỏ qua phần tử đầu (Chạy từ index = 1)
//Lưu ý:
// - biến acc sẽ được lưu lại khi callback return
// - giá trị của reduce sẽ là lần return cuối cùng
// const numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);
// const result = numbers.reduce((acc, cur, index) => {
//   console.log(`acc: ${acc}, cur: ${cur}, index: ${index}`);
//   return cur + acc;
// }, 0);
// console.log(result);

// const numbers = [5, 10, 15, 20, 25, 30];
// let total = 0;
// numbers.forEach((value) => {
//   total += value;
// });
// console.log(total);

// const total = numbers.reduce((acc, cur) => {
//   return acc + cur;
// });
// console.log(total);

//Ví dụ: Lọc trùng mảng users (Dùng reduce)
// const users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
//Nguyên tắc chung
// - Tạo mảng mới
// - Duyệt từng phần tử của mảng cũ
// - Kiểm tra phần tử đó có nằm trong mảng mới hay không?
// + Nếu có: Bỏ qua
// + Nếu không có: push vào mảng mới
// const result = users.reduce((acc, cur) => {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(result);

//Bài tập: Dùng reduce để chunk array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;

//Output: [[1,2],[3,4],[5,6],[7,8],[9]]
// const result = numbers.reduce((acc, cur, index) => {
//   if (index % size === 0) {
//     const chunk = numbers.slice(index, index + size);
//     acc.push(chunk);
//   }
//   return acc;
// }, []);
// console.log(result);

//Bài tập: Đảo ngược mảng dưới đây bằng cách dùng reduce (Không được dùng hàm reverse)
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const result = myArr.reduce((acc, cur, index) => {
//   const item = myArr.at(0 - index - 1);
//   acc.push(item);
//   return acc;
// }, []);
// console.log(result);

//Bài tập: Lọc trùng mảng dùng filter
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr);
// const result = myArr.filter((value, index) => {
//   return index === myArr.indexOf(value);
// });
// console.log(result);

//Js sinh ra các method tương ứng kiểu dữ liệu --> Đảm bảo tính gọn nhẹ, ngữ cảnh
// --> Dùng đúng semantic

//Sao chép mảng
// const arr1 = ["Hoàng An", [["Tuấn Anh"]], "hoangan@gmail.com", () => {}];
// const arr2 = arr1; //arr2 và arr1 sẽ cùng địa chỉ
//1. Sao chép nông (Shallow copy)
// - Dùng toán tử spread
// const arr2 = [...arr1];
// - Dùng các method array cho phép trả về mảng mới: slice, map, filter,...
// const arr2 = arr1.slice(0);
//2. Sao chép sâu (Deep copy)
// const json = JSON.stringify(arr1);
// const arr2 = JSON.parse(json);
//Nhược điểm: Nếu trong phần tử mảng có function --> Không sao chép được
// arr2[0] = "An Unicode";
// arr2[1][0] = "Ahihi";

// console.log(arr1);
// console.log(arr2);

// const arr1 = ["Hoàng An", [["Tuấn Anh"]], "hoangan@gmail.com", () => {}];
// const deepCopy = (arr) => {
//   const newArr = [];
//   for (const index in arr) {
//     const item = arr[index];
//     if (Array.isArray(item)) {
//       newArr.push(deepCopy(item));
//     } else {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// };

// const arr2 = deepCopy(arr1);
// arr2[0] = "An Unicode";
// arr2[1][0][0] = "Ahihi";

// console.log(arr1);
// console.log(arr2);
