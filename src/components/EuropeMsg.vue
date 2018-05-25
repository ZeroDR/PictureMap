<template>
  <div class="m-panel">
    <ul>
      <li v-for="(item,key,index) in data" @click="liClick(item)">
        <picture-element :pictureName="item.name" :pictureSrc="item.pathname"></picture-element>
      </li>
    </ul>
    <Modal
      v-model="hasVisible"
      title=""
      :styles="{top:'10px'}"
      class-name="modal-style"
      :closable="true"
      width="90%" cancel-text ok-text>
      <message :attributes="mesAttributes"></message>
    </Modal>
  </div>
</template>
<script>
  import RequestHandle from '@/request'
  import Message from '@/components/Message'
  import PictureElement from '@/components/PictureElement'

  export default {
    name: 'EuropeMsg',
    data () {
      return {
        themeName: 'light',
        hasVisible: false,
        mesAttributes: {},
        data: []
      };
    },
    created(){
    },
    mounted(){
      this.request();
    },
    methods: {
      ready(){
      },
      request(){
        let t = this;
        RequestHandle.request('ASIA', {instate: 3}, 'GET', function (result) {
          if (result) {
            let response = result.response;
            t.data = response.hasOwnProperty('features') ? response.features : [];
          }
        }, function (e) {
        });
      },
      liClick(e){
        this.hasVisible = true;
        this.mesAttributes = {name: e.name, module: 1, child: e.id};
      }
    },
    components: {PictureElement,Message}
  };
</script>
<style scoped>
  .m-panel {
    background: #fff;
    height: 100%;
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

  .m-panel ul {
    text-align: start;
  }

  .m-panel li {
    display: inline-block;
    list-style: none;
    margin: 10px;
    padding: 0;
    height: 240px;
    width: calc(25% - 20px);
    min-width: 180px;
  }
</style>
