<template>
  <div>
	  <div id="myCarousel" class="carousel slide">
            <!-- 轮播（Carousel）指标 -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <!-- 轮播（Carousel）项目 -->
            <div class="carousel-inner">
                <div class="item active">
                    <img src="../../phones/img/public/banery_02.png" alt="First slide">
                </div>
                <div class="item">
                    <img src="../../phones/img/public/banery_02.png" alt="Second slide">
                </div>
                <div class="item">
                    <img src="../../phones/img/public/banery_02.png" alt="Third slide">
                </div>
            </div>
	  </div>
  </div>
</template>

<script>
export default {
	name:'Lunbo',
	data(){
		return{

		}
	},
	methods:{
		
	}

}
</script>

<style>

</style>