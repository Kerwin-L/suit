<template>
<div class="page has-navbar" v-nav="{title: '设备中心',showBackButton: true }">
    <div class="page-content page-cells">

      <cells :items="device" col="1" :on-cell-click="onCellClick()"></cells>
      <cells :items="entrances" col="2"></cells>
    </div>
  </div>
</template>
<script>
  export default {
      data() {
      return {
        device:[
          '<div class="entrance HomeTitle"><div class="TitleName">今日总收益&nbsp&nbsp</div><div class="TitleMoney">5.20元</div> </div>',
          '<div class="entrance "><i class="homeicon icon ion-settings"></i><span>设备管理</span> </div>',
        ],
        entrances: [
          '<router-link :to="/Machine_register"><div class="entrance "><i class="homeicon icon ion-ios-flame"></i><div class="feature">设备注册</div></div></router-link>',
          '<div class="entrance "><i class="homeicon icon ion-ios-star"></i><div class="feature">优惠设置</div></div>',
          '<div class="entrance "><i class="homeicon icon ion-ios-location"></i><div class="feature">经营统计</div></div>',
          '<div class="entrance "><i class="homeicon icon ion-ios-search"></i><div class="feature">礼品统计</div></div>',
        ]
      }
    },
    methods:{
      onCellClick(){
        console.log(this);
      }
    }
  }
</script>

<style>
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
   height: 200px;
   background-color: #4A90E2;
 }
 .TitleMoney{
   font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
   font-size: 250%;
   font-weight: bold;
 }
.TitleName{
  padding-bottom: 10px;
}
.homeicon {
  display: block;
  float: left;
  margin-right: 10px;

}
.feature{
  float: left;
  color: #484746;
;
}

</style>
