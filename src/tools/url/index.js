import config from 'config';
/**
 * @module UrlUtil
 */
module.exports = {
    /**
     * parse url to json object return object
     * @param  {String} url 
     * @example
     * return json object
     * {
     *        source: ,
     *        protocol: ,
     *         host: ,
     *         port: ,
     *         query: ,
     *         params: ,
     *         file: ,
     *         hash: ,
     *         path: ,
     *         relative: ,
     *         segments: 
     * }
     * 
     */
    parseURL(url) {
        var a = document.createElement("a");
        a.href = url;
        return {
            source: url,
            protocol: a.protocol.replace(":", ""),
            host: a.hostname,
            port: a.port,
            query: a.search,
            params: (function() {
                var ret = {},
                    seg = a.search.replace(/^\?/, "").split("&"),
                    len = seg.length,
                    i = 0,
                    s;
                for (; i < len; i++) {
                    if (!seg[i]) {
                        continue
                    }
                    s = seg[i].split("=");
                    ret[s[0]] = s[1]
                }
                return ret
            })(),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
            hash: a.hash.replace("#", ""),
            path: a.pathname.replace(/^([^\/])/, "/$1"),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
            segments: a.pathname.replace(/^\//, "").split("/")
        }
    },
     /**
     * change url of brower 
     * @param  {Event} event 
     * @example
     * <UIButton value="主页" styleClass="warning" onClick={this.goto} visibled={this.isAgent()}>
     *     <Param name="path" value="home" />
     * </UIButton>
     */
    goto(event){
        const path = event.getParameter("path");
        window.location.hash=path;
    },
    /**
     * change url of brower 
     * @param  {String} key 
     * @example
     * import {UrlUtil} from 'rainbow-foundation-tools';
     * const url = UrlUtil.getConfigUrl("PA_SERVICE","POLICY_API","CALCULATE");
     * "PA_SERVICE" from config.json
     * "POLICY_API" from config.js
     * "CALCULATE" from config.js
     */
    getConfigUrl(...keys){
        const configJson = JSON.parse(sessionStorage.getItem("project_config"));
        let url = configJson[keys[0]];
        switch(keys.length)
        {
            case 2:
                url  +=  config[keys[1]];
                break;
            case 3:
                url  +=  config[keys[1]][keys[2]];
                break;
            case 4:
                url  += config[keys[1]][keys[2]][keys[3]];
                break;
            default:
                url;
        }
        return url;
    },
     /**
     * change url of brower 
     * @param  {String} path 
     */
    gotoPath(path){
        window.location.hash=path;
    }
}

