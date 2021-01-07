import ajax from '../../utils/ajax'

export const reqGetShopList = () => {
  return ajax({
    method: "GET",
    url: `/getgoodsList`
  })
}