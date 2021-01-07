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
                <img
                  src="../assets/image/1.jpg"
                  alt=""
                  @mouseenter="getPicSrc"
                />
              </li>
              <li class="imglist">
                <img
                  src="../assets/image/2.jpg"
                  alt=""
                  @mouseenter="getPicSrc"
                />
              </li>
              <li class="imglist">
                <img
                  src="../assets/image/3.jpg"
                  alt=""
                  @mouseenter="getPicSrc"
                />
              </li>
              <li class="imglist">
                <img
                  src="../assets/image/4.jpg"
                  alt=""
                  @mouseenter="getPicSrc"
                />
              </li>
              <li class="imglist">
                <img
                  src="../assets/image/5.jpg"
                  alt=""
                  @mouseenter="getPicSrc"
                />
              </li>
              <li class="imglist">
                <img
                  src="../assets/image/6.jpg"
                  alt=""
                  @mouseenter="getPicSrc"
                />
              </li>
            </ul>
            <div class="weiboicon">
              <img
                class="grey"
                src="../assets/image/wiebo-logo_1-0.jpg"
                alt=""
              />
              <img class="black" src="../assets/image/weibo.png" alt="" />
            </div>
          </div>
          <!-- 主图区 -->
          <div class="imgContainer">
            <div class="image_main">
              <div class="likeHeart"></div>
              <img class="showpic" :src="showPic" alt="" />
            </div>
            <div class="event" @mousemove="move" ref="event"></div>
            <div class="mask" ref="mask"></div>
            <div class="showBigPic">
              <img :src="showPic" alt="" ref="bigImg" />
            </div>
          </div>

          <div class="image_bottom">
            选购搭配服饰
            <div class="arrow down"></div>
          </div>
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
          <div class="productDetils">
            <header class="boxHeaders">
              <span
                :class="{ sliderElement: true, slider_right: showSizeDetails }"
              ></span>
              <label
                class="detailsHeader productDetails"
                @click="productDetails"
                >商品描述</label
              >
              <label class="detailsHeader sizeDetials" @click="sizeDetials"
                >尺寸及版型</label
              >
            </header>
            <section class="product_details_wrapper details_wrapper">
              <div
                class="product_details_text"
                :id="showMoreText ? 'expanded' : ''"
                ref="showMore"
              >
                <div class="long_description">
                  <ul class="bulleted_attributes">
                    <li>面料: 厚实无弹绉绸</li>
                    <li>系扣衣领和透明硬纱蝴蝶结</li>
                    <li>亮片圆点花纹图案搭配合成树脂泪滴元素</li>
                    <li>长袖</li>
                    <li>背面隐形拉链</li>
                    <li>表层: 60% 三醋酸纤维/40% 聚酯纤维</li>
                    <li>饰边: 100% 真丝</li>
                    <li>衬里: 100% 聚酯纤维</li>
                    <li>干洗</li>
                    <li>中国进口</li>
                  </ul>
                  <div class="product_code">
                    风格编号
                    <span>TORYB48491</span>
                  </div>
                </div>
                <span class="collapsed_fade"></span>
              </div>
              <div class="show_more_less" @click="showMore">
                <span v-if="!showMoreText" class="show_more"
                  >显示更多
                  <div class="arrow down"></div>
                </span>
                <span v-else class="show_less hide"
                  >收起
                  <div class="arrow up"></div>
                </span>
              </div>
            </section>
            <section id="size_details_wrapper" class=" details_wrapper">
              <div
                class="product_details_text"
                :id="showMoreText ? 'expanded' : ''"
                ref="showMore"
              >
                <div class="long_description">
                  <ul class="bulleted_attributes">
                    <li>背面隐形拉链</li>
                    <li>表层: 60% 三醋酸纤维/40% 聚酯纤维</li>
                    <li>饰边: 100% 真丝</li>
                    <li>衬里: 100% 聚酯纤维</li>
                    <li>干洗</li>
                    <li>中国进口</li>
                  </ul>
                  <div class="product_code">
                    风格编号
                    <span>TORYB48491</span>
                  </div>
                </div>
                <span class="collapsed_fade"></span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="likeContainer">
      <header class="header_title">
        <label class="product_similarities">您可能还会喜欢</label>
        <div class="swiper-container" ref="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/image/a.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/b.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/c.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/d.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/e.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/f.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/g.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/h.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/j.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/k.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/l.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </header>
    </div>
    <!-- 轮播图 -->
    <div class="likeContainer">
      <header class="header_title">
        <label class="product_similarities">更多 Tory Burch</label>
        <div class="swiper-container" ref="swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/image/a.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/b.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/c.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/d.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/e.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/f.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/g.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/h.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/j.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/k.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/image/l.jpg" />
              <div class="info">
                <div class="brand">Tory Burch</div>
                <div class="brand_name">裥褶连衣裙</div>
                <div class="brand_price">US$348.60</div>
                <img class="heartContainer" src="../assets/image/like.png" />
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </header>
    </div>
    <div class="designerBioSection">
      <h3 class="designerBioSectionHeading">品牌介绍</h3>
      <div class="designerBioSectionContent">
        Tory Burch
        曾被《福布斯》杂质评选为“世界上最具影响力的女人”之一，她的审美观念正是其优雅别致的个人风格的折射。自从她的同名品牌
        2004 年首次亮相以来，就已成为精致、高贵和优雅的代名词。Tory Burch
        品牌是经典的美国运动装，充盈着触手可及的奢华感，其做工之精致，完全无懈可击，从服饰、手提包、鞋类和配饰一应俱全，Gwyneth
        Paltrow、ennifer Lopez 和 Oprah Winfrey 都是该品牌的忠实粉丝。
        <a href="">查看所有 Tory Burch 评论</a>
      </div>
    </div>
    <div class="reviews_container">
      <div class="reviews_section_header no_reviews">
        <h2 class="detailSectionHeading">评论和评分</h2>
        <p class="first_review_message">帮助别人选择！抢评价沙发。</p>
        <a class="loginPopover" href="">
          <input type="botton" class="btn_accent" value="评论此商品" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from "swiper";

