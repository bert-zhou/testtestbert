/**
 * #第一种方式借助构造函数实现继承
 * prototype:抽象于类
 * this:指的是对象
 * 错误的写法 */
// this.prototype.show = function() {
//     console.log("我是构造函数....");
// }

// function Parent() {
//     this.name = "小明";
//     this.age = 20;
//     this.getName = function() {
//         console.log("姓名：" + this.name);
//     }
// }
// Parent.prototype.show = function() {
//     console.log("我是私有的...");
// }

// function Child() {
//     Parent.call(this); //将子类的this指向父类的this 子类调用属性名或者方法名为name的时候,它会将指向parent的this.name
// }
// var p = new Parent();
// p.getName(); //父类输出姓名：小明

// var child = new Child();
// child.show = function() {
//         console.log("我不是私有的....");
//     } //子类

// child.show();
// function Parent(name, age) {
//     this.name = name;
//     this.age = age;
//     this.getName = function() {
//         console.log("姓名：" + this.name + "年龄：" + age);
//     }
// }

// function Child(name, age, phone) {
//     Parent.call(this, name, age); //将子类的this指向父类的this 子类调用属性名或者方法名为name的时候,它会将指向parent的this.name
//     this.phone = phone;
// }
// var p = new Parent("小明", 40);
// p.getName(); //父类输出姓名：小明

// var child = new Child("小李", 20, "华为");
// child.getName(); //子类
// console.log(child.phone);

function Parent(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
        console.log("姓名：" + this.name + "年龄：" + this.age);
    }
}
function Child( age,name) {
    Parent.call(this,age,name); //将子类的this指向父类的this 子类调用属性名或者方法名为name的时候,它会将指向parent的this.name
    // this.phone = phone;
}
Parent.prototype.show = function() {
    console.log("展示中.....");
}
var p = new Parent("小明", 40);
// p.getName(); //父类输出姓名：小明
var child = new Child("小李", 20, "华为");
child.getName(); //子类
// console.log(child.phone);
// child.show(); //子类不能继承父类的自己定义的proto属性


// function Parent(name) {
//     this.name = name;
//     this.getName = function() {
//         console.log("姓名：" + this.name);
//     }
// }
// Parent.prototype.show = function() {
//     console.log("展示中");
// }

// function Child(age, name) {
//     this.age = age;
//     // this.name = name;
//     this.getName = function() {
//         console.log("姓名：" + this.name + "年龄：" + this.age);
//     }
// }
// Child.prototype = new Parent("小明dfa");
// var child = new Child(20, "小张");
// child.getName();
// child.show();

/**
 * 第三种方式
 */
// function Parent(name) {
//     this.name = name;
//     this.getName = function() {
//         console.log("姓名：" + this.name);
//     }
// }
// Parent.prototype.show = function() {
//     console.log("展示中....");
// }

// function Child(name, age) {
//     Parent.call(this, name);
//     this.age = age;
//     this.getAge = function() {
//         console.log("年龄：" + this.age);
//     }
// }
// var parent = new Parent("小张");
// parent.show();
// Child.prototype = Parent.prototype;
// var child = new Child("小李", 20);
// child.show = function() {
//     console.log("不是私有的");
// };
// child.show();
// parent.show();

// var map = new Map(); //映射关键字Map
// map.set("name", "小明"); //set:设置 {参数："值"}
// if (map.has("name")) {
//     printf(map.get("name"));
// } else {
//     map.delete("name");
// }

// let test = {
//     name: "小明"
// }
// delete(test.name);
// console.log(test);