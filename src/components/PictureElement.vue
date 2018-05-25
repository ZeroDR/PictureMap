<template>
  <div class="picture-panel">
    <img :src="defaultPath+pictureSrc"/>
    <div class="picture-title">{{pictureName}}</div>
  </div>
</template>
<script>
  export default {
    name: 'PictureElement',
    props: ['pictureName', 'pictureSrc'],
    data () {
      return {
        defaultPath: '/static/imgs/index/scenicspot/'
      };
    },
    created(){
    },
    mounted(){
    },
    methods: {},
    components: {}
  };
</script>
<style scoped>
  .picture-panel {
    height: 100%;
    width: 100%;
    position: relative;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
    cursor: pointer;
  }

  .picture-panel img {
    height: 100%;
    width: 100%;
  }

  .picture-title {
    position: absolute;
    height: 32px;
    width: 100%;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: #fff;
    bottom: 0;
    background: rgba(0,0,0,.5);
  }
</style>
