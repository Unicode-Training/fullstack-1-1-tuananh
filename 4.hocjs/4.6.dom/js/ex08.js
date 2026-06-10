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
const contextMenu = document.querySelector('.context-menu');
const modal = document.querySelector('.modal');
const modalOverlay = modal.querySelector('.modal-overlay');
const form = document.querySelector('form');
const input = document.querySelector('input');
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

document.addEventListener('click', (e) => {
    const itemSelected = document.querySelector('.selected');
    if (itemSelected && !contextMenu.contains(e.target) && !modal.contains(e.target)) {
        itemSelected.classList.remove('selected')
    }
    if (!contextMenu.contains(e.target)) {

        Object.assign(contextMenu.style, {
            display: 'none'
        })
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

box.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const itemSelected = document.querySelector('.selected');
    if (e.target.contains(itemSelected)) {
        Object.assign(contextMenu.style, {
            top: `${e.clientY}px`,
            left: `${e.clientX + 20}px`,
            display: 'inline-block'
        })
    }
})

contextMenu.addEventListener('click', (e) => {
    const itemSelected = document.querySelector('.selected');
    if (e.target.classList.contains('rename')) {

        modal.classList.add('show');
        Object.assign(contextMenu.style, {
            display: 'none'
        });

        const itemValue = itemSelected.childNodes[0].data.trim();

        input.value = itemValue;
    }

    if (e.target.classList.contains('delete')) {
        itemSelected.remove();
        Object.assign(contextMenu.style, {
            display: 'none'
        });
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemSelected = document.querySelector('.selected');
    itemSelected.childNodes[0].data = input.value + "\n";
    modal.classList.remove('show');
    itemSelected.classList.remove('selected');
})

modalOverlay.addEventListener('click', () => {
    modal.classList.remove('show');
    input.value = '';
})