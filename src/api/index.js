/**
 * 接口函数封装
 */

import ajax from './ajax.js'

// 1.根据经纬度获取位置信息
export const reqAdress = (geohash) => ajax(`/position/${geohash}`)
    //2.获取食物列表
export const reqFoodList = () => ajax(`/index_category`)
    //3.根据经纬度获取商铺列表
export const reqShopList = (longitude, latitude) => { `/shop`, { longitude, latitude } }