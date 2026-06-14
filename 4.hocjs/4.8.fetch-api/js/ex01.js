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
const LIMIT = 9;
let currentPage = 1;
let keyword = "";
const getProducts = async () => {
    try {
        const skip = (currentPage - 1) * LIMIT;
        const response = await fetch(`https://dummyjson.com/products/search?q=${keyword}&limit=${LIMIT}&skip=${skip}`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const { products, total } = await response.json();
        const pageNumber = Math.ceil(total / LIMIT);
        renderPagination(pageNumber);
        renderProducts(products);
    } catch (error) {
        console.log(error.message);

    }
}

const renderPagination = (pageNumber) => {
    const paginationEl = document.querySelector('.js-pagination');
    let html = '';
    for (let i = 1; i <= pageNumber; i++) {
        html += `<button
          class="px-3 py-1 bg-green-600 text-white hover:bg-red-600 cursor-pointer ${i === currentPage ? 'bg-red-600' : ''}"
        >
          ${i}
        </button>`;
    }
    paginationEl.innerHTML = html;
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

const addEventButton = () => {
    const productListEl = document.querySelector('.js-product-list');
    productListEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('js-detail-btn')) {
            const id = e.target.dataset.id;
            openModal();
            getProduct(id);
        }
    });
}
const renderProductDetailModal = (data) => {
    const modalContent = document.querySelector('.js-modal-content');
    modalContent.innerHTML = `<h2 class="text-xl mb-2">${data.title}</h2>
        <p class="mb-2">Giá: ${data.price}</p>
        <img
          src="${data.thumbnail}"
          alt=""
        />
        <div class="flex gap-2 mt-3">
          ${data.images.map(item => `<div class="w-[100px]">
            <img
              src="${item}"
              alt=""
            />
          </div>`).join('')}
          
        </div>
        <p class="mt-3">
         ${data.description}
        </p>`
}
const getProduct = async (id) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        renderProductDetailModal(data);
    } catch (error) {
        console.log(error);

    }
}

//closure
const debounce = (fn, timeout = 500) => {
    let id;
    return (...args) => {
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            fn(...args);
        }, timeout)
    }
}

const addEventSearch = () => {
    const searchEl = document.querySelector('.js-search');
    searchEl.addEventListener('input', debounce(e => {
        keyword = e.target.value;
        getProducts();
    }, 1000))
}
const addEventPagination = () => {
    const paginationEl = document.querySelector('.js-pagination');
    paginationEl.addEventListener('click', (e) => {
        const page = +e.target.innerText;
        currentPage = page;
        getProducts();
    })
}
const openModal = () => {
    const modalEl = document.querySelector('.js-modal');
    modalEl.classList.remove('hidden');
}
const closeModal = () => {
    const modalEl = document.querySelector('.js-modal');
    modalEl.classList.add('hidden');
    const modalContent = document.querySelector('.js-modal-content');
    modalContent.innerHTML = `<span class="text-2xl text-center block">Loading...</span>`;
}
const addEventModal = () => {
    const modalOverlay = document.querySelector('.js-modal-overlay');
    modalOverlay.addEventListener('click', closeModal);
}
const addEventNewItem = () => {
    const addBtn = document.querySelector('.js-add-btn');
    addBtn.addEventListener('click', () => {
        openModal();
        renderAddProductForm();
    })
}
const renderAddProductForm = () => {
    const modalContent = document.querySelector('.js-modal-content');
    modalContent.innerHTML = `
    <form>
        <div class="mb-3">
            <label>Name</label>
            <input class="px-3 py-1 outline-none border border-[#ddd] w-full" placeholder="Name..." />
        </div>
    </form>
    `
}
addEventNewItem();
addEventModal();
addEventPagination();
addEventSearch();
addEventButton();
getProducts();



//Kỹ thuật debounce: Dựa vào tốc độ thực thi (500ms)
//Ví dụ: keyword = abc
//a --> id1 = setTimeout(callback, 500ms)
//ab --> xóa id1, id2 = setTimeout(callback, 500ms)
//abc --> xóa id2, id3 = setTimeout(callback, 500ms);
//setTimeout chưa kịp chạy -> Đã bị xóa