<template lang="html">
  <div class="page has-navbar" v-nav="{title: '个人中心'}">
    <div class="page-content text-center">
      <div class="title_back text-center">
        <div class="head2">
          <img src="../img/user/user1.jpg" />
        </div>
        <div class="name2">
          老罗
        </div>
      </div>

      <cells class="cell_style" :items="entrances" :on-cell-click="onCellClick" col="2"></cells>

      <div class="indent">
        <div class="indent_title">
          <div class="indent_logo">
            <img class="logo" src="./../img/pure_logo.jpg" /><p class="logo_name">Universe  <i class="icon ion-ios-arrow-forward"></i></p>
          </div>
          <div class="indent_status">
              待量体
          </div>
        </div>
        <div class="indent_content">
          <div class="content_img">
              <img src="./../img/suit/suit1.jpg" />
          </div>
          <div class="content_info">
            <p class="info_title">白色细条纹 YDPPC20201</p>
            <div class="bag">
              <span>温莎领</span>
              <span>法式袖</span>
            </div>
          </div>
          <div class="content_price">
            <div class=" more_info">更多</div>
            <p>总计：</p>
            <span> <b>￥529</b> </span>
          </div>

        </div>
      </div>

    </div>

      <!-- <div class="title_name">
        <div class="head"><img src="../img/user/user1.jpg" /></div>
        <div class="name">老罗
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      entrances: [
        '<div class="entrance dark" style="padding-top:10px;"><span>99999 元<br>零钱</span></div>',
        '<div class="entrance dark"  style="padding-top:10px;"><span>520 个<br>纽扣</span></div>',

      ]
    }
  }
}
</script>

<style scoped>
/* 菜单设置 */
.more_info{
  font-size: xx-small;
  position: absolute;
  bottom: 13px;
  right: 170px;
  color: #B5B5B5;
}

.content_price p{
position: absolute;
right: 80px;
bottom: 2px;
}
.content_price span{
  position: absolute;
  right: 30px;
  bottom: 13px;
}

/* .content_price{
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 200px;
} */



.bag{
  float:left;
  margin-left: 15px;
}

.content_info span{
display: flex;
align-items: center;
justify-content: center;
background-color: #B5B5B5;
height: 20px;
border-radius: 40px;
font-size: xx-small;
float: left;
margin: 5px;

width: 60px;

}
/* 订单内容 */
.content_img{
  float: left;
  width: 30%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
}
.indent_content{
  padding: 10px 0px;
  height: 150px;
}
.info_title{
  float:left;
  margin-left: 0px;
  width:200px;
}
/* 订单设置 */
.indent_status{
  color: orange;
  float: right;
  padding: 12px;
  font-family: '-apple-system', "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;

}
.indent{
  position: relative;
  background-color: white;
  margin: 20px;
  height: 10%t;
  border-radius: 10px;
  padding: 1px 15px;
}
.indent_logo{
  float: left;
  width:  120px;
  height: 100%;
  padding: 2px;
}
.indent_title{
  height: 45px;
  border-bottom: 1px dashed #B5B5B5;
}
.logo{
  float:left;
  margin-top: 5px;
  margin-left: 5px;
  width: 25px;
}
.logo_name{
  padding-top: 10px;
}




.cell_style{
  margin: 0px;
}
/* 价格设置 */
.bank{
  background-color: white;
}
/* .border{
  display: inline-block;
  height: 40px;
  border: 1px solid #B5B5B5;

} */
.integral {
  height: 50px;
  width: 49%;
  border-right: 2px solid #B5B5B5;
  display: inline-flex;
}



.head2{
  width: 70px;
  height: 70px;
  margin: 13px auto;
  border: 2px solid white;
  border-radius: 60px;
  overflow: hidden;
}
.title_back{
  height: 130px;
  width: 100%;
  background-color: #B5B5B5;
  overflow: hidden;

}
/* .title_name{
  background-color: white;
  padding: 15px;
  margin: 0px auto;
  border-radius: 10px;
  width: 90%;
  position: relative;
  top: -60px;
} */
/* .head{
  width: 70px;
  height: 70px;
  border-radius: 10px;
  overflow: hidden;
  display: inline-block;
} */
.name2{
  font-size: medium;
  color: white;
}
/* .name{
  display: inline-block;
  position: relative;
  top: -45px;
  left: 20px;
  font-size: large;
  font-family: '-apple-system', "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;
} */
img{
  width: 100%;
  display: block;
}
</style>
