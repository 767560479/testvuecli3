// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import About from '../components/About'
import User from '../components/User'
import TodoList from '../components/TodoList'
import Test from '../components/Test.vue'

// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter);

// 2.创建VueRouter对象
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../components/Home')
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:userId',
        component: User
    },
    {
        path: '/todoList',
        component: TodoList
    },
    {
        path: '/test',
        component: Test
    }
];
const router = new VueRouter({
    // 配置路由与组件之间的应用关系
    routes,
    mode: 'history' // 默认使用赫希，就是url有#，现在修改
});

// 3.将router对象传入Vue实例
export default router