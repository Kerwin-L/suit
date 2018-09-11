<template>
  <div class="page has-navbar" v-nav="{title: '蓝底细条纹 YOCS205541',showBackButton:true}">

    <div class="page-content text-center">
      <h4 class="padding" v-text="msg"></h4>
      <swiper class="swiperStyle":options="swiperOption" ref="mySwiper">
         <!-- slides -->
           <div class="swiper-slide">
             <div class="product">
                 <img src='./../img/collar/11.png'/>
                 <router-link class="button button-royal" to="/select_cuff">
                选择袖子
                </router-link>
             </div>
           </div>
           <div class="swiper-slide">
             <div class="product">
               <img src='./../img/collar/12.png'/>
               <router-link class="button button-royal" to="/select_cuff">
              选择袖子
              </router-link>
             </div>
           </div>
           <div class="swiper-slide">
             <div class="product">
               <img src='./../img/collar/13.png'/>
               <router-link class="button button-royal" to="/select_cuff">
              选择袖子
              </router-link>
             </div>
           </div>
         <!-- Optional controls -->
         <div class="swiper-pagination"  slot="pagination"></div>
       </swiper>

     </div>
    </div>
</template>

<script>
import select_cuff from './select_cuff.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          preventClicks : false,
          slidesPerView: 1.2,
          centeredSlides: true,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',//分页
            clickable: true,
          },

          // effect : 'cube',
          // cubeEffect: {
          //   slideShadows: true,
          //   shadow: true,
          //   shadowOffset: 100,
          //   shadowScale: 0.6
          // },
        },
        msg: '选择类型',
        modal: undefined,

      }
    },

    components: {
    swiper,
    swiperSlide,
      },
      methods:{

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


    },

  }

</script>

<style scoped>
.swiperStyle{
  height: 500px;
}
.padding{
  margin-top: 25px;

}
  .button{
    margin-top: 5px;
    width: 80%;
  }
  .product{
    height: 60%;
    margin: auto;
  }
</style>
