const axios = require("axios");

const { wrapper } = require("axios-cookiejar-support");
const { CookieJar } = require("tough-cookie");

const jar = new CookieJar();

const URL = require('url');

const DDOSGuard = class {
    #endpoints;
    #session;
    constructor() {
        this.#endpoints = {"check": "https://check.ddos-guard.net/check.js"};

        this.#session = wrapper(axios.create({ jar }));
        axios.defaults.headers.common['user-agent'] = 'DDOS-GUARD Bypasser';

    }

    async #get_check(){
        return await (await this.#session.get(this.#endpoints["check"])).data;
    }

    #parse_check(check){
        const src = new RegExp(/new Image\(\).src = '(.+?)';/);
        return check.match(src)[1]
    }

    #parse_domain(url){
        let url_parse = URL.parse(url, true);
        return `${url_parse.protocol}//${url_parse.host}`;
    }

    async #src_validator(domain, src){
        await this.#session.get(`${domain}${src}`);
    }

    async get(url, headers = {}) {
        
        const check = await this.#get_check();

        const parse_check = await this.#parse_check(check);
        const parse_domain = this.#parse_domain(url);

        await this.#src_validator(parse_domain, parse_check);

        axios.defaults.headers.common['user-agent'] = headers;

        return await this.#session.get(url);
    } 
}

module.exports = { DDOSGuard };