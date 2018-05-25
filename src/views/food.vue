<template>
  <div class="food-panel">
    <Row class="ls-panel-msg">
      <Col class="ls-panel-msg" span="4">
      <Menu class="ls-panel-msg ls-navigate" :theme="themeName" :active-name="0" style="width:auto;" @on-select="checkEvent">
        <MenuItem class="menus-left" :name="item.id" v-for="(item,key,index) in lsMenus">
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
    name: 'food',
    data () {
      return {
        themeName: 'light',
        defaultModule: 3,
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
        RequestHandle.request('FOOD', {}, 'GET', function (result) {
          if (result) {
            let response = result.response;
            t.lsMenus = response.hasOwnProperty('features') ? response.features : [];
            let item = t.lsMenus[0] || undefined;
            item && (t.mesAttributes = {name: item.aliasname, module: t.defaultModule, child: item.id});
          }
        }, function (e) {
        });
      },

      checkEvent(e){
        let item = this.lsMenus[e - 1];
        item && (this.mesAttributes = {name: item.aliasname, module: this.defaultModule, child: item.id});
      }
    },
    components: {Message}
  };
</script>
<style scoped>
  .food-panel {
    height: auto;
    min-height: 100%;
    width: 90%;
    overflow: hidden;
    margin: 30px auto;
    padding: 0;
    background: #fff;
  }

  .ls-panel-msg {
    height: auto;
  }

  .ls-navigate{
    margin:15px 0;
  }

  .menus-left {
    text-align: justify;
  }

  .message-style {
    width: 95%;
    height: auto;
  }
</style>
