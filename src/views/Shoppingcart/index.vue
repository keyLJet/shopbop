<template>
  <div class="shoppingcart">
    <div class="box">
      <div class="emptycart">
        <img src="../../assets/images/us0i6jic7dukzgp0y4qzyeogkvlil287.svg" />
        <div class="textf">
          <span>您的购物车已清空</span>
          <div class="textd">
            <span>这意味着您现在就可以开始选购</span>
            <div><button class="button">选购新品</button></div>
          </div>
        </div>
      </div>
    </div>
    <div class="box2">
      <h3>订单摘要</h3>
      <div class="product">
        <span>产品</span>
        <span style="float: right">0.00$</span>
      </div>

      <div class="deliver">
        <span>发货&配送</span>
        <span style="float: right">免费</span>
      </div>
      <div class="promote">
        <span>促销代码</span>
        <form action="">
          <input
            class="input"
            type="text"
            value="输入代码"
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <input class="button2" type="submit" value="适用" />
        </form>
      </div>
      <div>
        <span class="subtotal">小计 (税前)</span>
        <span class="settle" style="float: right">0.00$</span>
      </div>
      <div>
        <button class="button3">结算</button>
      </div>
    </div>
    <div class="box3">
      <img
        src="../../assets/images/fpsfuhfs32t9dou5ibi5wnyk06173k9p.svg"
        alt=""
        style="float: left"
      />
      <span class="text3">我的心愿单</span><br />
      <span class="text4">以下是您保存的心爱单品，可随时加入购物车</span>
      <a style="font-size: 12px" href="">查看我的心愿单</a>
    </div>
    <div class="box4">
      <img
        src="../../assets/images/6w031z6d49hm06z9i475dgfwqukdrtia.svg"
        alt=""
        style="float: left"
      />
      <span class="text5">可能需要支付额外费用</span><br />
      <span class="text6">配送选项，进口费用，退换货费用。</span>
      <a style="font-size: 12px" href="">详情</a>
      <div class="box5">
        <img
          src="../../assets/images/13cgr39eq82gz4gmf1dc33uk33s4cpj6.png"
          alt=""
        /><br />
        <span class="text7">有任何疑问？</span>
        <a style="font-size: 12px" href="">联系客户服务部门</a>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Shoppingcart",
};
</script>

<style lang='less' scoped>
.shoppingcart {
  background-color: #f9f9f9;
  font-weight: 1131.33px;
  height: 545.66px;
}
.box {
  width: 577.125px;
  height: 292.073px;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  position: relative;
  top: 55px;
  left: 290px;
}
.emptycart {
  text-align: center;
  font-weight: 120px;
  height: 120px;
  margin: 20px 20px;
}
.textf {
  line-height: 2em;
}
.textd {
  font-size: 10px;
  line-height: 2em;
}
.button {
  background-color: rgb(238, 74, 27);
  border: 1px solid rgb(238, 74, 27);
  height: 48px;
  width: 306px;
  color: #ffffff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 3px;
}
.box2 {
  background-color: white;
  width: 261.734px;
  height: 321.84px;
  position: relative;
  bottom: 285px;
  left: 1045px;
  padding: 10px 14.08px;
}
.product {
  font-size: 12px;
  line-height: 2em;
}
.deliver {
  font-size: 12px;
  line-height: 4em;
}
.promote {
  font-size: 12px;
  line-height: 4em;
}
.input {
  appearance: none;
  width: 60%;
  height: 40px;
  padding-left: 0.8em;
  background-color: rgb(248, 247, 247);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(248, 247, 247);
  outline: none;
  transition: border-color 200ms ease-out 0s;
  font-size: 12px;
}
.button2 {
  text-align: center;
  height: 50px;
  width: 80px;
  background-color: white;
}
.subtotal {
  font-size: 14px;
  position: relative;
  right: -2px;
  top: -1px;
}
.subtotale .settle {
  line-height: 4em;
  margin: 10px;
  border-bottom: 1px solid rgb(218, 217, 215);
}
.button3 {
  height: 50px;
  width: 100%;
  background-color: rgb(238, 74, 27);
  border: 1px solid rgb(238, 74, 27);
  color: #ffffff;
  font-size: 16px;
}
.box3 {
  height: 49.996px;
  width: 600.9px;
  background-color: white;
  padding: 20px;
  margin: 19.2px;
  border-top: 1px solid rgb(231, 227, 223);
  position: relative;
  left: 266px;
  top: -258px;
}
.box4 {
  border-bottom: 1px solid rgb(218, 217, 215);
  height: 35.983px;
  width: 321.84px;
  padding: 20px;
  margin: 20px;
  position: relative;
  left: 993px;
  top: -419px;
}
.box5 {
  height: 56.61px;
  width: 321.84px;
  padding: 20px;
  margin: 20px;
}
.text3 {
  font-weight: bold;
  font-size: 18px;
}
.text4 {
  font-size: 12px;
}
.text5 {
  font-size: 14px;
}
.text6 {
  font-size: 12px;
}
.text7 {
  font-size: 12px;
  text-align: center;
}
</style>