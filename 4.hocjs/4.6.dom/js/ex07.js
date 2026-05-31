const addBtn = document.querySelector('.add-btn');
const replaceBtn = document.querySelector('.replace-btn');
const insertBeforeBtn = document.querySelector('.insert-before-btn');
const ul = document.querySelector('ul');
// btn.addEventListener('click', () => {
//     ul.innerHTML += `<li>New Item</li>`
// })
// ul.addEventListener('click', (e) => {
//     e.target.style.color = 'red';
// })

//Tạo node bằng javascript --> add node đó vào cây DOM
//1. document.createElement('tagname'): Tạo node

//2. document.replaceChild(): Thay node cũ bằng node mới
const li = document.createElement('li');
li.innerText = `New Item`;
ul.append(li);
let lastItem;
addBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = `New Item`;
    lastItem = li;
    ul.append(li);
    li.addEventListener('click', () => {
        li.style.color = 'red';
    })
})

replaceBtn.addEventListener('click', () => {
    const p = document.createElement('p');
    p.innerText = 'Hello anh em';
    ul.replaceChild(p, li)
})

insertBeforeBtn.addEventListener('click', () => {
    const p = document.createElement('p');
    p.innerText = 'Hello anh em';
    ul.insertBefore(p, lastItem);
})

//nextElementSibling --> Phần tử tiếp theo
//previousElementSibling --> Phần tử phía trước