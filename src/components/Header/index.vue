<template>
  <div class="header">
    <div class="header-nav">
      <div class="header-top">
        <div class="header-left">
          <el-popover
            placement="top-start"
            title=""
            width="200"
            trigger="hover"
            content="选购......男士时装 EASTDATCAAAAAAAAAAAAAAA"
          >
            <el-button class="el-button" slot="reference"
              >选购男士单品</el-button
            >
          </el-popover>

          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-location-outline"></i>
              CH
              <i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>中国(CN)</el-dropdown-item>
              <el-dropdown-item>美国(US)</el-dropdown-item>
              <el-dropdown-item>加拿大(CA)</el-dropdown-item>
              <el-dropdown-item>俄罗斯(RU)</el-dropdown-item>
              <el-dropdown-item>不丹(BT)</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <span class="el-dropdown-link">
              ZH
              <i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全译文</el-dropdown-item>
              <el-dropdown-item>英文</el-dropdown-item>
              <el-dropdown-item>中文</el-dropdown-item>
              <el-dropdown-item>部分译文</el-dropdown-item>
              <el-dropdown-item>韩文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <span class="el-dropdown-link">
              $USD
              <i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全译文</el-dropdown-item>
              <el-dropdown-item>英文</el-dropdown-item>
              <el-dropdown-item>中文</el-dropdown-item>
              <el-dropdown-item>部分译文</el-dropdown-item>
              <el-dropdown-item>韩文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-center">
          <a href="">免费国际快递 + 轻松退货</a>
        </div>
        <div class="header-right">
          <el-dropdown>
            <p v-if="$store.state.user.name">
              <span>{{ $store.state.user.name }}</span>
            </p>
            <p v-else>
              <router-link to="/login">登录/注册</router-link>
            </p>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>账户</el-dropdown-item>
              <el-dropdown-item>订单</el-dropdown-item>
              <el-dropdown-item>我的会员</el-dropdown-item>
              <el-dropdown-item>我的品论</el-dropdown-item>
              <el-dropdown-item>收藏夹</el-dropdown-item>
              <el-dropdown-item>我的心愿单</el-dropdown-item>
              <el-dropdown-item>我的品牌</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <i class="el-icon-arrow-down"></i>
          <a href=""><img src="./image/aixin.png" alt="" /></a>
          <i class="el-icon-shopping-bag-2"></i>
          <span>0</span>
        </div>
      </div>
    </div>
    <div class="header-content">
      <div class="header-tilte">
        <a href=""><img src="./image/Login-tiltle.png" alt="" /></a>
      </div>
      <ul class="header-mounse">
        <li><a href="">新款上市</a></li>
        <li><a href="">运动服和休闲服</a></li>
        <li><a href="">我们的最爱</a></li>
        <li><a href="">品牌</a></li>
        <li><a href="">服装</a></li>
        <li><a href="">鞋履</a></li>
        <li><a href="">包袋</a></li>
        <li><a href="">配饰</a></li>
        <li><a href="">折扣促销</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="less" scoped>
.header {
  .header-nav {
    width: 100%;
    height: 40px;
    background: #faf9f9;
    .header-top {
      width: 1024px;
      line-height: 40px;
      margin: 0 auto;
      font-size: 12px;
      .header-left {
        float: left;
        .el-button {
          font-size: 12px;
          color: #000;
          background-color: #faf9f9;
          border: 0;
          margin: 0;
          padding: 0;
        }
        .el-dropdown-link {
          cursor: pointer;
          font-size: 12px;
          padding: 0 6px;
          color: #000;
          .el-icon-location-outline {
            font-size: 16px;
          }
        }
      }
      .header-center {
        float: left;
        padding: 0 210px;
        a {
          color: #000;
          text-decoration: none;
          img {
            position: relative;
            top: 5px;
          }
        }
      }
      .header-right {
        float: right;
        font-size: 14px;
        a {
          text-decoration: none;
          color: #000;
        }
        .el-icon-arrow-down {
          position: relative;
          top: 5px;
          padding: 0 5px;
        }
        .el-icon-shopping-bag-2 {
          font-size: 20px;
          margin: 0 5px;
        }
      }
    }
  }
  .header-content {
    width: 100%;
    height: 128px;
    .header-tilte {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 1024px;
      height: 88px;

      a {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 15px;
        cursor: pointer;
      }
    }
    .header-mounse {
      width: 1024px;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      li {
        float: left;
        padding: 0 0 12px;
        a {
          margin: 0 12px;
          padding: 12px 0 5px;
          color: #000;
        }
      }
    }
  }
}
</style>
