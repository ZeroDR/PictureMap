<template>
  <div class="map-panel">
    <Row class="ls-panel">
      <Col class="ls-panel" span="24">
      <main-map></main-map>
      <Tree class="layer-panel" :data="data2" show-checkbox @on-check-change="rootCheckClick" @on-select-change="rootClick"></Tree>
      </Col>
    </Row>
  </div>
</template>
<script>
  import MainMap from '@/map/MainMap'

  export default {
    name: 'map',
    data () {
      return {
        themeName: 'light',
        checkedRoots: [],
        data2: [
          {
            title: '图层控制',
            expand: true,
            children: [
              {
                title: '景点',
                expand: true,
                children: [
                  {
                    title: '中国',
                    id: 'CN'
                  },
                  {
                    title: '印度',
                    id: 'IN'
                  }
                ]
              }
            ]
          }
        ]
      };
    },
    created(){
    },
    mounted(){
      this.ready();
    },
    methods: {
      ready(){
      },
      rootClick(e){
        //e.forEach(v => (v.checked = !v.checked, v.selected = v.checked));
      },
      rootCheckClick(e){
        let t = this, lsChecked = [];
        e.forEach(v => (!v.hasOwnProperty('children') && (!t.checkedRoots.some(c => c.id === v.id) && t.checkedRoots.push(v))));
        t.checkedRoots.forEach(v => (((!e.some(c => c.id === v.id) || !e.length) ? (v.checked = false) : (v.checked = true,lsChecked.push(v))), t.$store.commit('setLayerSource', v)));
        t.checkedRoots = lsChecked;
//        (e && e.length) ?
//          (e.forEach(v => (!v.hasOwnProperty('children') && (t.$store.commit('setLayerSource', v), (!t.checkedRoots.some(c => c.id === v.id) && t.checkedRoots.push(v)))))) :
//          (t.checkedRoots.forEach(v => (t.$store.commit('setLayerSource', v))), t.checkedRoots.length = 0);

      }
    },
    components: {MainMap}
  };
</script>
<style scoped>
  .map-panel {
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .ls-panel {
    height: 100%;
  }

  .layer-panel {
    position: absolute;
    top: 30px;
    right: 5%;
    background: #fff;
    width: 240px;
    text-align: left;
    height: calc(100% - 50px);
  }
</style>
