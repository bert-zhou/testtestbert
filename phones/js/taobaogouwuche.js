$(function(){
	//显示总价的方法
	var priceall = $('.price')
	function totalprice(){
		for(var i = 0; i< priceall.length;i++){
			var price = parseFloat($('.price:eq('+i+')').find('span').html());
			var num = parseInt($('.amount:eq('+i+')').find('input').val());
			var money = (price * num).toFixed(2);
			$('.total').eq(i).find('span').html(money);
		}
	}
	totalprice();
	//减
	$(".sub").on("click",function(){
		var index = $(this).attr("id").substr(3);
		var price = parseFloat($(".price").eq(index).find("span").html());
		var num = parseInt($(".amount:eq("+index+")").find("input").val());
		console.log(typeof num);
		console.log(typeof price);
		num--;
		if(num<1){
			alert("不能再减了老板！！")
			return false;
		}
		//计算小计
		var money = (price * num).toFixed(2);
		$(".total").eq(index).find("span").html(money);
		$(".amount").eq(index).find("input").val(num);
		totalmoney();
	})
	//加
	$(".add").on("click",function(){
		var index = $(this).attr("id").substr(3);
		var price = parseFloat($(".price").eq(index).find("span").html());
		var num = parseInt($(".amount").eq(index).find("input").val());
		num++;
		if(num > 10){
			alert("库存不足了老板！！");
			return false;
		}
		//计算
		var money = (price * num).toFixed(2);
		$(".total").eq(index).find("span").html(money);
		$(".amount").eq(index).find("input").val(num);
		totalmoney();
	})
	//删除
	$(".del").on("click",function(){
		var index = $(this).attr("id").substr(3);
		$(".product").eq(index).prev().fadeOut();
		$(".product").eq(index).fadeOut();
	})
	//全选
	$("#allcheckbox").on("click",function(){
		for(var i = 0;i < $(".product").length;i++){
			var tr = $(".product").eq(i).find("input[type = 'checkbox']")
			if($(this).prop("checked")){
				tr.prop("checked",true);
			}else{
				tr.prop("checked",false);
			}
		}
		$(this).prop("checked",$(this).prop("checked"));
		$(".product input[type = 'checkbox']").prop("checked",$(this).prop("checked"));
	})
	//单选
	var single = $(".product").find("input[type = 'checkbox']");
	single.on("click",function(){
		var z= 1;
		$(this).attr("checked",$(this).prop("checked"))
		for(var i = 0;i < single.length;i++){
			if(single.eq(i).prop("checked") == false){
				z = 0;
				break;
			}
		}
		if(z ==0){
			$("#allcheckbox").prop("checked",false);
		}else{
			$("#allcheckbox").prop("checked",true);
		}
		totalmoney();
	})
	//删除所选
	$(".footerleft").on("click",function(){
		for(var i = 0;i < $(".product").length;i++){
			if($(".single" + i).is(":checked")){
				$(".product").eq(i).prev().fadeOut();
				$(".product").eq(i).fadeOut();
			}
		}
	})
	//开始计算总价格
	function totalmoney(){
		var totalpoint=0;
		var money=0;
		for(var i = 0;i< $(".product").length;i++){
			var price = parseFloat($('.price:eq('+i+')').find('span').html());
			var num = parseInt($('.amount:eq('+i+')').find('input').val());
			var point = parseInt($(".score:eq("+i+")").find("span").html());
			if($(".single"+i).is(":checked")){
				totalpoint += point * num;
				money +=num * price.toFixed(2); 
			}
		}
		$(".sumprice").html(money);
		$(".sumscore").html(totalpoint);
	}
})