/**
 * Created by admin on 2017/12/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import StateStore from '@/store/modules/StateStore'
import MapStore from '@/store/modules/MapStore'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    StateStore,
    MapStore
  }
});
