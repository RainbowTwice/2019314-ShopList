<!--  -->
<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id" ><router-link :to="`/home/message/messagedetail/${message.id}`">{{message.title}}</router-link></li>
    </ul>
    <ul>
      <router-view :messages='messages' ></router-view>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages:[]
    };
  },

  mounted () {

    setTimeout(() => {
      const messages = [
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
      this.messages = messages
    }, 1000);
  },


}

</script>
<style>
</style>