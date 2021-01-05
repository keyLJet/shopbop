<template>
  <div>
    <div id="footer">
      <ul class="footerItem">
        <li>Services</li>
        <li><a href="">Customer Service</a></li>
        <li><a href="">Gift Certificates </a></li>
        <li><a href="">请告知您的反馈 </a></li>
      </ul>
      <ul class="footerItem">
        <li>信息</li>
        <li><a href="">关于我们</a></li>
        <li><a href="">人才招聘 </a></li>
        <li><a href="">网友联盟计划 </a></li>
      </ul>
      <ul class="footerItem">
        <li>个性化</li>
        <li><a href="">账户</a></li>
        <li><a href="">我的会员 </a></li>
        <li><a href="">我的心愿单</a></li>
        <li><a href="">我心爱的设计师 </a></li>
        <li><a href="">我的评论</a></li>
      </ul>
      <ul class="footerItem">
        <li>联系</li>
        <li><a href="">Mobile</a></li>
        <li><a href="">Instagram</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">Pinterest</a></li>
        <li><a href="">微博</a></li>
        <li><a href="">订阅我们的电子邮件！</a></li>
      </ul>
      <ul class="footerItem">
        <li>地点</li>
        <li><a href="">中国(更改)</a></li>
        <li><a href="">免费国际快递</a></li>
        <li><a href="">+轻松退货</a></li>
      </ul>
    </div>
    <div class="footer_bottom">
      <a href="#">© 1999-2021 BOP LLC。</a>
      <span>版权所有。</span>
      <a href="">隐私注意 &nbsp;&nbsp;</a>
      <a href="">使用条件</a>
      <div>
        <a href="#"> Shopbop.com in English </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
#footer {
  width: 1024px;
  margin: 40px auto 0;
  text-align: center;
  display: flex;
  font-size: 12px;
}
#footer .footerItem {
  width: 18%;
  list-style: none;
  text-align: left;
  // vertical-align: top;
  // display: inline-block;
}
#footer .footerItem li {
  line-height: 24px;
  letter-spacing: 0.15px;
}
#footer .footerItem a {
  text-decoration: none;
}
#footer .footerItem a:hover {
  font-weight: 900;
}
#footer .footerItem li:first-child {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.footer_bottom {
  width: 1024px;
  height: 26px;
  line-height: 26px;
  margin: 0 auto;
  text-align: center;
  margin-top: 58px;
}
.footer_bottom a {
  font-weight: 900;
  text-decoration: none;
}

.footer_bottom div {
  height: 26px;
  line-height: 26px;
}

.footer_bottom :nth-child(3),
.footer_bottom :nth-child(4) {
  text-decoration: underline;
}
</style>
