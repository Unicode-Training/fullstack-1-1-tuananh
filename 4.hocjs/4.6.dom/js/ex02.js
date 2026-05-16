//getAttribute('ten-thuoc-tinh')
//setAttribute('ten-thuoc-tinh', giatr)
//dataset
// const titleEl = document.querySelector('.title');
// console.log(titleEl.getAttribute('data-id'));
// titleEl.setAttribute('data-id', 'ok')
// titleEl.setAttribute('data-name', 'Hoàng An');

// console.log(titleEl.dataset);
// console.log(titleEl.dataset.id); //data-id
// titleEl.dataset.id = 'ok';
// titleEl.dataset.animationName = 'moving' //data-animation-name

//preventDefault(): Ngăn hành động mặc định của thẻ html
// const aEl = document.querySelector('a');
// aEl.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(aEl.href);
// });
// aEl.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// })


// const boxEl = document.querySelector('.box');
// const btn = document.querySelector('button');

// boxEl.addEventListener('click', () => {
//     console.log('box clicked');
// })
// btn.addEventListener('click', (e) => {
//     e.stopPropagation(); //ngăn hành động nổi bọt sự kiện của thẻ html
//     console.log('button clicked');
// })