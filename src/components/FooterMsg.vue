<template>
  <div class="footer-panel">
    <div class="footer-items">
      <ul>
        <li v-for="(item,key,index) in items">
          <div style="padding:10px 0;font-size:14px;"><img style="padding:10px 5px;vertical-align: middle;" src="/static/imgs/gongan_d.png" /><span>{{item.value}}</span></div>
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
<style lang="scss" scoped>
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
    font-size:14px;
    div {
      padding:10px 0;
      img {
        padding: 0 10px;
        vertical-align: middle;
      }

      span {
        color: #666;
        font-family: "Microsoft YaHei UI";
      }
    }
  }
</style>
