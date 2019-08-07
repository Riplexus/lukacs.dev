import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: () => {
        return {
            activeSection: null
        };
    },
    actions: {

    },
    mutations: {
        setActiveSection(state, section) {
            state.activeSection = section;
        }
    }
});
