// 封装所有和用户相关的接口函数
import request from '@/utils/http'

export const loginAPI = ( username, password ) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

export function registerAPI(username, password, email, phone) {
  return request({
    url: '/user/register',
    method: 'POST',
    data: {
      username,
      password,
      email,
      phone
    }
  })
  // axios.post('/user/register', {
  //   username,
  //   password,
  //   email,
  //   phone
  // })
}

export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}