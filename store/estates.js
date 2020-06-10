import EstateService from "@/services/estateService"

export const namespaced = true;

export const state = () => ({
  estatesList: "",
  oneEstate: "",
  filter: {
    type: "all",
    rooms: "all",
    budget: "all"
  }
})

export const mutations = {
  SET_ESTATES(state, estates) {
    state.estatesList = estates
  },
  SET_ESTATE(state, estate) {
    state.oneEstate = estate
  },
  SET_FILTER(state, filter) {
    state.filter = filter
  },
  ADD_ESTATES(state, estate) {
    state.estatesList.unshift(estate)
  },
  DELETE_ESTATE(state, id) {
    //On trouve l'élément dans le state et on le supprime, pour le rafraîchissement dynamique
    const index = state.estatesList.findIndex(estate => estate._id === id);
    if (index > -1) {
      state.estatesList.splice(index, 1);
    }
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
  fetchEstate({
    commit
  }, id) {
    return EstateService.getOne(id).then(res => {
      console.log('fetchstore: ', res.data)
      commit("SET_ESTATE", res.data)
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
  },
  deleteEstate({
    commit
  }, data) {
    EstateService.deleteOne(data.id, data.token).then(res => {
      commit("DELETE_ESTATE", data.id)
    }).catch(err => console.error(err))
  },
  modifyEstate({
    commit
  }, data) {
    return EstateService.modifyOne(data.id, data.estate, data.token)
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
  },
  oneEstate(state) {
    return state.oneEstate;
  }
}
