<template>
  <div class="page has-navbar" v-nav="{title: '预约',showBackButton: true}">


    <div class="page-content">

        <div class="identified_style" >
          <von-input
            type="text"
            v-model="contact_name"
            placeholder="联系人姓名"
            label="联系人姓名:"
            >
          </von-input>
          <von-input
            type="text"
            v-model="contact_phone"
            placeholder="联系电话"
            label="联系电话:"
            >
          </von-input>
          <von-input
            type="text"
            v-model="contact_address"
            placeholder="量体地址"
            label="量体地址:"
            >
          </von-input>
          <von-input
            type="text"
            v-model="contact_info"
            placeholder="备注"
            label="备注:"
            >
          </von-input>
          <router-link class="button button-balanced"  @click.native="change_machine_info" to="/user">
         立即预约
         </router-link>


        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{

        contact_name: '',
        contact_address: '',
        contact_info: '',
        contact_phone: '',




      }
    },
    methods: {
      onTabClick(index) {
        this.tabIndex = index
      },
      change_machine_info(){
        $toast.show('提交成功', 700).then(() => {
          var t = this;
          t.$emit('test', 'hi');
      })
      }
    }
  }
</script>
<style scoped>
.button{
  margin: 5%;
  width: 90%;
}
.identified_style{
    margin-top: 50px;
  }
</style>
