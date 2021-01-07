<template>
  <div class="pagination">
    <div class="pagination_left">
      <div>
        <span>{{ goodsTotal }}件商品</span>
      </div>
      <div class="screen">
        <strong>查看</strong>
        <span @click="handleClick(1)">1</span>
        <span @click="handleClick(2)">2</span>
      </div>
    </div>
    <div class="pagination_right">
      <el-pagination
        small
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        :current-page.sync="currentCage"
        :pager-count="5"
        @prev-click="prevClick"
        @next-click="nextClick"
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
      pageSize: 5, //每页数量
      total: 50, //总数
      // pagerCount: 3, //页码按钮的数量，当总页数超过该值时会折叠
      currentCage: 1, //当前页数
    };
  },
  methods: {
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    handleSizeChange() {
      console.log("handleSizeChange");
    },
    handleCurrentChange() {
      console.log(`handleCurrentChange`);
      this.updataShopList();
    },
    prevClick() {
      console.log("上一页");
    },
    nextClick() {
      console.log("下一页");
    },

    // 处理页面数据展示条数
    handleClick(num) {
      this.showSomeList(num);
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
    }
  }
}
</style>
