<!--  -->
<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container-fuild">
        <div class="col-xs-3 demo">
          <span @click="goTo('/msite')" >
            <i :class="{on:'/msite'===$route.path}" class="glyphicon glyphicon-plane myownglyphicon"></i>
            <br>
            <span class="myownglyphicon" :class="{on:'/msite'===$route.path}">商铺</span>
          </span>
        </div>
        <div class="col-xs-3 demo">
          <span @click="goTo('/search')">
            <i :class="{on:'/search'===$route.path}" class="glyphicon glyphicon-search myownglyphicon"></i>
            <br>
            <span class="myownglyphicon" :class="{on:'/search'===$route.path}">搜索</span>
          </span>
        </div>
        <div class="col-xs-3 demo">
          <span @click="goTo('/order')">
            <i :class="{on:'/order'===$route.path}" class="glyphicon glyphicon-shopping-cart myownglyphicon"></i>
            <br>
            <span class="myownglyphicon" :class="{on:'/order'===$route.path}">订单</span>
          </span>
        </div>
        <div class="col-xs-3 demo">
          <span @click="goTo('/profile')">
            <i :class="{on:'/profile'===$route.path}" class="glyphicon glyphicon-user myownglyphicon"></i>
            <br>
            <span class="myownglyphicon" :class="{on:'/profile'===$route.path}">我的</span>
          </span >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    goTo (path) {
      this.$router.replace(path)
    }
  },
  components: {}
};
</script>
<style>
a {
  text-decoration: none;
}

.demo {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 5px;
}
.myownglyphicon {
  color: grey;
}
.on {
  color: yellowgreen;
}
</style>