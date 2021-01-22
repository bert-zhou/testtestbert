//  * 公司做营销方案
//  * 1、当销售金额在100000，提成 金额的10% ,1000 num*0.1
//  * 2、当销售金额在100000到300000之间，提成 10万 10% ，超过1万的按照20%，25万： 100000*10% + (250000-100000)*20%
//  * 3、当销售金额300000到500000之间，提成10万10%，30万，20%，超出的部分按照30%提成，45万，100000*10%+200000*20%+(4500000-300000)*30%
//  * 4、当销售金额500000到800000之间，提成10万10%，30万，20%，50万30%,超出的部分按照40%提成，55万，100000*10%+200000*20%+200000*30%+(550000-500000)*40%
//  * 5、销售金额超过100万，提成10万10%，30万，20%，50万30%,80万40%，超出的部分按照50%提成，200万 100000*10%+200000*20%+200000*30%+500000*40% + (2000000-1000000)*50%
//  * 10万   ==== > 1  num*0.1 
//  * 10-30万 ====> 2 3  100000*10% + (num-100000)*20%
//  * 30-50万 ====> 4 5 100000*10%+200000*20%+(num-300000)*30%
//  * 50-80万 ===> 6 7 8 100000*10%+200000*20%+200000*30%+(num-500000)*40%
//    80- 100 ===> 9 10 
//  * >100万  ===> default  100000*10%+200000*20%+200000*30%+300000*40% + (num-800000)*50%
//  * 
// let num, profit, a;
// let readline = require("readline-sync");
// console.log("输入销售金额");
// num = readline.question("");
// console.log("你输入的销售金额为：" + num);
// a = Math.ceil(num / 100000); //向上取整 <=10 1  >10 <=30 2 3  >30 <=50 4 5 >50 <80 6 7 8  >80 <=100 9 10  
// console.log(a);
// switch (a) {
//     case 1:
//         profit = num * 0.1; //利润 = 营销金额 * 百分比
//         break;
//     case 2:
//     case 3:
//         profit = 100000 * 0.1 + (num - 100000) * 0.2; //10万营销金额*0.1 + （超过10万的部分剩下部分）*0.2
//         break;
//     case 4:
//     case 5:
//         profit = 100000 * 0.1 + 200000 * 0.2 + (num - 300000) * 0.3; //10万*0.1 + 20万*0.2 + 剩下的部分(总营销额-30万)*0.3
//         break;
//     case 6:
//     case 7:
//     case 8:
//         profit = 100000 * 0.1 + 200000 * 0.2 + 200000 * 0.3 + (num - 500000) * 0.4; //10万*0.1 + 20万*0.2 + 20万*0.3 + 剩下的部分(总营销额-50万)*0.4
//         break;
//     default:
//         profit = 100000 * 0.1 + 200000 * 0.2 + 200000 * 0.3 + 300000 * 0.4 + (num - 800000) * 0.5; //10 万 * 0.1 + 20 万 * 0.2 + 20 万 * 0.3 + 30万*0.4+剩下的部分(总营销额-80万)*0.5
//         break;
// }
// console.log(profit);

/**
 * 模拟银行ATM取款机 1.查询账户 2.存款 3.取款 4.退出
 */

