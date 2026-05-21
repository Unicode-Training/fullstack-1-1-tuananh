const box1 = document.querySelector('.box-1');
// const box2 = document.querySelector('.box-2');
// const box3 = document.querySelector('.box-3');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    document.body.insertBefore(box1.nextElementSibling, box1);
});