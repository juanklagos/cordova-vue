// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.$ = window.jQuery = require('jquery');
require('materialize-css/dist/js/materialize');
import Vue from 'vue'
import App from './components/layouts/App'
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router'

Vue.use(VueAxios,axios);
Vue.axios.defaults.baseURL= 'http://tapcheck.oo/api';
Vue.config.productionTip = false;

Vue.router = router;
Vue.use(require('@websanova/vue-auth'),{
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x')
});

App.router = Vue.router;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
