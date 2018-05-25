<template>
  <div class="family-panel">
    <Row class="ls-panel">
      <Col class="ls-panel" span="4">
      <Menu class="ls-panel ls-navigate" :theme="themeName" :active-name="0" style="width:auto;" @on-select="checkEvent">
        <MenuItem class="menus-left" v-for="(item,key,index) in lsMenus" :name="item.id">
          <Icon type="document-text"></Icon>
          {{item.aliasname}}
        </MenuItem>
      </Menu>
      </Col>
      <Col class="ls-panel-msg" span="20">
      <message class="message-style" :attributes="mesAttributes"></message>
      </Col>
    </Row>
  </div>
</template>
<script>
  import RequestHandle from '@/request'
  import Message from '@/components/Message'

  export default {
    name: 'family',
    data () {
      return {
        themeName: 'light',
        defaultModule: 2,
        lsMenus: [],
        mesAttributes: {}
      };
    },
    created(){
      this.loadMenus();
    },
    mounted(){
      this.ready();
    },
    methods: {
      ready(){
      },

      //加载左侧菜单
      loadMenus(){
        let t = this;
        RequestHandle.request('FAMILY', {}, 'GET', function (result) {
          if (result) {
            let response = result.response;
            t.lsMenus = response.hasOwnProperty('features') ? response.features : [];
            let item = t.lsMenus[0] || undefined;
            item && (t.mesAttributes = {name: item.aliasname, module: t.defaultModule, child: item.id});
          }
        }, function (e) {
        });
      },

      //菜单点击事件
      checkEvent(e){
        this.animateScroll();
        let item = this.lsMenus[e - 1];
        item && (this.mesAttributes = {name: item.aliasname, module: this.defaultModule, child: item.id});
      },
      animateScroll(){
          let h = document.documentElement.scrollTop;
          if(h > 100) {
            let interval = setInterval(function () {
              if (document.documentElement.scrollTop <= 0)
                clearInterval(interval);
              document.documentElement.scrollTop = document.body.scrollTop = h -= 10;
            }, 1);
          }
      }
    },
    components: {Message}
  };
</script>
<style scoped>
  .family-panel {
    height: auto;
    min-height: 100%;
    width: 90%;
    overflow: hidden;
    margin: 30px auto;
    padding: 0;
    background: #fff;
  }

  .ls-panel {
    height: auto;
  }

  .ls-navigate{
    margin:0;
  }

  .ls-panel-msg {
    height: auto;
  }

  .menus-left {
    text-align: justify;
  }

  .message-style {
    width: 95%;
    height: auto;
  }
</style>
