<template>
  <!-- 单页面商品详情 -->
  <div class="productContainer">
    <!-- 头部内容 -->
    <div class="desk_Top">
      <!-- 面包屑导航栏 -->
      <div class="bread_crumbs">
        <ul>
          <li>
            <a href="">
              <span>服装</span>
            </a>
          </li>
          <li>></li>
          <li>
            <a href="">
              <span>摩登裙装</span>
            </a>
          </li>
          <li>></li>
          <li>
            <a href="">
              <span>MSGM 服装</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 方便flex布局 -->
      <div class="boxContainer">
        <!-- 左边商品图片展示区 -->
        <div class="left_column">
          <!-- 多图展示区 -->
          <div class="image_sidebar">
            <ul>
              <li class="imglist">
                <img src="../assets/image/1.jpg" alt="" />
              </li>
              <li class="imglist">
                <img src="../assets/image/2.jpg" alt="" />
              </li>
              <li class="imglist">
                <img src="../assets/image/3.jpg" alt="" />
              </li>
              <li class="imglist">
                <img src="../assets/image/4.jpg" alt="" />
              </li>
              <li class="imglist">
                <img src="../assets/image/6.jpg" alt="" />
              </li>
            </ul>
            <div class="weiboicon">
              <img src="../assets/image/weibo.png" alt="" />
            </div>
          </div>
          <!-- 主图区 -->
          <div class="image_main">
            <img class="showpic" src="../assets/image/1.jpg" alt="" />
          </div>
          <div class="image_bottom">选购搭配服饰</div>
        </div>
        <!-- 右边商品信息展示区 -->
        <div class="right_column">
          <!-- 商品信息 -->
          <div class="messageContainer">
            <div class="goodsTitle">
              <h3>Tory Burch</h3>
              <span>+</span>
              <div class="goodsname">珠宝装饰刺绣直筒连衣裙</div>
            </div>
            <div class="goodsPrice">US$698.00</div>
            <div class="goodsColor">
              <div>颜色: 黑色</div>
              <div class="box">
                <div class="outSide">
                  <div class="border">
                    <img src="../assets/image/7.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="goodsSize">
              <div>尺寸</div>
              <div class="sizeList">
                <div class="sizeBox">4</div>
                <div class="sizeBox">8</div>
              </div>
            </div>
            <div class="sizeInfo">
              <div class="size_font_note">
                所列尺码为<b>美国</b>尺码。&nbsp;查看
                <span>尺寸／尺码对照表</span>
              </div>
              <div class="size_font_note">
                Designed for a relaxed fit in a mini length.
              </div>
            </div>
          </div>
          <div class="size_select">请选择尺寸</div>
          <!-- 加入购物车按钮 -->
          <div class="addCart">
            <button>加入购物车</button>
          </div>
          <!-- 加入心愿单按钮 -->
          <div class="addlike">
            <button>添加至心愿单</button>
          </div>
          <!-- 购买提示 -->
          <div class="shoppingCountDown">
            <a href="">免费国际快递 + 轻松退货</a>
          </div>
          <!-- 商品介绍 -->
          <div class="productDetils"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
