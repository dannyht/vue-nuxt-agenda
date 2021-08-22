<template id="app">
  <topbar></topbar>
</template>

<script lang="ts">
import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginVue from './Login.vue';
import mainAppVue from './mainApp.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: LoginVue },
    { path: '/login', component: LoginVue },
    { path: '/main-app', component: mainAppVue }
  ]
});

new Vue({
  router
}).$mount('#app');

export default Vue.extend({})
</script>
