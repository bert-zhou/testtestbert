/**
 * 第一种方式：内置函数方式 
 * this：代表的对象
 * function 函数名（形参）{
*		this.属性名
		this.方法名 = function(){
			方法执行体
		}
    }
    调用方式：需要实例化对象
    声明的函数：相当于就是一个模具
    对象：模具的形状的具体化
    属性的调用：实例化的对象.属性名  或 实例化的对象['属性名']
    方法的调用：实例化对象.方法名()
 */
// function People(name, age) {
//     this.name = name; //this.name：表示的是该对象的属性名name ,值name：形参的name
//     this.age = age;
//     this.getName = function() {
//         console.log(`姓名：${this.name},年龄：${this.age}`);
//     }
// }


// // test("小明", 18).getName(); //调用不能普通的function那样去调用
// var t = new People("小明", 18); //People：就是模具 t就是具体的实例化出来的对象
// // var t1 = new People("小张", 20);
// // console.log(t['name']);
// People.prototype.show = function() {
//     console.log("展示");
// }
// t.getName();

// function Per() {
//     this.name = "小红";
// }
// Per.prototype = new People("小明", 18);
// var per = new Per();
// console.log(per.name);
// function People(name, age) {
//     this.name = name; //this.name：表示的是该对象的属性名name ,值name：形参的name
//     this.age = age; //this:哪个对象调用它，它就指向谁
//     this.getName = function(name) {
//         console.log(`姓名：${this.name},别名：${name},年龄：${this.age}`);
//     }
// }

// var t = new People("小明", 18); //People：就是模具 t就是具体的实例化出来的对象
// t.getName("小凳子");

// var t1 = new People("小张", 20);
// t1.getName("小圆子");

// function People(name, age) {
//     this.name = name; //this.name：表示的是该对象的属性名name ,值name：形参的name
//     this.age = age; //this:哪个对象调用它，它就指向谁
//     this.getName = function(name) {
//         console.log(`姓名：${this.name},别名：${name},年龄：${this.age}`);
//     }
// }

// var t = new People(); //People：就是模具 t就是具体的实例化出来的对象()可有可无，如果方法调用里有这个属性的时候，它会输出undefined
// t.getName("小凳子");

// function People(name, ...phone) {
//     this.name = name; //this.name：表示的是该对象的属性名name ,值name：形参的name
//     this.phone = phone; //this:哪个对象调用它，它就指向谁
//     this.getName = function(name) {
//         console.log(`姓名：${this.name},别名：${name},手机：${this.phone}`);
//     }
// }

// var t = new People("小张", "华为,apple", "小米"); //People：就是模具 t就是具体的实例化出来的对象()可有可无，如果方法调用里有这个属性的时候，它会输出undefined
// t.getName("小凳子");
/**
 * 
 * @param {*} name 
 * @param  {...any} phone 
 */
// function People(name, ...phone) {
//     this.name = name; //this.name：表示的是该对象的属性名name ,值name：形参的name
//     this.phone = phone; //this:哪个对象调用它，它就指向谁
//     this.getName = function(...phone) {
//         console.log(`姓名：${this.name},手机：${this.phone}\n${phone}`);
//     }
// }

// var t = new People("小张", "华为", "小米"); //People：就是模具 t就是具体的实例化出来的对象()可有可无，如果方法调用里有这个属性的时候，它会输出undefined
// t.getName("小凳子", "apple", "三星");

// function People(name, ...phone) {
//     this.name = name; //this.name：表示的是该对象的属性名name ,值name：形参的name
//     this.phone = phone; //this:哪个对象调用它，它就指向谁
//     this.getName = function test(...phone) {
//         console.log(`姓名：${this.name},手机：${this.phone}\n${phone}`);
//     }
// }
// var t = new People("小张", "华为", "小米"); //People：就是模具 t就是具体的实例化出来的对象()可有可无，如果方法调用里有这个属性的时候，它会输出undefined
// t.getName("小凳子", "apple", "三星");
// t.test("apple", "三星"); //错误function People(){}
/**
 * 空函数对象体
 */
// function People() {}
// var obj = new People();
// obj.name = "小明";
// obj.age = 20;
// obj.listen = function() {
//     console.log(this.name + this.age);
// }
// console.log(obj.name);
// obj.listen();

// function People1() {
//     People.call(this, "listen");
//     this.listen = function() {
//         console.log("上课听讲中....");
//     }
// }

// var p1 = new People1();
// p1.listen();

// var t = new Object();
// t.name = "小明";
// t.age = 20;
// t.listen = function() {
//     console.log(this.name + this.age);
// }
// t.listen();
/**
 * 第二种方式：字面量函数声明方式

格式：
	let 变量名 = {
		属性："值"
		方法名：function(参数){
			方法执行体
        }
        或者
        方法名(参数){
            方法执行体
        }
    }
    不需要实例化对象，相当于这里已经是实例化后的对象
    调用方式 ：直接用该变量名.属性名   或者 该变量名.方法名()
    方法名可以是匿名函数也可以是有名字的函数
 */

