<template>
  <div class="footer-panel">
    <div class="footer-items">
      <ul>
        <li v-for="(item,key,index) in items">
          <span>{{item.value}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'FooterMsg',
    data () {
      return {
        items: [{
          name: '',
          value: '京ICP备16055951号'
        }]
      };
    }
  };
</script>
<style scoped>
  .footer-panel {
    height: 120px;
    width: 100%;
    background: #fff;
    position: relative;
    bottom: 0;
  }

  .footer-items{
    width:90%;
    margin:0 auto;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    float: left;
    height:24px;
  }

  li > span {
    display: inline-block;
    line-height: 24px;
    color: #666;
    font-family: "Microsoft YaHei UI";
  }
</style>