html body {
  width: 100%;
  padding: 0;
  margin: 0;
}
.productContainer {
  width: 1024px;
  margin: 0 auto;
  height: 100%;
  .bread_crumbs ul {
    display: inline-flex;
    list-style: none;
    margin: 0 0 8px 15px;
    padding: 0;
    li {
      font-weight: 300;
      display: block;
      list-style-type: none;
      margin-right: 3px;
      line-height: 16px;
      a {
        color: #88817f;
        display: block;
        font-size: 12px;
        text-decoration: none;
        margin: 0 2px;
        padding-bottom: 2px;
        cursor: pointer;
        transition: color 0.3s ease-out;
      }
      a:hover::after {
        color: #000;
        width: 100%;
        background-color: #000;
      }
      a::after {
        display: block;
        content: "";
        height: 1px;
        background: 0 0;
        margin: 5px auto 0 auto;
        transition: width 0.3s ease-out, background-color 0.3s ease-out;
      }
    }
  }
  .boxContainer {
    width: 100%;
    display: flex;
    .left_column {
      margin-left: 38px;
      width: 445px;
      vertical-align: top;
      display: flex;
      flex-wrap: wrap;
      .image_sidebar {
        width: 40px;
        height: 633px;
        box-sizing: border-box;
        display: inline-flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        .weiboicon img {
          width: 25px;
        }
        ul {
          padding: 0;
          margin: 0;
          list-style: none;
          li {
            cursor: pointer;
            display: block;
            margin-bottom: 8px;
            img {
              width: 40px;
              display: block;
            }
          }
        }
      }
      .image_main {
        display: block;
        padding-left: 44px;
        width: 357px;
        height: 633px;
      }
      .image_bottom {
        width: 100%;
        font-size: 12px;
        padding-top: 5px;
        padding-left: 87px;
        text-align: center;
        font-weight: 500;
        cursor: pointer;
      }
    }
    .right_column {
      margin-left: 83px;
      width: 375px;
      .messageContainer {
        line-height: 20px;
        margin-bottom: 15px;
        .goodsTitle span {
          display: inline;
        }
        h3 {
          display: inline;
          margin: 0;
        }
        .goodsname {
          font-size: 14px;
          margin-top: 9px;
          font-weight: 300;
        }
        .goodsPrice {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin: 15px 0 8px 0;
        }
        .goodsColor {
          font-size: 1rem;
          font-weight: 300;
          margin: 23px 0 20px 0;
          div {
            font-size: 14px;
          }
          .box {
            width: 40px;
            height: 40px;
            font-size: 14px;
            margin: 5px 1px 0 0;
          }
          .outSide {
            padding: 3px;
            border: solid 1px #000;
            cursor: default;
            border-radius: 50%;
            .border {
              width: 30px;
              height: 30px;
              overflow: hidden;
              border: 1px solid #d4d4d4;
              border-radius: 50%;

              img {
                width: 120%;
                height: 120%;
                margin: -10%;
                border-radius: 50%;
              }
            }
          }
        }
        .goodsSize {
          font-size: 14px;
          font-weight: 300;
          .sizeList {
            display: flex;
            margin: 0 -2.4px;
            .sizeBox {
              font-size: 12px;
              border: solid 1px #dad9d6;
              margin: 3.6px 2.4px;
              height: 35px;
              line-height: 35px;
              min-width: 50px;
              text-align: center;
              box-sizing: border-box;
              padding: 0 5px;
              transition: background-color 0.2s ease-out, color 0.2s ease-out;
            }
            .sizeBox:hover {
              font-weight: 700;
              background-color: #000 !important;
              color: #fff;
              border: solid 1px #000;
              cursor: pointer;
            }
          }
        }
        .sizeInfo {
          margin: 10px 10px 18px 0;
          font-size: 12px;
          .size_font_note {
            margin: 5px 0 0 0;
          }
        }
      }
      .size_select {
        margin-bottom: 9px;
        height: 0;
        opacity: 0;
        transition: opacity 0.5s ease-out, height 0.2s ease-out;
      }
      .addCart button {
        color: #fff;
        background: #ee4a1b;
        border-color: #ee4a1b;
        width: 100%;
        height: 48px;
        box-sizing: border-box;
        border: 1px solid;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
        transition: background-color 350ms ease-out, color 250ms ease-out;
      }
      .addlike {
        margin-top: 12px;
        button {
          color: #000;
          background: #fff;
          border-color: #d6d6d6;
          width: 100%;
          height: 48px;
          box-sizing: border-box;
          border: 1px solid;
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          cursor: pointer;
          transition: background-color 350ms ease-out, color 250ms ease-out;
        }
      }
      .shoppingCountDown {
        font-weight: 400;
        font-size: 12px;
        margin-top: 20px;
        a {
          color: #000;
          text-decoration: none;
          border-bottom: 1px solid #000;
        }
      }
    }
  }
}
</style>
