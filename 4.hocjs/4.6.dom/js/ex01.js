//DOM = Document Object Model
//Bản chất: Object được trình duyệt xây dựng sẵn nhằm mục đích mô hình hóa tài liệu html
//Cho phép lập trình viên can thiệp vào object để thay đổi các thẻ html --> Tạo sự tương tác giữa user với website

//Tên thuật ngữ trong DOM: Node (Object)
// - Element Node --> Object thể hiện thẻ html (text, attrbiute)
// - Text node --> Object thể hiện đoạn text độc lập
// - Attribute Node --> Object thể hiện 1 thuộc tính trong thẻ html
// - Comment Node --> Object để thể hiện comment trong html

// console.dir(document.body.children[0].innerText);

// document.body.children[0].innerText = 'Ahihi';

//Các cách truy cập vào Element Node
//1. getElementById(id): Truy cập vào phần tử thông qua id
// const titleEl = document.getElementById('title');
// console.log(titleEl);

//2. getElementsByClassName(class): Truy cập vào tất cả phần tử khớp với class
// const titleList = document.getElementsByClassName('sub-title');
// for (let i = 0; i < titleList.length; i++) {
//     console.log(titleList[i].innerText);
// }

//3. getElementsByTagName(tag): Lấy theo tagname
// const titleList = document.getElementsByTagName('h2');
// for (let i = 0; i < titleList.length; i++) {
//     console.log(titleList[i].innerText);
// }

//4. querySelector(selector): Lấy phần tử đầu tiên theo selector css
// const titleEl = document.querySelector('.sub-title');
// console.log(titleEl);

//5. querySelectorAll(selector): Lấy tất cả phần tử khớp với selector
// const titleList = document.querySelectorAll('.sub-title');
// titleList.forEach((el) => {
//     console.log(el.innerText);
// })

//Event: Hành động từ phía người dùng tác động lên các thẻ html
//Lắng nghe event: addEventListener(ten-event, listener)
// - ten-event: click, dblclick, input, keyup, keydown,...
// - listener: callback để xử lý logic sau khi sự kiện được phát đi
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (event) => {
//     console.log(event);
//     console.log('User vừa clicked');
// });

// const inputEl = document.querySelector('input');
// inputEl.addEventListener('input', (e) => {
//     console.log(inputEl.value);
//     console.log(e);
// });
// inputEl.addEventListener('keyup', (e) => {
//     console.log(e);
// });

//Loại event ra khỏi phần tử html: 
// - Vô hiệu hóa event
// - Giải phóng bộ nhớ (Tránh memory leak)
// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// let count = 0;
// const handleClick1 = () => {
//     count++;
//     console.log(count);
// }
// btn1.addEventListener('click', handleClick1);
// btn2.addEventListener('click', () => {
//     btn1.removeEventListener('click', handleClick1)
// })

// const list = document.querySelectorAll('ul li');
// list.forEach((el) => {
//     el.addEventListener('click', () => {
//         console.log(el);
//     })
// });

// const ul = document.querySelector('ul');
// ul.addEventListener('click', function (e) {
//     console.log(e.target);
//     // console.log(this);
// });

//innerHTML: Lấy toàn bộ nội dung bên trong của thẻ html, bao gồm cả các thẻ html con

//innerText: Loại bỏ thẻ html bên trong

//outerHTML: Lấy tất cả nội dung bên và chính nó
// const contentEl = document.querySelector('.content');
// console.log(contentEl.innerHTML);
// contentEl.innerHTML = `<i>Hello anh em</i>`;

// console.log(contentEl.innerText);
// contentEl.innerText = `<i>Hello anh em</i>`;

// console.log(contentEl.outerHTML);

// contentEl.outerHTML = `<h2>Hello</h2>`

// const contentEl = document.querySelector('.content');
// const btn = document.querySelector('button');
// const initContent = contentEl.innerHTML;
// btn.addEventListener('click', () => {
//     if (contentEl.innerHTML) {
//         contentEl.innerHTML = '';
//         btn.innerText = 'Hiện';
//     } else {
//         contentEl.innerHTML = initContent;
//         btn.innerText = 'Ẩn';
//     }
// });

// const inputEl = document.querySelector('input');
// const button = document.querySelector('button');
// const imageEl = document.querySelector('.image');
// inputEl.addEventListener('input', () => {
//     const url = inputEl.value;
//     button.disabled = url ? false : true;
// })
// button.addEventListener('click', () => {
//     const url = inputEl.value;
//     imageEl.innerHTML = `<img src="${url}" width="400"/>`
// });

//classList
// const boxEl = document.querySelector('.box');
// console.log(boxEl.className);
// console.log(boxEl.classList);
// boxEl.classList.add('abc');
// boxEl.classList.remove('active');
// boxEl.classList.replace('abc', 'a123');
// boxEl.classList.toggle('open');
// boxEl.classList.toggle('open');
// console.log(boxEl.classList.contains('box-border'));

// const list = document.querySelectorAll('ul li');
// list.forEach((item) => {
//     item.addEventListener('click', () => {
//         const activeItem = document.querySelector('.active');

//         item.classList.toggle('active');

//         if (activeItem) {
//             activeItem.classList.remove('active');
//         }
//     });
// })