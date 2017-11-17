/*
 * @Author: Buer
 * @Date: 2017-11-13 13:17:21
 */

'use strict';

// const Hello = r => require.ensure([], () => r(require('./components/Hello.vue')), 'hello');
const Hello = () => import('./components/Hello.vue');

module.exports = [
    {
        path: '/',
        name: 'Hello',
        component: Hello,
        meta: {
            title: 'hello'
        }
    }
];
