<!--  -->
<template>
  <div>
      <h4>ID:{{messageDetail.id}}</h4>
      <li>id:{{messageDetail.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
  </div>
</template>

<script>
export default {
  
/*  props:{
      messages:Array
  }, */

  data () {
    return {
        messageDetail:{},
        messageDetails:[]
    };
  },
  
  mounted () {
     /* console.log(this.messages) */
      setTimeout(() => {
     /* const messageDetails = this.messages */
     const messageDetails = [
            {
              id:1,
              title:'message1',
              content:"This is message001's contents..."
            }, 
             {
              id:2,
              title:'message2',
              content:"This is message002's contents..."
            },  
             {
              id:3,
              title:'message3',
              content:"This is message003's contents..."
            },  
             {
              id:4,
              title:'message4',
              content:"This is message004's contents..."
            } 
      ]
      this.messageDetails = messageDetails
      const id = this.$route.params.id*1  
      this.messageDetail = messageDetails.find(item => item.id===id) 
      }, 1000);
  },

  watch:{
      $route:function (params) {
          const id = params.params.id*1
          this.messageDetail = this.messageDetails.find(item => item.id===id)
      }
  }
}

</script>
<style>
</style>