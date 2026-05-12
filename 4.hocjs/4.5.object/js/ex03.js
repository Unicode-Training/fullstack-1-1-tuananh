//class
// class User {
//     //Thuộc tính
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     //Phương thức
//     getName() {
//         console.log(this.name);
//     }
//     getEmail() {
//         console.log(this.email);
//     }
//     method1() {
//         console.log('method 1 from User');
//     }
// }

// class Customer extends User {
//     constructor(name, email, age) {
//         super(name, email);
//         this.age = age;
//     }
//     getInfo() {
//         this.getName();
//         this.getEmail();
//     }
//     method1() {
//         //Gọi hàm method1 của class cha
//         super.method1();
//         console.log('method 1 from Customer');
//     }
// }

// const customer = new Customer('Hoàng An', 'hoangan.web@gmail.com', 35);
// customer.method1();

//Instance
// const user = new User('Hoàng An', 'hoangan.web@gmail.com');
// console.log(user);
// user.getName()
// user.getEmail()


// customer.getInfo();
// console.log(customer.age);

//Static method, static property
// class User {
//     static message = 'Học lập trình không khó';
//     static getMessage() {
//         console.log(this.message);
//     }
// }
// console.log(User.message);
// User.getMessage();

//Clone object
// const a = {
//     x: 10,
//     y: 20,
//     doSomething() { }
// }
// const b = a;
//shallow copy
// const b = { ...a }
// const b = Object.assign({}, a);
//deep copy
// const b = JSON.parse(JSON.stringify(a));
// const b = _.cloneDeep(a);
// b.x = 50;

// console.log(a);
// console.log(b);

//Destructuring: Phá vỡ cấu trúc của array, object để truy cập vào các phần tử, key và lưu thành các biến riêng biệt
// const user = {
//     fullname: 'An',
//     email: 'an@gmail.com',
//     age: 35,
//     address: 'HN'
// }
// const { fullname, email, age = 20 } = user;
// console.log(fullname);
// console.log(email);
// console.log(age);

// const { email, ...rest } = user;
// console.log(email);
// console.log(rest);

// const users = ['An', 'an@gmail.com', 35, 'HN'];
// const [fullname, email, , address] = users;
// console.log(fullname);
// console.log(email);
// console.log(address);
// const [fullname, ...rest] = users;
// console.log(fullname);
// console.log(rest);



