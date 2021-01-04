<template>
  <div class="register-banner">
    <!-- 图片 -->
    <div class="register-tiltle">
      <a href="">
        <img src="./images/Login-tiltle.png" alt="" />
      </a>
    </div>
    <!-- 注册内容区域 -->
    <div class="register-content">
      <div class="register-hander">
        <h1>创建账户</h1>
        <p>您的姓名</p>
        <div class="fous">
          <input type="text" />
        </div>
        <p>邮箱地址</p>
        <div class="fous">
          <input type="text" />
        </div>
        <p>密码</p>
        <div class="fous">
          <input type="password" placeholder="至少6个字符" />
        </div>
        <span>密码必须至少6个字符</span>
        <p>再次输入密码</p>
        <div class="fous">
          <input type="text" />
        </div>
        <p class="register-account">
          <span>创建账户</span>
        </p>
        <p class="content">
          <span> 若您创建账户，即表示您同意我们的</span><a href="">隐私声明</a
          ><span>和</span><a href="">使用条件<span>。</span></a>
        </p>
        <p class="register-bottom">
          <span href="">其他注册方式</span>
        </p>
        <button class="register-amazon">
          <img src="./images/button_.png" alt="" />
        </button>
        <div class="register-box">
          <p><span>已拥有账户?</span> <a href="">登录</a></p>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="register-footer">
      <p>
        <a href="">联系我们</a>
      </p>
      <p class="content-foot">
        <span>© 1999-2020 BOP LLC.保留所有权利。</span>
        <a href="">隐私声明</a>
        <a href="">使用条件</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
};
</script>

<style lang="less" scoped>
.register-banner {
  width: 100%;
  height: 100%;
  background: #f6f4f5;
  .register-tiltle {
    text-align: center;
  }
  .register-content {
    position: relative;
    top: 20px;
    width: 350px;
    height: 100%;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 14px 18px;
  }
  .register-hander {
    width: 348px;
    height: 100%;
    h1 {
      font-size: 28px;
      font-weight: 400;
    }
    p {
      padding-top: 15px;
      font-size: 13px;
      font-weight: bold;
    }
    .fous {
      width: 99%;
      height: 31px;
      line-height: 31px;
      background: #fff;
      text-align: center;
      border: 1px solid #c9c8c8;
      input {
        position: relative;
        bottom: 2px;
        width: 95%;
        height: 80%;
        border: none;
        outline: none;
      }
    }
    span {
      color: #2b2b2b;
      font-size: 12px;
    }
    .register-account {
      margin-top: 20px;
      width: 100%;
      background: #ee4a1b;
      height: 20px;
      line-height: 20px;
      text-align: center;
      cursor: pointer;
      span {
        position: relative;
        bottom: 8px;
        color: #fff;
      }
    }
    .content {
      font-size: 12px;
      font-weight: 500;
      a {
        text-decoration: none;
        color: #ee4a1b;
      }
      a:hover {
        text-decoration: underline;
      }
    }
    .register-bottom {
      margin-top: 10px;
      font-size: 12px;
      font-weight: 400;
      text-align: center;
      position: relative;
      span:after {
        display: block;
        content: '';
        height: 1px;
        background: #e7e7e7;
        position: absolute;
        bottom: 5px;
        width: 123px;
      }
      span:before {
        display: block;
        content: '';
        height: 1px;
        background: #e7e7e7;
        position: absolute;
        width: 123px;
        left: 64%;
        top: 24px;
      }
    }
    .register-amazon {
      margin-top: 10px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      border: none;
      cursor: pointer;
      outline: none;
    }
    .register-box {
      margin-top: 20px;
      width: 100%;
      height: 44px;
      border-top: #e7e7e7 1px solid;
      p {
        position: relative;
        top: 14px;
        font-weight: 500;
        a {
          color: #ee4a1b;
        }
      }
    }
  }
  .register-footer {
    text-align: center;
    font-size: 12px;
    p {
      padding: 10px 0;
      a {
        color: #ee4a1b;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    }
    .content-foot {
      padding-bottom: 30px;
    }
  }
}
</style>
