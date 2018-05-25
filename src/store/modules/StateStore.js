/**
 * Created by admin on 2018/1/19.
 */
export default {
  state:{
    hasIndexMsg:true
  },
  mutations:{
    updateState(state,hasVisible){
      state.hasIndexMsg = hasVisible;
    }
  }
}
