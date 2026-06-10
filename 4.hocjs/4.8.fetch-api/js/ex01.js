//fetch
//axios libs

// const getProducts = async () => {
//     try {
//         const response = await fetch(`https://dummyjson.com/products1`);
//         if (!response.ok) {
//             throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error.message);

//     }
// }
// getProducts();

// const addProduct = async () => {
//     const response = await fetch(`https://dummyjson.com/products/add`, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             title: "Sản phẩm mới"
//         })
//     });
//     const data = await response.json();
//     console.log(data);

// }
// addProduct();

const getProducts = async () => {
    try {
        const response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const { products } = await response.json();
        renderProducts(products);
    } catch (error) {
        console.log(error.message);

    }
}

const renderProducts = (products) => {
    const productListEl = document.querySelector('.js-product-list');
    const html = products.map(product => `<div class="px-3 w-1/3 mb-3">
          <div class="border border-[#ddd]">
            <img
              src="${product.thumbnail}"
              alt=""
            />
            <h3 class="text-xl font-medium my-2">${product.title}</h3>
            <p>Giá: ${product.price}</p>
            <button class="js-detail-btn px-3 py-1 bg-orange-600 text-white my-3" data-id="${product.id}">Chi tiết</button>
          </div>
        </div>`).join('');
    productListEl.innerHTML = html
}

const addEvent = () => {
    const productListEl = document.querySelector('.js-product-list');
    productListEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('js-detail-btn')) {
            const id = e.target.dataset.id;
            getProduct(id);
        }
    })
}

const getProduct = async (id) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);

    }
}

addEvent();
getProducts();
