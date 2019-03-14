<!--  -->
<template>
  <div>
    <h3>Home</h3>
    <div>
      <router-link to='/home/news'>News</router-link>
      <router-link to='/home/message'>Message</router-link>
    </div>
    <ul>
        <router-view></router-view>
    </ul>
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
</style>