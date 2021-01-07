import { reqGetBanners } from '../../api/banners'

export default {

  state: {
    banners: [
      {
        banners1: {}
      },
      {
        banners2: {}
      },
      {
        banners3: {}
      },
    ]
  },

  actions: {
    async getBanners({ commit }) {

      let banners = await reqGetBanners();

      commit("GET_BANNERS", banners)
    }
  },

  mutations: {
    GET_BANNERS(state, banners) {
      state.banners = banners
    }
  },

  getters: {
    bannersList(state) {
      let result = state.banners.slice(0, 1)[0].itemList.slice(0, 20)
      

      return state.banners = result
    }
  },


}