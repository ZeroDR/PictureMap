<template>
  <div class="menu-panel">
    <div class="menu-icon">
      <link-panel></link-panel>
    </div>
    <div class="menu-list">
      <Menu mode="horizontal" :theme="themeName" active-name="1" @on-select="checkEvent">
        <MenuItem name="1">
          <Icon type="flag"></Icon>
          尚游
        </MenuItem>
        <MenuItem name="2">
          <Icon type="location"></Icon>
          尚族
        </MenuItem>
        <MenuItem name="3">
          <Icon type="fork"></Icon>
          尚食
        </MenuItem>
        <MenuItem name="4">
          <Icon type="map"></Icon>
          尚图
        </MenuItem>
        <MenuItem name="5">
          <Icon type="settings"></Icon>
          关于
        </MenuItem>
      </Menu>
    </div>
  </div>
</template>
<script>
  import LinkPanel from '@/components/LinkPanel'

  export default {
    name: 'HeaderMenus',
    data () {
      return {
        themeName: 'light'
      };
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
