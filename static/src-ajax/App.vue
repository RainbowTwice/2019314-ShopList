<template>
    <div>
        <div v-if="!repoUrl">Loading..</div>
        <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            repoUrl: '',
            repoName: ''
        }
    },
    mounted () {
        const url =  `http://api.github.com/search/repositories?q=v&sort=stars`
        //使用axios发送aja请求
        axios.get(url).then(
            //成功了
            response => {
                const result = response.data
                //得到最受欢迎的repo
                const mostRepo = result.items[0]
                this.repoUrl = mostRepo.html_url
                this.repoName = mostRepo.name
                }).catch(error => {
                    alert ('网络繁忙请稍后访问！')
                })
    }
}
</script>
<style>

</style>


