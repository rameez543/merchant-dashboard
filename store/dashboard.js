const state = () => ({
  transactions: null,
  selectedFilter: [],
  userInfo: null,
});
const mutations = {
  SET_TRX_DATA(state, payload) {
    state.transactions = payload;
  },
  SET_TRX_FILTER(state, payload) {
    state.selectedFilter = payload;
  },
  SET_USER_DATA(state, payload) {
    state.userInfo = payload;
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
  async GET_USER_INFO(context) {
    try {
      const resp = await this.$axios.get("/api/get-user");
      if (resp?.data) {
        context.commit("SET_USER_DATA", resp?.data);
      }
      return resp;
    } catch (err) {
      return err;
    }
  },
  async SET_USER_INFO(context, payload) {
    try {
      const resp = await this.$axios.post("/api/set-user", payload);
      if (resp?.data) {
        context.commit("SET_USER_DATA", resp?.data);
      }
      return resp;
    } catch (err) {
      return err;
    }
  },
};

const getters = {
  filteredTrx(state) {
    const selectedFilter = state?.selectedFilter;
    const trx = state?.transactions?.transactions;
    if (selectedFilter?.length === 0) return trx;
    return trx?.filter((item) => selectedFilter.includes(item.category));
  },
};

export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
};
