/**
 * Created by admin on 2017/11/24.
 */
import Style from 'ol/style/style'
import Fill from 'ol/style/fill'
import Icon from 'ol/style/icon'
import Circle from 'ol/style/circle'
import Stroke from 'ol/style/stroke'
import Text from 'ol/style/text'
export default{
  createMarkerStyle(){
    return new Style({
      image: new Icon(({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.95,
        scale: 0.5,
        src: 'static/imgs/map/scenic.png'
      })),
      text:new Text({
        font: '12px Calibri,sans-serif'
      }),
      stroke: new Stroke({
        width: 3,
        color: [255, 0, 0, 1]
      }),
      fill: new Fill({
        color: [0, 0, 255, 0.6]
      })
    });
  }
}
