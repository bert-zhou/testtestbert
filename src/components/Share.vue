<template>
  <div>
    <section class="share">
      <h4>人才共享</h4>
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
            <div>
              <img src="../../phones/img/public/cardone_03.png" alt="First slide" />
            </div>
            <div>
              <img src="../../phones/img/public/cardtwo_03.png" alt="First slide" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Share",
};
</script>

<style lang = 'less'>
@import "../assets/Share.less";
</style>