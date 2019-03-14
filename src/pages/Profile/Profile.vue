<!--  -->
<template>
  <div class="holediv">
    <!--导航-->
    <HeaderTop title="首页">
      <li class="dropdown" slot="DropDown">
        <a
          href="#"
          class="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span>个人设置</span>
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Another action</a>
          </li>
          <li>
            <a href="#">Something else here</a>
          </li>
          <li role="separator" class="divider"></li>
          <li>
            <a href="#">Separated link</a>
          </li>
          <li role="separator" class="divider"></li>
          <li>
            <a href="#">One more separated link</a>
          </li>
        </ul>
      </li>
    </HeaderTop>
    <!--个人信息-->
    <router-link to="/login">
      <div class="row myownrow">
        <div class="col-xs-3 ownown">
          <div class="myown1">
            <img class="img-responsive myownimg" src="./profileImg/icon.jpg" alt="头像">
          </div>
        </div>
        <div class="col-xs-6">
          <div class="myown2">
            <i class="glyphicon glyphicon-phone"></i>
            <span>尚未注册手机号</span>
          </div>
        </div>

        <div class="col-xs-3">
          <div class="myown3">
            <i class="glyphicon glyphicon-chevron-right own-right"></i>
          </div>
        </div>
      </div>
    </router-link>
    <!--账户信息-->
    <div class="row myrow">
      <div class="col-xs-4 myown4-1">
        <div class="personal">
          <p>
            <span class="moneyNum">0.00</span>元
          </p>
          <p>我的余额</p>
        </div>
      </div>
      <div class="col-xs-4 myown4-2">
        <div class="personal">
          <p>
            <span class="markNum">0</span>个
          </p>
          <p>我的优惠</p>
        </div>
      </div>
      <div class="col-xs-4 myown4-3">
        <div class="personal">
          <p>
            <span class="scoreNum">0</span>分
          </p>
          <p>我的积分</p>
        </div>
      </div>
    </div>
    <!--列表内容-->
    <div>
      <div class="row allrows">
        <div class="col-xs-4 allcol-1">
          <i class="glyphicon glyphicon-align-right own-glyphicon-1"></i>
          <span>我的订单</span>
        </div>
        <div class="col-xs-8 allcol-2">
          <i class="glyphicon glyphicon-chevron-right own-right"></i>
        </div>
      </div>

      <div class="row allrows">
        <div class="col-xs-4 allcol-1">
          <i class="glyphicon glyphicon-th-large own-glyphicon-2"></i>
          <span>积分商城</span>
        </div>
        <div class="col-xs-8 allcol-2">
          <i class="glyphicon glyphicon-chevron-right own-right"></i>
        </div>
      </div>

      <div class="row allrows">
        <div class="col-xs-4 allcol-1">
          <i class="glyphicon glyphicon-road own-glyphicon-3"></i>
          <span>会员中心</span>
        </div>
        <div class="col-xs-8 allcol-2">
          <i class="glyphicon glyphicon-chevron-right own-right"></i>
        </div>
      </div>

      <div class="row allrows">
        <div class="col-xs-4 allcol-1">
          <i class="glyphicon glyphicon-globe own-glyphicon-4"></i>
          <span>服务中心</span>
        </div>
        <div class="col-xs-8 allcol-2">
          <i class="glyphicon glyphicon-chevron-right own-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
export default {
  data() {
    return {};
  },

  components: {
    HeaderTop
  }
};
</script>
<style>
.holediv {
  overflow: hidden;
}
.myownrow {
  margin-top: 51px;
  background-color: #f8f8f8;
}
.ownown {
  padding-right: 0;
}
.myown1 > img {
  margin: 0 auto;
  padding: 10px 0;
  border: 1px;
  border-radius: 50%;
}
.myown2 {
  padding: 30px 0;
}
.myown2 > i,
span {
  margin: 0 3px;
}
.myown3 {
  padding: 30px 0;
  text-align: right;
}
.myown3 > i {
  margin-right: 10px;
}
.myrow {
  text-align: center;
}
.myown4-2 {
  border-left: 1px solid #e7e7e7;
  border-right: 1px solid #e7e7e7;
}
.personal {
  padding: 10px 0;
}
.moneyNum {
  font-size: 30px;
  font-weight: bold;
  color: orange;
}
.markNum {
  font-size: 30px;
  font-weight: bold;
  color: orchid;
}
.scoreNum {
  font-size: 30px;
  font-weight: bold;
  color: yellowgreen;
}
.allrows {
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
}
.allcol-1 {
  text-align: center;
  padding: 10px 0;
}
.allcol-2 {
  text-align: right;
}
.allcol-2 > i {
  margin-right: 10px;
  padding: 10px 0;
}
.own-glyphicon-1 {
  color: yellowgreen;
}
.own-glyphicon-2 {
  color: blueviolet;
}
.own-glyphicon-3 {
  color: tomato;
}
.own-glyphicon-4 {
  color: violet;
}
.own-right {
  color: grey;
}
</style>