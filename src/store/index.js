import {createStore} from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      client: '',
      navigation: '',
    };
  },
  mutations: {
    setClient(state, payload) {
      state.client = payload;
    },
    setNavigation(state, payload) {
      state.navigation = payload;
    },
  },
});

export default store;
