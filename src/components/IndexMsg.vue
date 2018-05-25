<template>
  <div class="m-panel">
    <message :attributes="mesAttributes"></message>
  </div>
</template>
<script>
  import RequestHandle from '@/request'
  import Message from '@/components/Message'

  export default {
    name: 'IndexMsg',
    data () {
      return {
        themeName: 'light',
        name:'五大洲',
        mesAttributes: {},
      };
    },
    created(){
    },
    mounted(){
        this.ready();
    },
    methods: {
      ready(){
        this.mesAttributes = {name: this.name, module: 1, child: -1};
      }
    },
    components: {Message}
  };
</script>
<style scoped>
  .m-panel {
    background: #fff;
    height: calc(100% - 50px);
    width: 90%;
    margin: 30px auto 20px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
  }

  .m-panel:after {
    content: "";
    display: block;
    width: 1px;
    background: #d7dde4;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
  }
</style>
