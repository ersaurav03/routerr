<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12">
     <!--  <h1>JSMPJ Routing</h1> -->
     <h1>Routing</h1>
     <hr>
   <!--   <Header></Header> -->
     <router-view name="header-top"></router-view>
     <router-view></router-view>
     <router-view name="header-bottom"></router-view>
    </div>
  </div>
</div>
</template>
<script>
  import Header from './components/Header.vue';
  export default{
  components:{
    Header
  }
  }
</script>

<style>

</style>
