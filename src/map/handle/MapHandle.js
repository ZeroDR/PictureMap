/**
 * Created by admin on 2017/11/22.
 */
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';
import Proj from 'ol/proj';
import RequestHandle from '@/request'

import LayerHandle from '@/map/handle/LayerHandle'
import PopupHandle from '@/map/handle/PopupHandle'

export default {
  map: undefined,
  store: undefined,
  popup: undefined,
  ready(id){
    let access_token = 'pk.eyJ1IjoiemVyby1kciIsImEiOiJjajZvaG54bWcwamEwMndvMWJma3ZyaXViIn0.f4-UmzEOMhLdbB_K9-cpqA';
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + access_token
          })
        })
      ],
      target: id,
      view: new View({
        center: Proj.transform([104.21, 35.82], 'EPSG:4326', 'EPSG:3857'),
        zoom: 4
      })
    });
    //this.createMarker();
    this.createPopup();
    this.eventInit();
  },

  eventInit(){
    let t = this;
    this.map.on('pointermove', e => t.pointerMoveEvent(e));
    this.map.on('change', e => t.mapChangeClick(e));
    this.map.on('click', e => t.mapClick(e));
  },

  mapClick(e){
    let feature = this.map.forEachFeatureAtPixel(e.pixel,
      function (feature) {
        return feature;
      });
    if (feature) {
      let coordinates = feature.getGeometry().getCoordinates();
      this.popup.setPosition(coordinates);
      let attr = {
        hasVisible: true,
        source: {
          name: feature.get('name')
        }
      };
      this.store.commit('updateState', true);
      this.store.commit('updatePopupSource', attr);
    }
  },

  mapChangeClick(e){
    console.log(e);
  },

  pointerMoveEvent(e){
    if (e.dragging) {
      return;
    }
    let pixel = this.map.getEventPixel(e.originalEvent);
    let hit = this.map.hasFeatureAtPixel(pixel);
    this.map.getTargetElement().style && (this.map.getTargetElement().style.cursor = hit ? 'pointer' : '');
  },

  createMarker(checkItem){
    let t = this;
    if (checkItem.checked) {
      if (!t.hasLoadedLayer(checkItem.id)) {
        t.map && (LayerHandle.map = map);
        RequestHandle.request('MARKERSOURCE', {t: checkItem.id}, 'GET', function (result) {
          if (result) {
            let response = result.response;
            let data = response.hasOwnProperty('features') ? response.features : [];
            LayerHandle.createMarker(data, function (l) {
              l && (l.id = 'LAYER-' + checkItem.id, t.loadMarkerLayer(l));
            });
          }
        }, function (e) {
        });
      }
    }
    else {
      let l = t.getLayerById(checkItem.id);
      l && t.map.removeLayer(l);
    }
  },

  createPopup(){
    let el = document.getElementById('popup'), t = this;
    PopupHandle.createPopup(el, function (p) {
      t.loadPopup(p);
    });
  },

  getLayerById(id){
    let layer = undefined;
    let lsLayers = this.map.getLayers();
    lsLayers.forEach(function (l) {
      l.id === ('LAYER-' + id) && (layer = l);
    });
    return layer;
  },

  hasLoadedLayer(id){
    let hasLoaded = false;
    let lsLayers = this.map.getLayers();
    lsLayers.forEach(function (l) {
      l.id === ('LAYER-' + id) && (hasLoaded = true);
    });
    return hasLoaded;
  },

  loadMarkerLayer(l){
    l && this.map.addLayer(l);
  },

  loadPopup(p){
    p && (this.popup = p, this.map.addOverlay(p));
  }
}
