<template lang="html">
  <div class="main_img">
    <img src="./../img/main/1.jpg"/>
    <img src="./../img/main/2.jpg"/>
    <img src="./../img/main/3.jpg"/>
    <img src="./../img/main/4.jpg"/>
    <img src="./../img/main/5.jpg"/>
    <img src="./../img/main/6.jpg"/>
    <img src="./../img/main/7.jpg"/>
    <img src="./../img/main/8.jpg"/>
    <img src="./../img/main/9.jpg"/>
    <img src="./../img/main/10.jpg"/>
    <img src="./../img/main/11.jpg"/>
    <img src="./../img/main/12.jpg"/>
  </div>
</template>

<script>
export default {
    data(){
      return {
      }
    },
    created(){
      this.windowHeight  = (window.innerHeight-44) + 'px';
      document.body.style.setProperty('--hei', this.windowHeight);
      console.log(this.windowHeight);
    }
}
</script>

<style scoped>
 img{
   width: 100%;
 }
 .main_img{
   width: 100%;
   height: var(--hei);
   overflow: scroll;
 }
</style>
