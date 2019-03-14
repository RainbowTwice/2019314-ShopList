<!--  -->
<template>
  <div>
      <ul>
          <li v-for='(news,index) in newsArr' :key="index" >{{news}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
        newsArr:['new001','new002','new003','new004','new005']
    };
  },


}

</script>
<style>
</style>