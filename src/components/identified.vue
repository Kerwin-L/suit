<template>
  <div class="page has-navbar" v-nav="{title: '选项卡'}">


    <div class="page-content">
        <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick">

        </tabs>
        <div class="identified_style"  v-if="tabIndex==0">
          <von-input
            type="text"
            v-model="single_name"
            placeholder="申请人姓名"
            label="申请人姓名:"
            >
          </von-input>
          <von-input
            type="text"
            v-model="single_identity"
            placeholder="申请人身份证"
            label="申请人身份证:"
            >
          </von-input>
          <von-input
            type="text"
            v-model="single_address"
            placeholder="设备地址"
            label="设备地址:"
            >
          </von-input>
          <von-input
            type="text"
            v-model="single_account"
            placeholder="银行账户"
            label="银行账户:"
            >
          </von-input>
          <md-button class="button button-balanced" @click.native="change_machine_info">申请</md-button>

        </div>
        <div class="identified_style" v-else-if="tabIndex==1">
          <von-input
            type="text"
            v-model="company_name"
            placeholder="公司名称"
            label="公司名称:"
            >
          </von-input>
          <von-input
            type="text"
            v-model="company_legalname"
            placeholder="公司法人姓名"
            label="公司法人姓名:"
            >
          </von-input>
          <von-input
            type="text"
            v-model="company_license"
            placeholder="公司营业执照"
            label="公司营业执照:"
            >
          </von-input>
          <von-input
            type="text"
            v-model="company_code"
            placeholder="统一社会信用代码"
            label="统一社会信用代码:"
            >
          </von-input>
          <von-input
            type="text"
            v-model="company_account"
            placeholder="公司银行账户"
            label="公司银行账户:"
            >
          </von-input>
          <md-button class="button button-balanced" @click.native="change_machine_info">申请</md-button>

        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        tabs: [
        "个体户",
        "商户",
        ],
        tabIndex: 0,
        single_name: '',
        single_identity: '',
        single_address: '',
        single_account: '',
        company_name: '',
        company_account: '',
        company_code: '',
        company_license: '',
        company_legalname: '',



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
