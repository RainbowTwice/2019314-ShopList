<!--  -->
<template>
  <div class="container">
    <Search/>
    <usersMain/>
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
</style>