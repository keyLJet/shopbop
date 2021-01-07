import { reqGetBanners } from '../../api/banners'

export default {

  state: {
    banners: [],
    // banners: {
    //   banners1:[],
    //   banners2:[],
    //   banners3:[],
    //   banners4:[]
    // },
    bannersArr: [
      {
        banners1: []
      },
      {
        banners2: []
      },
      {
        banners3: []
      },
      {
        banners4: []
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
      state.banners = result

      // return state.banners = result
      // return state.banners.banners1 = result
      state.bannersArr[0].banners1 = result.slice(0, 5)
      state.bannersArr[1].banners2 = result.slice(5, 10)
      state.bannersArr[2].banners3 = result.slice(10, 15)
      state.bannersArr[3].banners4 = result.slice(15, 20)

    }
  },


}