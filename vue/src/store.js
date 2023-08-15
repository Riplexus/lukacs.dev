import { createStore } from 'vuex'

export default (app) => {
  const store = createStore({
    state: () => {
      return {
        activeSections: []
      }
    },
    actions: {

    },
    mutations: {
      addActiveSection(state, section) {
        if (state.activeSections.indexOf(section) !== -1) { return }
        state.activeSections.push(section)
      },
      removeActiveSection(state, section) {
        const index = state.activeSections.indexOf(section)
        if (index === -1) { return }
        state.activeSections.splice(index, 1)
      }
    }
  })

  app.use(store)

  return {
    store
  }
}