import throttle from "lodash/throttle";

Swiper.use([Navigation]);
export default {
  name: "ProductPage",
  data() {
    return {
      showPic: "http://localhost:8080/img/1.c5bfded3.jpg",
      showMoreText: false,
      showProductDetails: true,
      showSizeDetails: false,
    };
  },
  methods: {
    getPicSrc(event) {
      this.showPic = event.target.src;
    },
    // 放大镜效果
    move: throttle(function (event) {
      let left, top;
      const maskDiv = this.$refs.mask;
      const bigImg = this.$refs.bigImg;

      // 取出相关的数据: 事件的offsetX/offsetY, mask <div>的宽度maskWidth
      const { offsetX, offsetY } = event;
      // console.log(offsetX, offsetY);
      // const maskWidth = maskDiv.clientWidth
      const eventWidth = this.eventWidth;
      const eventHeight = this.eventHeight;
      const maskWidth = this.$refs.mask.clientWidth;
      const maskHeight = this.$refs.mask.offsetHeight;

      // 计算left, top
      left = offsetX - maskWidth / 2;
      top = offsetY - maskHeight / 2;
      // console.log(left,top)
      // left和top必须在[0, maskWidth]区间内
      if (left < 0) {
        left = 0;
      } else if (left > eventWidth - maskWidth) {
        left = eventWidth - maskWidth;
      }
      if (top < 0) {
        top = 0;
      } else if (top > eventHeight - maskHeight) {
        top = eventHeight - maskHeight;
      }

      // 指定mask <div>的坐标值(left, top)
      maskDiv.style.left = left + "px";
      maskDiv.style.top = top + "px";

      // 指定大图 <img>的坐标值(left, top)
      bigImg.style.left = -(1 / 0.4) * 1.3 * left + "px";
      bigImg.style.top = -(1 / 0.333) * top + "px";
    }, 50),
    showMore() {
      this.showMoreText = !this.showMoreText;
    },
    productDetails() {
      this.showProductDetails = true;
      this.showSizeDetails = false;
    },
    sizeDetials() {
      this.showProductDetails = false;
      this.showSizeDetails = true;
    },
  },
  mounted() {
    this.eventWidth = this.$refs.event.clientWidth;
    this.eventHeight = this.$refs.event.offsetHeight;

    this.$nextTick(() => {
      new Swiper(this.$refs.swiper1, {
        slidesPerView: 5, // 每页显示轮播图的数量
        // spaceBetween: 12, // 轮播图间距
        slidesPerGroup: 5, // 切换时切换轮播图的数量
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
    this.$nextTick(() => {
      new Swiper(this.$refs.swiper, {
        slidesPerView: 5, // 每页显示轮播图的数量
        // spaceBetween: 12, // 轮播图间距
        slidesPerGroup: 5, // 切换时切换轮播图的数量
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
html body {
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: black;
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
        .weiboicon {
          margin-top: 10px;
          width: 25px;
          cursor: pointer;
          .grey {
            width: 100%;
            display: block;
          }
          .black {
            width: 100%;
            display: none;
          }
        }
        .weiboicon:hover {
          .grey {
            display: none;
          }
          .black {
            display: block;
          }
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
      .imgContainer {
        position: relative;
        width: 357px;
        height: 633px;
        left: 44px;
        .image_main {
          width: 100%;
          height: 100%;
          display: block;
          .likeHeart::before {
            z-index: 5;
            position: absolute;
            right: 0;
            top: 0;
            height: 52px;
            width: 52px;
            background-size: contain;
            background-image: url(https://images-cn.ssl-images-amazon.cn/images/S/sash/bP2i8XO0zrYdZrK.png);
            background-repeat: no-repeat;
            content: "";
          }
          .likeHeart::after {
            z-index: 4;
            position: absolute;
            right: 0;
            top: 0;
            height: 52px;
            width: 52px;
            background-size: contain;
            animation: heartAnimation 0.5s forwards;
            background-image: url(https://images-cn.ssl-images-amazon.cn/images/S/sash/xUeBtjPmsVTOJWv.png);
            content: "";
          }
          img {
            width: 100%;
            height: 100%;
          }
        }

        .event {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0px;
          z-index: 10;
        }
        .mask {
          z-index: 8;
          width: 142px;
          height: 214px;
          border: 1px solid oldlace;
          background-color: rgba(247, 250, 246, 0.5);
          position: absolute;
          left: 0px;
          top: 0;
          display: none;
        }
        .showBigPic {
          width: 130%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 110%;
          overflow: hidden;
          z-index: 998;
          display: none;
          background: white;
          img {
            width: calc(1 / 0.4 * 100%);
            max-width: calc(1 / 0.4 * 100%);
            height: calc(1 / 0.333 * 100%);
            position: absolute;
            left: 0;
            top: 0;
          }
        }
        .event:hover ~ .mask,
        .event:hover ~ .showBigPic {
          display: block;
        }
      }

      .image_bottom {
        margin-top: -40px;
        width: 100%;
        font-size: 12px;
        padding-top: 5px;
        padding-left: 87px;
        text-align: center;
        font-weight: 500;
        cursor: pointer;
        .arrow {
          border: solid #000;
          border-width: 0 1px 1px 0;
          display: inline-block;
          padding: 3px;
          margin-left: 3px;
          position: static;
          -webkit-transform: rotate(45deg) translate(0, -3px);
        }
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
      .productDetils {
        position: relative;
        margin: 54px 0 35px 0;
        border-top: solid 1px #e7e3df;
        .boxHeaders {
          background-color: #f3f1ef;
          position: relative;
          top: -16px;
          width: 340px;
          height: 28px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          border-radius: 2px;
          padding: 2px;
          .sliderElement {
            background-color: #fff;
            width: 170px;
            height: 28px;
            border-radius: 2px;
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
            position: absolute;
            left: 2px;
          }
          .slider_right {
            left: 172.5px;
          }
          .detailsHeader {
            font-size: 12px;
            background-color: transparent;
            display: inline-block;
            width: 170px;
            height: 28px;
            border-radius: 2px;
            line-height: 28px;
            color: #000;
            cursor: pointer;
            text-transform: capitalize;
            position: absolute;
            top: 2px;
          }
          .productDetails {
            left: 2px;
            font-weight: 500;
          }
          .sizeDetials {
            right: 2px;
          }
        }
        .details_wrapper {
          display: block;
        }
        .product_details_wrapper {
          padding: 5px 10px 0 10px;
          .product_details_text {
            font-size: 12px;
            font-weight: 300;
            overflow: hidden;
            padding: 5px 0 0 0;
            max-height: 80px;
            .long_description {
              .bulleted_attributes {
                margin: 3px 0 6px 0;
                padding-left: 17px;
              }
              ul {
                padding: 0;
                line-height: 20px;
              }
              .product_code {
                font-weight: 500;
                margin-bottom: 15px;
                span {
                  font-weight: 600;
                }
              }
            }
            .collapsed_fade {
              position: relative;
              width: 100%;
              height: 4em;
              top: -4em;
              left: 0;
              pointer-events: none;
              background-image: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0),
                #fff 90%
              );
            }
          }
          #expanded {
            max-height: 1000px;
          }
          .show_more_less {
            cursor: pointer;
            font-weight: 500;
            margin-top: 12px;
            font-size: 12px;
            .arrow {
              border: solid #000;
              border-width: 0 1px 1px 0;
              display: inline-block;
              padding: 3px;
              margin-left: 3px;
              position: static;
            }
            .arrow.down {
              -webkit-transform: rotate(45deg) translate(0, -3px);
            }
            .arrow.up {
              -webkit-transform: rotate(-135deg) translate(-3px, 0);
            }
          }
        }
      }
    }
  }
  .likeContainer {
    margin-top: 0 !important;
    border-top: 1px solid #e7e3df;
    margin-bottom: 2em;
    .header_title {
      position: relative;
      text-align: center;
      top: -18px;
      .product_similarities {
        background-color: white;
        border: 0;
        box-shadow: none;
        color: black;
        font-size: 16px;
        width: auto;
        display: inline-block;
        padding: 0.2em 1em;
        margin-left: -0.4em;
        height: 28px;
        border-radius: 2px;
        line-height: 28px;
        margin-bottom: 0.5em;
      }
      .swiper-container {
        margin-top: 20px;
        --swiper-navigation-color: #000;
        --swiper-navigation-size: 24px;
        .swiper-slide {
          cursor: pointer;
          width: 190px;
          text-align: center;
          font-size: 12px;
          margin-bottom: 18px;

          img {
            width: 130px;
          }
          .info {
            padding-top: 10px;
            cursor: pointer;
            .brand {
              font-weight: 550;
              font-size: 12px;
              line-height: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .brand_name {
              line-height: 26px;
              font-size: 12px;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .brand_price {
              font-weight: 550;
              letter-spacing: 0.5px;
              line-height: 17px;
              white-space: normal;
              font-size: 11px;
            }
            .heartContainer {
              float: right;
              margin: 0 2.5em 0 0;
              cursor: pointer;
              width: 11px;
              height: 9.4px;
            }
          }
        }
      }
    }
  }
  .designerBioSection {
    margin: 55px 100px 81px 100px;
    text-align: center;
    font-size: 14px;
    .designerBioSectionHeading {
      margin: 0;
      margin-bottom: 14px;
      font-weight: bold;
      letter-spacing: 1px;
      line-height: 19px;
      text-transform: uppercase;
      font-size: 16px;
    }
    .designerBioSectionContent {
      a {
        text-decoration: none;
        color: black;
        background: transparent;
      }
    }
  }
  .reviews_container {
    font-size: 12px;
    line-height: 18px;
    padding-bottom: 53px;
    text-align: center;
    .reviews_section_header {
      margin-bottom: 19px;
      .detailSectionHeading {
        margin: 0;
        padding-top: 0;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 19px;
        text-transform: uppercase;
        font-size: 16px;
      }
      .first_review_message {
        margin: 6px 0 18px 0;
        font-size: 14px;
        line-height: 20px;
      }
      a {
        text-decoration: none;
        color: black;
        background: transparent;
        .btn_accent {
          color: white;
          background: #ee4a1b;
          border-color: #ee4a1b;
          float: none;
          padding: 12px 47px;
          display: inline-block;
          font-size: 16px;
          margin-right: 0;
          font-weight: 300;
          cursor: pointer;
          width: 82px;
          height: auto;
          border: 1px solid;
          text-transform: capitalize;
          text-align: center;
        }
      }
    }
  }
}
</style>
