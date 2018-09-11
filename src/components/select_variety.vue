<template>
  <div class="page has-navbar" v-nav="{title: '产品选择'}">
    <div class="page-content text-center">
      <h4 class="padding" v-text="msg"></h4>
      <swiper class="swiperStyle":options="swiperOption" ref="mySwiper">
         <!-- slides -->

           <div class="swiper-slide">
             <div class="product">
                 <img src='./../img/main_shirt.jpg'/>
                <router-link class="button button-royal" to="/select_product">
               购买
               </router-link>
             </div>
           </div>
           <div class="swiper-slide">
             <div class="product">
               <img src='./../img/trousers.jpg'/>
               <router-link class="button button-royal" to="/select_product">
              购买
              </router-link>
             </div>
           </div>


         <!-- Optional controls -->

         <div class="swiper-pagination "  slot="pagination"></div>
       </swiper>

    </div>


  </div>
</template>

<script>
import machine_cmp from './machine_cmp.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          preventClicks : false,
          preventLinksPropagation : true,
          slidesPerView: 1.2,
          centeredSlides: true,
          spaceBetween: 20,
          parallax: true,//作用： 视差效果
          pagination: {
            el: '.swiper-pagination',//分页
            clickable: true,
          },
            zoom: {
            toggle: false,
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

      }
    },

    components: {
    swiper,
    swiperSlide,
    machine_cmp
  },
  methods:{
    aa(){
      return this.posts
    },

    showPopup() {
      let options = {
        effect: 'scale',
        title: 'aaa',
        buttons: [
          {text: '确定'},
          {text: '取消'},
        ]
      }

      let popup = $popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;">内容文字</p>', options)

      popup.show().then((buttonIndex) => {
        console.log(buttonIndex)
      })
    }
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
    height: 80%;
    margin: auto;
  }
</style>
