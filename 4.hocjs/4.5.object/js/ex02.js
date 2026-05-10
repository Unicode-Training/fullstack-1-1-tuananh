//Từ khóa this: Đại diện cho object gọi method
// const myObj = {
//   fullname: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getFullname() {
//     // console.log("fullname");
//     // console.log(myObj.fullname);
//     console.log(this.fullname);
//   },
//   getInfo() {
//     return {
//       age: 35,
//       getAge() {
//         console.log(this.age);
//       },
//       getEmail() {
//         console.log(this);
//       },
//     };
//   },
// };

// myObj.getFullname();
// myObj.getInfo().getAge();
// myObj.getInfo().getEmail();

//Thay đổi được this
// const a = {
//   method1(value1, value2) {
//     console.log(this.x);
//     console.log(value1, value2);
//   },
// };

// const b = {
//   x: 10,
// };

// const myFunc = a.method1.bind(b); //Tạo ra 1 hàm mới
// myFunc();

// a.method1.call(b, "ABC", 123);

// const values = ["ABC", 123];
// a.method1.call(b, ...values);
// a.method1.apply(b, values);

//Constructor
// function User(name, email) {
//   this.name = name;
//   this.email = email;
//   this.getName = function () {
//     console.log(this.name);
//   };
//   this.getEmail = function () {
//     console.log(this.email);
//   };
// }
//Tạo instance (object)
// const user = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user);

// const customer = new User("Tuấn Anh", "tuananh@gmail.com");
// customer.age = 35;
// console.log(customer);

//Tình huống: Làm sao để bổ sung 1 thuộc tính, phương thức vào 1 constructor đã có sẵn
// User.prototype.message = "Học js không khó";
// User.prototype.getMessage = function () {
//   console.log("Học lập trình không khó");
// };
// const user = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user);
// console.log(user.message);

//Ví dụ: Can thiệp prototype vào Array
// Array.prototype.latest = function () {
//   return this.at(-1);
// };

// const users = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(users.latest());

// Object.prototype.message = "Hoàng An";
// //Object Literal
// const myObj = {
//   x: 10,
// };
// console.log(myObj);
// console.log(myObj.message);

// //Mô hình phân cấp:
// //Object --> Constructor --> Instance
// const users = []; //Array -> Object
// console.log(users.message);

// const fullname = "A"; //String --> Object
// console.log(fullname.message);

// const age = 35; //Number --> Object
// console.log(age.message);

// const isAuth = false; //Boolean --> Object
// console.log(isAuth.message);

// const price = 123n; //BigInt --> Object
// console.log(price.message);

// const id = Symbol("id"); //Symbol --> Object
// console.log(id.message);

//Bài tập
const menus = [
  {
    id: 1,
    title: "Menu 1",
    parentId: 0,
  },
  {
    id: 2,
    title: "Menu 2",
    parentId: 0,
  },
  {
    id: 3,
    title: "Menu 3",
    parentId: 0,
  },
  {
    id: 4,
    title: "Menu 2.1",
    parentId: 2,
  },
  {
    id: 5,
    title: "Menu 2.2",
    parentId: 2,
  },
  {
    id: 6,
    title: "Menu 2.3",
    parentId: 2,
  },
  {
    id: 7,
    title: "Menu 2.2.1",
    parentId: 5,
  },
  {
    id: 8,
    title: "Menu 2.2.2",
    parentId: 5,
  },
];
console.log(menus);

//Yêu cầu 1: Convert mảng trên thành mảng sau

/*
[
  {
    id: 1,
    title: "Menu 1",
  },
  {
    id: 2,
    title: "Menu 2",
    children: [
        {
            id: 4,
            title: "Menu 2.1",
        },
        {
            id: 5,
            title: "Menu 2.2",
            children: [
                {
                    id: 7,
                    title: "Menu 2.2.1",
                },
                {
                    id: 8,
                    title: "Menu 2.2.2",
                },
            ]
        },
        {
            id: 6,
            title: "Menu 2.3",
        }
    ]
  },
  {
    id: 3,
    title: "Menu 3",
  }
]
*/
// const menuNested = [];
// menus.forEach((menu) => {
//   if (menu.parentId === 0) {
//     menuNested.push(menu);
//     menu.children = [];
//     menus.forEach((menu2) => {
//       if (menu2.parentId === menu.id) {
//         menu.children.push(menu2);
//       }
//     });
//   }
// });
// console.log(menuNested);

const buildTree = (menus, parentId = 0) => {
  const menuNested = [];
  menus.forEach((menu) => {
    if (menu.parentId === parentId) {
      menuNested.push(menu);
      delete menu.parentId;
      const children = buildTree(menus, menu.id);
      if (children.length) {
        menu.children = children;
      }
    }
  });
  return menuNested;
};

const result = buildTree(menus);
console.log(result);
