import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FAQ from '../views/FAQ.vue'
import ViewTimetable from '../views/ViewTimetable.vue'
import Swagger from '../views/Swagger.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
}, {
    path: '/edt/:numUniv/:adeResources',
    name: 'ViewTimetable',
    component: ViewTimetable
}, {
    path: '/swagger',
    name: 'Swagger',
    component: Swagger
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router