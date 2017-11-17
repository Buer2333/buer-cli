/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2017-06-28 15:29:10
 */

'use strict';

import dateFormat from './dateFormat';

let now = Date.now();

const dayName = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const date = new Date(
    `${new Date(now).getFullYear()}/${new Date(now).getMonth() + 1}/${new Date(now).getDate()}`
).getTime();
const day = 24 * 60 * 60 * 1000;
const today = date + day;
const tomorrow = date + (day * 2);
const yesterday = date - day;
const beforeYesterday = date - (day * 2);
const toyear = new Date(`${new Date(now).getFullYear()}/1/1`).getTime();
const thisweek = date + ((8 - new Date(now).getDay()) * day);
const nextweek = date + ((15 - new Date(now).getDay()) * day);

function timeFormat (time, format, future) {
    if (typeof time === 'number') time = time < 10000000000 ? time * 1000 : time;
    if (typeof time === 'string') time = new Date(time).getTime();

    now = Date.now();

    if (format) {
        if (time > date) {
            if (now - time < 60 * 5 * 1000) return '刚刚';

            if (now - time < 60 * 60 * 1000) return `${parseInt((now - time) / (60 * 1000), 10)}分钟前`;

            if (now - time < 60 * 60 * 24 * 1000) return `${parseInt((now - time) / (3600 * 1000), 10)}小时前`;
        }

        if (time > yesterday) return '昨天';

        if (format === 'old') {
            if (time > beforeYesterday) return '前天';

            if (now - time < day * 30) return `${parseInt((now - time) / day, 10) + 1}天前`;

            if (now - time < day * 365) return `${parseInt((now - time) / (day * 30), 10)}月前`;

            return `${parseInt((now - time) / (day * 365), 10)}年前`;
        }

        if (time > toyear) return dateFormat(time, 'MM-dd hh:mm');
    }

    if (future) {
        if (time < now) return dateFormat(time, 'yyyy-MM-dd hh:mm');

        if (time < today) return `今天 ${dateFormat(time, 'hh:mm')}`;

        if (time < tomorrow) return `明天 ${dateFormat(time, 'hh:mm')}`;

        if (time < thisweek) return `${dayName[new Date(time).getDay()]} ${dateFormat(time, 'hh:mm')}`;

        if (time < nextweek) return `下${dayName[new Date(time).getDay()]} ${dateFormat(time, 'hh:mm')}`;
    }

    return dateFormat(time, 'yyyy-MM-dd hh:mm');
}

export default timeFormat;
