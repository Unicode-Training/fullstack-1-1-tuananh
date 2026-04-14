// console.log("Học js không khó");

//Data type (8 kiểu)
// - string
// - number
// - undefined
// - null
// - bigInt
// - Symbol
// - boolean
// --> Kiểu dữ liệu nguyên thủy (Làm việc theo giá trị)
// - object
// + Literal Object
// + Array Object
// + Function Object
// --> Kiểu dữ liệu tham chiếu (Làm việc theo địa chỉ)

// console.log("An");
// console.log(`Hoàng An`);
// console.log(123);
// console.log(undefined);
// console.log(null);
// console.log(123n);
// console.log(BigInt(123));
// console.log(Symbol("id"));
// console.log(true);
// console.log({ name: "An" });
// console.log([1, 2, 3]);
// console.log(function () {});

//Kiểm tra kiểu dữ liệu
// console.log(typeof "An");
// console.log(typeof 123);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof 123n);
// console.log(typeof Symbol("id"));
// console.log(typeof false);
// console.log(typeof { name: "An" });
// console.log(typeof [1, 2, 3]);
// console.log(typeof function () {});

//Biến
//Cú pháp: let tenbien, let tenbien = giatri;
//Nguyên tắc đặt tên: Dùng quy tắc camelCase
//Trong cùng 1 phạm vi, không được khai báo lại
// let username = "Hoàng An";
// let userId;
// let a = 20;
// if (username) {
//   a = 10;
//   console.log(a);
// }
// console.log(a);
// username = "Ahihi";

//Hằng số
// const timeout = undefined;

//Toán tử: Thành phần của biểu thức
//Cấu tạo biểu thức = toán tử + toán hạng
//Ví dụ: s = a + b - c;
//1. Toán tử số học
//+, -, *, /, %, **, ++, --
//Lưu ý với toán tử +: Trùng với toán tử nối chuỗi trong js, cần phải ép kiểu số trước dùng phép cộng
// let a = "10";
// let b = 2;
// a = +a;
// let c = a + b;
// console.log(c);

// let a = 10;
// let b;
// b = ++a;
// console.log(a);
// console.log(b);

// let count = 1;
// let total = count++ + ++count;
// console.log(count);

//2. Toán tử gán (=)
// let a = 10;
// a += 10; //a = a + 10;
// a **= 2;
// console.log(a);

//3. Toán tử so sánh
//>, >=, <, <=, ==, ===, !=, !==
// let a = 10;
// let b = "10";
// console.log(a == b);

//So sánh chuỗi
// let str1 = "an";
// let str2 = "Anh";
// console.log(str1 > str2);

//3. Truthy, Falsy
// - TRong ngữ cảnh so sánh mà các giá trị tự động ép kiểu về false --> falsy
//Giá trị falsy: "", 0, undefined, null, false, NaN

// let a = -0;
// if (a) {
//   console.log("Đúng");
// } else {
//   console.log("Sai");
// }

//4. Toán tử luận lý

//4.1. Toán tử &&
// - Tìm falsy. Nếu tìm thấy sẽ dừng lại và trả về giá trị falsy
// - Nếu không tìm thấy sẽ trả về giá trị của biểu thức cuối cùng
// let a = 10;
// let b = 20;
// let x = null;
// let c = a && x && b;
// console.log(c);

//4.2. Toán tử ||
// - Tìm truthy. Nếu tìm thấy sẽ dừng lại và trả về giá trị truthy
// - Nếu không tìm thấy sẽ trả về giá trị của biểu thức cuối cùng
// let a = 10;
// let b = 0;
// let x = 20;
// let result = a || b || x;
// console.log(result);

//4.3. Toán tử !
// - Ép kiểu sang boolean
// - Trả về giá trị phủ định
// let a = 10;
// let b = !a;
// console.log(b);

//5. Toán tử nullish (??)
//Cú pháp: a ?? b
//Cách hoạt động: kiểm tra a nếu = undefined hoặc null --> lấy b, ngược lại sẽ lấy a
// let a = 1;
// let b = 10;
// console.log(a ?? b);

//6. Toán tử 3 ngôi (?:)
//Cú pháp: dieukien ? giatridung : giatrisai
//Cách hoạt động: Check dieukien nếu đúng trả về giatridung, ngược lại trả về giatrisai
// let a = 10;
// let reuslt = a ? "Ok" : "Chưa ok";
// console.log(reuslt);

//Câu lệnh if else

/*
1. Câu lệnh if thiếu
if (dieukien) {
    Code
}

2. Câu lệnh if đầy đủ

if (dieukien) {
    Code
} else {
    Code    
}

3. Câu lệnh if nhiều nhánh

if (dieukien1) {
    Code 1
} else if (dieukien2) {
    Code 2
} else if (dieukien3) {
    Code 3
} else {
    Code 4
}

4. Câu lệnh if lồng nhau
if (dieukien1) {
    if (dieukien2) {
        Code
    } else {
        Code    
    }
} else {
    Code    
}

Viết chương trình tính tiền taxi từ số km biết trước

- Số km ≤ 1 giá 15000đ
- 1 < số km ≤ 5 giá 13500đ
- Số km > 5km giá 11000đ
- Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

//Ví dụ: 6km
Tổng tiền = 1*15.000 + 4 * 13500 + 1 * 11000

121km
1*15000+4*13500+116*11000
*/

// let km = 121;
// let total = 0;
// const THRESHOLD1 = 1;
// const THRESHOLD2 = 5;
// const THRESHOLD3 = 120;
// const PRICE1 = 15000;
// const PRICE2 = 13500;
// const PRICE3 = 11000;
// const DISCOUNT = 10;

// if (km <= THRESHOLD1) {
//   total = km * PRICE1;
// } else if (km <= THRESHOLD2) {
//   total = THRESHOLD1 * PRICE1 + (km - THRESHOLD1) * PRICE2;
// } else {
//   total =
//     THRESHOLD1 * PRICE1 +
//     (THRESHOLD2 - THRESHOLD1) * PRICE2 +
//     (km - THRESHOLD2) * PRICE3;
//   if (km > 120) {
//     total = total - (total * DISCOUNT) / 100;
//   }
// }
// console.log(total);

//Câu lệnh switch case
// let action = "create";
// switch (action.type) {
//   case "create":
//   case "insert":
//   case "add":
//     console.log("Thêm");
//     break;
//   case "update":
//   case "edit":
//     console.log("Sửa");
//     break;
//   case "delete":
//   case "remove":
//     console.log("Xóa");
//     break;
//   default:
//     console.log("Danh sách");
//     break;
// }

//Vòng lặp
// for (let i = 0; i < 10; i += 2) {
//   console.log(`Lần lặp thứ: ${i}`);
// }

// let a = 10;
// while (a > 0) {
//   a--;
//   console.log(a);
// }
// let a = 100;
// do {
//   console.log(a);
// } while (a < 0);

// let number = 52671; //Đảo ngược số (Không dùng chuỗi)\
// //17525
// let result = 0;
// while (number !== 0) {
//   //Lấy số dư
//   const temp = number % 10;
//   //Giảm đơn vị của number
//   number = (number - temp) / 10;

//   //Tổng hợp kết quả
//   result = result * 10 + temp;
// }
// console.log(result);
