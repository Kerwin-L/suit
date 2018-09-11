<template>
	<div class="page has-navbar" v-nav="{title: 'cells',showBackButton: true }">
    <div class="page-content ">
 <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
	<div class="swiper-slide"><img src="../img/shirt1.jpg">  </div>
      <div class="swiper-slide"><img src="../img/shirt2.jpg"></div>
      <div class="swiper-slide"><img src="../img/shirt3.jpg"></div>
    <!-- Optional controls -->

		<div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</div>
</template>


<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
     name: 'carrousel',
    data() {
      return {
        swiperOption: {
				loop:true,
				autoplay:true,
	        slidesPerView: 1.5,
	      centeredSlides: true,
	      spaceBetween: 50,
	      parallax: true,//作用： 视差效果
	      pagination: {
	        el: '.swiper-pagination',//分页
	        clickable: true,
	      },
	      zoom: {
	        toggle: false,
	      },

        }
      }
    },
    components: {
    swiper,
    swiperSlide
  },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>


<style scoped>
.swiper-scrollbar{
	float: left;
}
.swiper-slide{
	height: 600px;
}
.swiper-container{
	margin-top: 100px;
}
</style>
