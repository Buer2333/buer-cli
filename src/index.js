/*
 * @Author: Buer
 * @Date: 2017-11-13 12:39:43
 */

'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import bluebird from 'bluebird';

import routes from './routes';
import App from './components/App.vue';
import VueFilter from './services/filter';

require('./stylesheets/app.scss');

// 设置全局Promise
// axios使用了Promise，低版本系统不支持，所以需要配置全局。
window.Promise = bluebird;

// Install plugins
Vue.use(VueRouter);
Vue.use(VueFilter);

// Set up a new router
const router = new VueRouter({
    routes,
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 };
    }
});
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

export default { app };
