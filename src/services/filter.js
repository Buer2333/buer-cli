/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-05-08 17:18:34
 */

'use strict';

import dateFormat from './dateFormat';
import timeFormat from './timeFormat';

export default function(Vue) {
    Vue.filter('date', (date, format = 'yyyy-MM-dd') => dateFormat(date, format));
    Vue.filter('time', (date, format) => timeFormat(date, format));
    Vue.filter('price', data => data && data.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
}
