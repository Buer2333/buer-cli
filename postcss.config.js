/*
 * @Author: Buer
 * @Date: 2017-11-14 23:51:12
 */

'use strict';

module.exports = {
    plugins: [
        require('autoprefixer')({
            remove: false,
            browsers: ['iOS >= 7', 'Android >= 4.1']
        })
    ]
};