<template>
  <div>
      <header>
          <section class="headleft">
              <img src="../../phones/img/public/logo_03.png" alt="">
          </section>
          <section class="headright" @click="toIndex">
              <img src="../../phones/img/public/menu_03.png" alt="">
          </section>
          <section style="clear: both;"></section>
        </header>
  </div> 
</template>
<script>
export default {
  name:'Top',
  data(){
    return{
      end:false
    }
  },
  methods:{
    toIndex(){
      this.end=!this.end;
      this.$emit('e-top', this.end);   
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/Top.less';
</style>