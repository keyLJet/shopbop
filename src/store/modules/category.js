import { reqGetCategoryList } from '@api/categoryList'

export default {

  state: {
    categoryList: []
  },

  actions: {
    async getCategoryList({ commit }) {
      let categoryList = await reqGetCategoryList()
      commit("CATEGORYLIST", categoryList)
    }
  },

  mutations: {
    CATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList
    }
  },

  getters: {},
}