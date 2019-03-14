<!--  -->
<template>
<div>
  <div class="container">
    <Search/>
    <usersMain/>
  </div>
  <div class="routercontainer">
      <div>
        <h3>Router Basic -01</h3>
        <div class="line"></div>
      </div>
      <div class="row">
        <div class="maincontainer">
          <router-link class="router" to='/aboute' >Aboute</router-link>
          <router-link class="router" to='/home' >Home</router-link>  
        </div>
        <div class="componentscontainer">
          <keep-alive>
          <router-view></router-view>

          </keep-alive>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Search from './components/Search.vue';
import Main from './components/Main.vue';

export default {
  data () {
    return {
    };
  },

  components: {
    Search,
    usersMain: Main
  },



}

</script>
<style>
  .router{
    outline: none;list-style: none;width: 30px;height: 10px;border: 1px solid grey;
  }
  .router-link-active{
    color: red !important
  }
</style>