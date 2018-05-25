/**
 * Created by admin on 2017/10/31.
 * 对外发送请求
 */

import Axios from 'axios';
import Config from '@/request/config'

export default{
  request(urlName, params, type, callback1, callback2){
    let url = Config.getRequestUrl(urlName);
    if (url) {
      if (type.toUpperCase() === 'GET') {
        this.requestGet(url, params, callback1, callback2);
      }
      else {
        this.requestPost(url, params, callback1, callback2);
      }
    }
    else {
      console.log('请检查请求配置文件!');
    }
  },

  //Axios发送GET请求
  requestGet(url, params, callback1, callback2){
    if (params) {
      Axios.get(url, {
        params: params,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        responseType:'json'
      }).then(function (result) {
        if (result.status === 200) {
          let dt = typeof result.data === 'string' ? JSON.parse(result.data) : result.data;
          console.log(dt);
          dt.success ? callback1(dt) : callback2(dt.description);
        } else {
          console.log('Request Error!');
        }
      }).catch(function (e) {
        console.log(e);
      });
    }
  },

  //Axios发送POST请求
  requestPost(url, params, callback1, callback2){
    Axios.post(url, params, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      responseType:'json'
    }).then(function (result) {

    }).catch(function (e) {

    });
  },

  //GET发送请求参数转换
  paramToString(pms){
    let rtValue = undefined;
    for (let k in pms) {
      if (!rtValue) {
        rtValue = k + '=' + pms[k];
      } else {
        rtValue += '&' + k + '=' + pms[k];
      }
    }
  }
}
