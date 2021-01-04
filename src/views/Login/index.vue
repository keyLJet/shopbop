<template>
  <div class="login-container">
    <!-- 图片shopbop -->
    <div class="tiltle">
      <a href="">
        <img src="./images/Login-tiltle.png" alt="" />
      </a>
    </div>
    <!-- 邮箱 密码 创建账户 -->
    <div class="login-content">
      <div class="login-worp">
        <span class="email">邮箱地址</span>
        <div class="fe-email">
          <input class="a-email" type="email" placeholder="" />
        </div>
        <div class="login-pasword">
          <span class="pasword">密码</span>
          <span><a href="" class="forget">忘记密码</a></span>
        </div>
        <div class="fe-email">
          <input class="a-email" type="password" placeholder="" />
        </div>
        <button class="login-btn">登录</button>
        <div class="details">
          <label for="">
            <input class="checkbox" type="checkbox" />
            <span class="login-state">记住登录状态。</span>
            <a href="">详情</a>
          </label>
        </div>
        <div class="login-more">
          <span class="login-span">更多登录方式</span>
        </div>
        <button class="amazon">
          <img src="./images/button_.png" alt="" />
        </button>
        <div class="shopbop">
          <span>Shopbop的新客户？</span>
        </div>
        <div class="account">
          <span>创建您的 Shopbop 账户</span>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="login-buttom">
      <p class="footer">
        <a class="footer-a" href="">联系我们</a>
      </p>
      <p class="footer-b">
        © 1999-2020 BOP LLC.保留所有权利。
        <span><a href="">隐私声明</a> <a href="">使用条件</a></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: #f6f4f5;
  text-align: center;
  .tiltle {
    padding-top: 15px;
  }
  .login-content {
    margin: 0 auto;
    width: 700px;
    height: 500px;
  }
  .login-worp {
    width: 352px;
    height: 445px;
    margin: 0 auto;
    padding-top: 40px;
    .email {
      font-weight: bold;
      font-family: 'Hiragino Sans GB', 'Microsoft Yahei', Arial, sans-serif;
      display: block;
      margin-top: 10px;
      font-size: 13px;
      position: relative;
      left: -130px;
      padding-bottom: 5px;
    }
    .fe-email {
      border: 1px solid #c9c8c8;
      border-top-color: #949494;
      margin: 0 auto;
      width: 296px;
      height: 24px;
      padding: 3px 7px;
      background-color: #ffffff;
      .a-email {
        box-sizing: border-box;
        width: 280px;
        border: none;
        outline: none;
        border: solid 1px solid;
      }
    }
    .login-pasword {
      margin-left: 20px;
      margin-top: 12px;
      width: 310px;
      font-size: 13px;
      margin-bottom: 4px;
      .pasword {
        float: left;
        font-weight: bold;
      }
      .forget {
        position: relative;
        right: -115px;
        text-decoration: none;
        color: #ee4a1b;
      }
      .forget:hover {
        text-decoration: underline;
      }
    }
    .login-btn {
      color: #fff;
      margin-top: 20px;
      width: 310px;
      height: 32px;
      line-height: 32px;
      background: #ee4a1b;
      border: none;
      outline: none;
      cursor: pointer;
    }
    .details {
      margin-top: 15px;
      width: 310px;
      height: 19px;
      line-height: 19px;
      font-size: 13px;
      label {
        float: left;
        margin-left: 20px;
        .checkbox {
          position: relative;
          top: 2px;
        }
        a {
          color: #ee4a1b;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .login-state {
          padding-top: 2px;
          margin-left: 5px;
        }
      }
    }
    .login-more {
      margin-top: 25px;
      text-align: center;
      font-size: 10px;
      color: #767676;
      position: relative;
      .login-span {
        position: absolute;
        left: 140px;
      }
    }
    .amazon {
      margin: 20px 0;
      border: none;
      outline: none;
      cursor: pointer;
    }
    .shopbop {
      font-size: 12px;
      color: #767676;
    }
    .account {
      margin-top: 20px;
      width: 310px;
      height: 30px;
      line-height: 30px;
      background: #000;
      margin-left: 20px;
      cursor: pointer;
      span {
        color: #fff;
        font-size: 13px;
      }
    }
  }
  .login-buttom {
    height: 142px;
    font-size: 10px;
    a {
      color: #ee4a1b;
      text-decoration: none;
    }
    .footer-a::before {
      display: block;
      content: '';
      padding: 20px;
      border-top: 1px solid #76767657;
    }
    a:hover {
      text-decoration: underline;
    }
    .footer {
      margin-top: 10px;
    }
    .footer-b {
      margin-top: 20px;
    }
  }
}
</style>
