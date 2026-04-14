// let firstName = `An`;
// let fullname = `Hoàng ${firstName}`; //backtick
// console.log(fullname);

console.log(String.prototype);

//1. length: Trả về độ dài của chuỗi
// let str = "Hoàng An";
// console.log(str.length);

//2. charAt(index): Lấy ký tự theo index
// let str = "Hoàng An";
// console.log(str.charAt(0));

//3. charCodeAt(index): Lấy ký tự theo index và chuyển thành mã ascii
// let str = "Hoàng An";
// console.log(str.charCodeAt(0));

//4. indexOf(substring): Tìm chuỗi con trong chuỗi cha và trả về index đầu tiên tìm được

//5. lastIndexOf(substring): Tìm chuỗi con trong chuỗi cha và trả về index cuối cùng tìm được
// let str = "Học Javascript abc Javascript 123";
// console.log(str.lastIndexOf("Javascript"));

//6. includes(substring): Tìm chuỗi con trong chuỗi cha và trả về true/false
// let str = "Học Javascript abc Javascript 123";
// console.log(str.includes("Javascript"));

//7. slice(start,end): Cắt chuỗi từ vị trí start đến end-1
// let str = "Học Javascript abc Javascript 123";
// console.log(str.slice(-10, -3));

//8. replace(tu-khoa, chuoi-thay-the)

//9. replaceAll(tu-khoa, chuoithaythe)
// let str = "Học Javascript abc Javascript 123";
// console.log(str.replaceAll("Javascript", "PHP"));

//10. toUpperCase()

//11. toLowerCase()

//12. repeat(n)
// let str = "*";
// console.log(str.repeat(10));

//13. trim(): Xóa bỏ khoảng trắng đầu, cuối chuỗi

//14. trimStart(): Xóa bỏ khoảng trắng đầu chuỗi

//15. trimEnd(): Xóa bỏ khoảng trắng đầu chuỗi

//16. padStart: Đệm ký tự phía trước 1 ký tự khác
// let number = "20";
// number = number.padStart(2, 0);
// console.log(number);

//17. startsWith(): Kiểm tra sự xuất hiện của 1 chuỗi ở đầu chuỗi khác

//18. endsWith(): Kiểm tra cuối
// let url = `/admin/users.html`;
// console.log(url.endsWith(".html"));

//Ví dụ:
let str = "xin chào anh em"; //Xin chào anh em
str = str.charAt(0).toUpperCase() + str.slice(1);

for (let i = 0; i < str.length; i++) {
  const char = str.charAt(i);
  const charNext = str.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    const pos = i + 1;
    str = str.slice(0, pos) + charNext.toUpperCase() + str.slice(pos + 1);
  }
}
console.log(str);
