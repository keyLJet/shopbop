<template>
  <div id="app" @mousewheel="mouseWheel">
    <Header :flied="flied" :setBigLogo="setBigLogo"/>
    <router-view class="countent"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "app",
  data() {
    return {
      flied: false,
      setBigLogo: false,
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    mouseWheel(event) {
      let {
        deltaY,
        view: {
          parent: { scrollY },
        },
      } = event;

      if (deltaY > 0 || scrollY === 0) {
        this.flied = false;
        this.setBigLogo = false;
      } else {
        this.flied = true;
        this.setBigLogo = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>
