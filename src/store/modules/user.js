import { reqRegister, reqLogin } from '../../api/user.js'
export default ({
  state: {
    token: localStorage.getItem('token') || '',
    name: localStorage.getItem('name') || '',
  },
  getters: {},
  actions: {
    //注册请求
    async register ({ commit }, { phone, password }) {
      await reqRegister(phone, password)
      console.log(commit);
    },
    //登录请求
    async login ({ commit }, { phone, password }) {
      //发送请求
      const user = await reqLogin(phone, password)
      console.log(user);
      commit("REQ_LOGIN", user)
    }
  },
  mutations: {
    REQ_LOGIN (state, user) {
      state.token = user.token
      state.name = user.name
      // console.log(state, user);
    }
  }
})