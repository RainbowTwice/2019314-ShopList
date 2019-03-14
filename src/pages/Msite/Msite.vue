<!--  -->
<template>
  <div>
    <!--导航-->
    <HeaderTop title="Minicare玩具店"></HeaderTop>
    <!--轮番图-->
    <div id="carousel-example-generic" class="carousel slide myown-carousel" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
        <li data-target="#carousel-example-generic" data-slide-to="4"></li>
        <li data-target="#carousel-example-generic" data-slide-to="5"></li>
        <li data-target="#carousel-example-generic" data-slide-to="6"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img class="img-responsive" src="./msiteimg/SwitchImg/switch1.jpg">
        </div>
        <div class="item">
          <img class="img-responsive" src="./msiteimg/SwitchImg/switch2.jpg">
        </div>
        <div class="item">
          <img class="img-responsive" src="./msiteimg/SwitchImg/switch3.jpg">
        </div>
        <div class="item">
          <img class="img-responsive" src="./msiteimg/SwitchImg/switch4.jpg">
        </div>
        <div class="item">
          <img class="img-responsive" src="./msiteimg/SwitchImg/switch5.jpg">
        </div>
        <div class="item">
          <img class="img-responsive" src="./msiteimg/SwitchImg/switch6.jpeg">
        </div>
        <div class="item">
          <img class="img-responsive" src="./msiteimg/SwitchImg/switch7.jpg">
        </div>
      </div>

      <!-- Controls -->
      <a
        class="left carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="right carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!--内容部分 -->
    <ShopList/>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
import ShopList from "../../components/ShopLIst/ShopList.vue";
export default {
  data() {
    return {};
  },

  components: {
    HeaderTop,
    ShopList
  }
};
</script>
<style>
.myown-carousel img {
  width: 100%;
}
.myown-carousel {
  margin: 50px 0;
}
.myown-carousel,
.myown-carousel item {
  height: 688px;
  overflow: hidden;
}
@media only screen and (max-width: 768px) {
  .myown-carousel,.myown-carousel item {
    height: 200px;
  }
 
}

</style>