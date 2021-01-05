import mockRequest from '../utils/mockRequest'

//封装请求轮播图数据函数
export const reqGetHeartsList = () =>{
  return mockRequest({
    method:'GET',
    url:'/heartsList'
  })
}

//封装请求楼层数据函数
export const reqGetWishList = () =>{
  return mockRequest({
    method:'GET',
    url:'/wishList'
  })
}