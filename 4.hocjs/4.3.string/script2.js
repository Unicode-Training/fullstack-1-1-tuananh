// let keyword = "JAVASCRIPT";
// let content = `Học lập trình javascript. Học lập trình javascript. Học lập trình javascript. Học lập trình javascript. vhduvhd vdhvudh`;
// let count = 0;

// //Logic

// let newContent = "";

// let cursor = 0; //Đánh dấu vị trí cuối sau highlight

// let pos = content.toLowerCase().indexOf(keyword.toLowerCase(), cursor);
// while (pos !== -1) {
//   newContent +=
//     content.slice(0, pos) +
//     `<span>${content.slice(pos, pos + keyword.length)}</span>`;
//   cursor = pos + keyword.length;

//   pos = content.toLowerCase().indexOf(keyword.toLowerCase(), cursor);
// }

// newContent += content.slice(cursor);

// document.body.innerHTML = `
// <h2>${newContent}</h2>
// <p>Đã tìm được <b>${count}</b> từ khóa</p>
// `;

//Kiểm tra độ mạnh yếu mật khẩu (Không dùng regex)
// - Độ dài từ 8 ký tự
// - Có ít nhất 1 chữ hoa
// - Có ít nhất 1 chữ thường
// - Có ít nhất 1 số
// - Có ít nhất 1 ký tự đặc biệt: !@#$%^&*()
let password = "Hoangan@#1";
// char >= 'A' && char <= 'Z' --> kiểm tra chữ hoa
// let symbol = `!@#$%^&*()`;
// symbol.includes(char)

// const isStrengthPassword = (password) => {
//   if (password.length < 8) {
//     return false;
//   }
//   let isUpperCase = false;
//   let isLowerCase = false;
//   let isNumber = false;
//   let isSymbol = false;
//   let symbol = "!@#$%^&*()";
//   for (let i = 0; i < password.length; i++) {
//     const char = password.charAt(i);
//     if (char >= "A" && char <= "Z") {
//       isUpperCase = true;
//     }
//     if (char >= "a" && char <= "z") {
//       isLowerCase = true;
//     }
//     if (char >= "0" && char <= "9") {
//       isNumber = true;
//     }
//     if (symbol.includes(char)) {
//       isSymbol = true;
//     }
//   }
//   return isUpperCase && isLowerCase && isNumber && isSymbol;
// };
// console.log(isStrengthPassword(password));

// let text = "  xin    chao    anh em.    Tôi học JavaScript  ";
// let result = "";

// text = text.trim();
// for (let i = 0; i < text.length; i++) {
//   if (text[i] === " " && text[i + 1] === " ") {
//     continue;
//   }
//   result += text[i];
// }
// console.log(result);
