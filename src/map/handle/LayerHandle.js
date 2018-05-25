/**
 * Created by admin on 2017/11/24.
 */
import Vector from 'ol/layer/vector'
import SourceVector from 'ol/source/vector'
import Feature from 'ol/feature'
import Point from 'ol/geom/point'
import HeatMap from 'ol/layer/heatmap'
import Proj from 'ol/proj';

import StyleHandle from '@/map/handle/StyleHandle'

export default{
  map: undefined,
  createMarker(data, callback){
    let features = [], t = this;
    for (let i = 0, length = data.length; i < length; i++) {
      let v = data[i];
      let lon = parseFloat(v.lon);
      let lat = parseFloat(v.lat);
      let tsm = Proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857');
      if (!tsm[0] || !tsm[1]) {
        continue;
      }
      let transPoint = new Point([tsm[0], tsm[1]]);
      let fet = new Feature({
        geometry: transPoint,
        i: i,
        name: v['city']
      });
      features.push(fet)
    }
    let style = StyleHandle.createMarkerStyle();
    let vectorLayer = new Vector({
      source: new SourceVector({
        features: features,
        wrapX: false
      }),
      style: function (f) {
        //style.getText().setText(f.get('name'));
          return style;
      }
    });
    callback(vectorLayer);
  }
}
