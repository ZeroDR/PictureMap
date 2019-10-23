<template>
  <div class="footer-panel">
    <div class="footer-items">
      <ul>
        <li v-for="(item,key,index) in items">
          <div style="line-height:12px;"><img style="margin:0 5px;" src="/static/imgs/gongan_d.png" /><span>{{item.value}}</span></div>
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
          value: '豫ICP备18044703号'
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
