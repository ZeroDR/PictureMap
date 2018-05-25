<template>
  <div id="app">
    <BackTop :height="100"></BackTop>
    <header-menus></header-menus>
    <router-view/>
    <footer-msg></footer-msg>
  </div>
</template>

<script>
  import HeaderMenus from '@/components/HeaderMenus'
  import FooterMsg from '@/components/FooterMsg'

  export default {
    name: 'app',
    components: {HeaderMenus, FooterMsg}
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #eee;
    height: 100%;
    width: 100%;
    overflow-y:auto;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .ivu-modal-footer{
    display:none !important;
  }
</style>
