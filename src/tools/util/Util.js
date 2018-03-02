/**
 * @module Util
 */
module.exports = {

    /**
     * Convertor input value to bool value return boolean
     * @param {string} _input
     */
    parseBool: function (_input) {
        if (typeof _input == 'string') {
            _input = _input.replace(/[\s]/g, '').toLowerCase();
            if (_input && ( _input == 'false' || _input == '0' || _input == 'null' || _input == 'undefined' || _input == 'n')) {
                _input = false;
            }
            else if (_input || _input == 'y') {
                _input = true;
            }
        }
        return !!_input;
    },

    /**
     * Determine whether it is an array type return boolean.
     * @param {object} obj
     */
    isArray: function (obj) {
        return (typeof obj == 'object') && obj.constructor == Array;
    },

    /**
     * Determine whether it is an string type return boolean.
     * @param {object} obj
     */
    isString: function (str) {
        return (typeof str == 'string') && str.constructor == String;
    },

    /**
     * Determine whether it is an number type return boolean.
     * @param {object} obj
     */
    isNumber: function (obj) {
        return (typeof obj == 'number') && obj.constructor == Number;
    },

    /**
     * Determine whether it is an date type return boolean.
     * @param {object} obj
     */
    isDate: function (obj) {
        return (typeof obj == 'object') && obj.constructor == Date;
    },

    /**
     * Determine whether it is an function type return boolean.
     * @param {object} obj
     */
    isFunction: function (obj) {
        return (typeof obj == 'function') && obj.constructor == Function;
    },

    /**
     * Determine whether it is an object type return boolean.
     * @param {object} obj
     */
    isObject: function (obj) {
        return (typeof obj == 'object') && obj.constructor == Object;
    },
    /**
     * Determine whether it is ie brower type return boolean.
     */
    isIE: function () {
        if (!!window.ActiveXObject || "ActiveXObject" in window)
            return true;
        else
            return false;
    }


}