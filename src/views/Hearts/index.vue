<template>
  <div>
    <div class="page-container">
      <header class="page-header">
        <div class="page-heading">
          <img
            src="https://images-cn.ssl-images-amazon.cn/images/G/01//Shopbop/media/desktop/globalbanners/2021/2021_01/sb_20210101_desktop_GLOBALBANNER_X_activewear_cn._QL90_UX1024_.jpg"
            alt="banner"
            class="banner"
          />
          <h1>My Hearts</h1>
        </div>
      </header>
      <div class="page-content">
        <div class="left-nav">
          <ul class="leftNavCategory">
            <li class="leftNavCategoryLi">
              <a href="#">账户</a>
            </li>
            <li class="leftNavCategoryLi">
              <a href="#">订单</a>
            </li>
            <li class="leftNavCategoryLi">
              <a href="#">我的品牌</a>
            </li>
            <li class="leftNavCategoryLi">
              <a href="#">收藏夹</a>
              <ul class="leftNavSubCategoryLi">
                <li>
                  <a href="#">我的所有收藏</a>
                </li>
                <li>
                  <a href="#">促销</a>
                </li>
                <li>
                  <hr class="separator" />
                </li>
                <li>
                  <a href="#">包袋</a>
                </li>
                <li>
                  <a href="#">名师精品馆</a>
                </li>
                <li>
                  <hr class="separator" />
                </li>
                <li>
                  <a href="#">帮助</a>
                </li>
              </ul>
            </li>
            <li class="leftNavCategoryLi">
              <a href="#">我的评论</a>
            </li>
            <li class="leftNavCategoryLi">
              <a href="#">我的心愿单</a>
            </li>
          </ul>
        </div>
        <div class="right-content">
          <div class="quickFind">
            <div class="quickFindLeft">
              <span class="quickFindTitle">筛选</span>
              <select name="designer" id="designer" class="quickFindDropDown">
                <option value="">Mansur Gavriel</option>
                <option value="">Tory Burch</option>
              </select>
              <select name="color" id="color" class="quickFindDropDown">
                <option value="">米白色</option>
                <option value="">黑色</option>
              </select>
              <span>清除所有</span>
            </div>
            <div class="sort">
              <span>排序</span>
              <select name="sort" id="sort" class="sortList">
                <option value="">上架时间</option>
                <option value="">价格：从低到高</option>
                <option value="">价格：从高到低</option>
              </select>
            </div>
          </div>
          <div class="heartRemove">
            删除所有
            <img
              src="https://images-cn.ssl-images-amazon.cn/images/G/01/Shopbop/p/pcs/shopbop/media/images/lnf3/hearts/rebrand_heart_small_filled_1-0.png"
              alt="heart"
            />
          </div>
          <div class="pagination-container-top"></div>
          <div class="product-list">
            <ul class="product-container">
              <li class="product-item" v-for="item in hearts" :key="item.id">
                <img class="productImg"
                  :src="item.imgUrl"
                  alt=""
                />
                <div class="brand">{{item.brand}}</div>
                <div class="title">{{item.tittle}}</div>
                <div class="price">{{item.price}}</div>
              </li>
              <!-- <li class="product-item">
                <img
                  src="https://images-cn.ssl-images-amazon.cn/images/G/01/Shopbop/p/prod/products/toryb/toryb4778058187/toryb4778058187_q1_2-0._SH20_QL90_UY365_.jpg"
                  alt=""
                />
                <div class="brand">Tory Burch</div>
                <div class="brand">双链式帆布手提袋</div>
                <div class="price">US$258.00</div>
              </li> -->
            </ul>
          </div>
          <div class="pagination-container-bottom"></div>
        </div>
      </div>
      <div class="page-footer"></div>
    </div>
  </div>
</template>

<script>
import { reqGetHeartsList } from "../../api/heartsNwishList";


export default {
  name: "Hearts",
  data(){
    return {
      hearts:[],
    }
  },
  async mounted(){
    let hearts = await reqGetHeartsList()
    this.hearts = hearts
  }
};
</script>

<style lang="less" scoped>
html body {
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: "GT-America-Standard", "Helvetica Neue", Helvetica, sans-serif;
  color: black;
  font-size: 14px;
}
.page-container {
  width: 1024px;
  margin: 0 auto;
  .page-header {
    width: 100%;
    .page-heading {
      border-bottom: 1px solid #e7e3df;
      text-align: left;
      h1 {
        font-size: 18px;
        line-height: 39px;
        font-weight: 900;
        letter-spacing: 2.7px;
        text-transform: uppercase;
        margin-left: 6px;
      }
    }
  }
  .page-content {
    display: flex;
    .left-nav {
      width: 130px;
      padding: 6px 12px 0 2px;
    }
    .right-content {
      width: 875px;
      // flex-grow: 1;
      .quickFind { 
        display: flex;
        justify-content: space-between;
        margin: 6px;
        .quickFindLeft {
          //  width: 300px;
        }
        .sort {
          //  width: 102px;
        }
      }
      .heartRemove {
        text-align: right;
        line-height: 20px;
        margin: 0 4px 6px 0;
      }
      .product-container {
        display: flex;
        flex-wrap: wrap;
        .product-item {
          padding: 18px 6px;
          .productImg{
            width: 206px;
            height: 365px;
          }
          white-space: nowrap;
          overflow: hidden;
          text-align: center;
          vertical-align: top;
          margin: 0 0 21px 0;
          font-size: 12px;
          .brand {
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
