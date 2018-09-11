<template lang="html">
  <div class="page has-navbar" v-nav="{title: '优惠设置',showBackButton: true}">
    <div class="page-content">

      <list class="list-ios">
        <item class="item_style">
          <strong>充值优惠</strong><small>(全部设备优惠设置)</small>
        </item>
        <item class="item_style">
          1.00 元 = 1 币
          <span class="change_button"  @click="showModal()"><small>修改</small></span><span class="change_button"><small>删除</small></span>

        </item>
        <item class="item_style">
          5.00 元 = 5 币
          <span class="change_button"  @click="showModal()"><small>修改</small></span><span class="change_button"><small>删除</small></span>
        </item>
        <item class="item_style">
          10.00 元 = 10 币
          <span class="change_button"  @click="showModal()"><small>修改</small></span><span class="change_button"><small>删除</small></span>
        </item>
        <item class="item_style">
          20.00 元 = 20 币
          <span class="change_button"  @click="showModal()"><small>修改</small></span><span class="change_button"><small>删除</small></span>
        </item>
        <item class="item_style">
          50.00 元 = 50 币
          <span class="change_button"  @click="showModal()"><small>修改</small></span><span class="change_button"><small>删除</small></span>
        </item>
        <item class="item_style">
          100.00 元 = 100 币
          <span class="change_button"  @click="showModal()"><small>修改</small></span><span class="change_button"><small>删除</small></span>
        </item>
      </list>

    </div>
  </div>
</template>

<script>
import compon from './change_money_com1.vue'

export default {
  data() {
    return {
      modal: undefined
    }
  },
  components:{
     compon
  },
  methods: {
     showPopup() {
       console.log('123');
       let options = {
         effect: 'scale',
         title: '',
         buttons: [
           {text: '确定'},
           {text: '取消'}, 
         ]
       }

       let popup = $popup.fromTemplate("<compon2></compon2>", options)

       popup.show().then((buttonIndex) => {
         console.log(buttonIndex)
       })
     },
     showModal() {
        this.modal.show()
      }
   }

   ,
   mounted() {
    $modal.fromComponent(compon, {
      title: '价格修改',
      theme: 'default'
    }).then((modal) => {
      console.log(modal.content);
        this.modal = modal;
        modal.content.$on('test',function(msg){
                    console.log(msg);
                    modal.hide();
                });
      })
  },

    destroyed() {
      if (this.modal)
        $modal.destroy(this.modal)
    },

}

</script>

<style lang="css" scoped>
.item_style{

}
.change_button{
  display: flex;
  font-size: xx-small;
  float: right;
  height: 25px;
  width: 35px;
  border-radius: 2px;
  border: 2px solid gray;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-color: gray;
}
</style>
