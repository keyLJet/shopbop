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
      <div class="shopList">
        <a href=""><img src="../../../assets/images/39.jpg" alt="" /></a>
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
              <li>上架时间</li>
            </ul>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="pagination">
          <div class="pagination_left">
            <div>
              <span>959商品</span>
            </div>
            <div>
              <span>查看</span>
              <span>40</span>
              <span>100</span>
            </div>
          </div>
          <div class="pagination_right">
            <el-pagination small layout="prev, pager, next" :total="50">
            </el-pagination>
          </div>
        </div>
        <!-- 图片列表 -->
        <div class="imgList">
          <ul>
            <li>
              <a href="#"><img src="../../../assets/images/40.jpg" alt="" /></a>
              <div class="shopDetail">
                <div><a href="#">The Vampires Wife</a></div>
                <div><a href="#">罩衫式迷你连衣裙</a></div>
                <div><a href="#">US$1,695.00</a></div>
              </div>
            </li>
            <li>
              <a href="#"><img src="../../../assets/images/41.jpg" alt="" /></a>
              <div class="shopDetail">
                <div><a href="#">The Vampires Wife</a></div>
                <div><a href="#">罩衫式迷你连衣裙</a></div>
                <div><a href="#">US$1,695.00</a></div>
              </div>
            </li>
            <li>
              <a href="#"><img src="../../../assets/images/42.jpg" alt="" /></a>
              <div class="shopDetail">
                <div><a href="#">The Vampires Wife</a></div>
                <div><a href="#">罩衫式迷你连衣裙</a></div>
                <div><a href="#">US$1,695.00</a></div>
              </div>
            </li>
            <li>
              <a href="#"><img src="../../../assets/images/43.jpg" alt="" /></a>
              <div class="shopDetail">
                <div><a href="#">The Vampires Wife</a></div>
                <div><a href="#">罩衫式迷你连衣裙</a></div>
                <div><a href="#">US$1,695.00</a></div>
              </div>
            </li>
            <li>
              <a href="#"><img src="../../../assets/images/40.jpg" alt="" /></a>
              <div class="shopDetail">
                <div><a href="#">The Vampires Wife</a></div>
                <div><a href="#">罩衫式迷你连衣裙</a></div>
                <div><a href="#">US$1,695.00</a></div>
              </div>
            </li>
            <li>
              <a href="#"><img src="../../../assets/images/41.jpg" alt="" /></a>
              <div class="shopDetail">
                <div><a href="#">The Vampires Wife</a></div>
                <div><a href="#">罩衫式迷你连衣裙</a></div>
                <div><a href="#">US$1,695.00</a></div>
              </div>
            </li>
            <li>
              <a href="#"><img src="../../../assets/images/42.jpg" alt="" /></a>
              <div class="shopDetail">
                <div><a href="#">The Vampires Wife</a></div>
                <div><a href="#">罩衫式迷你连衣裙</a></div>
                <div><a href="#">US$1,695.00</a></div>
              </div>
            </li>
            <li>
              <a href="#"><img src="../../../assets/images/43.jpg" alt="" /></a>
              <div class="shopDetail">
                <div><a href="#">The Vampires Wife</a></div>
                <div><a href="#">罩衫式迷你连衣裙</a></div>
                <div><a href="#">US$1,695.00</a></div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 底部分页器 -->
        <div class="pagination">
          <div class="pagination_left">
            <div>
              <span>959商品</span>
            </div>
            <div>
              <span>查看</span>
              <span>40</span>
              <span>100</span>
            </div>
          </div>
          <div class="pagination_right">
            <el-pagination small layout="prev, pager, next" :total="50">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopList",
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
  .shopList {
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
    .pagination {
      height: 30px;
      line-height: 30px;
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      .pagination_left {
        display: flex;
        align-items: center;
        div:nth-child(1) {
          padding-right: 10px;
          border-right: 1px solid;
        }
        span {
          margin-left: 10px;
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
