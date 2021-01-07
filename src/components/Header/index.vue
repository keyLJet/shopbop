<template>
  <div>
    <div id="header">
      <!-- 头部导航 -->
      <div class="header">
        <!-- 左 -->
        <div class="header_left">
          <a href="#">选购男士单品</a> |
          <div>
            <span class="iconfont icon-weibiaoti-3"></span>
            <span>CN<span class="iconfont icon-xia"></span></span>
            <span>ZH<span class="iconfont icon-xia"></span></span>
            <span>$USD<span class="iconfont icon-xia"></span></span>
          </div>
        </div>

        <!-- 中 -->
        <div class="header_middle">
          <a href="#">免费国际快递 + 轻松退货</a>
        </div>

        <!-- 右 -->
        <div class="header_right">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#faf9f9"
          >
            <el-submenu index="1">
              <span slot="title"
                >登录/注册<span class="iconfont icon-xia"></span
              ></span>
              <div class="tologin">
                <ul>
                  <li><a href="">账户</a></li>
                  <li><a href="">订单</a></li>
                  <li><a href="">我的会员</a></li>
                  <li><a href="">我的评论</a></li>
                  <li><a href="">收藏夹</a></li>
                  <li><a href="">我的心愿单</a></li>
                  <li><a href="">我的品牌</a></li>
                </ul>
              </div>
            </el-submenu>
          </el-menu>
          <span class="iconfont icon-aixin"></span>
          <span class="iconfont icon-35gouwudai"></span>0
        </div>
      </div>
    </div>

    <!-- LOGO -->
    <div :class="flag ? 'fixedNav' : ''">
      <div class="logo">
        <a href="">
          <img
            :class="logo ? '' : 'active'"
            src="https://images-cn.ssl-images-amazon.cn/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png"
          />
        </a>
      </div>
      <div class="topNav">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-submenu index="1">
            <router-link
              to="/shoplist"
              slot="title"
              class="ui-box bottom-inOutSpread"
              >新款上市</router-link
            >
            <div class="topNav_title">
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <img src="../../assets/images/26.jpg" alt="" />
                <div><a href="">新品上线：Tory Burch</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
              <ul>
                <img src="../../assets/images/27.jpg" alt="" />
                <div><a href="">加入 Yours Truly Shopbop Rewards</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
            </div>
          </el-submenu>

          <el-submenu index="2">
            <router-link
              to="/shoplist"
              slot="title"
              class="ui-box bottom-inOutSpread"
              style="color: #a886c7"
              >运动服和休闲服</router-link
            >
            <div class="topNav_title">
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <img src="../../assets/images/26.jpg" alt="" />
                <div><a href="">新品上线：Tory Burch</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
              <ul>
                <img src="../../assets/images/27.jpg" alt="" />
                <div><a href="">加入 Yours Truly Shopbop Rewards</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
            </div>
          </el-submenu>

          <el-submenu index="3">
            <router-link
              to="/shoplist"
              slot="title"
              class="ui-box bottom-inOutSpread"
              >我们的最爱</router-link
            >
            <div class="topNav_title">
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <img src="../../assets/images/26.jpg" alt="" />
                <div><a href="">新品上线：Tory Burch</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
              <ul>
                <img src="../../assets/images/27.jpg" alt="" />
                <div><a href="">加入 Yours Truly Shopbop Rewards</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
            </div>
          </el-submenu>

          <el-submenu index="4">
            <router-link
              to="/shoplist"
              slot="title"
              class="ui-box bottom-inOutSpread"
              >品牌</router-link
            >
            <div class="topNav_title">
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <img src="../../assets/images/26.jpg" alt="" />
                <div><a href="">新品上线：Tory Burch</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
              <ul>
                <img src="../../assets/images/27.jpg" alt="" />
                <div><a href="">加入 Yours Truly Shopbop Rewards</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
            </div>
          </el-submenu>

          <el-submenu index="5">
            <router-link
              to="/shoplist"
              slot="title"
              class="ui-box bottom-inOutSpread"
              >服装</router-link
            >
            <div class="topNav_title">
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <img src="../../assets/images/26.jpg" alt="" />
                <div><a href="">新品上线：Tory Burch</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
              <ul>
                <img src="../../assets/images/27.jpg" alt="" />
                <div><a href="">加入 Yours Truly Shopbop Rewards</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
            </div>
          </el-submenu>

          <el-submenu index="6">
            <router-link
              to="/shoplist"
              slot="title"
              class="ui-box bottom-inOutSpread"
              >鞋履</router-link
            >
            <div class="topNav_title">
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <img src="../../assets/images/26.jpg" alt="" />
                <div><a href="">新品上线：Tory Burch</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
              <ul>
                <img src="../../assets/images/27.jpg" alt="" />
                <div><a href="">加入 Yours Truly Shopbop Rewards</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
            </div>
          </el-submenu>

          <el-submenu index="7">
            <router-link
              to="/shoplist"
              slot="title"
              class="ui-box bottom-inOutSpread"
              >包袋</router-link
            >
            <div class="topNav_title">
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <img src="../../assets/images/26.jpg" alt="" />
                <div><a href="">新品上线：Tory Burch</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
              <ul>
                <img src="../../assets/images/27.jpg" alt="" />
                <div><a href="">加入 Yours Truly Shopbop Rewards</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
            </div>
          </el-submenu>

          <el-submenu index="8">
            <router-link
              to="/shoplist"
              slot="title"
              class="ui-box bottom-inOutSpread"
              >配饰</router-link
            >
            <div class="topNav_title">
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <img src="../../assets/images/26.jpg" alt="" />
                <div><a href="">新品上线：Tory Burch</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
              <ul>
                <img src="../../assets/images/27.jpg" alt="" />
                <div><a href="">加入 Yours Truly Shopbop Rewards</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
            </div>
          </el-submenu>

          <el-submenu index="9">
            <router-link
              to="/shoplist"
              slot="title"
              class="ui-box bottom-inOutSpread"
              >折扣促销</router-link
            >
            <div class="topNav_title">
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <h3>新款上市</h3>
                <li><a href="">新款上市</a></li>
                <li><a href="">今日新品</a></li>
                <li><a href="">本周新品</a></li>
                <li><a href="">全球热卖榜单</a></li>
                <li><a href="">名师精品推荐</a></li>
                <li><a href="">全部新款上市</a></li>
              </ul>
              <ul>
                <img src="../../assets/images/26.jpg" alt="" />
                <div><a href="">新品上线：Tory Burch</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
              <ul>
                <img src="../../assets/images/27.jpg" alt="" />
                <div><a href="">加入 Yours Truly Shopbop Rewards</a></div>
                <div><a href="">选购故事</a></div>
              </ul>
            </div>
          </el-submenu>
        </el-menu>
        <div class="topNav_Ipt">
          <span class="iconfont icon-sousuo"></span>
          <input type="text" v-model="searchText" placeholder="请用英文搜索" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Headers",
  props: ["flied", "setBigLogo"],
  data() {
    return {
      flag: false, //控制上滚动条显示导航
      logo: false, //控制滚轮在顶部时，Logo变大
      searchText: "",
    };
  },
  methods: {
    // mouseWheel(event){
    //   console.log(event);
    // }
  },

  watch: {
    flied() {
      this.flag = this.flied;
      this.logo = this.setBigLogo;
    },
  },
};
</script>

