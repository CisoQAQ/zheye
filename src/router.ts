import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Column from './components/ColumnDetail.vue'
import Login from './views/Login.vue'
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/column/:id',
            name: 'column',
            component: Column
        }
    ]

})
export default router