// let readline = require("readline-sync");
// console.log("请输入你需要操作的指令：1.查询账户 2.存款 3.取款 4.退出");
// let operate, inputMoney, outMoney, totalMoney = 5000;
// operate = parseInt(readline.question(""));
// switch (operate) {
//     case 1:
//         console.log(`您的储蓄卡账户金额为： ${totalMoney}`);
//         break;
//     case 2:
//         console.log("请输入您的存款金额");
//         inputMoney = parseInt(readline.question(""));
//         while (isNaN(inputMoney)) {
//             console.log("请输入您的存款金额");
//             inputMoney = parseInt(readline.question(""));
//         }
//         var atm = new ATM(inputMoney, totalMoney);
//         totalMoney += inputMoney;
//         console.log(`存款成功，银行卡余额为${totalMoney}`);
//         break;
//     case 3:
//         console.log("请输入您的取款金额");
//         outMoney = parseInt(readline.question(""));
//         while (!isNaN(outMoney)) {
//             console.log("请输入您的取款金额");
//             outMoney = parseInt(readline.question(""));
//         }
//         while (outMoney > totalMoney) {
//             console.log("余额不足，请重新输入您的取款金额");
//             outMoney = parseInt(readline.question(""));
//         }
//         totalMoney -= outMoney;
//         console.log(`取款成功，银行卡余额为${totalMoney}`);
//         break;
//     case 4:
//         console.log("系统退出....");
//         break;
//     default:
//         console.log("输入有误");
//         break;
// }
class ATM {
    constructor(total, input = null) {

        this.input = input;
        this.total = total;
    }
    show() {
        console.log("您的储蓄卡账户金额为：" + this.total);
    }
    addMoney() {
        console.log("请输入您的存款金额");
        this.input = parseInt(readline.question(""));
        while (isNaN(this.input)) {
            console.log("请输入您的存款金额");
            this.input = parseInt(readline.question(""));
        }
        this.total = this.total + this.input;
        console.log("存款成功， 银行卡余额为" + this.total);
    }
    subMoney() {
        console.log("请输入您的取款金额");
        this.input = parseInt(readline.question(""));
        while (isNaN(this.input)) {
            console.log("请输入您的取款金额");
            this.input = parseInt(readline.question(""));
        }
        while (this.input > this.total) {
            console.log("余额不足，请重新输入您的取款金额");
            inputMoney = parseInt(readline.question(""));
        }
        this.total = this.total - this.input;
        console.log("取款成功，银行卡余额为 " + this.total);
    }
    exit() {
        console.log("系统退出....");
    }
}
let operate, inputMoney, totalMoney = 5000;
let readline = require("readline-sync");
console.log("请输入你需要操作的指令：1.查询账户 2.存款 3.取款 4.退出");
operate = parseInt(readline.question(""));
switch (operate) {
    case 1:
        var atm = new ATM(totalMoney);
        atm.show();
        break;
    case 2:
        var atm = new ATM(totalMoney, inputMoney);
        atm.addMoney();
        break;
    case 3:
        var atm = new ATM(totalMoney, inputMoney);
        atm.subMoney();
        break;
    case 4:
        var atm = new ATM();
        atm.exit();
        break;
    default:
        console.log("输入有误");
        break;
}

/**
 * 打印99乘法表
 */
// let str = "";
// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= i; j++) {
//         str += i + "*" + j + "=" + i * j + " ";

//     }
//     console.log(str);
//     str = "";
// }


/**
 * 冒泡排序
 */
// let temp = [];
// let arr = [50, 89, 12, 65, -58, 236, 789, 217, -56];
// for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = 0; j < arr.length-1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);
//let arr2 = arr.sort();
// console.log(arr2);
/**
 * 有1，2，3，4个数字，能组成多少互不相同且无重复数字的三位数？都是哪些数字？
 * 123 134 124 143 
 */
// let num, count = 0;
// for (var i = 1; i <= 4; i++) { //百位
//     for (var j = 1; j <= 4; j++) { //十位
//         for (var k = 1; k <= 4; k++) {
//             if (i != j && i != k && j != k) {
//                 num = i * 100 + j * 10 + k;
//                 console.log(num);
//                 count++;
//             }
//         }
//     }
// }
// console.log(count);
/**
 * 比如今天是2020/12/22日，算一算今天是一年中的第多少天
 */
// let year, month, day, a, num = 0;
// console.log("请输入年份");
// year = parseInt(readline.question(""));

// console.log("请输入月份");
// month = parseInt(readline.question(""));
// while (month < 0 || month > 12) {
//     console.log("输入的月份格式不正确,请重新输入月份");
//     month = parseInt(readline.question(""));
// }

// console.log("请输入日期");
// day = parseInt(readline.question(""));
// if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//     a = 1;
// } else {
//     a = 0;
// }
// while ((month == 2 && day > 29) || day > 32 || day < 1) {
//     console.log("输入的日期格式不正确,请重新输入日期");
//     day = parseInt(readline.question(""));
// }

// switch (month) {
//     case 1:
//         num = 0; // 0   31 
//         break;
//     case 2:
//         num = 31; //31   29 
//         break;
//     case 3:
//         num = 59; //29+31  31
//         break;
//     case 4:
//         num = 89; //30+59  30 
//         break;
//     case 5:
//         num = 119; //89+30  31
//         break;
//     case 6:
//         num = 150; //119+31  30 
//         break;
//     case 7:
//         num = 180; //150+30  31
//         break;
//     case 8:
//         num = 211; //180+31  31 
//         break;
//     case 9:
//         num = 242; //211+31 30
//         break;
//     case 10:
//         num = 270; //242+30 31
//         break;
//     case 11:
//         num = 301; //270+31  30
//         break;
//     case 12:
//         num = 331; //301+30 31
//         break;
// }
// num += day;

// if (month > 2 && a == 0) {
//     num--;
// }
// console.log(`该日期是今年的第$ { num }天 `);