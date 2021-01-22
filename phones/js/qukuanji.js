// 查询账户 取钱 存钱 退出
var input = require("readline-sync");
var money = 1000;
var num;
var list = [
	{ username: 123, passwords: 123, root: 1 },
	{ username: 234, passwords: 234 }
];
// console.log(list)
var isok = true;
console.log("欢迎使用取款机操作系统！");
console.log("注册请按1，登录请按2,退出请按0");
var numbr = input.question();
switch (numbr) {
	case "1":
		zhuce();
		break;
	case "2":
		break;
	case "0":
		break
}
console.log("再见")
// 注册方法
function zhuce() {
	console.log("请输入要注册的用户名");
	var tiaojian2 = true;
	while (tiaojian2) {
		var name = input.question();
		for (var i = 0; i < list.length; i++) {
			if (list[i].username == name) {
				console.log("用户名重复请重新输入！！")
				var tiaojian = true;
				while (tiaojian) {
					console.log("请输入密码");
					var password1 = input.question();
					console.log("请再次输入密码");
					var password2 = input.question();
					if (password1 != password2) {
						console.log("两次密码输入不一致请重新输入！！")
					} else {
					}
				}
			}

		}
	}

}

















// while (isok) {
// 	console.log("查询账户请按1 ,取钱请按2 ,存钱请按3 ,退出请按0!!");
// 	console.log("账户余额为"+ money)
// 	num = input.question();
// 	switch (num) {
// 		case "1":
// 			looking();
// 			break;
// 		case "2":
// 			getmoney();
// 			break;
// 		case "3":
// 			savemoney();
// 			break;
// 		case "0":
// 			isok = false;
// 			break;
// 	}
// }
// console.log("欢迎下次光临");
// //账户查询
// function looking() {
// 	console.log("您的账户余额为" + money);
// }
// //取钱
// function getmoney() {
// 	var isno = true;
// 	console.log("请输入取款金额最低100");
// 	for (var i = 0; isno; i++) {
// 		var jine = input.question();
// 		if (money > jine && jine % 100 == 0) {
// 			money = money - jine;
// 			console.log("恭喜您取款成功，正在出钞。。。");
// 			console.log("请选择操作！！");
// 			isno = false;
// 		} else if (money < jine) {
// 			console.log("账户余额不足，请重新输入");
// 		} else {
// 			console.log("输入的金额不正确，请重新输入");
// 		}
// 	}
// }
// //存钱
// function savemoney() {
// 	var isokk = true;
// 	console.log("请输入您要存入的金额");
// 	while (isokk) {
// 		var save = parseInt(input.question());
// 		if (save % 100 == 0) {
// 			console.log("请把您的纸币放进入钞口");
// 			console.log("存钱成功！！")
// 			money = money + save;
// 			isokk = false;
// 		} else {
// 			console.log("输入的金额不正确，请重新输入");
// 		}
// 	}
// }