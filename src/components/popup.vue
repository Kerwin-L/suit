<template>
  <div class="page has-navbar" v-nav="{title: '弹层',showBackButton: true}">
    <div class="page-content padding-top">
      <div class="item item-icon-right thin-border" @click="showPopup()">
        Show Popup
        <i class="icon ion-ios-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      showPopup() {
        let options = {
          effect: 'scale',
          title: '标题文字',
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
    }
  }
</script>