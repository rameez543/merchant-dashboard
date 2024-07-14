const state = () => ({
  transactoions: null,
});
const mutations = {
  SET_TRX_DATA(state, payload) {
    state.transactoions = payload;
  },
};

const actions = {
  async FETCH_TRX(context) {
    try {
      const resp = await this.$axios.get("/api/transactions");
      if (resp?.data) {
        context.commit("SET_TRX_DATA", resp?.data);
      }
      return resp;
    } catch (err) {
      return err;
    }
  },
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
};
