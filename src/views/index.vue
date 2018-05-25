<template>
  <div class="main">
    <Row class="ls-panel">
      <Col class="ls-panel" span="4">
      <Menu class="ls-panel ls-panel-margin" :theme="themeName" :active-name="defaultIndex" style="width:auto;" @on-select="checkEvent">
        <MenuItem class="menus-left" v-for="(item,key,index) in lsMenus" :name="item.id">
          <Icon type="document-text"></Icon>
          {{item.aliasname}}
        </MenuItem>
      </Menu>
      </Col>
      <Col class="ls-panel" span="20">
      <router-view/>
      <index-msg v-show="hasIndexMsg"></index-msg>
      </Col>
    </Row>
  </div>
</template>
<script>
  import IndexMsg from '@/components/IndexMsg'
  import RequestHandle from '@/request'
  import {mapState} from 'vuex'

  export default {
    name: 'index',
    data () {
      return {
        themeName: 'light',
        lsMenus: [],
        defaultIndex: 1
      };
    },
    created(){
      this.loadMenus();
    },
    mounted(){
      this.ready();
    },
    computed: {
      ...mapState({
        hasIndexMsg: state => state.StateStore.hasIndexMsg
      })
    },
    methods: {
      //初始化路由
      ready(){
//        this.$router.push({path: '/asia'});
      },

      //加载左侧菜单
      loadMenus(){
        let t = this;
        RequestHandle.request('STATES', {}, 'GET', function (result) {
          if (result) {
            let response = result.response;
            t.lsMenus = response.hasOwnProperty('features') ? response.features : [];
          }
        }, function (e) {
        });
      },

      //菜单点击事件，并切换路由
      checkEvent(e){
        this.$store.commit('updateState', false);
        switch (parseInt(e)) {
          case 1:
            this.$router.push({path: '/asia'});
            break;
          case 2:
            this.$router.push({path: '/america'});
            break;
          case 3:
            this.$router.push({path: '/europe'});
            break;
          case 4:
            this.$router.push({path: '/africa'});
            break;
          case 5:
            this.$router.push({path: '/oceania'});
            break;
        }
      }
    },
    components: {IndexMsg}
  };
</script>
<style scoped>
  .main {
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
    min-height: 1200px;
  }

  .ls-panel-margin {
    margin: 15px 0 0 0;
  }

  .menus-left {
    text-align: justify;
  }
</style>
