<template>
  <div id="popup" class="popup-msg-panel" v-show="hasVisible">
    <span class="close-panel" @click.stop="closeClick(false)">&times</span>
    <div class="attr-panel">{{popupAttributes.name}}</div>
    <div class="triangle"></div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {mapMutations} from 'vuex'

  import RequestHandle from '@/request'

  export default {
    name: 'PopupMsg',
    data () {
      return {};
    },
    created(){
    },
    mounted(){
    },
    computed: {
      ...mapState({
        popupAttributes: state => state.MapStore.popupSource,
        hasVisible: state => state.MapStore.popupVisible
      })
    },
    methods: {
      ...mapMutations({
        closeClick: 'closePopup'
      })
    },
    watch: {},
    components: {}
  }
</script>
<style scoped>
  .popup-msg-panel {
    padding: 0;
    width: 320px;
    min-height: 120px;
    height: auto;
    background: #fff;
    color: #333;
    border-radius: 2px;
    box-shadow: 1px 3px 4px rgba(0, 0, 0, .18);
  }

  .attr-panel {
    margin: 0 10px;
    color: #333;
    background: #fff;
  }

  .close-panel {
    width: 24px;
    line-height: 24px;
    position: absolute;
    right: 0;
    cursor: pointer;
    color: #333;
    font-size: 18px;
  }

  .close-panel:hover {
    font-size: 21px;
    color: #000;
  }

  .triangle {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #fff;
    position: absolute;
    left: calc(50% - 8px);
    bottom: -8px;

  }
</style>
