/**
 * @module NumberUtil
 */
module.exports = {

    /**
     * Floating point addition operation return number.
     * @param  {Number} arg1 
     * @param  {Number} arg2 
     */
    add: function (arg1, arg2) {
        var r1, r2, m;
        try {
            r1 = arg1.toString().split(".")[1].length;
        } catch (e) {
            r1 = 0
        }

        try {
            r2 = arg2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0
        }

        m = Math.pow(10, Math.max(r1, r2));
        return Math.round(arg1 * m + arg2 * m) / m;
        //(mul(a, e) + mul(b, e)) / e;
    },

    /**
     * Floating point subtraction operation return number.
     * @param  {Number} arg1 
     * @param  {Number} arg2
     */
    subtract: function (arg1, arg2) {
        var r1, r2, m, n;
        try {
            r1 = arg1.toString().split(".")[1].length;
        } catch (e) {
            r1 = 0
        }

        try {
            r2 = arg2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0
        }

        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return (Math.round(arg1 * m - arg2 * m) / m).toFixed(n);
        //return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
    },

    /**
     * Floating point multiplication operation return number
     * @param  {Number} arg1 
     * @param  {Number} arg2
     */
    multiply: function (arg1, arg2) {
        var m = 0,
            s1 = arg1.toString(),
            s2 = arg2.toString();

        try {
            m += s1.split(".")[1].length;
        } catch (e) {
        }

        try {
            m += s2.split(".")[1].length;
        } catch (e) {
        }

        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
    },

    /**
     * Floating point division operation return number.
     * @param  {Number} arg1 
     * @param  {Number} arg2
     */
    divide: function (arg1, arg2) {
        var t1 = 0, t2 = 0, r1, r2;

        try {
            t1 = arg1.toString().split(".")[1].length;
        } catch (e) {
        }

        try {
            t2 = arg2.toString().split(".")[1].length;
        } catch (e) {
        }

        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        //return (r1 / r2) * Math.pow(10, t2 - t1);
        return NumberUtil.multiply((r1 / r2), Math.pow(10, t2 - t1));
    },
    /**
     * Floating point random operation return number.
     * @param  {Number} min 
     * @param  {Number} max
     */
    random: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}