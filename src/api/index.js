import ajax from './ajax'

export const reqGoodsList = () => ajax('/goodsList')
export const reqLikeGood = () => ajax('/likeGood')