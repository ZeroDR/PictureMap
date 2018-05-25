/**
 * Created by admin on 2017/10/31.
 * 请求接口配置文件
 */

export default{
  release: [{
    domain: process.env.API_ROOT === 'DEV' ? 'http://localhost' : 'http://www.doctorzh.com',//,//
    port: process.env.API_ROOT === 'DEV' ? 10010 : '',//
    path: '/api'
  }],
  getRequestUrl(type){
    let url = undefined;
    let cf = undefined;
    switch (type.toUpperCase()) {
      case 'ASIA':
        cf = this.release[0];
        url = cf.domain + (cf.port && (':' + cf.port)) + cf.path + '/Tourism/GetListAll';
        break;
      case 'STATES':
        cf = this.release[0];
        url = cf.domain + (cf.port && (':' + cf.port)) + cf.path + '/Tourism/GetListState';
        break;
      case 'FAMILY':
        cf = this.release[0];
        url = cf.domain + (cf.port && (':' + cf.port)) + cf.path + '/Nations/GetListFamily';
        break;
      case 'FOOD':
        cf = this.release[0];
        url = cf.domain + (cf.port && (':' + cf.port)) + cf.path + '/Cates/GetListCate';
        break;
      case 'DESCRIPTION':
        cf = this.release[0];
        url = cf.domain + (cf.port && (':' + cf.port)) + cf.path + '/Currency/GetItemDescription';
        break;
      case 'MARKERSOURCE':
        cf = this.release[0];
        url = cf.domain + (cf.port && (':' + cf.port)) + cf.path + '/Map/GetCitysByType';
        break;
      case 'ABOUTINFO':
        cf = this.release[0];
        url = cf.domain + (cf.port && (':' + cf.port)) + cf.path + '/About/GetAboutInfo';
        break;
      default:
        break;
    }
    return url;
  }
}
