<!--  -->
<template>
  <div>
    <!--导航-->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand myown-navbar-brand" href="#">
            <img class="logoimg" alt="Minicare" src="../../common/images/logo.png">
          </a>
        </div>
      </div>
    </nav>
    <!--登录-->
    <div class="row myown-row">
      <img
        class="img-responsive center-block myimg"
        src="./orderImg/orderimg_edited.jpg"
        alt="登录查看我的订单列表"
      >
      <p class="mytext">登录后查看购物列表</p>
      <button class="btn">点击登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {}
};
</script>
<style>
.myown-row {
  width: 100%;
  height: 408px;
  text-align: center;
  position: fixed;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.mytext {
  margin: 10px;
}
.img {
  width: 30%;
}
.myown-navbar-brand {
  padding: 5px 15px;
}
.logoimg {
  width: 40px;
  height: 40px;
}
</style>