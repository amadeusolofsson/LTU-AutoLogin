# LTU-AutoLogin

A very simple script for the lazy to click the login button when connecting to a site where CAS is used (Such as canvas).

## Installation

1. Install Tampermonkey for your browser:
   - [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

2. Click on the Tampermonkey icon in your browser toolbar.

3. Select "Create a new script...".

4. Copy and paste the following code into the editor:

```javascript
// ==UserScript==
// @name         LTU-AutoLogin (WebLogon and Canvas)
// @description  Automatically logs in on both LTU WebLogon and Canvas sites
// @author       Amadeus Olofsson
// @match        https://weblogon.ltu.se/*
// @match        https://idp.ltu.se/*
// ==/UserScript==

(function() {
    'use strict';

    const USERNAME = "Your username here";
    const PASSWORD = "Your password here";

    // WebLogon
    function autoLoginWebLogon() {
        document.getElementById("username").value = USERNAME;
        document.getElementById("password").value = PASSWORD;
        document.getElementsByClassName("btn-submit")[0].click();
    }

    // Canvas
    function autoLoginCanvas() {
        document.getElementById('username').value = USERNAME;
        document.getElementById('password').value = PASSWORD;
        document.querySelector('button[name="_eventId_proceed"]').click();
    }
    
    function runAutoLogin() {
        if (window.location.hostname === "weblogon.ltu.se") {
            autoLoginWebLogon();
        } else if (window.location.hostname === "idp.ltu.se") {
            autoLoginCanvas();
        }
    }

    // Run the appropriate login function when the page is fully loaded
    window.addEventListener('load', runAutoLogin);
})();
```
5. Put your username between the quotes where it says USERNAME_HERE, and put your password where it says PASSWORD_HERE.
   
6. Click File, Save. And Done.
