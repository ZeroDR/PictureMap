<template>
  <div class="menu-panel">
    <div class="menu-icon">
      <link-panel></link-panel>
    </div>
    <div class="menu-list">
      <Menu mode="horizontal" :theme="themeName" active-name="1" @on-select="checkEvent">
        <MenuItem :name="index+1" v-for="(item,index) in menus" v-if="item.visible">
          <Icon :type="item.icon"></Icon>
          {{item.label}}
        </MenuItem>
      </Menu>
    </div>
  </div>
</template>
<script>
  import LinkPanel from '@/components/LinkPanel'
  import Axios from 'axios'

  export default {
    name: 'HeaderMenus',
    data () {
      return {
        themeName: 'light',
        menus:[{
          label: "尚游",
          icon: "flag",
          visible: true
        },{
          label: "尚族",
          icon: "location",
          visible: true
        },{
          label: "尚食",
          icon: "fork",
          visible: true
        },{
          label: "尚图",
          icon: "map",
          visible: true
        },{
          label: "关于",
          icon: "settings",
          visible: true
        }]
      };
    },
    created(){
      Axios.get('/static/config/HeaderMenusConfig.json').then(res=>{
        this.menus = res.data.menus;
      }).catch(ex=>{
        console.log(ex);
      })
    },
    methods: {
      checkEvent(e){
        switch (parseInt(e)) {
          case 1:
            this.$store.commit('updateState', true);
            this.$router.push({path: '/'});
            break;
          case 2:
            this.$router.push({path: '/family'});
            break;
          case 3:
            this.$router.push({path: '/food'});
            break;
          case 4:
            this.$router.push({path: '/map'});
            break;
          case 5:
            this.$router.push({path: '/about'});
            break;
        }
      }
    },
    components: {LinkPanel}
  };
</script>
<style scoped>
  .menu-panel {
    width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .08);
    position: relative;
  }

  .menu-panel a {
  }

  .menu-icon {
    margin-left: 5%;
    float: left;
  }

  .menu-list {
    float: left;
    margin-left: 30%;
    position: absolute;
    right: 5%;
    bottom: 0;
  }

  .router-color {
    color: #495060;
  }

  .menu-right {
    float: left;
  }
</style>
