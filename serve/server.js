var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

app
  .use(router.routes())
  .use(router.allowedMethods());


// 返回商品列表数据
let goodsList = require("./datas/goods.json")
router.get('/getgoodsList', (ctx, next) => {
  ctx.body = goodsList
});


// 返回轮播图列表数据
let swiperList = require("./datas/indexCateList.json")
router.get("/banners", (ctx, next) => {
  ctx.body = swiperList
})

// 返回商品分类列表数据
let categoryList = require("./datas/indexCateModule.json")
router.get('/category', (ctx, next) => {
  ctx.body = categoryList
})



app.listen("3000", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("服务器运行成功，请访问http://localhost:3000");
  }
})