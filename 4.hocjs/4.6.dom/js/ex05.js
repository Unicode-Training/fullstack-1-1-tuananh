//Tọa độ
//1. offsetX, offsetY
//2. clientX, clientY
// --> Lấy từ event object
//3. offsetLeft, offsetTop: Vị trí của phần tử so với bên trái và bên trên
//4. clientWidth, clientHeight: Kích thước của phần tử

// const btn = document.querySelector('button');
// console.log(btn.offsetLeft);
// console.log(btn.offsetTop);
// console.log(btn.clientWidth);
// console.log(btn.clientHeight);

// btn.addEventListener('click', (e) => {
//     // console.log(e.offsetX, e.offsetY);
//     // console.log(e.clientX, e.clientY);
// });

//Xử lý event kéo thả
// - Bấm chuột xuống ở button --> mousedown --> Bắt đầu
// - Giữ và di chuyển chuột --> mousemove
// - Nhả chuột --> mouseup --> Giải phóng sự kiện --> kết thúc
const btn = document.querySelector('button');
const box = document.querySelector('.box');
// btn.style.color = 'red';
// btn.style.backgroundColor = 'yellow';
let offsetX = 0.
let offsetY = 0;
let initPosX = btn.offsetLeft;
let initPosY = btn.offsetTop;
let initBoxX = box.offsetLeft;
let initBoxY = box.offsetTop;
let isDrop = false;
btn.addEventListener('mousedown', (e) => {
    if (e.which === 1) {
        //Bấm chuột trái
        document.addEventListener('mousemove', handleDrag);
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    }
})
document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', handleDrag);
    if (!isDrop) {
        btn.style.translate = `${initPosX}px ${initPosY}px`;
        box.classList.remove('active');
    } else {
        let btnLeftPos = initBoxX + box.clientWidth - btn.clientWidth;
        let btnTopPos = initBoxY + box.clientHeight - btn.clientHeight;
        btn.style.translate = `${btnLeftPos}px ${btnTopPos}px`;
    }

})
const handleDrag = (e) => {
    // console.log(e.clientX, e.clientY);
    btn.style.translate = `${e.clientX - offsetX}px ${e.clientY - offsetY}px`;

    if (Math.abs(e.clientX - initPosX) > 20 || Math.abs(e.clientY - initPosY) >= 20) {
        box.classList.add('active');
    }

    if (e.clientX >= initBoxX && e.clientX <= initBoxX + box.clientWidth && e.clientY >= initBoxY && e.clientY <= initBoxY + box.clientHeight) {
        box.classList.add('drop');
        isDrop = true;
    } else {
        box.classList.remove('drop');
        isDrop = false;
    }
}