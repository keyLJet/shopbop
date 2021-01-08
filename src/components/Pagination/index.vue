<template>
  <div class="pagination">
    <div class="pagination_left">
      <div>
        <span>{{ goodsTotal }}件商品</span>
      </div>
      <div class="screen">
        <strong>查看</strong>
        <span @click="handleClick(20)" :class="flag1 ? 'active' : ''">20</span>
        <span @click="handleClick(40)" :class="flag2 ? 'active' : ''">40</span>
      </div>
    </div>
    <div class="pagination_right">
      <el-pagination
        small
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        :current-page.sync="currentCage"
        :pager-count="5"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["updataShopList", "goodsTotal", "showSomeList"],
  data() {
    return {
      pageSize: 20, //每页数量
      total: 63, //总数
      currentCage: 1, //当前页数
      flag: false,
      flag1: false,
      flag2: false,
    };
  },
  methods: {
    // 公式：（当前页  -   1） *   当前页面展示的条数  ,  当前页面展示的条数 * 当前页
    // 公式： (currentCage - 1) * pageSize ,  pageSize * currentCage

    // 当前页数改变时会触发
    handleCurrentChange() {
      let { pageSize, currentCage } = this;
      this.updataShopList({ pageSize, currentCage });
    },

    // 处理页面数据展示条数
    handleClick(num) {
      this.flag = !this.flag;
      let newNum = this.flag ? num : this.total;
      this.showSomeList(newNum);

      if (num === 20) {
        this.flag1 = !this.flag1;
        this.flag2 = false;
      }

      if (num === 40) {
        this.flag2 = !this.flag2;
        this.flag1 = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
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
    .screen {
      strong {
        margin-left: 10px;
      }
      span {
        margin-left: 10px;
        cursor: pointer;
      }
      span:hover {
        font-weight: 800;
        border-bottom: 2px solid;
      }
      .active {
        font-weight: 800;
        border-bottom: 2px solid;
      }
    }
  }
}
</style>
