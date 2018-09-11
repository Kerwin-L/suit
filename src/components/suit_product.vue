<template>
  <div class="page has-navbar" v-nav="{title: '蓝底细条纹 YOCS205541',showBackButton:true}">
    <div class="page-content   ">
      <swiper class="scroll text-center" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <div class="swiper-slide"><img src="../img/shirt1.jpg">  </div>
            <div class="swiper-slide"><img src="../img/shirt2.jpg"></div>
            <div class="swiper-slide"><img src="../img/shirt3.jpg"></div>
        <!-- Optional controls -->
        <div class="swiper-pagination "  slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>

      <div class="title">
        <div class="suit_name">蓝底细条纹YOCS205541</div>
        <div class="suit_price">￥549 <badge  num="包邮"></badge></div>
        <router-link class="button button-assertive" to="/select_collar">
       购买
       </router-link>
      </div>
      <div class="store_des">
      </div>

      <div class="suit_des">
        <div class="des_title ">
          <div class="title_img text-center">
            <img src="./../img/logo2.jpg" />
          </div>

        </div>

        <div class="des_content">
          <img src="./../img/step/1.jpg" />
          <img src="./../img/step/2.jpg" />
          <img src="./../img/step/3.jpg" />
          <img src="./../img/step/4.jpg" />
          <img src="./../img/step/5.jpg" />
          <img src="./../img/step/6.jpg" />
          <img src="./../img/step/7.jpg" />
          <img src="./../img/step/8.jpg" />
          <img src="./../img/step/9.jpg" />
          <img src="./../img/step/10.jpg" />
          <img src="./../img/step/11.jpg" />
          <img src="./../img/step/12.jpg" />
          <img src="./../img/step/13.jpg" />
          <img src="./../img/step/14.jpg" />
          <img src="./../img/step/15.jpg" />

        </div>
      </div>
    </div>

    <!-- <router-link  class="button button-assertive " :to="/select_collar">立即购买</router-link> -->
    <!-- <md-button class="button button-assertive " @click.native="showModal()">立即购买</md-button> -->

  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HelloWorld',
  components: {
      swiper,
      swiperSlide
  },
  data () {
    return {
       swiperOption: {
          notNextTick: true,
          //循环
          loop:true,
          //设定初始化时slide的索引
          initialSlide:0,
          //自动播放
          autoplay:true,
          // autoplay: {
          //     delay: 3000,
          //     stopOnLastSlide: false,
          //     disableOnInteraction: true,
          // },
          // 设置轮播
          // effect : 'flip',
          //滑动速度
          speed:800,
          //滑动方向
          // direction : 'horizontal',
          //小手掌抓取滑动
          // grabCursor : true,
          //滑动之后回调函数
          // on: {
          //     slideChangeTransitionEnd: function(){
          //       // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          //     },
          // },
          //左右点击
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
          //分页器设置
          pagination: {
              el: '.swiper-pagination',
              clickable :true
          }
        },
        swiperSlides: [1, 2, 3, 4]
        ,
      modal: undefined
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted () {
    //可以使用swiper这个对象去使用swiper官网中的那些方法
     console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(0, 0, false);
  },

  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title_img{
  margin: 0px auto;
  width: 60%;
}
.suit_des{
  background-color: white;
  margin-top: 25px;
}
.des_title{
  font-size: medium;
  padding: 15px;
}
.button{
  width: 100%;
  position: fixed;
  bottom: 44px;
}
.buy_button{
  width: 100%;
  height: 100%;
  padding: 0px auto;

}

.title{
  background-color: white;
}
.suit_name{
  padding: 10px;
  font-size: large;
}
.suit_price{
  padding: 5px 10px;
  color: red;
}
.scroll{
  position: relative;
  margin-top: 43px;
  height: 70%;
}
img{
  overflow: hidden;
  max-width: 100%;

}



</style>
