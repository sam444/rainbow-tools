import config from 'config';
/**
 * @module DateUtil
 */
module.exports = {

    /**
     * get current date time return string
     */
    getCurrentDateTime() {
        return moment().format(config.DEFAULT_DATETIME_SUBMIT_FORMATER);
    },
    /**
     * format string  to date.
     * @param  {String} date 
     * @param  {String} formater 
     */
    formatStringToDate(date,formater){
        return moment(date,formater);
    },
    /**
     * Convert js Date to string ,used DEFAULT_DATETIME_SUBMIT_FORMATER of config format
     * @param  {Date} date 
     */
     formatToSubmitFormater(date) {
        if (date == undefined || date == null) {
            return null;
        } else {
            return moment(date).format(config.DEFAULT_DATETIME_SUBMIT_FORMATER);
        }
    },

     /**
     * Convert js Date to string ,used DEFAULT_DATETIME_FORMATER of config format
     * @param  {Date} date 
     */
    formatToViewFormater(date) {
        if (date == undefined || date == null) {
            return null;
        } else {
            return moment(date).format(config.DEFAULT_DATETIME_FORMATER);
        }
    },
    /**
     * Mutates the original moment by adding time. return string
     * @param  {String} date 
     * @param  {Number} number - add number 
     * @param  {String} unit - add unit, options: years,quarters,months,weeks,days,hours,minutes,seconds,milliseconds 
     * @param  {String} format - it is option, default is config.DEFAULT_DATETIME_SUBMIT_FORMATER
     */
    add(date,number,unit,format=config.DEFAULT_DATETIME_SUBMIT_FORMATER){
        return moment(date,format).add(number,unit).format(format);
    },
    /**
     * Mutates the original moment by subtracting time. return string
     * @param  {String} date 
     * @param  {Number} number - add number 
     * @param  {String} unit - add unit, options: years,quarters,months,weeks,days,hours,minutes,seconds,milliseconds 
     * @param  {String} format - it is option, default is config.DEFAULT_DATETIME_SUBMIT_FORMATER
     */
    subtract(date,number,unit,format=config.DEFAULT_DATETIME_SUBMIT_FORMATER){
        return moment(date,format).subtract(number,unit).format(format);
    }

    
}

