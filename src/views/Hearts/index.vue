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
            <li class="favorite">
              <a class="title" href="#">收藏夹</a>
              <ul class="favoriteList">
                <li class="favoriteListItem collect">
                  <a href="#">我的所有收藏</a>
                </li>
                <li class="favoriteListItem">
                  <a href="#">促销</a>
                </li>
                <li class="favoriteListItem">
                  <hr class="separator" />
                </li>
                <li class="favoriteListItem">
                  <a href="#">包袋</a>
                </li>
                <li class="favoriteListItem">
                  <a href="#">名师精品馆</a>
                </li>
                <li class="favoriteListItem">
                  <hr class="separator" />
                </li>
                <li class="favoriteListItem">
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
              <el-select
                class="select"
                v-model="designers"
                multiple
                placeholder="设计师"
                size="mini"
                style="margin-left: 20px"
                @change="changeDesigner"
              >
                <el-option
                  v-for="item in hearts"
                  :key="item.id"
                  :label="item.brand"
                  :value="item.brand"
                >
                </el-option>
              </el-select>
              <el-select
                class="select"
                v-model="sizes"
                multiple
                placeholder="尺寸"
                size="mini"
                style="margin-left: 20px"
                @change="changeSize"
              >
                <el-option
                  v-for="item in hearts"
                  :key="item.id"
                  :label="item.size"
                  :value="item.size"
                >
                </el-option>
              </el-select>
              <el-select
                class="select"
                v-model="colors"
                multiple
                placeholder="颜色"
                size="mini"
                style="margin-left: 20px; margin-right: 20px"
                @change="changeColor"
              >
                <el-option
                  v-for="item in hearts"
                  :key="item.id"
                  :label="item.color"
                  :value="item.color"
                >
                </el-option>
              </el-select>
              <span>
                <a href="javascript:void(0);" class="clearAll" @click="clear"
                  >清除所有</a
                >
              </span>
            </div>
            <div class="sort">
              <span>排序</span>
              <el-select
                class="select"
                v-model="sortType"
                placeholder="上架时间"
                size="mini"
                style="margin-left: 6px"
                @change="sort"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <!-- <select name="sort" id="sort" class="sortList">
                <option value="">上架时间</option>
                <option value="">价格：从低到高</option>
                <option value="">价格：从高到低</option>
              </select> -->
            </div>
          </div>
          <a href="javascript:void(0);" class="heartRemove" @click="removeAll">
            删除所有
            <img
              src="https://images-cn.ssl-images-amazon.cn/images/G/01/Shopbop/p/pcs/shopbop/media/images/lnf3/hearts/rebrand_heart_small_filled_1-0.png"
              alt="heart"
            />
          </a>
          <div class="pagination-container-top"></div>
          <div class="product-list">
            <ul class="product-container">
              <li class="product-item" v-for="item in showList" :key="item.id">
                <img class="productImg" :src="item.imgUrl" alt="" />
                <div class="brand">{{ item.brand }}</div>
                <div class="title">{{ item.tittle }}</div>
                <div class="price">US$ {{ item.price }}</div>
              </li>
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
  data() {
    return {
      hearts: [],
      showList: [],
      options: [
        {
          value: "priceUp",
          label: "价格：从低到高",
        },
        {
          value: "priceDown",
          label: "价格：从高到低",
        },
      ],
      designers: [],
      sizes: [],
      colors: [],
      sortType: "",
    };
  },
  methods: {
    changeDesigner(designers) {
      console.log(designers);
      if (designers.length) {
        this.showList = this.hearts.filter(
          (item) => designers.indexOf(item.brand) !== -1
        );
        // console.log(this.showList);
      } else {
        this.showList = this.hearts;
      }
    },
    changeSize(sizes) {
      if (sizes.length) {
        this.showList = this.hearts.filter(
          (item) => sizes.indexOf(item.size) !== -1
        );
      } else {
        this.showList = this.hearts;
      }
    },
    changeColor(colors) {
      if (colors.length) {
        this.showList = this.hearts.filter(
          (item) => colors.indexOf(item.color) !== -1
        );
      } else {
        this.showList = this.hearts;
      }
    },
    clear() {
      console.log("reset");
      this.designers = [];
      this.sizes = [];
      this.colors = [];
      this.changeDesigner(this.designers);
    },
    sort(sortType){
      console.log(sortType)
      if(sortType == "priceUp"){
        this.showList.sort((a,b)=>{
          return parseInt(a.price) - parseInt(b.price)
        })
      }
      if(sortType == "priceDown"){
        this.showList.sort((a,b)=>{
          return parseInt(b.price) - parseInt(a.price)
        })
      }
    },
    removeAll(){
      this.showList = []
      //发送请求至服务器，删除收藏商品数据
    },
  },
  async mounted() {
    let hearts = await reqGetHeartsList();
    this.hearts = hearts;
    this.showList = hearts;
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
        font-weight: 500;
        font-size: 12px;
        .leftNavCategoryLi {
          height: 26px;
          line-height: 25px;
        }
        .favorite {
          .title {
            text-decoration: underline;
          }
          .favoriteList {
            .favoriteListItem {
              width: 115px;
              height: 26px;
              padding-left: 9px;
              line-height: 25px;
              .separator {
                border: 0;
                border-top: 1px solid #dfdfdf;
                border-bottom: 1px solid #dfdfdf;
                clear: both;
                margin: 15px 0;
              }
            }
            .collect a {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .right-content {
      width: 875px;
      .quickFind {
        display: flex;
        justify-content: space-between;
        margin: 6px;
        .quickFindLeft {
          .select {
            width: 100px;
          }
          .clearAll {
            text-decoration: underline;
          }
        }
        .sort {
          .select {
            width: 100px;
          }
        }
      }
      .heartRemove {
        display: block;
        text-align: right;
        text-decoration: underline;
        line-height: 20px;
        margin: 0 4px 6px 0;
      }
      .product-container {
        display: flex;
        flex-wrap: wrap;
        .product-item {
          padding: 18px 6px;
          .productImg {
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
