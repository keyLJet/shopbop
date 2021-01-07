import { reqGetShopList } from '../../api/shopList';

export default {
	state: {
		shopList: []
	},

	actions: {
		async getShopList({ commit }) {
			let shopList = await reqGetShopList();
			commit('GET_SHOPLIST', shopList);
		}
	},

	getters: {
		// 总数据
		shopList(state) {
			return state.shopList
		},

	},

	mutations: {

		GET_SHOPLIST(state, shopList) {

			state.shopList = shopList;

		}
	}
};
