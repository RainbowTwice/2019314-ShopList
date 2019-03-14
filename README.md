# mystudydemo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


1.项目源码目录说明
src 源码根目录
    api 与后台交互模块文件夹    
    common  通用资源文件夹
    components  非路由组件文件夹
    filters   自定义过滤器模块文件夹  
    mock    模拟数据接口文件夹
    pages   路由组件文件夹
    router  路由器文件夹
    store   vuex相关模块文件夹
        App.vue 应用组件
        main.js 入口js



2.组件化结构说明
src
        components           非路由组件文件夹   
                FootGuider         底部组件文件夹     
                   FootGuider.vue       底部组件  
        pages                路由组件文件夹   
                Msite              首页组件文件夹     
                   Msite.vue            首页组件
                Search             搜索组件文件夹     
                   Search.vue           搜索组件
                Order              订单组件文件夹     
                   Order.vue            订单组件
                Profile            个人组件文件夹     
                   Profile.vue          个人组件                          
        App.vue         应用根组件
        main.js         应用入口