import {toyService} from '../../services/toy-service'

export default {
    state: {
      toys: null,
    },
  getters: {
    toys(state){
      return state.toys
    }
  },
  mutations: {
    setToys(state, {toys}){
      state.toys = toys
    },
    removeToy(state, { id }) {
      console.log('in mutations');
      const idx = state.toys.findIndex((toy) => toy._id === id)
      state.toys.splice(idx, 1)
      console.log(state.toys);
    },
    saveToy(state, { toy }) {
      const idx = state.toys.findIndex((currToy) => currToy.id === toy.id)
      if (idx !== -1) state.toys.splice(idx, 1, toy)
      else state.toys.push(toy)
    },
  },
  actions: {
    loadToys({ commit }) {
      toyService.query().then((toys) => {
        commit({ type: 'setToys', toys })
      })
    },
    removeToy({ commit }, { id }) {
      console.log('in actions');
      toyService.remove(id).then(() => {
        commit({ type: 'removeToy', id })
      })
    },
    saveToy({ commit }, { toy }) {
      console.log('in action');
      toyService.save(toy).then((toy) => {
        commit({ type: 'saveToy', toy })
      })
    },
  }
}