<style lang="less" scoped>
#header {
  width: 100%;
  font-size: 12px;
  font-weight: 800;
  background-color: #faf9f9;
}
.fixedNav {
  background: white;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 600ms ease 0s;
}
.header {
  width: 1024px;
  height: 40px;
  line-height: 40px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  text-align: center;
  position: relative;
}
.header_left {
  width: 25%;
  display: flex;
}
.header_middle {
  width: 50%;
}
.header_right {
  width: 25%;
  font-size: 14px;
  display: flex;
}

.tologin {
  width: 150px;
  height: 258px;
  box-sizing: border-box;
  padding: 25px;
}
.tologin ul {
  font-size: 14px;
}

.tologin ul li {
  width: 100px;
  height: 24px;
  line-height: 24px;
  padding: 0 0 8px;
  text-align: right;
}
.header .iconfont {
  margin: 0 5px;
  cursor: pointer;
}
.header_right .icon-aixin {
  display: inline-block;
  color: rgb(252, 176, 139);
  font-size: 24px;
}

.header_right .icon-35gouwudai {
  font-size: 20px;
}

.logo {
  position: relative;
  width: 1024px;
  height: 88px;
  margin: 0 auto;
  position: relative;
}

.logo img {
  width: 120px;
  height: 30px;
  margin: 27px auto 28px auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}
.logo .active {
  width: 181px;
  height: 45px;
  transition: all 500ms ease 0s;
}

.topNav {
  width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.topNav_title {
  width: 1024px;
  height: 372px;
  padding: 12px 0 0;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
}

.topNav_title ul {
  width: 200px;
  height: 360px;
  padding: 19px 0 0 16px;
}
.topNav_title ul li {
  width: 184px;
  height: 34px;
  line-height: 34px;
}
.topNav .topNav_Ipt {
  width: 140px;
  height: 18px;
  display: flex;
  border-bottom: 2px solid;
}
.topNav_Ipt .iconfont {
  font-size: 15px;
}
.topNav_Ipt input {
  border: none;
  outline: none;
  margin-left: 10px;
}

.ui-box {
  text-decoration: none;
  border: none;
  font-family: "Roboto", sans-serif;
  position: relative;
  vertical-align: baseline;
  padding-bottom: 5px;
}

.bottom-inOutSpread:before,
.bottom-inOutSpread:after,
.bottom-inOutSpread > .ui-border-element:before,
.bottom-inOutSpread > .ui-border-element:after {
  content: "";
  position: absolute;
}

.bottom-inOutSpread:after {
  border-bottom: 1px solid red;
  text-decoration: none;
  left: 51%;
  right: 51%;
  bottom: -1px;
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-timing-function: cubic-bezier(0, 0.98, 0.51, 0.93);
  -moz-transition-timing-function: cubic-bezier(0, 0.98, 0.51, 0.93);
  -o-transition-timing-function: cubic-bezier(0, 0.98, 0.51, 0.93);
  transition-timing-function: cubic-bezier(0, 0.98, 0.51, 0.93);
  -webkit-transition-duration: 200ms;
  -moz-transition-duration: 200ms;
  -o-transition-duration: 200ms;
  transition-duration: 200ms;
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
}
.bottom-inOutSpread:hover {
  font-weight: 700;
  color: #000 !important;
}

.bottom-inOutSpread:hover:after {
  left: 0%;
  right: 0%;
  text-decoration: none;
}

.bottom-inOutSpread:not(:hover):after {
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
}

/deep/ .el-icon-arrow-down:before {
  content: none;
}

/deep/ .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 40px;
  line-height: 40px;
  color: #000;
}
</style>
