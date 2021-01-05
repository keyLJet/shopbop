<template>
  <div>
    <tetsHome />
    <router-view></router-view>
  </div>
</template>

<script>
import tetsHome from './views/testHome';
export default {
  name: 'App',
  components: {
    tetsHome,
  },
};
</script>

<style lang="less" scoped>
</style>
