<template>
  <div>
    <header class="swiperTitle">
      <nav><a href="#">推荐单品</a></nav>
    </header>
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
          <div class="swiper_item">
            <img src="../../assets/images/26.jpg" alt="" />
            <div>P.E NATION</div>
            <span>$90.00</span>
          </div>
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
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
  },
  mounted() {
    this.getBanners();
    this.$nextTick(() => {
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
    });
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
