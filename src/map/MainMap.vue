<template>
  <div class="map-panel">
    <!--<div v-show="hasVisible" id="popup">123</div>-->
    <popup-msg v-show="hasVisible"></popup-msg>
    <div id="map"></div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {mapMutations} from 'vuex'
  import MapHandle from '@/map/handle/MapHandle'

  import PopupMsg from '@/components/map/Popup'

  export default {
    name: 'MainMap',
    data () {
      return {};
    },
    created(){
    },
    mounted(){
      MapHandle.store = this.$store;
      MapHandle.ready('map');
    },
    computed: {
      ...mapState({
        hasVisible: state => state.MapStore.hasVisible
      })
    },
    methods: {
      ...mapMutations({
        updatePopupState: 'updateState'
      })
    },
    components: {PopupMsg}
  };
</script>
<style scoped>
  .map-panel {
    background: #fff;
    height: calc(100% - 50px);
    width: 90%;
    margin: 30px auto 20px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
  }

  #map {
    height: 100%;
    width: 100%;
  }
</style>
