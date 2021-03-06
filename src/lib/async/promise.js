var vow = require('vow');
var detect = require('../browser/detect');
var merge = require('../data/merge');

// =================================================================

// Promise

// =================================================================

/**
 * @classdesc Обещание по спецификации {@linkhref https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise ES 2015 promises}. В устаревших браузерах и IE используется замена из библиотеки {@linkhref http://github.com/dfilatov/vow.git vow}
 *
 * @exported ya.music.lib.Promise
 * @constructor
 */
var Promise;
if (typeof window.Promise !== "function"
    || detect.browser.name === "msie" || detect.browser.name === "edge" // мелкие мягкие как всегда ничего не умеют делать правильно
) {
    Promise = function(resolver) {
        var promise;
        try {
            promise = new vow.Promise(resolver);
        } catch(e) {
            promise = vow.reject(e);
        }
        return promise;
    };
    merge(Promise, vow.Promise, true);
    Promise.prototype = vow.Promise.prototype;
} else {
    Promise = window.Promise;
}

module.exports = Promise;

/**
 * Назначить обработчики разрешения и отклонения обещания.
 * @method Promise#then
 * @param {function} callback Обработчик успеха.
 * @param {null|function} [errback] Обработчик ошибки.
 * @returns {Promise} новое обещание из результатов обработчика.
 */

/**
 * Назначить обработчик отклонения обещания.
 * @method Promise#catch
 * @param {function} errback Обработчик ошибки.
 * @returns {Promise} новое обещание из результатов обработчика.
 */

// =================================================================

// AbortablePromise

// =================================================================

/**
 * @class AbortablePromise
 * @classdesc Обещание с возможностью отмены связанного с ним действия.
 * @extends Promise
 */

/**
 * Отмена действия, связанного с обещанием. Абстрактный метод.
 * @method AbortablePromise#abort
 * @param {String|Error} reason Причина отмены действия.
 * @abstract
 */




