<!--  -->
<template>
  <!--返回导航-->
  <div>
    <nav aria-label="..." @click="$router.back()">
      <ul class="pager">
        <li class="previous">
          <a href="#">
            <span aria-hidden="true">&larr;</span> Back
          </a>
        </li>
      </ul>
    </nav>
    <!--注册登录-->
    <div class="container-fuild">
      <div class="row">
        <div class="header-container">
          <h1 class="header-title">Minicare
            <span class="lable lable-default title-header">Login</span>
          </h1>
        </div>
      </div>

      <!--手机号/用户名-->
      <div class="row">
        <div class="input-group input-container">
          <input type="text" class="form-control form-phone" :placeholder="loginStatus.phoneOruser" aria-describedby="basic-addon1">
        </div>
      </div>

      <!--验证码-->
      <div class="row" v-show="loginStatus.phoneShow">
        <div class="input-group input-container">
          <input type="text" class="form-control" placeholder="验证码">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">获取验证码</button>
          </span>
        </div><!-- /input-group -->
      </div>

      <!--密码登录-->
      <div class="row" v-show="loginStatus.userShow">
        <div class="input-group input-container">
          <input type="text" class="form-control form-phone" placeholder="密码" aria-describedby="basic-addon1">
        </div>
      </div>  
      <!--自动登录-->
      <div class="row" v-show="loginStatus.userShow">
        <div class="check-container">
          <input type="checkbox" name="autologin" checked>
          <label for="autologin">下次自动登录</label>
        </div>
      </div>
      <!--登录按钮-->
      <div class="row">
        <div class="button-container">
          <button class="login-button">登录</button>
        </div>
      </div>
      <!--用户协议及登录方式-->
      <div class="row" v-show="loginStatus.phoneShow">
        <div class="mark-container">
          <p class="p1">阅读并接受<a href="#">《Mini用户协议》</a></p>
          <p class="p2"><a href="#"  @click="loginWay('用户名')">密码登录</a></p>
        </div>
      </div>

      <div class="row" v-show="loginStatus.userShow">
        <div class="mark-container">
          <p class="p1"><a href="#">忘记密码？</a></p>
          <p class="p2"><a href="#"  @click="loginWay('手机号')">手机号登录</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginStatus:{
        phoneShow:true,
        userShow:false,
        phoneOruser:"手机号"
      }
      
    };
  },

  methods: {
    loginWay (value) {
      this.loginStatus.phoneShow = !this.loginStatus.phoneShow
      this.loginStatus.userShow = !this.loginStatus.userShow
      this.loginStatus.phoneOruser = value
    }
  },
  components: {}
};
</script>
<style>
.header-container {
  width: 100%;
  text-align: center;
  padding: 30px 0;
}
.header-title {
  color: blue;
}
.title-header {
  border: 1px solid blue;
  border-radius: 5%;
  padding: 0 10px;
  background-color: blue;
  color: aliceblue;
}
.input-container{
  margin: 5px auto;
  width: 250px;
}
.form-phone{
  border-radius:4px !important; 
}
.button-container{
  width: 100%;
  text-align: center;
  padding: 10px 0;
}
.login-button{
  width: 248px;
  height: 40px;
  color: aliceblue;
  background-color: olivedrab;
  border: 1px solid olivedrab;
  border-radius: 4px; 
}
.mark-container{
  width: 260px;
  margin: 0 auto;
  font-size: 11px;
  display: float;
}
.p1{
  float: left;
}
.p2{
  float: right;
}
.check-container > input{
  vertical-align: middle;
  margin: 0;
}
.check-container > label{
  vertical-align: middle;
  font-size: 12px;
  color: gray;
  margin: 0;
}
.check-container{
  width: 248px;
  margin: 0 auto;
  display: float;

}
</style>