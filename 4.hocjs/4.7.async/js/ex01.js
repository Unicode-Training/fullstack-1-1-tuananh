//Bất đồng bộ
//Dua vao callstack --> Day ham setTimeout sang web api (trinh duyet) de thuc thi --> dua callback vao trong hang doi --> quay lai callstack
// setTimeout(() => {
//     console.log('1');
// }, 0);
// console.log('2'); //Thuc thi ngay trong callstack

//Khi gặp phải các tác vụ phải chờ đợi (Nhưng tác vụ đó lại là bất đồng bộ: call api từ backend, truy vấn database, đọc file,...) --> Lập trình viên sẽ phải xử lý tác vụ đó để các vụ khác phải chờ

// const getUsers = (callback) => {
//     setTimeout(() => {
//         const users = ['User 1', 'User 2', 'User 3'];
//         callback(users);
//     }, 2000)
// }

// const getProducts = (callback) => {
//     setTimeout(() => {
//         const products = ['Product 1', 'Product 2', 'Product 3'];
//         callback(products);
//     }, 1000)
// }

// const showMessage = () => {
//     console.log('Đã lấy user thành công');
// }
// getUsers((users) => {
//     console.log(users);
//     getProducts((products) => {
//         console.log(products);
//         showMessage();
//     })

// });

//callback
//promise
//async await

//Promise Object: Object bọc tác vụ bất đồng bộ, nó chứa giá trị của tác vụ bất động khi tác vụ đó thực thi xong (Chứa dữ liệu trong tương lai)
//Trạng thái
// - pending --> Tác vụ bất đồng bộ chưa thực thi xong
// - fulfilled --> Tác vụ bất đồng bộ thực thi xong và thành công
// - rejected --> Tác vụ bất đồng bộ thực thi xong và thất bại

//Khi lấy dữ liệu từ promise -> dùng hàm then
//Khi lấy lỗi từ promise -> dùng hàm catch
//Khi promise đã chuyển trạng thái sang fulfilled hoặc rejected sẽ không chuyển sang trạng thái khác được nữa

// const getUsers = () => {
//     return new Promise((resolve, reject) => {
//         //resolve: Hàm chứa dữ liệu của tác vụ bất đồng bộ (Nếu thành công)
//         //reject: Hàm chứa dữ liệu của tác vụ bất đồng bộ nếu thất bại
//         setTimeout(() => {
//             let status = true;
//             const users = ['User 1', 'User 2', 'User 3'];
//             if (status) {
//                 resolve(users);
//             } else {
//                 reject("Có lỗi khi lấy danh sách users")
//             }
//         }, 2000)
//     })

// }

// getUsers().then((data) => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// }).finally(() => {
//     console.log('Hoàn thành');
// })

//Promise chaining
// getUsers().then(data => {
//     console.log(data);
//     return 'Tuấn Anh' //Khi return đồng nghĩa với việc resolve giá trị return vào Promise của then
// }).then(data => {
//     console.log(data);
//     return 'Hoàng An';
// }).then(data => {
//     console.log(data);

// })

// const getProducts = () => {
//     return new Promise((resolve, reject) => {
//         //resolve: Hàm chứa dữ liệu của tác vụ bất đồng bộ (Nếu thành công)
//         //reject: Hàm chứa dữ liệu của tác vụ bất đồng bộ nếu thất bại
//         setTimeout(() => {
//             const products = ['Product 1', 'Product 2', 'Product 3'];
//             resolve(products);
//         }, 2000)
//     })
// }

// const getPosts = () => {
//     return new Promise((resolve, reject) => {
//         //resolve: Hàm chứa dữ liệu của tác vụ bất đồng bộ (Nếu thành công)
//         //reject: Hàm chứa dữ liệu của tác vụ bất đồng bộ nếu thất bại
//         setTimeout(() => {
//             const posts = ['Post 1', 'Post 2', 'Post 3'];
//             resolve(posts);
//         }, 2000)
//     })
// }


// getUsers().then(data => {
//     console.log(data);
//     return getProducts();
// }).then(data => {
//     console.log(data);
//     return getPosts();
// }).then(data => {
//     console.log(data);
// })

// const getUser = (userId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const users = [
//                 {
//                     id: 1,
//                     name: "User 1",
//                     salary: 1000
//                 },
//                 {
//                     id: 2,
//                     name: "User 2",
//                     salary: 2000
//                 },
//                 {
//                     id: 3,
//                     name: "User 3",
//                     salary: 3000
//                 }
//             ]
//             resolve(users.find(user => user.id === userId))
//         }, Math.random() * 2000);
//     })
// }

// const inputs = [1, 2, 3]; //Tính tổng salary của các user có id nằm trong mảng inputs
// const totalPromise = new Promise((resolve) => {
//     let total = 0;
//     let count = 0;
//     inputs.forEach((userId, index) => {
//         getUser(userId).then(data => {
//             total += data.salary;
//             count++;
//             //Xử lý logic để lấy total cuối cùng -> gọi resolve và truyền total cuối cùng đó vào
//             if (count === inputs.length) {
//                 resolve(total);
//             }
//         })
//     })

// })

// //Gọi
// totalPromise.then(data => {
//     console.log(data);
// })

//Promise.all(): Hàm xử lý nhiều promise cùng lúc và trả về kết quả khi tất cả promise đã xử lý xong
// const myPromise1 = new Promise((resolve) => resolve('Data 1'));
// const myPromise2 = new Promise((resolve) => resolve('Data 2'));
// const myPromise3 = new Promise((resolve) => resolve('Data 3'));

// Promise.all([myPromise1, myPromise2, myPromise3]).then(data => {
//     console.log(data);
// })

// console.log(fetch(`https://jsonplaceholder.typicode.com/todos`));

//async await
// - async function: Bọc promise
// - await: 
// + Đứng trước 1 promise
// + Lấy giá trị của promise (1 lần await ~ 1 lần then), chờ khi nào promise trả về giá trị thì các đoạn code bên dưới await tiếp tục chạy
// + Phải ở trong 1 async function
const getUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('users')
            reject('Error when get users')
        }, 2000);
    })
}
const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('products')
            // reject('Error when get users')
        }, 2000);
    })
}
const doSomething = async () => {
    const start = Date.now();
    // const users = await getUsers();
    // const products = await getProducts();
    const [users, products] = await Promise.allSettled([getUsers(), getProducts()]);
    console.log(users);
    console.log(products);
    const end = Date.now();

    console.log(`${(end - start)}ms`);

}
doSomething()

// const getTodos = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//     const data = await response.json();
//     console.log(data);
// }
// getTodos();