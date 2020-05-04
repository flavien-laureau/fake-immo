import Api from './api'

export default {
  get() {
    return Api().get('api/estate')
  },
  post(estate, token) {
    return Api().post('api/estate', estate, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'content-type': 'multipart/form-data'
      }
    })
  },

}
