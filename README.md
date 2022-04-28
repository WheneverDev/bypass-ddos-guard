# BYPASS-DDOS-GUARD

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&label=Made+with&logo=node.js&logoColor=white)

Bypass DDOS-Guard's scraper shield with NodeJS.\
Port in Javascript from [ddos-guard-bypass](https://github.com/Tajikarao/ddos-guard-bypass) by [Tajikarao](https://github.com/Tajikarao).

## Usage

```javascript
const { DDOSGuard } = require("bypass-ddos-guard");

const ddosguard = new DDOSGuard();

ddosguard.get("https://anidex.info").then(res => {
    console.log(res.data);
})

```
