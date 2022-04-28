
# BYPASS-DDOS-GUARD

Bypass DDOS-Guard's scraper shield with NodeJS.\
Port in Javascript from [ddos-guard-bypass](https://github.com/Tajikarao/ddos-guard-bypass) by [Tajikarao](https://github.com/Tajikarao).

## Installation
```bash
npm install --save bypass-ddos-guard
```

## Usage

```javascript
const { DDOSGuard } = require("bypass-ddos-guard");

const ddosguard = new DDOSGuard();

ddosguard.get("https://anidex.info").then(res => {
    console.log(res.data);
})

```