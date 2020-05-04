import adminService from "@/services/adminService";

export const namespaced = true;

export const state = () => ({
  token: "",
  adminId: "",
  isAdminLoggedIn: false
})

export const mutations = {
  SET_ADMINID(state, id) {
    state.adminId = id
  },
  SET_TOKEN(state, token) {
    state.token = token
    if (token) {
      state.isAdminLoggedIn = true
    } else {
      state.isAdminLoggedIn = false
    }
  }
}

export const actions = {
  login({
    commit
  }, credentials) {
    return adminService.login(credentials)
      .then(res => {
        commit("SET_ADMINID", res.data.adminId)
        commit("SET_TOKEN", res.data.token)
        return true
      })
      .catch(err => {
        console.log('Erreur | store/admin.js/actions/login : Mauvais identifiants')
        console.log(err)
        return false
      })
  },

  logout({
    commit
  }) {
    commit("SET_ADMINID", null)
    commit("SET_TOKEN", null)
  }
}

export const getters = {}
