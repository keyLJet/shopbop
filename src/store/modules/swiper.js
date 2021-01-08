import { reqGetBanners } from '../../api/banners'

export default {

  state: {
    banners: [],
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

      let result = state.banners.slice(0, 1)[0] ? state.banners.slice(0, 1)[0].itemList.slice(0, 20) : {}

      if (result.length) {
        return state.bannersArr = [
          {
            banners1: result.slice(0, 5)
          },
          {
            banners2: result.slice(5, 10)
          },
          {
            banners3: result.slice(10, 15)
          },
          {
            banners4: result.slice(15, 20)
          },
        ]
      } else {
        return false
      }

    }
  },


}