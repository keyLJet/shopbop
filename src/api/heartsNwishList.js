import mockRequest from "../utils/mockRequest";

//封装请求收藏列表数据函数
export const reqGetHeartsList = () => {
  return mockRequest({
    method: "GET",
    url: "/heartsList",
  });
};

//封装请求心愿单列表数据函数
export const reqGetWishList = () => {
  return mockRequest({
    method: "GET",
    url: "/wishList",
  });
};
