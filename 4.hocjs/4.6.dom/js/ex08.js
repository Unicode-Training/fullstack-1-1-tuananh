// const box = document.querySelector('.box');
// box.addEventListener('click', (e) => {
//     const item = e.target.parentElement;
//     if (e.target.classList.contains('down')) {
//         //Di chuyển xuống
//         if (!item.nextElementSibling) {
//             return;
//         }
//         box.insertBefore(item.nextElementSibling, item);
//     }
//     if (e.target.classList.contains('up')) {
//         //Di chuyển lên
//         if (!item.previousElementSibling) {
//             return;
//         }
//         box.insertBefore(item, item.previousElementSibling);
//     }
// });
const box = document.querySelector('.box');
const items = document.querySelectorAll('.item');
items.forEach((item) => {
    const upBtn = item.querySelector('.up');
    const downBtn = item.querySelector('.down');
    upBtn.addEventListener('click', () => {
        if (!item.previousElementSibling) {
            return;
        }
        box.insertBefore(item, item.previousElementSibling);
    })
    downBtn.addEventListener('click', () => {
        if (!item.nextElementSibling) {
            return;
        }
        box.insertBefore(item.nextElementSibling, item);
    })

    item.addEventListener('click', (e) => {
        e.stopPropagation();
        const itemSelected = document.querySelector('.selected');
        item.classList.toggle('selected');
        if (itemSelected) {
            itemSelected.classList.remove('selected')
        }
    })
})

document.addEventListener('click', () => {
    const itemSelected = document.querySelector('.selected');
    if (itemSelected) {
        itemSelected.classList.remove('selected')
    }
});

document.addEventListener('keydown', (e) => {
    const itemSelected = document.querySelector('.selected');

    if (itemSelected && e.key === 'ArrowDown' && e.altKey && e.shiftKey) {
        const itemClone = itemSelected.cloneNode(true);
        itemClone.classList.remove('selected');
        box.insertBefore(itemClone, itemSelected.nextElementSibling);
    }
})