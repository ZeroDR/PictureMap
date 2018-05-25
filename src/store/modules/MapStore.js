/**
 * Created by admin on 2017/12/6.
 */
import MapHandle from '@/map/handle/MapHandle'

export default {
  state: {
    hasVisible: false,
    popupVisible: false,
    mapLevel: 12,
    popupSource: {}
  },
  mutations: {
    updateState(state, hasVisible){
      state.hasVisible = hasVisible;
    },

    updatePopupSource(state, attr){
      state.popupSource = attr.source;
      state.popupVisible = attr.hasVisible;
    },

    closePopup(state, hasVisible = false){
      state.popupVisible = hasVisible;
    },

    setLayerSource(state, checkItem){
      MapHandle.createMarker(checkItem);
    }
  }
};
