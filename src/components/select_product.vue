<template>
  <div class="page has-navbar" v-nav="{title: '产品样式选择',showBackButton: true}">
    <div class="page-content text-center">
      <h4 class="padding" v-text="msg"></h4>

      <swiper class="swiperStyle" :options="swiperOption" ref="mySwiper">
         <!-- slides -->

           <div class="swiper-slide">
             <div class="product">
                 <img src='./../img/suit/suit1.jpg'/>
                <router-link class="button button-royal" to="/suit_product">
                 白色细条纹 YDPPC20201
               </router-link>

             </div>
           </div>

           <div class="swiper-slide">
             <div class="product">
               <img src='./../img/suit/suit2.jpg'/>
               <router-link class="button button-royal" to="/suit_product">
                白色提花暗条纹
              </router-link>

             </div>
           </div>

           <div class="swiper-slide">
             <div class="product">
               <img src='./../img/suit/suit3.jpg'/>
               <router-link class="button button-royal" to="/suit_product">
                藏蓝色精细牛津纺
              </router-link>

             </div>
           </div>

           <div class="swiper-slide">
             <div class="product">

               <img src='./../img/suit/suit4.jpg'/>
               <router-link class="button button-royal" to="/suit_product">
                藏蓝色精细牛津纺
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
          slidesPerView: 1.3,
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
        machineInfo: [
        { id: 1, title: '娃娃机1号',address: '设备地址：广东省深圳市南山区海岸城',status: "运行"},
        { id: 2, title: '娃娃机2号',address: '设备地址：广东省深圳市龙岗区CoCoPark' ,status: "离线"},
        { id: 3, title: '娃娃机3号',address: '设备地址：广东省深圳市罗湖区东门街',status: "待启动" }
        ],
        msg: '选择布料',

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
