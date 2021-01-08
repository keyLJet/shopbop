<template>
  <div v-if="bannersList">
    <header class="swiperTitle">
      <nav><a href="#">推荐单品</a></nav>
    </header>
    <div class="swiper-container" @click="goToProduct">
      <!-- Additional required wrapper -->
    <div class="swiper-container">
      <!-- 轮播图内容 -->
      <div class="swiper-wrapper">
        <!-- 轮播图每一面内容-->
        <div
          class="swiper-slide"
          v-for="(list, index) in bannersList[0]"
          :key="index"
        >
          <div class="swiper_item" v-for="li in list" :key="li.id">
            <img :src="li.primaryPicUrl" alt="" />
            <div>{{ li.name }}</div>
            <span>${{ li.counterPrice }}</span>
          </div>
        </div>
        <div
          class="swiper-slide"
          v-for="(list, index) in bannersList[1]"
          :key="index"
        >
          <div class="swiper_item" v-for="li in list" :key="li.id">
            <img :src="li.primaryPicUrl" alt="" />
            <div>{{ li.name }}</div>
            <span>${{ li.counterPrice }}</span>
          </div>
        </div>
        <div
          class="swiper-slide"
          v-for="(list, index) in bannersList[2]"
          :key="index"
        >
          <div class="swiper_item" v-for="li in list" :key="li.id">
            <img :src="li.primaryPicUrl" alt="" />
            <div>{{ li.name }}</div>
            <span>${{ li.counterPrice }}</span>
          </div>
        </div>
        <div
          class="swiper-slide"
          v-for="(list, index) in bannersList[3]"
          :key="index"
        >
          <div class="swiper_item" v-for="li in list" :key="li.id">
            <img :src="li.primaryPicUrl" alt="" />
            <div>{{ li.name }}</div>
            <span>${{ li.counterPrice }}</span>
          </div>
        </div>
      </div>

      <!-- 轮播图小圆点 -->
      <div class="swiper-pagination"></div>

      <!--轮播图前后按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    </div>
  </div>  
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Swiper",
  computed: {
    ...mapGetters(["bannersList"]),
    ...mapState({
      banners: (state) => state.swiper.banners,
    }),
  },
  methods: {
    ...mapActions(["getBanners"]),
    // 复用轮播图方法
    initSwiper() {
      new Swiper(".swiper-container", {
        // 循环模式选项
        loop: true,

        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
    goToProduct() {
      this.$router.push("/pageproduct");
    },
  },
  watch: {
    bannersList() {
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  mounted() {
    this.getBanners();

    this.initSwiper();
  },
};
</script>

<style lang="less">
.swiperTitle {
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  font-weight: 900;
}
.swiper-container {
  width: 875px;
  height: 255px;
  --swiper-navigation-color: #979797; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
  .swiper-wrapper {
    height: 250px;
    .swiper-slide {
      margin-top: 10px;
      padding: 0 10px 8px;
      box-sizing: border-box;
      text-align: center;
      font-weight: 800;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .swiper_item {
        width: 150px;
        height: 224px;
        line-height: 14px;
        div {
          margin-bottom: 4px;
        }
        img {
          width: 96px;
          height: 170px;
        }
      }
    }
  }
}
</style>
