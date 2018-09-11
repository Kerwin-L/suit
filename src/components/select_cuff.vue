<template>
  <div class="page has-navbar" v-nav="{title: '袖子选择',showBackButton:true}">
    <div class="page-content text-center">
      <h4 class="padding" v-text="msg"></h4>
      <swiper class="swiperStyle":options="swiperOption" ref="mySwiper">
         <!-- slides -->

           <div class="swiper-slide">
             <div class="product">
                 <img src='./../img/cuff/1.png'/>

             </div>
           </div>
           <div class="swiper-slide">
             <div class="product">
               <img src='./../img/cuff/2.png'/>
             </div>
           </div>
           <div class="swiper-slide">
             <div class="product">
               <img src='./../img/cuff/3.png'/>
             </div>
           </div>
         <!-- Optional controls -->

         <div class="swiper-pagination"    slot="pagination"></div>
       </swiper>
       <router-link class="button button-royal" to="/book_info">
      立即预约
      </router-link>
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
          slidesPerView: 1.3,
          centeredSlides: true,
          spaceBetween: 20,
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
        modal: undefined,

      }
    },

    components: {
    swiper,
    swiperSlide,
  },
  methods:{
    showModal(){
      this.modal.show()
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

      $modal.fromComponent(select_cuff,{
        title: '袖子选择',
        theme: 'Energized'
      }).then((modal)=>{
        this.modal = modal
      })
    },
    destroyed(){
      if(this.modal)
        $modal.destroy(this.modal)
    }
  }

</script>


<style scoped>
.swiperStyle{
  height: 50%;
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
  }
</style>
