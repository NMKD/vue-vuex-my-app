export default {
  state: () => ({
    count: 0,
  }),
  mutations: {
    changeCounter(state, payload) {
      state.count += payload;
    },
  },
  actions: {
    asyncChange({ commit }, payload) {
      setTimeout(() => {
        commit("changeCounter", payload.value);
      }, payload.timeoutDelay);
    },
  },
  getters: {
    computedCounter(state) {
      return state.count;
    },
  },
};
