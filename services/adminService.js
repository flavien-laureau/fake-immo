import Api from './api'

export default {
  login(credentials) {
    return Api().post('api/admin/login', credentials)
  },
}
