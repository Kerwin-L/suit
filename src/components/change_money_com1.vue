<template id="">
  <div class="template" >


  <list class="list-ios">
  <item class="item_style">
    <label>价格</label><div class='price '><input type="number" name="money" value="1"/><span>元</span></div>
  </item>
  <item class="item_style">
    <label>兑币数量</label><div class='price'><input type="number" name="money" value="2"/><span>币</span></div>
  </item>
  <item class="item_style">
    <md-button class="button button-assertive">取消</md-button>
    <md-button class="button button-balanced" @click.native="change_machine_info">修改</md-button>

  </item>

</list>

</div>
</template>

<script type="text/javascript">
export default{
  methods:{
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
  /* .item_style {
    margin: 40px 0px;
  } */
  label{
    display: block;
    float: left;
    width: 30%;
    height: 20px;
  }
  .price{
    float: right;
    width: 100px;
    text-align: center;
  }
  input{
    display: inline-block;
    width: 40%;
  }
  .button{
    width:50%;
  }
  /* span{
    float: right;
  }
  input{
    background-color: gray;
    width:20%;
  } */

</style>
