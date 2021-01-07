<template>
  <div>
    <Header v-show="!$route.meta.isHeaderHide" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
</style>
