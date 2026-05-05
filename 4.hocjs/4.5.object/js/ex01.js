//Object thể hiện thông tin chi tiết của 1 thực thể nào đó
//Array thể hiện 1 danh sách

//Ví dụ: Thể hiện 1 danh sách sản phẩm

//Cấu tạo: Chia thành các key: value

// const myObj = {
//   name: "Hoàng An",
//   email: "an@gmail.com",
//   age: 35,
// };

//Thêm key
// myObj.address = "Hà Nội";

//Cập nhật
// myObj.name = "Hoàng An Unicode";

//Xóa
// delete myObj.age;

// console.log(myObj);

// console.log(myObj.name);
// console.log(myObj["email"]);

// let a = "age";
// console.log(myObj[a]);

// for (const key in myObj) {
//   console.log(key, myObj[key]);
// }

//Object.keys(obj): Trả về 1 mảng chứa danh sách các key của object
// console.log(Object.keys(myObj));

//Object.values(obj): Trả về 1 mảng chứa danh sách các values của object
// console.log(Object.values(myObj));

//Object.entries(obj): Trả về 1 mảng 2 chiều chứa danh sách cả key và value của object
// console.log(Object.entries(myObj));

//Object.fromEntries(entries): Chuyển mảng entries thành object
// const entries = [
//   ["a", 10],
//   ["b", 20],
//   ["c", 30],
// ];
// console.log(entries);
// console.log(Object.fromEntries(entries));

//Object.assign(target, ...source): Gộp các object source vào target và trả về object mới sau khi gộp xong (target sẽ bị thay đổi)
// const obj1 = {
//   name: "An",
// };
// const obj2 = {
//   email: "an@gmail.com",
// };
// const obj3 = {
//   age: 33,
// };

// const result = Object.assign({}, obj1, obj2, obj3);
// console.log(result);
// console.log(obj1);

//Bài tập
// const queryString = `keyword=lap+trinh&status=active&category=1&category=2&category=3`;

/*
{
    keyword: "lap trinh",
    status: "active",
    category: ["1", "2", "3"]
}
*/
// const queryArr = queryString.split("&");
// const query = {};
// queryArr.forEach((item) => {
//   const itemArr = item.split("=");
//   const key = itemArr[0];
//   const value = itemArr[1].replaceAll("+", " ");
//   if (!query[key]) {
//     query[key] = value;
//   } else if (!Array.isArray(query[key])) {
//     query[key] = [query[key]];
//   }
//   if (Array.isArray(query[key])) {
//     query[key].push(value);
//   }
// });
// console.log(query);

//category: '1'
//category: ['1']
//category: [['1']]

// const a = {};
// const key = 'name';
// const value = 'An';
// a[key] = value;