// let people = {
//     name: "小明", //属性可以给空值，但不能不给值
//     // name, //错误的写法
//     getName: function(name) {
//         console.log("姓名：" + this.name + name); //内部读取属性值的时候，需要用this
//     }
// }
// people.name = "小圆子"; //可以通过这种方式来修改属性值
// console.log(people.name);
// people.getName("小李");

// let people = {
//     name: "小明", //属性可以给空值，但不能不给值
//     // name, //错误的写法
//     getName: function(...name) {
//         console.log("姓名：" + this.name + name); //内部读取属性值的时候，需要用this
//     }
// }
// people.name = "小圆子"; //可以通过这种方式来修改属性值
// console.log(people.name);
// people.getName("小李", "小张");

//方法名还可以以下写法
/**
 * 方法名(参数){}
 */
// let people = {
//     name: "小明", //属性可以给空值，但不能不给值
//     // name, //错误的写法
//     getName(...name) {
//         console.log("姓名：" + this.name + name); //内部读取属性值的时候，需要用this
//     }
// }
// people.name = "小圆子"; //可以通过这种方式来修改属性值
// console.log(people.name);
// people.getName("小李", "小张");
/**
 * 第三种自定义函数声明方式
 */
// function People(name, age) {
//     this.name = name; //this.name：表示的是该对象的属性名name ,值name：形参的name
//     this.age = age;
//     this.getName = function() {
//         console.log(`姓名：${this.name},年龄：${this.age}`);
//     }
// }
// var p = new People("小李", 20);
// People.prototype.height = 160;
// People.prototype.listen = function() {
//     console.log("听课中.....");
// }
// console.log(p.height);
// p.listen(); //对象调用
// // People.listen(); //错误的写法
/**
 * 形参如果写法是数组的写法，实例化对象的时候，实参的写法也要写成数组格式
 */
// function People([name, age] = []) { //****注意这里的写法*****
//     this.name = name; //this.name：表示的是该对象的属性名name ,值name：形参的name
//     this.age = age;
//     this.getName = function() {
//         console.log(`姓名：${this.name},年龄：${this.age}`);
//     }
// }
// var p = new People(["小李", 20]); //****注意这里的写法*****
// p.getName();
/**
 * 
 * @param {*} param0 
 * 如果函数形参数据类型是对象，实参的键名要和形参的参数名一致
 */
// function People({
//     name,
//     age
// } = {}) { //****注意这里的写法*****
//     this.name1 = name; //this.name：表示的是该对象的属性名name ,值name：形参的name
//     this.age1 = age;
//     this.getName = function() {
//         console.log(`姓名：${this.name1},年龄：${this.age1}`);
//     }
// }
// var p = new People({
//     name: "小李",
//     age: 20
// }); //****注意这里的写法*****
// p.getName();

// People.prototype.height = 160;
// People.prototype.listen = function() {
//     console.log("听课中.....");
// }
// console.log(p.height);
// p.listen(); //对象调用
// People.listen(); //错误的写法
// let [a, b, c, d] = ["小李", 20];
// console.log(a, b, c, d);

// function People({ name, age } = {}) {
//     this.name = name; //this.name：表示的是该对象的属性名name ,值name：形参的name
//     this.age = age;
//     this.getName = function() {
//         console.log(`姓名：${this.name},年龄：${this.age}`);
//     }
// }
// var p = new People({ name: "小李", age: 20 });
// p.getName();

// let {
//     name,
//     age
// } = { name: "小明", age: 20 };
// console.log(name, age);

/**
 * 第四种写法 es6写法
 * constructor：构造函数 :初始化
 * 注意事项：类名后面没有括号
 * 	class 类名{
		constructor(参数，参数...){
				构造函数体	
			}
		方法：function（）{}
		方法（）{}
	}
 */
// class People {
//     constructor(name, age) {
//         this.name = name; //this.name:people类的属性名 name：参数值
//         this.age = age;
//         // console.log("我是构造函数...." + this.name + this.age);
//         this.getName();
//         this.getAge(); //内部调用 this
//     }
//     getName = function() {
//         console.log(`姓名：${this.name}`);
//     }
//     getAge() {
//         console.log(`年龄：${this.age}`);
//     }
// }
// var p = new People("小李", 20); //构造函数，从你一创建对象开始就已经存在
// p.getAge();
// p.getName(); //外部调用对象来调用

/**
 * 第五种写法使用Object.create()
 * prototype:新构建的对象不能创建属于自己的对象的私有属性或方法
 */
// let people = {
//         name: "小明", //属性可以给空值，但不能不给值
//         // name, //错误的写法
//         getName: function(name) {
//             console.log("姓名：" + this.name + name); //内部读取属性值的时候，需要用this
//         }
//     }
//     // console.log(people);
// var per1 = Object.create(people);
// per1.name = "小李";
// per1.show = function() {
//         console.log("展示");
//     }
//     //错误的写法
//     // per1.prototype.show = function() {
//     //     console.log("展示");
//     // }
// per1.getName("小圆子");
// console.log(per1);
// per1.show();