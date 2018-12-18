import Vue from 'vue'
import Router from 'vue-router'
import Login from './../components/views/auth/Login'
import Register from './../components/views/auth/Register'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
