<template>
  <div class="page has-navbar" v-nav="{title: '主界面'}">
    <div class="page-content page-cells">
        <div class="entrance HomeTitle"><div class="TitleName">今日总收益&nbsp&nbsp</div><div class="TitleMoney">5.20元</div> </div>
        <!-- <div class="entrance machine_control main_control"> </div> -->
        <router-link class=" button machine_control" to="/Machine_control">
          <i class="homeicon icon ion-android-settings"></i><span>设备管理</span>
        </router-link>



        <!-- <div class="entrance machine_control ability"><i class="homeicon icon ion-ios-flame"></i><div class="feature">设备注册</div></div>
        <div class="entrance machine_control ability"><i class="homeicon icon ion-ios-star"></i><div class="feature">优惠设置</div></div>
        <div class="entrance machine_control ability"><i class="homeicon icon ion-ios-location"></i><div class="feature">经营统计</div></div>
        <div class="entrance machine_control ability"><i class="homeicon icon ion-ios-search"></i><div class="feature">礼品统计</div></div> -->

        <router-link class=" button buttonSize" to="/Machine_register">
         <i class="homeicon icon ion-android-add-circle"></i> <div class="feature"><span>设备注册</span></div>
       </router-link>
       <router-link class=" button buttonSize" to="/changeMoney">
         <i class="homeicon icon ion-android-hand"></i> <div class="feature">价格设置</div>
      </router-link>

      <router-link class=" button identified" to="/identified" >
        <i class="homeicon icon ion-android-contact"></i><span>身份认证</span>
      </router-link>

      <!-- <router-link class=" button buttonSize" to="/Machine_control">
        <i class="homeicon icon ion-ios-flame"></i> <div class="feature">价格设置</div>
     </router-link> -->

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped>
.machine_register_des{
  font-size: x-small;
}

.buttonSize{
  float: left;
  width: 50%;
  background-color: white;
  box-shadow: 0.5px 0.5px 0.5px #B5B5B5;
  font-size: 100%;
  border-radius: 0px;

}
.identified{
  width: 100%;
  margin-top: 20px;
  background-color: white;
  border-radius: 0px;
  box-shadow: 0.5px 0.5px 0.5px #B5B5B5;
}
.machine_control {
  width: 100%;
  margin-bottom: 15px;
  background-color: white;
  border-radius: 0px;
  box-shadow: 0.5px 0.5px 0.5px #B5B5B5;

}
.ability{
  width: 50%;
  float: left;
}
 .entrance {

   padding: 20px;
   height: 60px;

 }

 .HomeTitle{
   display: flex;
   flex-direction:  column;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 180px;
   background-color: #4A90E2;
 }
 .TitleMoney{
   font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
   font-size: 250%;
   font-weight: bold;
   color: white;
 }
.TitleName{
  padding-bottom: 10px;
  color: white;

}
.homeicon {
  color: #11C1F3;
  /* display: block; */
  float: left;
  /* margin-right: px; */

}
.feature{
  float: left;
  color: #484746;
;
}

</style>
