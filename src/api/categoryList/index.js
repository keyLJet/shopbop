import ajax from '../../utils/ajax'

export const reqGetCategoryList = () => {
  return ajax({
    method: "GET",
    url: "/category",
  })
}