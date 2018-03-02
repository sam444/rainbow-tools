/**
 * @module ArrayUtil
 */
module.exports = {

    /**
     * Trim array return array
     * @param  {Array} array 
     */
    trimArray: function (array) {
        var arrayTemp = [];
        $.each(array, function (index, element) {
            arrayTemp.push(element.replace(/^\s+|\s+$/gm, ''));
        });
        return arrayTemp;
    },

    /**
     * To determine if the array has duplicate elements return boolean.
     * @param  {Array} array 
     */
    isRepeat: function (array) {
        let hash = {};
        for (let i in array) {
            if (hash[array[i]]) {
                return true;
            }
            hash[array[i]] = true;
        }
        return false;
    },

     /**
     * To determine if the array has duplicate elements return object.
     * @param  {Array} array 
     */
    repeatElement: function (array) {
        let hash = {};
        for (let i in array) {
            if (hash[array[i]]) {
                return array[i];
            }
            hash[array[i]] = true;
        }
        return null;
    }

}