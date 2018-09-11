<template lang="html">
  <div class="machine_des">
      <h3 class="des_title"><strong>{{info.title}}</strong></h3>

      <div class=" button machine_control" >
      <span class="machine_address">{{info.address}}</span>
      </div>

      <div class=" button machine_control" >
      <span class="machine_address" >状态：<badge num="离线" style="color: green;"></badge></span>
      </div>

      <div class=" button machine_control"  @click="showChange">
        <span style="float: left"><small>充值设置:</small></span>
         <div class="change_button" ><small>修改</small></div><br>

        <md-button class="button button-stable machine_button"><small>1元1币</small></md-button>
        <md-button class="button button-stablestable machine_button"><small>5元5币</small></md-button>
        <md-button class="button button-stable machine_button"><small>10元12币</small></md-button>
        <md-button class="button button-stable machine_button"><small>20元25币</small></md-button>
        <md-button class="button button-stable machine_button"><small>30元40币</small></md-button>
        <md-button class="button button-stable machine_button"><small>50元70币</small></md-button>

      </div>


  </div>
</template>

<script>
import compon from './change_money_com1.vue'

export default {
  props: ['totalInfo'],
  data(){
    return {
      info: this.totalInfo,
      modal: undefined
    }
  },
  components:{
    compon
  },

  methods: {
     showPopup() {
       let options = {
         effect: 'scale',
         title: 'aaa',
         buttons: [
           {text: '确定'},
           {text: '取消'},
         ]
       }

       let popup = $popup.fromTemplate(compon, options)

       popup.show().then((buttonIndex) => {
         console.log(buttonIndex)
       })
     },
     showChange(){
        this.modal.show();
     }
  },
  mounted(){
    $modal.fromComponent(compon,{
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
  destroy(){
    if(this.modal)
      $modal.destroy(this.modal)
  }


}
</script>



<style scoped>
.change_button{
  display: flex;
  font-size: xx-small;
  float: right;
  height: 25px;
  width: 35px;
  border-radius: 2px;
  margin-top: 10px;
  background-color: #B5B5B5;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
}

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
