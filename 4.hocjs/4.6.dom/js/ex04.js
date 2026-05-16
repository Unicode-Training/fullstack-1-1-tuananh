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
        <button>Xóa</button>
      </div>`
    }).join('')
}
renderProducts();
