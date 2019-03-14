<!--  -->
<template>
  <div>
    <!-- 路由组件 -->
    <router-view/>
    <!--导航组件 -->
    <FootGuider v-show="$route.meta.FooterShow" />  
  </div>
</template>

<script>
//引入导航组件
import FootGuider from './components/FootGuider/FootGuider.vue'
import axios from 'axios';
export default {
  data() {
    return {};
  },
  mounted () {
    const url = 'http://localhost:3000/shoplist/shoplist.json'
    axios.get(url).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log('请求失败了')
    })
  },
  components: {
    FootGuider
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>