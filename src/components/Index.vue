<template>
  <div class="page has-navbar" v-nav="{ title: 'Home' }">

    <div class="page-content text-center">
      <h2 class="padding" v-text="msg"></h2>

      <router-link class="button button-assertive" to="/about">
        <i class="ion-information-circled"></i> About
      </router-link>

      <router-link class="button button-positive" to="/VonRadio">
        <i class="ion-information-circled"></i> VonRadio
      </router-link>

      <router-link class="button button-energized" to="/Cells">
        <i class="ion-information-circled"></i> Cells
      </router-link>

      <router-link class="button button-energized" to="/Swiper">
        <i class="ion-information-circled"></i> Swiper
      </router-link>
      <br>

      <router-link class="button button-positive" to="/Cascade">
        <i class="ion-information-circled"></i> Cascade
      </router-link>

     <router-link class="button button-positive" to="/popup">
        <i class="ion-information-circled"></i> popup
      </router-link>

       <router-link class="button button-positive" to="/modal">
        <i class="ion-information-circled"></i> modal
      </router-link>


      <!-- 除了适用所有 ionic 自带的按钮类外，新增 `button-fab` 类以支持绘制 fab 风格按钮 -->

      <md-button class="button button-energized button-fab"
      @click.native="addToast()">
        <i class="icon ion-home" ></i>
      </md-button>
      {{username}}

      <von-input type="text" v-model="username" placeholder="user/phone/email" label="username"></von-input>


      <datepicker v-model="birthday" label="生日" date-format="yyyy-mm-dd"></datepicker>

    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        msg: 'Hello! Vonic.',
        username: '',
        birthday: '',
      }
    },
    methods:{
      addToast(){

$actionSheet.show({
  // 支持三种主题样式 ios/android/weixin
  theme: 'weixin',
  title: '标题',
  buttons: {
    // 操作列表选项文字及回调函数
    'Action - 1': () => {
      console.log('action 1 called.')
    },

    'Action - 2': () => {
      console.log('action 2 called.')
    }
  }
})
      }
    }
  }
</script>
<style scoped>
  h2 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }

  .page.has-navbar .page-content {
    padding-top: 100px;
  }

  .button {
    margin: 10px;
    /* width: 40%; */
  }
</style>
