const products = [
    {
        id: 1,
        name: "Sản phẩm 1"
    },
    {
        id: 2,
        name: "Sản phẩm 2"
    },
    {
        id: 3,
        name: "Sản phẩm 3"
    },
    {
        id: 4,
        name: "Sản phẩm 4"
    },
    {
        id: 5,
        name: "Sản phẩm 5"
    }
]

const renderProducts = () => {
    const productListEl = document.querySelector('.product-list');
    productListEl.innerHTML = products.map((product) => {
        return `<div class="product-item">
        <h2>${product.name}</h2>
        <button>Sửa</button>
        <button class="delete-btn" data-id="${product.id}">Xóa</button>
      </div>`
    }).join('')
}
const addEventDelete = () => {
    const productListEl = document.querySelector('.product-list');
    productListEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const id = +e.target.dataset.id;
            const index = products.findIndex((product) => product.id === id);
            products.splice(index, 1);
            renderProducts();
        }
    });
}
renderProducts();
addEventDelete();



//Chức năng xóa
//B1: Lắng nghe event click vào nút xóa
//B2: Lấy productId tương ứng
//B3: Xóa phần tử trong mảng products tương ứng với id
//B4: Gọi lại hàm renderProducts
