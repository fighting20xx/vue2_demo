import Vue from 'vue'
import VueRouter from 'vue-router' ;            // 这是必须模块  ，vue和路由
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'


//这里把src当成根目录， main.js 的上一级就是.  所以主目录下的文件都在./下面
import routes from './config/routes'                     //这是路由位置，项目的目录
import store from './store/';                             //这是vuex的  状态仓库
import components from './components/components'       //加载公共组件

import './css/common.css'
import './css/common.less'

Vue.use(ElementUI);


import global_ from './store/Global.vue'
Vue.prototype.GLOBAL = global_;



Object.keys(components).forEach((key) => {                     //把组件目录下面的所有文件  注册到Vue上面，成为组件。
    var name = key.replace(/(\w)/, (v) => v.toUpperCase());    //首字母大写
    Vue.component(name, components[key])
});





Vue.use(VueRouter);                  //注册路由
const router = new VueRouter({
    routes
});
router.beforeEach(({meta, path}, from, next) => {   //路由每次跳转之前 先判断是否登录了。
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id)    //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
});




new Vue({
    el:"#app",
    store:store,
    router:router,
    data:{
        user:{},
        menuList:{},
        main:"sys/main.html",
            password:'',
            newPassword:'',
            navTitle:"欢迎页"
    }
});