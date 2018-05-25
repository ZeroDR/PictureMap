<template>
  <div class="msg-panel">
    <div class="c-panel info-panel">
      <div class="info-title">Just About Me</div>
      <div>
        <ul>
          <li v-for="(item,key,index) in aboutInfo"><span>{{item.aliasname}}：</span><span>{{item.display}}</span></li>
        </ul>
      </div>
    </div>
    <div class="c-panel picture-info-panel">
      <div class="info-title">Personal Atlas</div>
      <div>
        照片集
      </div>
    </div>
  </div>
</template>
<script>
  import RequestHandle from '@/request'

  export default {
    name: 'AboutMessage',
    data () {
      return {
        aboutInfo: [],
        otherInfo: []
      };
    },
    created(){
      this.loadData();
    },
    mounted(){
      this.setElementHeight();
      this.initEvent();
    },
    methods: {
      loadData(){
        let pms = {}, t = this;
        RequestHandle.request('ABOUTINFO', pms, 'GET', function (result) {
          if (result) {
            let response = result.response;
            let lsInfo = response.hasOwnProperty('features') ? response.features : [];
            lsInfo && (t.aboutInfo = lsInfo[0].model, t.otherInfo = lsInfo[0].othermodel);
          }
        }, function (e) {
        });
      },
      initEvent(){
        let t = this;
        if (window.addEventListener) {
          window.addEventListener('resize', function () {
            t.setElementHeight();
          });
        } else {
          window.attachEvent('onresize', function () {
            t.setElementHeight();
          })
        }
      },
      setElementHeight(){
        this.$el.style.height = document.documentElement.offsetHeight - 60 + 'px';
      }
    },
    components: {}
  };
</script>
<style scoped>
  .msg-panel {
    background: #fff;
    height: calc(100% - 50px);
    width: 90%;
    margin: 30px auto 20px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
  }

  .c-panel {
    width: 100%;
    margin: 20px auto;
    box-shadow: 1px 3px 4px rgba(0, 0, 0, .1);
  }

  .info-panel {
    height: auto;
  }

  .picture-info-panel {
    height: auto;
  }

  .info-panel li {
    text-align: left;
    padding: 5px 0 5px 20px;
  }

  .info-panel li span:first-child {
    width: 64px;
    text-align: right;
    display: inline-block;
  }

  .info-title {
    border-left: solid 4px #2d8cf0;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Helvetica";
    color: #495060;
    text-align: left;
    padding-left: 10px;
  }
</style>
