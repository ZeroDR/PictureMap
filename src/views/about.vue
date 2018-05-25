<template>
  <div class="about-panel">
    <Row class="ls-panel">
      <Col class="ls-panel" span="24">
      <about-message></about-message>
      </Col>
    </Row>
  </div>
</template>
<script>
  import AboutMessage from '@/components/AboutMessage'

  export default {
    name: 'about',
    data () {
      return {};
    },
    created(){
    },
    mounted(){
      this.ready();
    },
    methods: {
      ready(){

      }
    },
    components: {AboutMessage}
  };
</script>
<style scoped>
  .about-panel {
    height:100%;
    width:100%;
    overflow: hidden;
    margin:0;
    padding:0;
  }

  .ls-panel {
    height: auto;
    min-height: 760px;
  }
</style>
