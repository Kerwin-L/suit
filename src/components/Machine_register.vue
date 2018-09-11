<template lang="html">
  <div class="page has-navbar" v-nav="{title: '商家登记',showBackButton:true}">
    <div class="page-content ">
      <von-input
        type="text"
        v-model="machineName"
        placeholder="请输入设备名称"
        label="设备名称">
      </von-input>
      <von-input
        type="text"
        v-model="machineId"
        placeholder="请输入设备码"
        label="设备码">
      </von-input>
      <von-input
        type="text"
        v-model="machineAddress"
        placeholder="请输入设备地址"
        label="设备地址">
      </von-input>
      <!-- <von-input
        type="text"
        v-model="store"
        placeholder="请输入商家身份证或营业"
        label="用户名">
      </von-input>
      <von-input
        type="text"
        v-model="store"
        placeholder="请输入商家名称"
        label="用户名">
      </von-input> -->

      <div class="buttonStyle">
        <router-link class="button button-balanced buttonStyle" to="/" @click.native="sendMachine()">
        提交
       </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      machineName: '',
      machineId: '',
      machineAddress: '',

    }
  },
  methods: {
    sendMachine(){

    $toast.show('申请成功', 1000).then(() => {
        var t = this;
        t.$emit('test', 'hi');
    })
    console.log("register_button_success")
      // this.$http.get('/machine')
      // .then(function(response){
      //   console.log(response);
      // })
      // .catch(function(error){
      //   console.log(error);
      // })
    }
  }
}
</script>

<style lang="css">
.button_url{
  width:100%;
  height: 100%;
}
.buttonStyle{
  width: 300px;
  height: 30px;
  margin: 20px auto;
}
</style>
