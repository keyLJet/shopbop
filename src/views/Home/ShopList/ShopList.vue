<template>
  <div class="shopList">
    <a href=""><img src="../../../assets/images/38.jpg" alt="" /></a>
    <div class="title">
      <h1>新品上市</h1>
    </div>
    <div class="count">
      <!-- 分类导航 -->
      <div class="list">
        <ul>
          <li><a href="">所有商品</a></li>
          <li><a href="">今日商品</a></li>
          <li><a href="">服装</a></li>
          <li><a href="">鞋履</a></li>
          <li><a href="">包装</a></li>
          <li><a href="">首饰和配饰</a></li>
          <li><a href="">名师精品馆</a></li>
        </ul>
      </div>
      <!-- 商品图片列表 -->
      <div class="shopImgList">
        <!-- <a href=""><img src="../../../assets/images/39.jpg" alt="" /></a> -->
        <Swiper />

        <!-- 筛选 -->
        <div class="screen">
          <div class="screen_left">
            <ul>
              <li>筛选</li>
              <li>设计师</li>
              <li>尺寸</li>
              <li>颜色</li>
              <li>清除所有</li>
            </ul>
          </div>
          <div class="screen_right">
            <ul>
              <li>排序</li>
              <el-dropdown
                placement="bottom-end"
                trigger="click"
                @command="handleCommand"
              >
                <span class="el-dropdown-link">
                  上架时间<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">价格</el-dropdown-item>
                  <el-dropdown-item command="b">上架时间</el-dropdown-item>
                  <el-dropdown-item command="c">主编推荐</el-dropdown-item>
                  <el-dropdown-item command="d"
                    >设计师独家精品</el-dropdown-item
                  >
                  <el-dropdown-item command="e">用户评分</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </ul>
          </div>
        </div>
        <!-- 分页器 -->
        <Pagination
          :updataShopList="updataShopList"
          :goodsTotal="shopList.length"
          :showSomeList="showSomeList"
        />
        <!-- 商品列表 -->
        <div class="imgList">
          <ul>
            <li v-for="good in goodsList" :key="good.id">
              <a href="#"><img :src="good.primaryPicUrl" alt="" /></a>
              <div class="shopDetail">
                <div>
                  <a href="#">{{ good.name }}</a>
                </div>
                <div>
                  <a href="#">{{ good.simpleDesc }}</a>
                </div>
                <div>
                  <a href="#">${{ good.retailPrice }}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 底部分页器 -->
        <Pagination :updataShopList="updataShopList" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Pagination from "@components/Pagination";
import Swiper from "@components/Swiper";

export default {
  name: "ShopList",
  data() {
    return {
      goodsList: [], //商品列表
      timeSort: false,
    };
  },
  computed: {
    ...mapGetters(["shopList"]),
  },
  methods: {
    ...mapActions(["getShopList"]),

    updataShopList() {
      // this.getShopList();
      console.log("ShopList组件触发了");
    },

    // 价格排序
    handleCommand(command, event) {
      let { goodsList, timeSort } = this;
      console.log(event);

      if (command === "a") {
        //a = 时间排序
        const result = goodsList.sort((a, b) => {
          return timeSort
            ? b.retailPrice - a.retailPrice
            : a.retailPrice - b.retailPrice;
        });
        this.timeSort = !timeSort;
        goodsList = result;
      }
    },

    // 处理页面数据展示条数
    showSomeList(num) {
      let result = this.goodsList.slice(0, num);
      this.goodsList = result;
    },
  },
  watch: {
    shopList() {
      this.goodsList = this.shopList;
    },
  },
  mounted() {
    this.getShopList();
  },
  components: {
    Pagination,
    Swiper,
  },
};
</script>

<style lang="less" scoped>
.shopList {
  width: 1024px;
  margin: 0 auto;
  .title {
    height: 39px;
    line-height: 39px;
    margin-top: 10px;
    border-bottom: 1px solid #e7e3df;
  }
}
.count {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  .list {
    width: 130px;
    height: 182px;
    line-height: 1.7em;
    padding-left: 2px;
    padding-right: 12px;
    li {
      width: 124px;
      height: 26px;
      padding-left: 6px;
    }
  }
  .shopImgList {
    .screen {
      height: 29px;
      line-height: 29px;
      margin: 6px 6px 0;
      display: flex;
      justify-content: space-between;
      .screen_left ul {
        display: flex;
        li {
          margin-right: 50px;
        }
      }
      .screen_right ul {
        display: flex;
        li {
          margin-right: 20px;
        }
      }
    }
    .imgList {
      margin-top: 20px;
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 25%;
          height: 473px;
          margin: 0 0 18px;
          padding: 0 6px 18px;
          box-sizing: border-box;
          img {
            width: 206px;
            height: 365px;
          }
        }
      }
      .shopDetail {
        padding-top: 10px;
        text-align: center;
        div {
          width: 205px;
          height: 25px;
          line-height: 25px;
          font-weight: 900;
        }
      }
    }
  }
}
</style>
