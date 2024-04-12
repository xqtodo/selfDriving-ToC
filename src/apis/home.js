import httpInstance from '@/utils/http'
import { Axios } from 'axios'


// 获取banner

// export function getBannerAPI (params = {}) {
//   // 默认为1 商品为2
//   const { distributionSite = '1' } = params
//   return httpInstance({
//     url: '/home/banner',
//     params: {
//       distributionSite
//     }
//   })
// }

export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner',
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}

// 获取热门景点
export function getSpotAPI(){
  return httpInstance({
    url: '/home/spots'
  })
}

// 获取推荐路线
export function getRouteAPI(){
  return httpInstance({
    url: '/home/routes'
  })
}

// 获取租车服务
export function getVehiclesAPI(){
  return httpInstance({
    url: '/home/vehicles'
  })
}
