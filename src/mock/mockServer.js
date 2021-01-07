import Mock from 'mockjs'
import heartsList from './heartsList.json'
import wishList from './wishList.json'

// 参数1为拦截请求对应的请求地址，参数3为返回的响应mock数据
Mock.mock('/mock/heartsList','get',{
  code:200,
  data:heartsList,
})

Mock.mock('/mock/wishList','get',{
  code:200,
  data:wishList,
})