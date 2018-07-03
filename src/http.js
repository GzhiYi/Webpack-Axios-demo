import axios from 'axios'

let http = axios.create({
  baseURL: '//api.github.com'
})

export const GET = (url, params, data) => {
  return http({
    method: 'get',
    url,
    params,
    data,
  }).then(res => res.data)
}

export const POST = (url, data) => {
  return http({
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    url,
    data
  }).then(res => res.data)
}

export default http