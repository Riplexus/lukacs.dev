import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: () => {
        return {
            activeSections: []
        };
    },
    actions: {

    },
    mutations: {
        addActiveSection(state, section) {
            if (state.activeSections.indexOf(section) !== -1) { return; }
            state.activeSections.push(section);
        },
        removeActiveSection(state, section) {
            let index = state.activeSections.indexOf(section);
            if (index === -1) { return; }
            state.activeSections.splice(index, 1);
        }
    }
});
