/**
 * 函数声明的第一种方式字面量函数
 * 当你不知道需要传多少个参数的时候用...形参名
 * ...str:不确定的形参只能放在最后，不能放在前面
 * return :负责返回数据结果，不负责输出数据，一个函数体只能有一个return,，后面的return将不会返回数据
 */
// function test(name, ...str) {
//     return "姓名：" + name + str; //str = [ "小李", "小张"]
// }

// console.log(test("xiaoli", "小李", "小张"));

/**
 * 
 * @param  {...any} str 
 * @param {*} name 
 * 这个是错误的写法
 */
// function test(...str, name) {
//     return "姓名：" + name + str; //str = [ "小李", "小张"]
// }

// console.log(test("xiaoli", "小李", "小张"));
/**
 * 闭包函数 闭合函数
 * 特点：函数A包含函数B,调用函数A输出的结果是函数B的结果
 * 注意事项：在内部的函数的调用时，如果没有用console.log打印的情况，每个函数都需要加上return返回结果
 * @param {*} name 
 * @param  {...any} str 
 */
// function test(name, ...str) {
//     return test1(); //return 不能少

//     function test1() {
//         return test2(); //return 不能少

//         function test2() {
//             return "姓名：" + name + str; //return 不能少
//         }

//     }
// }

// test("xiaoli", "小李");
// console.log(test("xiaoli", "小张"));

/**
 * 第二种方式 函数表达式声明函数
 * 匿名函数，也可以是有名字的函数
 * let 变量名 = function（）{
		函数体
    }
    调用方式 变量名(参数)
 */
// let test = function(name, ...str) {
//         return "姓名：" + name + str;
//     }
// console.log(test("xiaoli", "小张"));
// console.log(test());

// let test = function(name, ...str) {

//     return name + test2("小张");

//     function test2(name) {
//         return name;
//     }
//     /**
//      * 内部的闭包函数不允写成函数表达式声明
//      */
//     let test1 = function(name) {
//         return "姓名：" + name + str;
//     }

// }
// console.log(test("xiaoli", "小张"));

// let test = function test2(name, ...str) {
//     return "姓名：" + name + str;
// }
// console.log(test("xiaoli", "小张"));

/**错误的写法 内部闭包函数不能使用函数表达式方式 */
// function test() {
//     return test1();
//     let test1 = function test2() {
//         return 1254;
//     }
// }

// console.log(test());