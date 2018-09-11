<template>
  <div class="page has-navbar" v-nav="{title: '设备管理',showBackButton: true}">
    <div class="page-content padding-top">

      <swiper class="swiperStyle":options="swiperOption" ref="mySwiper">
         <!-- slides -->

           <div class="swiper-slide"    v-for="info in machineInfo">
             <machine_cmp  v-bind:totalInfo='info'></machine_cmp>
           </div>

         <!-- Optional controls -->

         <div class="swiper-scrollbar"   slot="scrollbar"></div>
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
        machineInfo: [
        { id: 1, title: '娃娃机1号',address: '设备地址：广东省深圳市南山区海岸城',status: "运行"},
        { id: 2, title: '娃娃机2号',address: '设备地址：广东省深圳市龙岗区CoCoPark' ,status: "离线"},
        { id: 3, title: '娃娃机3号',address: '设备地址：广东省深圳市罗湖区东门街',status: "待启动" }
        ],
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
  margin-top: 25px;
}
.machine_control{
  background-color: white;
}

.machine_button{
  margin: 2%;
  float: left;
  width: 46%;
}

.machine_address{
  font-size: small;
}
.des_title{
  padding: 15px;
  margin: 0px 15px;
  border-bottom: 2px solid gray;
}
.machine_des{
    text-align: center;
    width: 100%;
    max-height: 100%;
    margin: 20px auto;
    background-color: white;
}
</style>
