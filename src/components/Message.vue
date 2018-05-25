<template>
  <div class="msg-panel">
    <h2 class="title-style">{{attributes.name}}</h2>
    <div class="horizon-style"></div>
    <div class="content-panel">
      <ul>
        <li v-for="(item,key,index) in lsDescription">
          <div class="child-title">{{item.title}}</div>
          <div class="child-description" v-html="item.description"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import RequestHandle from '@/request'

  export default {
    name: 'Message',
    props: {
      attributes: {
        type: Object,
        default: {name: '', module: 1, child: 1}
      },
    },
    data () {
      return {
        lsDescription: []
      };
    },
    created(){
    },
    mounted(){
      this.setElementHeight();
      this.initEvent();
    },
    methods: {
      loadRequest(){
        let t = this;
        RequestHandle.request('DESCRIPTION', {m: t.attributes.module, c: t.attributes.child}, 'GET', function (result) {
          if (result) {
            let response = result.response;
            t.lsDescription = response.hasOwnProperty('features') ? response.features : [];
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
        this.$el.style.minHeight = document.documentElement.clientHeight - 50 + 'px';//window.screen.availHeight - 120 + 'px';
      }
    },
    watch: {
      attributes: function (val) {
        this.loadRequest();
      }
    },
    components: {}
  };
</script>
<style scoped>
  .msg-panel {
    margin: 0 auto;
    padding: 10px 0;
    height: auto;
  }

  .ls-panel-msg .msg-panel:after {
    content: "";
    display: block;
    width: 1px;
    background: #d7dde4;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
  }

  .title-style {
    text-align: left;
    padding: 0 0 0 20px;
  }

  .horizon-style {
    border-top: 1px solid #e9eaec;
    margin: 5px 0;
  }

  .content-panel {
    line-height: 32px;
    margin: 10px;
  }

  .content-panel li {
    margin: 20px 0;
  }

  .child-title {
    height: 32px;
    line-height: 32px;
    border-left: solid 4px #2d8cf0;
    font-family: "Microsoft YaHei UI";
    font-size: 24px;
    text-align: left;
    padding-left: 20px;
  }

  .child-description {
    height: auto;
    line-height: 32px;
    text-align: left;
    padding-left: 30px;
  }
</style>
