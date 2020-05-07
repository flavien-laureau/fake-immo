import EstateService from "@/services/estateService"

export const namespaced = true;

export const state = () => ({
  estatesList: "",
  filter: {
    type: "all",
    rooms: "all",
    budget: "all"
  }
})

export const mutations = {
  SET_ESTATES(state, estate) {
    state.estatesList = estate
  },
  SET_FILTER(state, filter) {
    state.filter = filter
  },
  ADD_ESTATES(state, estate) {
    state.estatesList.unshift(estate)
  }
}

export const actions = {
  fetchEstates({
    commit
  }) {
    return EstateService.getAll().then(res => {
      commit("SET_ESTATES", res.data)
    });

  },
  setFilter({
    commit
  }, filter) {
    commit("SET_FILTER", filter)
  },
  createEstate({
    commit
  }, data) {
    EstateService.createOne(data.estate, data.token).then(res => {
      commit("ADD_ESTATES", res.data)
    }).catch(err => console.error(err))
  }
}

export const getters = {
  getFilterEstates(state) {
    /**
     * Pour chaque maison, on test le type, les rooms, le budget. Si tout est 'true', on push. Ensuite on peux renvoyer le tableau final filtré.
     */
    let estates = []

    state.estatesList.filter(estate => {
      let type = state.filter.type === 'all' ? estate.type === 'house' || estate.type === 'apartment' : estate.type === state.filter.type

      let rooms
      if (state.filter.rooms === "all") {
        rooms = true
      } else {
        rooms = state.filter.rooms === '6' ? estate.rooms >= 6 : (estate.rooms === parseInt(state.filter.rooms) || estate.rooms === parseInt(state.filter.rooms) + 1)
      }

      let price
      if (state.filter.budget === 'all') {
        price = true
      } else {
        price = state.filter.budget === '550000+' ? estate.price >= 550000 : estate.price <= parseInt(state.filter.budget)
      }

      if (type && rooms && price) {
        estates.push(estate)
      }
    })
    return estates
  }
}
