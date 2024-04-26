# LTU-AutoLogin

A very simple script for the lazy to click the login button when connecting to a site where CAS is used (Such as canvas).

## Installation

1. Install Tampermonkey for your browser:
   - [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

2. Click on the Tampermonkey icon in your browser toolbar.

3. Select "Create a new script".

4. Copy and paste the following code into the editor:

```javascript
// ==UserScript==
// @name         LTU-AutoLogin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A very simple script for the lazy to click the login button when connecting to a site where CAS is used (Such as canvas).
// @match        https://weblogon.ltu.se/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("username").value = "[your-username]";
    document.getElementById("password").value = "[your-password]";

    document.getElementsByClassName("btn-submit")[0].click();
})();
