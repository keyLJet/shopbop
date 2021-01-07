<template>
  <div class="page-container">
    <header class="page-header">
      <div class="page-heading">
        <img
          src="https://images-cn.ssl-images-amazon.cn/images/G/01//Shopbop/media/desktop/globalbanners/2021/2021_01/sb_20210101_desktop_GLOBALBANNER_X_activewear_cn._QL90_UX1024_.jpg"
          alt="banner"
          class="banner"
        />
        <h1>我的心愿单</h1>
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
          </li>
          <li class="leftNavCategoryLi">
            <a href="#">我的评论</a>
          </li>
          <li class="leftNavCategoryLi">
            <a href="#">我的心愿单</a>
          </li>
          <li class="leftNavCategoryLi help">
            <a href="#">帮助</a>
          </li>
        </ul>
      </div>
      <div class="right-content">
        <div class="content-head">
          <div class="left">2件中的2件</div>
          <button class="right" @click="delSoldOut">移除已售迄产品</button>
        </div>
        <ul class="wishList">
          <li class="wishListItem" v-for="item in showWishList" :key="item.id">
            <a href="#">
              <img class="productImg" :src="item.imgUrl" alt="" />
            </a>
            <div class="descContainer">
              <div class="descTop">
                <div class="brand">
                  <a href="#">{{ item.brand }}</a>
                </div>
                <div class="title">
                  <a href="#">{{ item.tittle }}</a>
                </div>
                <div class="price">{{ item.price }}</div>
              </div>
              <div class="descBottom">
                <div v-if="item.soldOut" class="soldOut">该商品已售罄！</div>
                <div>颜色:{{ item.color }}</div>
                <div class="dbContainer">
                  <div class="size">尺码:{{ item.size }}</div>
                  <div class="addCart">
                    <a href="#" class="changeColor">更换颜色/尺寸</a>
                    <button class="add">加入购物车</button>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="removeIcon"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuMjkzIDUuNTQ1di45MUw0LjgzOCA2bC40NTUtLjQ1NXpNNC44MzggNkwuMjQxIDEuNDAyQS44MjEuODIxIDAgMTExLjQwMi4yNDFMNiA0LjgzOCAxMC41OTguMjQxYS44MjEuODIxIDAgMTExLjE2MSAxLjE2MUw3LjE2MiA2bDQuNTk3IDQuNTk4YS44MjEuODIxIDAgMTEtMS4xNjEgMS4xNjFMNiA3LjE2MmwtNC41OTggNC41OTdhLjgyLjgyIDAgMTEtMS4xNjEtMS4xNjFMNC44MzggNnptLjcwNy43MDdoLjkxTDYgNy4xNjJsLS40NTUtLjQ1NXptMS4xNjItLjI1MnYtLjkxTDcuMTYyIDZsLS40NTUuNDU1em0tLjI1Mi0xLjE2MmgtLjkxTDYgNC44MzhsLjQ1NS40NTV6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="
              alt="removeIcon"
              @click="removeItem"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="page-footer"></div>
  </div>
</template>

<script>
import { reqGetWishList } from "../../api/heartsNwishList";

export default {
  name: "WishList",
  data() {
    return {
      wishList: [],
      showWishList: [],
    };
  },
  methods: {
    delSoldOut() {
      this.showWishList = this.showWishList.filter((item) => !item.soldOut);
      console.log(this.showWishList);
    },
    removeItem() {},
  },
  async mounted() {
    let wishList = await reqGetWishList();
    this.wishList = wishList;
    this.showWishList = wishList;
  },
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
      .leftNavCategory {
        color: #000;
        font-weight: 560;
        font-size: 12px;
        .leftNavCategoryLi {
          height: 26px;
          line-height: 25px;
        }
        .help {
          padding-left: 10px;
        }
      }
    }
    .right-content {
      width: 875px;
      .content-head {
        padding: 0.625rem 0rem 1.25rem;
        display: flex;
        font-weight: 300;
        font-size: 12px;
        height: 26px;
        line-height: 26px;
        .left {
          width: 80px;
          text-align: left;
          border-right: 1px solid;
        }
        .right {
          width: 120px;
          border: none;
          font-size: 12px;
          font-weight: 300;
          cursor: pointer;
          text-decoration: underline;
          background-color: white;
        }
      }
      .wishList {
        .wishListItem {
          border-radius: 4px;
          border: 1px solid rgb(231, 227, 223);
          padding: 20px;
          position: relative;
          display: flex;
          margin-bottom: 20px;
          .productImg {
            width: 92px;
            height: 163px;
          }
          .descContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 11px;
            .descTop {
              .brand {
                a {
                  color: black;
                  cursor: pointer;
                  text-decoration: none;
                  font-weight: 1000;
                  font-size: 14px;
                }
              }
              .title {
                a {
                  cursor: pointer;
                  text-decoration: none;
                  color: rgb(87, 87, 87);
                }
              }
              .price {
                padding-top: 6px;
                color: black;
                cursor: pointer;
                text-decoration: none;
                font-weight: 1000;
                font-size: 12px;
              }
            }
            .descBottom {
              width: 100%;
              .soldOut {
                color: red;
                text-decoration: underline;
              }
              .dbContainer {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .size {
                  width: 44px;
                }
                .addCart {
                  width: 160px;
                  height: 48px;
                  .changeColor {
                    display: inline-block;
                    width: 58px;
                    height: 48px;
                    text-decoration: underline;
                    color: black;
                    font-weight: 500;
                    visibility: visible;
                    pointer-events: initial;
                    font-size: 12px;
                    cursor: pointer;
                  }
                  .add {
                    width: 102px;
                    height: 48px;
                    border: 1px solid black;
                    padding: 6.6px 27.6px;
                    text-decoration: none;
                    font-weight: 500;
                    cursor: pointer;
                    font-size: 12px;
                  }
                }
              }
            }
          }
          .removeIcon {
            width: 12px;
            height: 12px;
            cursor: pointer;
            position: absolute;
            top: 20px;
            right: 20px;
          }
        }
      }
    }
  }
}
</style>

