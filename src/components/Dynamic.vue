<template>
  <div>
	  <section class="dynamic">
            <div class="dynamicTop">
               <h3>新闻动态</h3>
            </div>
            <div class="dynamicMenu clearfix">
                <ul class="pull-left">
                    <li class="active"><a href="#">ALL</a></li>
                    <li><a href="#">网页设计</a></li>
                    <li><a href="#">UI设计</a></li>
                    <li><a href="#">平面设计</a></li>
                </ul>
                <div class="pull-right">
                    <img src="../../phones/img/public/more_03.png" alt="">
                </div>
            </div>
            <div class="newfoot">
                <div class="newfootLeft">
                    <img src="../../phones/img/public/newleft_03.png" alt="">
                </div>
                <div class="newfootRight">
                    <img src="../../phones/img/public/newright_03.png" alt="">
                </div>
                <div class="Clear"></div>
            </div>
            <div class="newend">
                <span class="one">留下您的意见和建议：</span>
                <input type="text">
                <button>提交</button>
            </div>
        </section>
  </div>
</template>

<script>
export default {
	name:'Dynamic'
}
</script>

<style lang= 'less'>
@import '../assets/Dynamic.less';
</style>