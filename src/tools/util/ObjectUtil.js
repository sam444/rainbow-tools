/**
 * @module ObjectUtil
 */
module.exports = {
    /**
     * clone a new object return object.
     * @param  {Object} obj 
     */
    clone: function (obj) {
        var o;
        if(typeof obj == "object"){
            if(obj === null){
                o = null;
            }else{
                if(obj instanceof Array){
                    o = [];
                    for(var i = 0, len = obj.length; i < len; i++){
                        o.push(this.clone(obj[i]));
                    }
                }else{
                    o = {};
                    for(var k in obj){
                        o[k] = this.clone(obj[k]);
                    }
                }
            }
        }else{
            o = obj;
        }
        return o;
    },
     /**
     * clone property of object
     * @param  {Boolean} flag  - deep copy flag, default is false
     * @param  {Object} object1 - to object
     * @param  {Object} object2 - from object
     */
    extend: function (object1, object2,flag=false) {
        $.extend(flag,object1, object2);
    }
}