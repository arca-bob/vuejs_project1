import { createRouter } from "vue-router"
import HomePage from "./pages/HomePage.vue"
import LoginPage from "./pages/LoginPage.vue"
import { createWebHashHistory } from "vue-router"

const router =  createRouter({
    history: createWebHashHistory(),
    routes : [
        {
            path: '',
            component: HomePage
        },
        {
            path : '/login',
            component: LoginPage
        }
    ]
})

export default router