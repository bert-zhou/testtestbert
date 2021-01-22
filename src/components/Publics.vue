<template>
  <div>
	<Top @e-top='handTop'></Top>
	<Menus v-show="menushow"></Menus>
	<section class="content">
		<slot name="slot1"><Lunbo></Lunbo></slot>
		<slot name="slot2"><Aboutus></Aboutus></slot>
		<slot name="slot3"><Yutx></Yutx></slot>
		<slot name="slot4"><Goodworks></Goodworks></slot>
		<slot name="slot5"><Share></Share></slot>
		<slot name="slot6"><Dynamic></Dynamic></slot>
	</section>
	<Bottom></Bottom>
  </div>
</template>
<script>
import Top from './Top'
import Menus from './Menu'
import Lunbo from './Lunbo'
import Aboutus from './Aboutus'
import Yutx from './Yutx'
import Goodworks from './Goodworks'
import Share from './Share'
import Dynamic from './Dynamic'
import Bottom from './Bottom'
export default {
	name:'Publics',
	components:{
		Top,
		Menus,
		Lunbo,
		Aboutus,
		Yutx,
		Goodworks,
		Share,
		Dynamic,
		Bottom
	},
	data(){
		return{
			menushow:false
		}
	},
	methods:{
		handTop(value){
			this.menushow = value;
			console.log(this.menushow)
		}
	}
}
</script>

<style>
	* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.Clear {
  clear: both;
}
a:hover,
a:focus {
  text-decoration: none !important;
}
body {
  overflow: scroll;
}
.content {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>