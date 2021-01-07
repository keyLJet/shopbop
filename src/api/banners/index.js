import ajax from '../../utils/ajax'

export const reqGetBanners = () => {
  return ajax({
    method: "GET",
    url: '/banners'
  })
}