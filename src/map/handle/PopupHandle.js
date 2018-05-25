/**
 * Created by admin on 2017/12/6.
 */
import Popup from 'ol/overlay'
export default {
  createPopup(el, callback){
    callback(new Popup({
      element: el,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -30]
    }));
  }
}
