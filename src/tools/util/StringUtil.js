/**
 * @module StringUtil
 */
module.exports = {
    /**
     * trim string. return string.
     * @param  {String} str 
     */
    trim: function (str) {
        return str.replace(/^\s+|\s+$/gm, '');
    },
    /**
     * judge string is Empty. return boolean.
     * @param  {String} str 
     */
    isEmpty: function (str) {
        return str.length === 0;
    },
    /**
     * judge string is not Empty. return boolean.
     * @param  {String} str 
     */
    isNotEmpty: function (str) {
        return !this.isEmpty(str);
    },
    /**
     * judge string is  Blank. return boolean.
     * @param  {String} str 
     */
    isBlank: function (str) {
        if (str == null) {
            return true;
        }
        return this.trim(str).length === 0;
    },
    /**
     * judge string is not Blank. return boolean.
     * @param  {String} str 
     */
    isNotBlank: function (str) {
        return !this.isBlank(str);
    },

    /**
     * judge string is regular expression return boolean.
     * @param  {String} regex 
     */
    isRegex: function (regex) {
        let regexString = String(regex);
        let length = regexString.length;

        let specialChar = regexString.charAt(0) + regexString.charAt(1) + regexString.charAt(length - 2) + regexString.charAt(length - 1);
        if (specialChar == "/^$/") {
            return true;
        }
        return false;
    },
    /**
     * judge chars is in value return boolean.
     * @param  {String} chars 
     * @param  {String} value 
     */
    isChars: function (chars, value) {
        for (let i = 0; i < value.length; i++) {
            if (chars.indexOf(value.charAt(i)) == -1) {
                return false;
            }
        }
        return true;
    },

    /**
     * Mask input value return value of mask.
     * @param  {String} value 
     * @param  {String} mask 
     */
    mask: function (value, mask) {
        if (value == null || value == "" || value == undefined) {
            return "";
        }

        var index = mask.indexOf("|");
        var left, regex;

        if (index == -1) {
            left = mask;
            regex = ".";
        } else {
            regex = mask.substr(index + 1, mask.length);
            if ("" == regex || "()" == regex) {
                regex = ".";
            } else {
                regex = "[^" + regex.substr(1, regex.length - 1) + "]";
            }
            left = mask.substr(0, index);
        }

        var maskArray = left.split(":");
        var maskChar = maskArray[0]; // the mask char
        var startEndArray = maskArray[1].split("),");

        for (var i = 0; i < startEndArray.length; i++) {
            var startEnd = startEndArray[i].replace(/[-|(|)]/g, '').split(",");
            var startTemp = parseInt(startEnd[0]);
            var endTemp = startEnd.length > 1 ? parseInt(startEnd[1]) : null;

            var length = value.length;
            var start, end;
            if (startEndArray[i].charAt(0) == '-') {// from end to start
                if (endTemp == null) {
                    start = 0;
                    end = (length < startTemp) ? 0 : (length - startTemp);
                } else {
                    start = (length < endTemp) ? 0 : (length - endTemp);
                    end = (length < startTemp) ? 0 : (length - startTemp);
                }
            } else {// from start to end
                if (endTemp == null) {
                    start = (length < startTemp) ? length : startTemp;
                    end = length;
                } else {
                    start = (length < startTemp) ? length : startTemp;
                    end = (length < endTemp) ? length : endTemp;
                }
            }
            value = value.substr(0, start)
                + value.substr(start, end - start).replace(/./g, maskChar)
                + value.substr(end, length - end);
        }

        return value;
    }

}