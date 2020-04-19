import EstateService from "@/services/estateService"

export const namespaced = true;

export const state = () => ({})

export const mutations = {
  SET_ESTATES(state, estate) {
    state.estatesList = estate
  }
}

export const actions = {
  fetchEstates({
    commit
  }) {
    return EstateService.get().then(res => {
      commit("SET_ESTATES", res.data)
    });

  }
}

export const getters = {

}
