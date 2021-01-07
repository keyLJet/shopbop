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
        <p>手机号</p>
        <div class="fous">
          <ValidationProvider rules="required|length|phone" v-slot="{ errors }">
            <input type="text" v-model="user.phone" /><br />
            <span class="error-msg">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <p>验证码</p>
        <div class="fous">
          <ValidationProvider rules="vscodes" v-slot="{ errors }">
            <input type="text" /><br />
            <span class="error-msg">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <p>密码</p>
        <div class="fous">
          <ValidationProvider rules="pass|passmess" v-slot="{ errors }">
            <input
              type="password"
              placeholder="至少6个字符"
              v-model="user.password"
            /><br />
            <span class="error-msg">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <!-- <span>密码必须至少6个字符</span> -->
        <p>再次输入密码</p>
        <div class="fous">
          <ValidationProvider rules="repass" v-slot="{ errors }">
            <input type="password" v-model="user.rePassword" /><br />
            <span class="error-msg">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <p class="register-account" @click="submit">
          <span>创建账户</span>
        </p>
        <p class="content">
          <input type="checkbox" v-model="user.isAgree" />
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
          <p>
            <span>已拥有账户?</span> <router-link to="/login">登录</router-link>
          </p>
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
//引入组件局部祖册
import { ValidationProvider, extend } from 'vee-validate';
//内置校验规则
import { required } from 'vee-validate/dist/rules';
//使用校验规则
extend('required', {
  ...required,
  message: '手机号必须要填写',
});
extend('length', {
  validate(vaule) {
    return vaule.length === 11;
  },
  message: '长度必须11位',
});
extend('phone', {
  validate(value) {
    return /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
      value
    );
  },
  message: '手机号不符合规范',
});
//密码校验
extend('pass', {
  validate(value) {
    return /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{8,}$/.test(value);
  },
  message: '密码必须大小写字母字母且长度不小于8',
});
extend('vscodes', {
  ...required,
  message: '验证码必须是四位数',
});
extend('passmess', {
  ...required,
  message: '密码必须要填写',
});
extend('repass', {
  ...required,
  message: '确认密码必须要填写',
});
export default {
  name: 'Register',
  data() {
    return {
      user: {
        phone: '', //手机号
        password: '', //密码
        rePassword: '', //确认密码,
        isAgree: false,
      },
    };
  },
  methods: {
    async submit() {
      let { isAgree, password, rePassword, phone } = this.user;
      if (!isAgree) {
        this.$message.error('若您创建账户表示您同意我们的隐私声明和使用条件');
        return;
      }
      //密码确认
      if (password !== rePassword) {
        this.$message.error('您输入的两次密码不一样');
        return;
      }
      //发送请求
      await this.$store.dispatch('register', { phone, password });
      this.$router.push('/login');
    },
  },

  //注册组件
  components: {
    ValidationProvider,
  },
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
      padding-top: 20px;
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
      .error-msg {
        color: red;
      }
    }
    span {
      color: #2b2b2b;
      font-size: 12px;
    }
    .register-account {
      margin-top: 30px;
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
      input {
        position: relative;
        top: 2px;
      }
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
