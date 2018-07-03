import * as API from './http'
export default {
  getGitUserInfo: (params, name) => {
    return API.GET(`/users/${name}`, params)
  }
} 